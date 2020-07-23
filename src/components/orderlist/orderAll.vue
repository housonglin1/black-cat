<template>
    <div>
        <div class="orderlist" v-for="(item,index) in  list" :key="index"    v-show="$store.state.order.lists.length">
                <van-cell center :title="'订单：'+item.orderId" :value="typeList[item.type]" :label="String(item.dateTime)| dataFormat" />
            <van-row class="goodcart" v-for="(value,count) in item.goodlist" :key="count">
                <van-col span="8">
                    <van-image
                        
                        height="5rem"
                        fit="contain"
                        :src="value.img"
                        />
                </van-col>
                <van-col span="16">
                    <div class="content">
                        <h1 >{{value.title}}</h1>
                        <h2>{{value.nextTitle}}</h2>
                            <div class="box">

                                <p class="price">￥{{value.price}} </p>       
                                <p class="count"> × {{value.num}}  </p>    
                            </div>
     
                    </div>
                </van-col>
            </van-row>

             <div class="orderfooter">
                    <!-- 待支付 -->
                    <div v-if="item.type == 1">
                        <van-button size="small" type="primary" @click="onPay(item.orderId)">支付订单</van-button>
                        <van-button size="small" type="danger"  @click="onDel(item.orderId)">删除订单</van-button>
                    </div>
                    <!-- 待发货 -->
                    <div  v-else-if="item.type == 2">
                            <span>距离商家自动发货还有</span>
                          <van-count-down millisecond :time="$store.state.order.time" format="mm:ss:SS"  @finish="onFire(item.orderId)"/>
                    </div>
                    <!-- 待收货 -->
                    <div v-else-if="item.type == 3">
                        <van-button size="small"  type="warning" @click="refund(item.orderId)">退款申请</van-button>
                        <van-button size="small"  type="info" @click="onGoods(item.orderId)">已收货</van-button>
                    </div>
                    <!--待评价  -->
                    <div v-else-if="item.type == 4">
                        <van-button type="primary" size="small" @click="onjudge(item.orderId)">商品评价</van-button>
                    </div>
            </div>
        </div>

        
        <div class="nolist"   v-show="!$store.state.order.lists.length">

              <img src="@/assets/img/order.png" alt="">
              <p >您还没有相关的订单</p>
              <p class="remend">可以去看看有哪些想买的</p>
        </div>
        <goodlist></goodlist>
    </div>
</template>

<script>
// 引入商品
import goodlist from "@/components/public/goodlist"
    export default {
        data(){
            return{
                // time:300000,
                // list:[
                //     {
                //         orderId:"516516132",
                //         dateTime:"2019/05/05  22:22:22",
                //         type:1,
                //         goodlist:[
                //            {
                //                img:"https://gw.alicdn.com/bao/uploaded/i1/3020738924/O1CN01QMXptF2FnF3Y4uywl_!!3020738924.jpg_290x10000Q75.jpg_.webp",
                //                 title:"法犀卡潮牌加大加肥大码男装胖子高弹力秋冬季肥佬九分牛仔裤四季",
                //                 nextTitle:"双面穿夹克优质面料赠运费险退换无忧",
                //                 price:"4999",
                //                 num:1
                //            }
                //         ]
                //     },
                //      {
                //         orderId:"516516132",
                //         dateTime:"2019/05/05  22:22:22",
                //         type:3,
                //         goodlist:[
                //            {
                //                img:"https://gw.alicdn.com/bao/uploaded/i1/3020738924/O1CN01QMXptF2FnF3Y4uywl_!!3020738924.jpg_290x10000Q75.jpg_.webp",
                //                 title:"法犀卡潮牌加大加肥大码男装胖子高弹力秋冬季肥佬九分牛仔裤四季",
                //                 nextTitle:"双面穿夹克优质面料赠运费险退换无忧",
                //                 price:"4999",
                //                 num:1
                //            }
                //         ]
                //     },
                // ],
               
            }
        },
        
        created(){ 
          
            this.list = this.$store.state.order.lists.reverse();
         
            console.log(this.$store.state.order.lists)
            this.typeList = this.$store.state.order.typeList;
            let index=this.list.findIndex(item=>item.type==6)
            if(index!=-1){
                this.list.splice(index,1)
            }
          
        },
        methods:{
            onPay(orderId){
                let index=this.list.findIndex(item=>item.orderId==orderId)
                this.list[index].type=2
            },
            onGoods(orderId){
                let index=this.list.findIndex(item=>item.orderId==orderId)
                this.list[index].type=4
            },
            onDel(orderId){
                 let index=this.list.findIndex(item=>item.orderId==orderId)
                 this.list.splice(index,1)
            },
            onFire(orderId){
                let index=this.list.findIndex(item=>item.orderId==orderId)
                this.list[index].type=3
            },
            onjudge(orderId){
                 let index=this.list.findIndex(item=>item.orderId==orderId)
                 let obj =this.list[index].goodlist
                 this.$router.push({path:'/orderjudge',query:obj})
                 this.list[index].type=5
                
            },
             refund(orderId){
                let index=this.list.findIndex(item=>item.orderId==orderId)
                let obj=this.list[index].goodlist[0]
                this.$router.push({
                   path:"/orderrefund",
                   query:{
                       obj:obj
                   }
               })
                this.list.splice(index,1)
            }
        },
          filters:{
                dataFormat(dataString){

                    var dd = new Date(dataString);

                    // 获取年月日
                    var y = dd.getFullYear();
                    var m = dd.getMonth() + 1;
                    var d = dd.getDate();

                    // 获取时分秒
                    var hh = dd.getHours();
                    var mm = dd.getMinutes();
                    var ss = dd.getSeconds();

                    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
                },
                
            },
            components:{
                goodlist,
            }

        
       
    }
</script>

<style lang="scss" scoped>
.orderlist{
    width: 95%;
    margin:0.8rem auto 0 auto;

    .goodcart{
        background: #fff;
        border-radius: 5px;
        .van-checkbox{
            position: relative;
            left:0.2rem;
            top:2rem;
        }
        .van-image{
            margin-top: 0.5rem;
        }
        .content{
        
            padding: 0.8rem 0.3rem;
            h1{
            text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            h2{
                font-size: 0.6rem;
                background-color: #ccc;
                color:#999;
                margin-top: 0.5rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .box{
                margin-top: 0.5rem;
                display: flex;
                justify-content: space-between;
                height:1rem;
                line-height: 1rem;
            
                .price{
                    color: #ff0036;
                    font-size: 0.8rem;    
                }
                .count{
                    margin-left: auto;
                }
            }
            
        }
    }
    .orderfooter{
        width: 100%; 
        background: #fff;
        display: flex;
        justify-content: flex-end;
        .van-button{
         margin: 0  0.5rem 0.3rem 0;

        }
        .van-count-down{
            color: red;
        }
    }
}
.nolist{
    margin-top: 3rem;
    text-align: center;
    img{
     display: inline-block;
        width: 5rem;
    }
    p{
        font-size: 0.7rem;
        color: #333;
    }
   .remend{
       font-size: 0.6rem;
       color: #ccc;
   }

}
</style>
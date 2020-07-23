<template>
    <div>
       

     
        <div class="orderlist" v-for="(item,index) in  list" :key="index" v-show="list.length">
            <div v-if="item.type==1">
                    <van-cell center :title="'订单：'+item.orderId" :value="typeList[item.type]" :label="String(item.dateTime)|dataFormat" />
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
                    
                            <van-button size="small" type="primary" @click="onPay(index)">支付订单</van-button>
                            <van-button size="small" type="danger" @click="onDel(index)">删除订单</van-button>
                    
                </div>
            </div>
        </div>
         <div class="nolist"  v-show="!list.length">

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
import {Toast} from 'vant';
    export default {
        data(){
            return{}
        },
         created(){ 
          
            let datalist= this.$store.state.order.lists.reverse();
            this.list=datalist.filter(item=>item.type==1);
            this.typeList = this.$store.state.order.typeList;
            if(!this.list.length){
                Toast("没有需要支付的商品")
            }
        },
        methods:{
            onPay(index){
                this.list[index].type=2
            },
            onDel(index){
                 this.list[index].type = 6; //修改一个没有类型删除
                Toast('删除数据');
            }
        },
          components:{
                goodlist,
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
        // 组件销毁前
        beforeDestroy(){
        
            if(this.list.length){
                this.$store.commit("order/edited",this.list)
            }
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
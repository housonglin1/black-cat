<template>
    <div>
       <van-nav-bar
            :title="$route.name"
            left-text="返回"
            left-arrow
            @click-left="cartvue"
        />
        <!-- 联系方法 -->
         <van-contact-card 
        :type="cardType" 
        :name="name" 
        :tel="tel" 
        add-text="添加联系人"
        @click="address"
        :editable="true" />
        <!-- 商品 -->
        <div class="goodcart"  v-for="(item,index) in lists" :key="index">

            <div class="store">
                <div class="store">
                    
                    <span class="iconfont icon-adbddb"></span>
                    <div class="shopstore">{{item.store}}</div>
                    
                </div>
            </div>
            <van-row >
                    <!-- <van-col span="2"> -->
                        <!-- <van-checkbox v-model="item.flag"></van-checkbox> -->
                        <!-- <input type="checkbox" class="checkinput" :checked="item.flag" @click="inputselet(index)">
                    </van-col> -->
                    <van-col span="8">
                        <van-image
                            
                            height="5rem"
                            fit="contain"
                            :src="item.img"
                            />
                    </van-col>
                    <van-col span="16">
                        <div class="content">
                            <div class="title">{{item.title}}</div>
                            <div class="nextTitle">{{item.nextTitle}}</div>      
                                <div class="box">
                                    <p class="price">￥{{item.price}} </p>       
                                    <p class="count"> × {{item.num}}   </p>    
                                </div>
        
                        </div>
                    </van-col>
                </van-row>
        <!-- 订单详情 -->
            <div class="orderdetails">
                <!-- 公益宝贝 -->
                <van-row type="flex" justify="space-between"   @click="show = true" >
                    <van-col span="22" >
                    <span>公益宝贝</span>交易成功后捐赠0.02元给公益宝贝计划  
                    </van-col>
                    <van-col span="2"><van-icon name="arrow" /></van-col>
                </van-row>
                 <van-action-sheet  v-model="show"  title="公益宝贝"  :style="{ height: '40%' }">
                      <div class="content">成交后卖家将捐赠0.02元给公益宝贝计划</div>
                </van-action-sheet>
                <!-- 配送方式 -->
                <van-row type="flex" justify="space-between"   @click="distribution= true" >
                    <van-col span="18">
                    <span>配送方式</span>普通配送  
                    </van-col>
                    <van-col span="2"><van-icon name="arrow" /></van-col>
                </van-row>
                 <van-action-sheet  v-model="distribution"  title="配送方式"  :style="{ height: '40%' }">
                      <div class="content">普通配送  快递免邮 </div>
                </van-action-sheet>
                <!-- 运费险 -->
                 <van-row type="flex" justify="space-between" @click="freight= true">
                    <van-col span="22">
                    <span><van-icon name="info-o" />运费险</span>买家赠送,退货可赔  
                    </van-col>
                    <van-col span="2"><van-icon name="arrow" /></van-col>
                </van-row>
                 <van-action-sheet  v-model="freight"  title="运费险"  :style="{ height: '40%' }">
                      <div class="content">买家赠送,退换货可赔 </div>
                </van-action-sheet>
                <!-- 开发票 -->
                 <van-row type="flex" justify="space-between" @click="bill= true">
                    <van-col span="22">
                    <span>开具发票</span> 
                    </van-col>
                    <van-col span="2"><van-icon name="arrow" /></van-col>
                </van-row>
                 <van-action-sheet  v-model="bill"  title="开发票">
                      <div class="content"><img src="@/assets/img/erwei.jpg" alt=""> </div>
                </van-action-sheet>
              
                <!-- 订单备注 -->
                 <van-row type="flex" justify="space-between">
                    <van-col span="6">
                     <span>订单备注</span>

          
                    </van-col>
                    <van-col span="18"><input type="text " placeholder="选填,请跟商家协商一致"></van-col>
                </van-row>

             
            </div> 
        </div>
            <!-- 提交订单        -->
              <van-submit-bar 
                :price="total*100" 
                button-text="支付订单" @submit='onsubmit'  />
    
    </div>
</template>

<script>



import { Toast } from 'vant'
    export default {
        data(){
            return{
             show: false,
             distribution:false,
             freight:false,
             bill:false,
             pay:false,
              name:'',
              tel:'',
              lists:'',
           
                // list:[
                //     {   flag:true,
                //         img:"http://g.search.alicdn.com/img/bao/uploaded/i4/i3/2616970884/O1CN01pqJY2Y1IOuirEm8hi_!!0-item_pic.jpg_360x360.jpg",
                //         title:"Apple/苹果 iPhone XR全网通4G 双卡双待手机苏宁易购官方旗舰店 苹果iPhoneXR",
                //         nextTitle:"万客户的共阴选择。具电子发票。OOO专属客服苏宁直发花呗分期",
                //         price:3999,
                //         num:1,

                //     },
                // ]
               
            }
        },
         methods:{
            
              sum(){
                // 总价格计算
                // total 累加值
                this.total = this.lists.reduce((total,item)=>{
                    // 判断选项选中计算价格
                    if(!item.isSelect) return total; //返回默认价格
                    return total + parseInt(item.price) * parseInt(item.num); //总价格
                },0) //总价格默认值0
            },
            address(){
               
                    if(this.$store.state.address.lists.length==0){
                        this.$router.push("./addressAdd")
                    }else{
                        this.$router.push('address')
                    }
               
            },
            cartvue(){
           if(this.$store.state.address.lists.length==0||this.lists.length==0){
                this.$router.go(-1)
            }else{
              let order ={
                  orderId:new Date().getTime(),
                  address:this.address,
                  goodlist:this.lists,
                  dateTime:new Date(),
                  type:1,
              }
            //   将数据传递给order.js
              this.$store.commit("order/add",order)
              this.$store.state.cart.lists=[];
              this.$store.state.cart.nun=0;
              this.$router.push('/cart')
              this.$store.state.vanTabbar
            }
            },
            onsubmit(){
            
            if(this.$store.state.address.lists.length==0||this.lists.length==0){
                Toast("信息错误");
            }else{
                    let order ={
                    orderId:new Date().getTime(),
                    address:this.address,
                    goodlist:this.lists,
                    dateTime:new Date(),
                    type:2,
                     }
                       Toast.success('支付成功');
                            //   将数据传递给order.js
                        this.$store.commit("order/add",order)
                        this.$store.state.cart.lists=[];
                        this.$store.state.cart.nun=0;
                        this.$router.push('/orderlist/orderAll')
               
                }
            }
        },
      

        computed:{
            cardType(){
                 return this.$store.state.address.lists.length==0 ? "add":"edit"
            }
        },
        created(){
            
            let address=this.$store.state.address.lists.find(item=>item.isDefault)
        
            if(address){
                this.name = address.name;
                this.tel = address.tel;
            }
          
             this.lists = this.$store.state.cart.lists||this.$store.state.order.obj;
            this.sum();//计算总价格
          
        },
       
    }
</script>

<style lang="scss" scoped>
.goodcart{
  
    
    margin: 0 auto ;
    margin-top: 0.8rem;
    width: 95%;
    background: #ffff;
    box-sizing: border-box;
    border-radius: 5px;
    .store{
        display: flex;
        border-bottom:1px solid  #eee;
        padding: 5px 8px 2px ; 
       .iconfont{
           display: inline-block;
           font-size: 18px;
          align-self: center;
        }
        .shopstore{
             align-self: center;
             font-size: 15px;
        }
    }
    .van-image{
        margin-top: 0.5rem;
        
    }
    .content{
       
        padding: 0.8rem 0.3rem;
       .title{
            text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                font-size:0.6rem;
                color: #333;
            }
            .nextTitle{
                width: 5rem;
                font-size: 0.55rem;
                background-color: #ccc;
                color:#999;
                margin-top: 0.5rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        .box{
            margin-top: 0.3rem;
            display: flex;
            justify-content: space-between;
          
            .price{
                color: #ff0036;
                font-size: 0.8rem;
            }
            .count{
               margin-top: 0.2rem;
                
            }
        }
        .van-button{
            width: 90%;
            margin: 0 auto;
            height: 1rem;
            
        }
    }
    .orderdetails{
        padding-left: 50px;
        color: #ccc;
        .van-row{
            padding: 10px;
            .van-col{
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
        span{
            color: #333;
           margin-right: 5px;
           
        }
       

    }
}
 .content {
    padding: 16px 16px 160px;
  }

</style>
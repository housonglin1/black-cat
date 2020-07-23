<template>
    <div>
         <div class="nav">
             <van-icon name="arrow-left" class="goback "  @click="goback"  />
             <van-icon name="cart-o" class="shopp"  @click="$router.push('/cart')" />
         </div>
          
        <!-- 头部 -->
      <header class="header">
          <!-- 导航 -->
         
            
                <!-- <span class="goback" @click="$router.go(-1)"><van-icon name="arrow-left"  size="30" /></span>  -->
                <!-- 购物车 -->
                 <!-- <span class="shopp"><van-icon name="cart-o"  size="35"/></span>  -->
                <!-- <div class="goback"  @click="$router.go(-1)"> <van-icon name="arrow-left"  /></div>
                <div class="shopp">
                </div> -->

          <!-- 轮播 -->
          <swiper :img="imges"></swiper>
      </header>
      <div class="price">￥139-158<span>新品抢鲜价</span><span>淘金币抵3%</span></div>
      <!-- 标题 -->
      <div class="title">法犀卡潮牌加大加肥大码男装胖子高弹力秋冬季肥佬九分牛仔裤四季</div>
      <div class="fordetail">
          <van-row>
            <van-col span="8" class="left">快递免费</van-col>
            <van-col span="8">月销量26件</van-col>
            <van-col span="8" class="right">广东广州</van-col>
        </van-row>

      </div>
     
     <div class="discounts"  v-for="(item,index) in list " :key="item.index">
         <div class="caption">{{item.caption}}</div>
         <div class="img"><a href="javascript:;" v-show="index==1">积分</a><img src="@/assets/img/yun2.jpg" alt="" v-if="index==0">{{item.img}}</div>
         <div class="goto">{{item.goto}}<van-icon name="arrow" /></div>

     </div> 
      
      
      
       <div class="discounts"  v-for="(item,index) in lists " :key="index">
         <div class="caption">{{item.caption}}</div>
         <div class="img">{{item.img}}</div>
         <div class="goto">{{item.goto}}<van-icon name="arrow" /></div>

     </div>
     
       
        <!-- 商品评价 -->
        
        <div class="judge">
            <div class="evaluate">
                <div class="shopjudge">商品评价(85556)</div>
                <a href="javascript:;" >查看全部<van-icon name="arrow"  /></a>
            </div>
            <div class="remark">
                <ul>
                    <li>性价比高(255)</li>
                    <li>穿着很舒服(588)</li>
                    <li>不会掉色(12)</li>
                    <li>尺码合适(652)</li>
                    <li>穿着效果很好(14)</li>
                    <li>质量一般(310)</li>
                </ul>
            </div>
            <div class="comment">
                <img src="@/assets/img/z28.jpg" alt="">
                <div class="username">为***践</div>
            </div>
            <div class="content">
                裤子已经收到了，穿上效果还可以，深蓝色的穿上修身显瘦，裤腰的话偏高腰一些，我穿上挺合身的，裤型还可以，是直筒的版型，裤子面料也还不错，洗了不掉色，挺好的。
            </div>
        </div>
        
        
        <!-- 详情图片 -->
        
        <div class="detailsImg">
           <div class="box" v-for="(item,index) in  detailsImg"  :key="index">
               <img :src="item" alt="">
           </div>
        </div>
       <van-goods-action>
            <van-goods-action-icon 
            @click="$router.push('/')"
            icon="home-o"  
            color="#07c160"
            />
            <van-goods-action-icon 
            @click="$router.push('/cart')"
            icon="cart-o" 
            :badge="num"       
            />
            <van-goods-action-icon icon="star"      color="#ff5000"  class="star"/>
            <van-goods-action-button type="warning" @click="add(goods)" text="加入购物车" />
            <van-goods-action-button type="danger" text="立即购买"  @click="buy" />
        </van-goods-action>
     
    </div>
</template>

<script>
// 引入轮播组件
  import swiper from "../components/public/swiper";
 import {createNamespacedHelpers} from "vuex";
// import { Toast } from 'vant';
    const {mapState,mapMutations} = createNamespacedHelpers("cart");
    export default {
        data(){
            return{
               
                detailsImg:[
                    require("../assets/img/details21.jpg"),
                    require("../assets/img/details22.jpg"),
                    require("../assets/img/details23.jpg"),
                    require("../assets/img/details24.jpg"),
                    require("../assets/img/details25.jpg"),
                    require("../assets/img/details26.jpg"),
                    require("../assets/img/details27.jpg"),
                    require("../assets/img/details28.jpg"),
                    require("../assets/img/details29.jpg"),
                    require("../assets/img/details30.jpg"),
                ],
                imges:[
                    require("../assets/img/details1.jpg"),
                    require("../assets/img/details2.jpg"),
                    require("../assets/img/details3.jpg"),
                    require("../assets/img/details4.jpg"),
                    require("../assets/img/details5.jpg"),
                ],
                list:[
                    {caption:"优惠",img:'领取优惠券'},
                    {caption:"促销",img:'购买可得2倍共139积分'},
                    {caption:"优惠",img:'假一赔四·退货运费险·极速退款'},


                ],
                lists:[
                    {caption:"选择",img:'请选择颜色/尺码'},
                    {caption:"参数",img:'品牌尺码'}

                ],
                 goods:{
                     star:false,
                     store:"法犀卡潮牌",
                     img:"https://gw.alicdn.com/bao/uploaded/i1/3020738924/O1CN01QMXptF2FnF3Y4uywl_!!3020738924.jpg_290x10000Q75.jpg_.webp",
                     title:"法犀卡潮牌加大加肥大码男装胖子高弹力秋冬季肥佬九分牛仔裤四季",
                     nextTitle:"双面穿夹克优质面料赠运费险退换无忧",
                     price:"4999",
                     num:1
                }
            }
        },
        methods:{
           
             ...mapMutations(["add"]),
            //  judge(){
                
                // this.$router.push({
                //                path:'/judge',
                //                query:{
                //                    path:"/details"
                //                }
                //     })
                // this.$router.go(-2)
                 
            //  },
            goback(){
                    this.$router.go(-1)
                
                // if(this.$store.state.go){
                //     }else{
                //     this.$router.go(-2)
                //     this.$store.state.go=true
                //     console.log( this.$store.state.go)
                // }
                
            },
           buy(){
               if(this.$store.state.username){
                 

                       this.$store.commit("order/buy",this.goods)
                        this.$router.push("/order")
                           }else{
                               this.$router.push({
                                   path:'/login',
                                   query:{
                                       path:"/order"
                                   }
          
                               })
                          }
                  
               },
             },   
           
              
            
              

       
        
        mounted(){
         
        },
        
        computed:{
            ...mapState({
                num:state=>state.num
            })
        },
        components:{
            swiper,
        },
       
    }
</script>

<style lang="scss" scoped>
.nav{
    width: 100%;
    z-index: 1000;
    position: fixed;
    color:#fff;
    padding: 10px ;
    font-size: 20px;
    display: flex;
    background: rgba(0,0,0,0.2);
    justify-content: space-between;
    
    .shopp{
        margin-right: 20px;
    }
}
.header{
        width: 100%;
        position: relative;
        background-color: transparent;

        img{
            width: 100%;
        }
       
      }   
        // 价格
        .price{
            background: #fff;
            height:30px;
            color: red;
            font-size: 1rem;
            margin:  0.2rem;  
            box-sizing: border-box;
            
            span{
                margin-left: 0.3rem;
                font-size: 12px;
                background-color: #ff0036;
                color:#fff;
            }

        }
        // 标题
        .title{
            background: #fff;
            padding: 0 0.5rem;
            box-sizing: border-box;
            font-weight: 500;
            font-size:0.7rem ;
            color:#333;    
        }
        // 店铺信息
       .fordetail{
           width: 100%;
           padding: 0 0.5rem;
           box-sizing: border-box;
           margin-bottom: 0.5rem;
           background: #fff;
           .van-col{
               text-align: center;
               color: #b39999;
           }
           .left{
               text-align: left;
           }
           .right{
               text-align: right;
           }
       }

       
        // 优惠卷
        .discounts{
            width: 100%;
            padding:0.5rem ;
            color: #999;
            display: flex;
            background: #fff;
            box-sizing: border-box;
          
            
            .caption{
                flex: 1;
            }
           .img{
                flex: 8;
                float: right;
                color: #333;
                img{
                    width: 3.2rem;
                    float: left;
                }
            }
            a{
                color: red;
            }    
           .goto{
               flex: 0.5;
                float: right;
           }
        }
    //   商品评价  
    .judge{
        margin-top: 10px;
        width: 100%;
        background: #fff;
      
        .evaluate{
            padding: 5px;
            width: 95%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            .shopjudge{
                font-size: 16px;
                font-family: "黑体";
            }
                a{
                    font-family: "黑体";
                    color: #ff0036; 
                    font-size: 13px;
                    margin-right: 10px;
                }

        }
        .remark{
        width: 90%;
        margin: 0 auto;
        background: #fff;
        margin-top: 5px;
            ul{
                list-style: none;
              
                li{ 
                     background: pink;
                     float: left;
                     margin: 2px 10px;
                     padding: 3px 5px;
                     border-radius: 15px;
                }
                li:nth-child(6){
                    background: #ccc;
                }
            }
        }
        .comment{
            width: 90%;
            margin: 0 auto;
            display: flex;
           padding-top: 20px;
          
            img{
              width: 1.5rem;
              height: 1.5rem;
              border-radius: 50%;
              overflow: hidden;
              background: #ccc;
             
            }
            .username{
                margin-top: 10px;
                margin-left: 5px;
            }
        }
        .content{
             width: 90%;
             margin: 5px auto;
             text-overflow: -o-ellipsis-lastline;
             overflow: hidden;
             text-overflow: ellipsis;
             display: -webkit-box;
             -webkit-line-clamp: 2;
             -webkit-box-orient: vertical;
              margin-bottom: 20px;
        }
    }
    
    
.detailsImg{
    margin-top: 20px;
}
 </style>

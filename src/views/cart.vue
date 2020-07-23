<template>
    <div id="car">
            <van-nav-bar
            title="购物车"
            />

              <!-- 店铺 -->
     <div class="shop"  v-for="(item,index) in list" :key="index">
                <div class="store">
                    <van-checkbox   :value="item.flag"  @click="inputselet(index)" ></van-checkbox>
                    <span class="iconfont icon-adbddb"></span>
                    <div class="shopstore">{{item.store}}</div>
                </div>
                <van-row class="goodcart" v-for="(item,index) in list" :key="index">
                    <van-col span="2"> 
                       <!-- <van-checkbox v-model="item.flag"  ></van-checkbox> -->
                     <van-checkbox  :value="item.flag" @click="inputselet(index)"></van-checkbox>
                    </van-col>
                    <van-col span="6">
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
                            <p class="price">￥{{item.price}} </p>       
                            <p class="count">
                                <span class="button" @click="item.num <= 1? 1:item.num--">-</span>
                                <span>{{item.num}}</span>
                                <span class="button" @click="item.num++">+</span>
                                <!-- <van-button type="default" size="mini" >-</van-button>
                                <span>{{item.num}}</span>
                                <van-button type="default" size="mini" class="button" @click="item.num++">+</van-button>                         -->
                            </p>    
                                <van-button type="danger" size="small" @click="del(index)">删除</van-button>
                            
                            
                        
                        </div>
                    </van-col>
                </van-row>
               
        </div>  
            <!-- 购物车没有商品时 -->
         <div v-show="!($store.state.cart.lists.length)" class="notGoods" >
                <div class="box">

                    <span class="iconfont icon-gouwuche2"></span>
                    <p class="goodsinfo">购物车空空如也</p>
                </div>
                    <span class="goodlike">猜你喜欢</span>


                <!-- 产品栏 -->

                    
               <div class="goodlist">
                    <!-- <div class="firstlist" v-for="(item,index) in newlist"  :key="index"  >

                                <div class="cdetails" @click="$router.push('/details')">

                                    <div class="proto" >
                                        <img :src="item.img" alt="" ></div>
                                        <span class="fcolor">{{item.fcolor}}</span>
                                        <div class="title">
                                            <span class="caption">{{item.caption}}</span>
                                            <p><span ><img src="@/assets/img/yun1.jpg" alt=""></span><span class="discount">{{item.discount}}</span></p>
                                        
                                    </div>
                                </div>
                                
                                <div class="price"><span >￥{{item.price}}</span >  </div>
                            <van-icon name="like" @click="iheart(index)" />
                    </div> -->

                    <van-row  class="clearfix">
                    <van-col span="12" v-for="(item,index) in newlist"  :key="index" >
                           <div  @click="$router.push('/details')" >

                             <div class="proto" ><img :src="item.img" alt=""></div>
                                <span class="fcolor">{{item.fcolor}}</span>
                                <div class="title">
                                <span class="caption">{{item.caption}}</span>
                                <p><span ><img src="@/assets/img/yun1.jpg" alt=""></span><span class="discount">{{item.discount}}</span></p>
                                    
                                </div>
                           </div>
                            
                    <div class="price"><span >￥{{item.price}}</span > 
                      <van-icon name="like"  class='likees' @click="iheart(index)" />     </div>                 
                    </van-col>
               
                </van-row>
            
        </div>
         </div>



           <van-submit-bar  v-show="$store.state.cart.lists.length" :price="total * 100" button-text="提交订单" @submit="onsubmit">
                <van-checkbox @click="checkedAll" :value="checked"></van-checkbox>
            </van-submit-bar> 


             <vantab ></vantab>
    </div>
    
</template>

// <script>

 // 引入底部导航
import vantab from "../components/public/vantab"
import { Toast } from 'vant';
    export default {
        data(){
            return{
                checked:true,
                total:0,
                
                list:[
                    // {   flag:true,
                    //     img:"http://g.search.alicdn.com/img/bao/uploaded/i4/i3/2616970884/O1CN01pqJY2Y1IOuirEm8hi_!!0-item_pic.jpg_360x360.jpg",
                    //     title:"Apple/苹果 iPhone XR全网通4G 双卡双待手机苏宁易购官方旗舰店 苹果iPhoneXR",
                    //     nextTitle:"万客户的共阴选择。具电子发票。OOO专属客服苏宁直发花呗分期",
                    //     price:3999,
                    //     count:1,

                    // },
                    //  {   flag:true,
                    //     img:"https://gw.alicdn.com/bao/uploaded/i1/3020738924/O1CN01QMXptF2FnF3Y4uywl_!!3020738924.jpg_290x10000Q75.jpg_.webp",
                    //     title:"传奇保罗双面外套男2020新款立领两面穿秋装上衣青年男士休闲夹克",
                    //     nextTitle:"双面穿夹克优质面料赠运费险退换无忧",
                    //     price:258,
                    //     num:2,

                    // },
                    // {   flag:true,
                    //     img:"https://gw.alicdn.com/bao/uploaded/i1/1108754331/O1CN01tFOwRD1hrdsngvk44_!!0-item_pic.jpg_290x10000Q75.jpg_.webp",
                    //     title:"大山恋竹儿童学习桌楠竹学生写字桌简易儿童书桌小户型写作业桌子",
                    //     nextTitle:"天然成材用大自然的倾赠为孩子搭建一个最白然、纯净的学习空间",
                    //     price:135,
                    //     num:1,

                    // }
                ],
                errtrue:"",
            }
        },
        methods:{
            //   删除事件
            del(index){
                this.list.splice(index,1)
            },
     
      
            sum(){
                // total累加值
               
               let item=this.list.filter(item=>item.flag==true)
                this.total=item.reduce((total,item)=>{
                    if(!item.isSelect) return total
                    return total+parseInt(item.price)*parseInt(item.num) 
                },0)//默认值为0
                
            },
            onsubmit(){
                    
                  if(this.total){
                      if(this.$store.state.username){
                           this.$router.push("/order")
                       }else{
                           this.$router.push({
                               path:'/login',
                               query:{
                                   path:"/order"
                               }
      
                           })
                      }
                  }else{
                       Toast("请确认商品")
                  }
            },
            // checkedAll:{
            //         get(){
            //             return this.list.every((item)=>{
            //                 return item.flag
            //             })
            //         },
            //         set(value){
            //             this.list.forEach((item)=>{
            //                 return item.flag=value
            //             })
            //         }
            //     }
            checkedAll(){
                this.list.forEach((item)=>{
                    item.flag=!this.checked;

                })
                this.checked=!this.checked
            },
            // 判断提交订单有没有全选
            checkboxclick(){
                this.checked=this.list.every((item)=>{
                    return  item.flag
                })
            },

           inputselet(index){
               this.list[index].flag=!this.list[index].flag;
               this. checkboxclick(),
               this.sum()
           },
        //    爱心点击事件
            iheart(index){
                
                this.newlist[index].iheart= !this.newlist[index].iheart

                 let hearts=document.querySelectorAll(".van-icon")
                        
                    if(this.newlist[index].iheart){
                        Toast.success('收藏成功');
                        hearts[index].style.color="#ff0036"
                        this.$store.commit("heart/add",this.newlist[index])
                    }else if(!(this.newlist[index].iheart)){
                        // let hearts=document.querySelectorAll(".van-icon")
                        hearts[index].style.color="#000"
                        this.$store.commit("heart/del",this.newlist[index])
                        Toast.success('取消收藏');
                    }
                
                }


        }, 
        components:{
            vantab
        },
       
            created(){
                 
            this.list = this.$store.state.cart.lists;
            this.$store.state.active=2,
            this.checkboxclick();
            this.sum();
            this.newlist=this.$store.state.cart.newlist
          
        
           
        },
           beforeUpdate(){
               this.sum()
           },
           beforeDestroy(){
                 this.$store.commit("cart/edit",this.list);
            }
    }
</script>

<style lang="scss" scoped>
.clearfix::after{
    content: '';
    display: block;
    clear: both;
}
.shop{
      margin: 0 auto ;
       margin-top: 0.5rem;
        width: 95%;
        box-sizing: border-box;
        border-radius: 5px;
        position: relative;
        background: #fff;
    .store{
        padding: 10px 5px;
        display: flex;
        border-bottom: 1px solid #eee;
        span{
            margin: 0 7px;
        }
        .shopstore{
            font-size: 18px;
            color: #333;
            font-family: "黑体";
        }
    }
    .goodcart{
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
            .price{
                color: #ff0036;
                font-size: 0.8rem;
                margin-top: 0.5rem;
                float: left;
            }
            .count{
                margin-top: 0.6rem;
                margin-left:4rem;
                margin-bottom: 0.3rem;
                .button{
                    width: 20%;
                    display: inline-block;
                    border: 1px solid #ccc;
                }
                span{
                    width: 1.5rem;
                    display: inline-block;
                    text-align: center;
                }
            }
            .van-button{
                width: 50%;
                margin: 0 auto;
               
                
            }
        }
    }
}

#car{
    margin-bottom: 2.5rem;
}
.checkinput{
    margin-top: 3rem;
    margin-left: 0.5rem;
}
.van-submit-bar{
    position:absolute;
    bottom: 50px;
    left: 0;
}
// display: block;

// overflow: hidden;

// white-space: nowrap;

// text-overflow: ellipsis;

// width: 200px;
.goodlike{
   
    text-align: center;
    white-space: pre-wrap;
    border: 0px solid black;
    position: relative;
    box-sizing: border-box;
    display: block; 
    -webkit-box-orient: vertical;
    flex-direction: column; 
    align-content: flex-start;
    flex-shrink: 0;
    font-size:0.8rem;
    color: rgb(51, 51, 51); 
    font-weight: bold;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
}
.hei{
    color:#000;

}
.hong{
    color:#ff0036;
}

// 产品栏

.goodlist{
    width: 100%;

    .van-row{
    
        .van-col{
            width: 45%;
             margin: 10px 8px ;
             border: 1px solid #cccccc80;
             
            .proto{
            width: 100%;
            border: 1px solid transparent;
            box-sizing: border-box;
            img{
            width: 80%;; 
            margin: 0.5rem  0.7rem;
            }
        }
        .fcolor{
         margin-left: 10px;
         margin-right: 10px;
         font-size:0.5rem;
         color: #fff;
         background: #d1b5aa;
         padding:0.1rem 0.3rem;
         font-weight: 400;
         
        }
        .title{
            margin-top: 0.2rem;
            margin-left: 10px;
            margin-right: 10px;
            .caption{
              color:#111;
              font-size:0.6rem;
                //   line-height: 0.2rem; 
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-box-orient: vertical;
                display: -webkit-box;
                -webkit-line-clamp: 2;
             
          }
          p{
              margin-top: 0.2rem;
              width: 100%;
              display: flex;
            img{
                width: 3.6rem;     
            }  
            .discount{
                display: inline-block;
                height: 0.6rem;
                font-size: 0.4rem;
                color: red;
                border: 1px solid red;      
            }
          }
        }
        .price{
            margin-left: 0.4rem;
            color: #ff0000;
            margin-top: 0.3rem;
            position: relative;
            width: 4rem;
            span{
                font-size:1rem;
                font-weight: 600;
            }
            a{
                display: block;
                // float: right;
                color:#ff0000;
                font-size: 0.6rem;
                background-color: #ffe6eb;
                padding: 0.1rem 0.2rem;
                border-radius: 10px;
            }
            
        }
          .van-icon-like{
            position: absolute;
            font-size: 1.10rem;
            right: -45px;
            color: #000;

          }
        }
    }
    // .firstlist{
    //    position: relative;
    //     float: left;
    //     width: 45%;
    //     background-color: #fff;
    //     box-sizing: border-box;
    //     margin: 0.5rem  0.4rem ;
    //     .proto{
    //         width: 100%;
    //         border: 1px solid transparent;
    //         box-sizing: border-box;
    //         img{
    //         width: 80%;; 
    //         margin: 0.5rem  0.7rem;
    //         }
    //     }
    //     .fcolor{
    //      margin-left: 10px;
    //      margin-right: 10px;
    //      font-size:0.5rem;
    //      color: #fff;
    //      background: #d1b5aa;
    //      padding:0.1rem 0.3rem;
    //      font-weight: 400;
         
    //     }
    //     .title{
    //         margin-top: 0.2rem;
    //         margin-left: 10px;
    //         margin-right: 10px;
    //         .caption{
    //           color:#111;
    //           font-size:0.6rem;
    //             //   line-height: 0.2rem; 
    //             text-overflow: -o-ellipsis-lastline;
    //             overflow: hidden;
    //             text-overflow: ellipsis;
    //             display: -webkit-box;
    //             -webkit-line-clamp: 2;
    //             -webkit-box-orient: vertical;
             
    //       }
    //       p{
    //           margin-top: 0.2rem;
    //           width: 100%;
    //           display: flex;
    //         img{
    //             width: 3.6rem;     
    //         }  
    //         .discount{
    //             display: inline-block;
    //             height: 0.6rem;
    //             font-size: 0.4rem;
    //             color: red;
    //             border: 1px solid red;      
    //         }
    //       }
    //     }
    //     .price{
    //         margin-left: 0.4rem;
    //         color: #ff0000;
    //         margin-top: 0.3rem;
          
    //         span{
    //             font-size:1rem;
    //             font-weight: 600;
    //         }
    //         a{
    //             display: block;
    //             float: right;
    //             color:#ff0000;
    //             font-size: 0.6rem;
    //             background-color: #ffe6eb;
    //             padding: 0.1rem 0.2rem;
    //             border-radius: 10px;
    //         }
    //     }
    //     .van-icon{
    //         position: absolute;
    //         bottom: 0.3rem;
    //         font-size: 1.25rem;
    //         right: 0.3rem;
    //         z-index: 1000;
    //     }
    // }
}
.box{
    width: 200px;
    margin: 0 auto;
    margin-bottom: 100px;
    text-align: center;
    .icon-gouwuche2{
        font-size:100px ;
        margin: 0 auto;
        color: #ddd;
    }
    .goodsinfo{
        margin-top: 20px;
        text-align: center;
        font-family: "楷体";
        font-size: 18px;
        color: #333;
    }
}

</style>
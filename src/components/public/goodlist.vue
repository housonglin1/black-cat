<template>
    <div>
                 <!-- 猜你喜欢 -->
        <span class="goodlike" @click="$router.push('/details')">猜你喜欢</span>


        <!-- 产品栏 -->

                  
        <div class="goodlist">
          
                <van-row class="clearfix">
                    <van-col span="12" v-for="(item,index) in lists"  :key="index"  @click="$router.push('/details')" >
                           
                 <div class="proto" ><img :src="item.img" alt=""></div>
                             <span class="fcolor">{{item.fcolor}}</span>
                             <div class="title">
                            <span class="caption">{{item.caption}}</span>
                             <p><span ><img src="@/assets/img/yun1.jpg" alt=""></span><span class="discount">{{item.discount}}</span></p>
                                
                            </div>
                        
                <div class="price"><span >￥{{item.price}}</span > <a href="javascript:;">看相似</a> </div>                     
                    </van-col>
               
                </van-row>
            
        </div> 
    </div>
</template>

<script>
    export default {
        data(){
            return{
                  lists:[
                    {
                        img:require("@/assets/img/list1.jpg"),
                        fcolor:"K KingMelnn/肯麦依",
                        caption:"女士2020短款七分袖亚麻外套小西装",
                        discount:"10元卷",
                        price:"99"
                    },
                   

                      {
                       img:require("@/assets/img/list2.jpg"),
                        fcolor:"行更远",
                        caption:"夏季宽松小清新刺绣短袖t恤五分袖",
                        discount:"5元卷",
                        price:"48"
                    },
                     {
                        img:require("@/assets/img/list3.jpg"),
                        fcolor:">KSJD/卡斯加德",
                        caption:"4g移动联通电信全网通电话手表wifi",
                        discount:"80元卷",
                        price:"299"
                    },
                     {
                       img:require("@/assets/img/list6.jpg"),
                        fcolor:"Adidas/阿迪达斯",
                        caption:"阿迪达斯adidas口2019eh4011夹克羽绒服",
                        discount:"30元卷",
                        price:"569"
                    },
                     {
                       img:require("@/assets/img/list5.jpg"),
                        fcolor:"法犀卡",
                        caption:"万装达举卡潮牌肥四季加大牛仔裤",
                        discount:"10元卷",
                        price:"139"
                    },
                    {
                       img:"http://g.search.alicdn.com/img/bao/uploaded/i4/i3/2616970884/O1CN01pqJY2Y1IOuirEm8hi_!!0-item_pic.jpg_360x360.jpg",
                        fcolor:"Apple/苹果",
                        caption:"Apple/苹果 iPhone XR全网通4G 双卡双待手机",
                        discount:"20元卷",
                        price:"4999"
                    },
                     {
                       img:require("@/assets/img/list4.jpg"),
                        fcolor:"行更远",
                        caption:"4棉麻短袖套装男夏季印花半袖t恤中国风两件套日系复古一套衣服薄",
                        discount:"80元卷",
                        price:"299"
                    },
                    {
                       img:"https://gw.alicdn.com/bao/uploaded/i1/1108754331/O1CN01tFOwRD1hrdsngvk44_!!0-item_pic.jpg_290x10000Q75.jpg_.webp",
                        fcolor:"大山恋竹",
                        caption:"大山恋竹儿童学习桌楠竹学生写字桌简易儿童书桌小户型写作业桌子",
                        discount:"5元卷",
                        price:"135"
                    },


                    
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>
.clearfix::after{
  content: '';
   display: block;
    clear: both;
}
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
.goodlist{
    width: 100%;
    // height: 53rem;
    .van-row{
         margin-top: 20px;
        
        .van-col{
             width: 50%;
           
             box-sizing: border-box;
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
         padding:0.1rem 0.3rem;
         font-size:0.5rem;
         color: #fff;
         background: #d1b5aa;
         font-weight: 400;
         
        }
        .title{
            margin-top: 0.2rem;
            margin-left: 10px;
            
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
            // margin-left: 0.3rem;
            color: #ff0000;
            margin-top: 0.3rem;
            span{
                font-size:1rem;
                font-weight: 600;
            }
            a{
                display: block;
                float: right;
                color:#ff0000;
                font-size: 0.6rem;
                background-color: #ffe6eb;
                padding: 0.1rem;
                margin-right: 5px;
                border-radius: 10px;
                box-sizing: border-box;
            }
        }
        }
    }
    
}
</style>
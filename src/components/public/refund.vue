<template>
    <div>
               <van-nav-bar
                title="我的退款"
                left-text="返回"
                left-arrow
                @click-left="$router.push('/person')"
                />

            <div class="refundlist" v-for="(item,index) in list" :key="index">

                <!-- 订单详情 -->
                <div class="refund">   
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
                            <van-col span="6">
                                <van-image
                                    
                                    height="5rem"
                                    fit="contain"
                                    :src="item.img"
                                    />
                            </van-col>
                            <van-col span="18">
                                <div class="content">
                                    <div class="title">{{item.title}}</div>
                                    <div class="nextTitle">{{item.nextTitle}}</div>      
                                        <!-- <div class="box">
                                            <span>已退款</span> ￥{{item.bigprice}}        
                                        </div> -->
                                     
                
                                </div>
                            </van-col>
                     </van-row>
                    <!-- 退货原因 -->
                     <div class="refendCause">
                         <span>退货详情</span>
                         <p><label >退货价格:</label> {{item.price}}</p>
                         <p><label >原因:    </label>  {{item.value}}</p>
                         <p><label >退货数量:</label> {{item.num}}</p>
                         <p><label >总共退回金额:</label>￥ {{item.bigprice}}</p>
                     </div>
                </div>   
            </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
            
            typelist:["七天无理由退货","尺码不匹配","收到商品与描述不符","商品错发、漏发","其他 "]
            }
        },

        created(){
            this.list=this.$store.state.refund.list
            for(let i=0;i<this.list.length;i++){
              let bigprice= parseInt(this.list[i].price)* parseInt(this.list[i].num)
              this.list[i].bigprice=bigprice
            }
        }
    }
</script>

<style lang="scss" scoped>
.refund{
  
    
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
        
    }
    .content{
       
        padding: 0.4rem ;
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
                width: 8rem;
                font-size: 0.5rem;
                color:#999;
                margin-top: 0.5rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        .box{
           font-size: 18px;
            margin-top: 10px;
           text-align: center;
           color: #333;
           color: #ff0036;
        }
      
    }  
       .refendCause{
           font-size: 12px;
           color: #333;
          p{
              color: #ccc;
              label{
                  display: inline-block;
                  width: 3.8rem;
              }
          }
        

       }
}  
</style>
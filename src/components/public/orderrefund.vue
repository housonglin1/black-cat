<template>
    <div>
       
         
                <van-nav-bar
                title="退款"
                left-text="返回"
                left-arrow
                @click-left="$router.go(-1)"
                />
                <!-- 订单详情 -->
                <div class="refund">   
                    <div class="store">
                        <div class="store">
                            
                            <span class="iconfont icon-adbddb"></span>
                            <div class="shopstore">{{obj.store}}</div>
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
                                    :src="obj.img"
                                    />
                            </van-col>
                            <van-col span="16">
                                <div class="content">
                                    <div class="title">{{obj.title}}</div>
                                    <div class="nextTitle">{{obj.nextTitle}}</div>      
                                        <div class="box">
                                            <p class="price">￥{{obj.price}} </p>       
                                            <p class="count"> × {{obj.num}}   </p>    
                                        </div>
                
                                </div>
                            </van-col>
                        </van-row>
                        <!-- 退款原因 -->
                        <div class="cause">
                            
                               
                             <van-cell is-link title="退款的原因" @click="show = true" />
                            <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />       

                            <div class="flex">
                                <p>上传凭证 <span>(选填)</span></p>
                                <van-uploader v-model="fileList" multiple    />                               
                            </div>
                        </div>
                        <van-button type="info" round block  color="#ff0036" @click="add">退款</van-button>
                </div>
       
    </div>
</template>

<script>
import { Toast } from 'vant';
    export default {
        data(){
            return{
                obj:null,
             
                value:null,
                title:"请选择退货原因",
                show: false,
               actions: [{ name: '七天无理由退货' }, { name: '尺码不匹配' }, { name: '商品破损' },{ name: '收到商品与描述不符' },{ name: '商品错发、漏发' },{ name: '其他' }],
                fileList: [
                    // { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
                    // Uploader 根据文件后缀来判断是否为图片文件
                    // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
                    // { url: 'https://cloud-image', isImage: true },
                ],
            }
        },
        methods:{
             onSelect(item) {
                    // 默认情况下点击选项时不会自动收起
                    // 可以通过 close-on-click-action 属性开启自动收起
                    this.show = false;
                    this.value=item.name
                    Toast(item.name);
                    },
            add(){
                console.log(this.value)
              this.obj.value=this.value
              this.obj.file=this.fileList
                this.$store.commit("refund/add",this.obj)
                this.$router.push('/refund')
            },
            cause(){
                this.title=''
            },

        },
        created(){
           this.obj=this.$route.query.obj
          
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
        .van-dropdown-item{
          margin-top: 10px;
          
        }
        
    }  
     
    .flex{
        display: flex;
        margin: 20px;
        border: 1px solid #ddd;
        p{
            font-size: 15px;
            display: inline-block;
          span{
              color: #ccc;
          }
        }
    }
   
   
}
</style>
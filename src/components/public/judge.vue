<template>
    <div>
       <van-nav-bar
                title="评价"
                left-text="返回"
                left-arrow
                @click-left="goback"
         />
         <div class="content" v-for="(item,index) in list " :key="index" >
             <div class="user">
                 <img src="@/assets/img/z28.jpg" alt="">
                <div class="jud">
                    <p>{{item.name}}</p>
                    <p>{{item.data}}天前</p>
                </div>
                <div v-for="(num) in item.heart"  :key="num"><van-icon name="like"  /></div>
             </div>
             <div class="cont">
               {{item.cont}}
             </div>
            
         </div>
    </div>
</template>

<script>
    export default {
        methods:{
          goback(){
            let path ="path" in this.$route.query?this.$route.query.path: "/orderlist"
            this.$router.push(path)
           
          }
        },
        created(){
            this.list=this.$store.state.judge.lists
           
        },
       
        
    }
</script>

<style lang="scss" scoped>
    .content{
        width: 95%;
        margin: 0 auto;
        margin-top: 15px;
        background: #ffff;
        .user{
            display: flex;

            img{
                margin-left: 10px;
                width: 1.5rem;
                background: #ccc;
                padding: 2px;
                border-radius: 50%;
                overflow: hidden;
            }
            .jud{
                p{
                    color: #000;
                    font-size: 14px;
                }
                p:nth-child(2){
                    margin-top: 2px;
                    font-size: 10px;
                }
                margin-left: 8px;
                
            }
        }
        .cont{
           padding: 10px;
           font-family: "微软雅黑";
           color: #222;
        }
        .van-icon{
            color: #ff0036;
            margin-top: 10px;
            margin-left: 10px;
        }
    }
</style>
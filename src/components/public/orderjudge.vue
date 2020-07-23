<template>
    <div>


     <van-form @submit="onSubmit">
         <div class="nav">
             <van-icon name="arrow-left" @click="$router.go(-1)" />
             <span>评价</span>
          
            <van-button type="info" size="mini"  native-type="submit" >发布</van-button>  
         </div>
         <van-row class="goods">
                <van-col span="4"><img :src="goods[0].img" alt=""></van-col>
                <van-col span="20">
                    <p>{{goods[0].title}}</p>
                   <p>{{goods[0].nextTitle}}</p>
                </van-col>
            
        </van-row>
      
         <van-field name="rate" label="产品描述" >
            <template #input   >
                <van-rate v-model="rate" />
            </template>
        </van-field>
      
         <van-field
            v-model="message"
            rows="2"
            autosize
            label="对商品的评价"
            type="textarea"
          
            placeholder="从多个角度评价商品,帮助更多想买的人"
            show-word-limit
            />
        <div style="margin: 16px;">

            <!-- <van-button round block type="info" native-type="submit">
         发布
            </van-button> -->
        </div>
    </van-form>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                 rate:0,
               message:null,
                goods:null,
            }
        },
        methods:{
            onSubmit(){
                let heart=[]
                for(let  i=1;i<=this.rate;i++){
                    heart.push(i)
                  
                } 
                this.$store.commit('judge/add',{img:require("@/assets/img/z28.jpg"),name:this.$store.state.username,heart: heart,cont:this.message,data:"1"})
                this.$router.push("/judge")
                this.rate=0,
                this.message=null
            }
        },
        created(){
            this.goods=this.$route.query
        }

    }
</script>

<style lang="scss" scoped>
.nav{
    padding: 10px;
    display: flex;
    justify-content: space-between;
    background: #fff;
    margin-bottom: 10px;
    .van-icon{
        font-size: 25px;
    }
    span{
        font-size: 20px;  
    }
    .van-button{
        background: #f7f7f7;
        border: 0;
        color: #ff0036;
        
        
    }
}
.goods{
    display: flex;
    padding: 10px;
    background: #fff;
    img{
        width: 2.2rem;
    }
    p{  

        width: 100%;
        margin-left: 10px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-top: 10px;

    }
    p:nth-child(2){
        width: 5rem;
        color: #555;
        background: #ccc;
    }
   
}
</style>
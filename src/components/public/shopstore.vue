<template>
    <div>
          <van-nav-bar
                title="我的关注"
                left-text="返回"
                left-arrow
                @click-left="$router.push('/person')"
           />
          
          <div class="shoplist">
                <van-row v-for="(item,index) in list " :key="index">
                    <van-col span="8"><img :src="item.img" alt=""></van-col>
                    <van-col span="10">
                        <p>{{item.name}}</p>
                        <p><img src="@/assets/img/shop12.jpg" alt=""></p>
                    </van-col>
                    <van-col span="6"></van-col>
                </van-row>
          </div>
    </div>
</template>

<script>
    export default {
        created(){
            this.list=this.$store.state.shop.list
        }
    }
</script>

<style lang="scss" scoped>
.van-nav-bar{
    z-index: 1000;
    position: fixed;
    top: 0;
    width: 100%
}
.shoplist{
    
    padding-top: 45px;
    .van-row{
      padding: 15px 0 15px 10px;
        background: #fff;
        border: 1px solid #ccc;
        margin-top: 10px;
      p{
        margin-left: 5px;
        font-size: 0.65rem;
        img{
            width: 1rem;
        }
      }
    }
 
}
</style>
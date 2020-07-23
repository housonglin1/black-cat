<template>
    <div>
     

          <img src="../../assets/img/hong2.jpg" alt="">
          <div class="title">{{num}}秒</div>
          <div class="btn" @click="gohome">跳过</div> 
      
    </div>
</template>

<script>
    export default {
      data(){
        return{
          num:3,
          timer:null
        }
      },
      methods:{
        gohome(){
          this.$router.push("/home")
        },
       
      },
        created(){
            //隐藏导航

             this.timer=setInterval(( )=>{
               
               if(this.num==0){
                 this.$router.push("/home")
                }else{
                  this.num--
                }
             },1000)
            
               this.$store.state.vanTabbar = false;
        },
        // 切换组件生周期钩子，销毁函数
        beforeDestroy(){
          clearInterval(this.timer)
            this.$store.state.vanTabbar = true;
        }
    }
</script>

<style lang="scss" scoped>
.title{
  position: absolute;
  top:1rem;
  left: 1rem;
  font-size: 1rem;
  color: #fe1a2e94;
}
.btn{
  position: absolute;
  top:0.8rem;
  color:#fe1a2e94;
  font-size: 0.8rem;
  right: 1rem;
  border: 1px solid #fe1a2e94;
  border-radius:18px;
  padding: 3px 8px;
}
</style>
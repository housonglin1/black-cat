<template>
    <div>
           <van-nav-bar
                title="收藏夹"
                left-text="返回"
                left-arrow
                @click-left="$router.push('/person')"
           />
           <!-- 收藏详情 -->
           <div class="detailsHeart" v-for="(item,index) in list " :key="index">
               <!-- <van-swipe-cell>
                    <van-card
                        
                        :price="item.price"
                        :desc="item.caption"
                        :title="item.fcolor"
                        class="goods-card"
                        :thumb="item.img"
                    />
                    <template #right>
                        <van-button square text="删除" type="danger" @click="del(index)" class="delete-button" />
                    </template>
                </van-swipe-cell> -->

                <div class="box">
                    <van-row>
                            <van-col span="9"><img :src="item.img" alt=""></van-col>
                            <van-col span="15">
                                <p class="fcolor">{{item.title}}</p>
                                <p class="caption">{{item.nextTitle}}</p>
                                <p class="price">￥{{item.price}}</p>
                            </van-col>
                    </van-row>
                             <!-- <van-col span="4"> -->
                                    <!-- <van-button square text="删除" type="danger" @click="del(index)"/> -->
                              <!-- </van-col> --> 
                </div>
           </div>

    </div>
</template>

<script>
    export default {
        methods:{
            // del(index){
            //   console.log(index)
                //   let num = this.$store.state.heart.list.findIndex(val => val.title == this.list[index].title);
                //   console.log(num)
            //     this.list.splice(index,1)
            //      this.$store.state.heart.num=this.list.length
                
            // }
        },
        created(){
            this.list=this.$store.state.heart.list
        }
    }
</script>

<style lang="scss" scoped>
.box{
    width: 95%;
    background: #fff;
    margin: 0 auto;
    margin-top: 20px;
    
    p{
       margin-left: 10px;
       
    }
        .price{
            margin-top: 10px;
            font-size: 18px;
            color: #ff0036;
        }
        .fcolor{
            font-size: 0.6rem;
            color: #555;
            text-align: center;
            font-weight: 600;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        .caption{
            margin-top: 5px;
            font-size: 0.55rem;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            font-size:0.6rem;
             color:#aaa;
            
        }
    .van-button{
       margin-left: 40%;
       width: 150px;
       height: 20px;
    }


}
// .detailsHeart{
//     width: 95%;
//     margin: 0 auto;
//     margin-top: 20px;
//   .goods-card {
//     margin: 0;
//     background: #ddd;
    
//   }

//   .delete-button {
//     height: 100%;
//   }

// }
.van-nav-bar{
    color: #333;
}
</style>
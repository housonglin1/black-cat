export default {
    namespaced:true,//命名空间
    state:{
        lists:[],//购物车数据列表
        num:0 ,//商品数量
        newlist:[
                    
            {
                title:"亚麻小西装女士短款2020夏季新款韩版七分袖棉麻休闲西服外套薄款",
                nextTitle:"棉麻西装天然透气立体剪裁精致做工",
                img:require("@/assets/img/list1.jpg"),
                fcolor:" KingMelnn/肯麦依",
                caption:"女士2020短款七分袖亚麻外套小西装",
                discount:"10元卷",
                price:"99",
                iheart:false,
            },
           

            {
                
                img:require("@/assets/img/list3.jpg"),
                fcolor:">KSJD/卡斯加德",
                title:"【9重定位】卡斯加德/KSJD儿童电话手表定位手机电信版wifi可视屏多功能4G全网通初中小学高中生智能防水防摔",
                nextTitle:'免费高清视频+精准定位+4G全网通',
                caption:"4g移动联通电信全网通电话手表wifi",
                discount:"80元卷",
                price:"299",
                iheart:false,
            },
            {
                title:"安踏春夏季男士短袖t恤2020新款潮流潮牌纯棉衣服体恤官网旗舰",
                nextTitle:"正品保证极速退款赠运费险七天无理由退换",
                img:require("@/assets/img/list4.jpg"),
                fcolor:"安踏男士短袖",
                caption:"4棉麻短袖套装男夏季印花半袖t恤中国风两件套日系复古一套衣服薄",
                discount:"80元卷",
                price:"299",
                iheart:false,
            },
               {
                 
                img:require("@/assets/img/list2.jpg"),
                 fcolor:"行更远",
                 caption:"夏季宽松小清新刺绣短袖t恤五分袖",
                 title:'夏季新款短袖衬衫男宽松工装五分袖衬衣男士韩版潮流帅气半袖上衣',
                 nextTitle:"正品保证极速退款赠运费险七天无理由退换",
                 discount:"5元卷",
                 price:"48",
                 iheart:false,
             },
            {
                
               img:require("@/assets/img/list6.jpg"),
                fcolor:"Adidas/阿迪达斯",
                title:"Adidas阿迪达斯羽绒服男2019冬季新款户外保暖轻薄连帽外套BQ2001",
                nextTitle:"秋冬爆款 彭于晏同款 帽子不可拆",
                caption:"阿迪达斯adidas口2019eh4011夹克羽绒服",
                discount:"30元卷",
                price:"569",
                iheart:false,
            },
             {
               title:"花花公子九分牛仔裤男新款修身小脚韩版潮流休闲9分男士裤子潮牌",
               nextTitle:"花花公子正品 防伪码可查询 赠送运费险",
                img:require("@/assets/img/list5.jpg"),
                fcolor:"法犀卡",
                caption:"万装达举卡潮牌肥四季加大牛仔裤",
                discount:"10元卷",
                price:"139",
                iheart:false,
            },
            {
                title:"Apple/苹果 iPhone XR全网通4G 双卡双待手机苏宁易购官方旗舰店 苹果iPhoneXR",
                nextTitle:"万客户的共阴选择。具电子发票。OOO专属客服苏宁直发花呗分期",
                img:"http://g.search.alicdn.com/img/bao/uploaded/i4/i3/2616970884/O1CN01pqJY2Y1IOuirEm8hi_!!0-item_pic.jpg_360x360.jpg",
                 fcolor:"Apple/苹果",
                 caption:"Apple/苹果 iPhone XR全网通4G 双卡双待手机",
                 discount:"20元卷",
                 price:"4999",
                 iheart:false,
                },

        
                             {  
                                title:"大山恋竹儿童学习桌楠竹学生写字桌简易儿童书桌小户型写作业桌子",
                                nextTitle:"天然成材用大自然的倾赠为孩子搭建一个最白然、纯净的学习空间",
                                img:"https://gw.alicdn.com/bao/uploaded/i1/1108754331/O1CN01tFOwRD1hrdsngvk44_!!0-item_pic.jpg_290x10000Q75.jpg_.webp",
                                 fcolor:"大山恋竹",
                                 caption:"大山恋竹儿童学习桌楠竹学生写字桌简易儿童书桌小户型写作业桌子",
                                 discount:"5元卷",
                                 price:"135",
                                 iheart:false,
                             },
            //   {       
            //         flag:true,
            //         img:"http://g.search.alicdn.com/img/bao/uploaded/i4/i3/2616970884/O1CN01pqJY2Y1IOuirEm8hi_!!0-item_pic.jpg_360x360.jpg",
            //         title:"Apple/苹果 iPhone XR全网通4G 双卡双待手机苏宁易购官方旗舰店 苹果iPhoneXR",
            //         nextTitle:"万客户的共阴选择。具电子发票。OOO专属客服苏宁直发花呗分期",
            //         discount:"10元卷",
            //         price:3999,
            //         num:1,
            //         iheart:false,

            //     },
            //      {  
                     
            //         flag:true,
            //         img:"https://gw.alicdn.com/bao/uploaded/i1/3020738924/O1CN01QMXptF2FnF3Y4uywl_!!3020738924.jpg_290x10000Q75.jpg_.webp",
            //         title:"传奇保罗双面外套男2020新款立领两面穿秋装上衣青年男士休闲夹克",
            //         nextTitle:"双面穿夹克优质面料赠运费险退换无忧",
            //         price:258,
            //         num:2,
            //         iheart:false,

            //     },
            //     {  
            //         flag:true,
            //         img:"https://gw.alicdn.com/bao/uploaded/i1/1108754331/O1CN01tFOwRD1hrdsngvk44_!!0-item_pic.jpg_290x10000Q75.jpg_.webp",
            //         title:"大山恋竹儿童学习桌楠竹学生写字桌简易儿童书桌小户型写作业桌子",
            //         nextTitle:"天然成材用大自然的倾赠为孩子搭建一个最白然、纯净的学习空间",
            //         price:135,
            //         num:1,
            //         iheart:false,

            //     }
            

            
        
         ],
        
    },
    mutations:{
        add(state,obj){
            // 加入购物车，把数据添加lists购物车列表
            // 1.判断如果没有数据添加数据，购物车中存在数据，数据加一
            // 获取数据中id
            console.log("调用的数据"+obj)
            let index = state.lists.findIndex(val => val.id == obj.id);
            if(index != "-1"){ //存在，数量加一
              
                state.lists[index].num += 1;
                state.num = state.lists[index].num;//修改数量
                console.log(  state.num)
            }else{ //不存在添加数据
                obj.isSelect = true; //默认选中
                state.lists.push(obj);
                state.num = 1;//数量
               
            }
            console.log( state.lists)
        },
        edit(state,obj){
            Object.assign(state.lists,obj);
        },
      
    },
    actions:{}
}
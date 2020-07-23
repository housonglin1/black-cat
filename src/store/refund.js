export default {
    namespaced:true,//命名空间
    state:{
      list:[

        {   
                store:"Apple/苹果",
                flag:true,
                img:"http://g.search.alicdn.com/img/bao/uploaded/i4/i3/2616970884/O1CN01pqJY2Y1IOuirEm8hi_!!0-item_pic.jpg_360x360.jpg",
                title:"Apple/苹果 iPhone XR全网通4G 双卡双待手机苏宁易购官方旗舰店 苹果iPhoneXR",
                nextTitle:"万客户的共阴选择。具电子发票。OOO专属客服苏宁直发花呗分期",
                price:3999,
                num:1,
                value:"商品破损",

            },

        {  
            store:"大山恋竹",
            flag:true,
            img:"https://gw.alicdn.com/bao/uploaded/i1/1108754331/O1CN01tFOwRD1hrdsngvk44_!!0-item_pic.jpg_290x10000Q75.jpg_.webp",
            title:"大山恋竹儿童学习桌楠竹学生写字桌简易儿童书桌小户型写作业桌子",
            nextTitle:"天然成材用大自然的倾赠为孩子搭建一个最白然、纯净的学习空间",
            price:135,
            num:2,
            value:"收到商品与描述不符",

            },

      ]
    },
    mutations:{
        add(state,obj){
            console.log("传过来"+obj)
            state.list.push(obj)
            console.log(state.list)
        }
        
    },
    actions:{}
}
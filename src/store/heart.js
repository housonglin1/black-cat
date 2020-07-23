export default {
    namespaced:true,//命名空间
    state:{
        list:[
            // {       
            //             flag:true,
            //             img:"http://g.search.alicdn.com/img/bao/uploaded/i4/i3/2616970884/O1CN01pqJY2Y1IOuirEm8hi_!!0-item_pic.jpg_360x360.jpg",
            //             title:"Apple/苹果 iPhone XR全网通4G 双卡双待手机苏宁易购官方旗舰店 苹果iPhoneXR",
            //             nextTitle:"万客户的共阴选择。具电子发票。OOO专属客服苏宁直发花呗分期",
            //             discount:"10元卷",
            //             price:3999,
            //             num:1,
            //             iheart:false,
    
            //         },
        ],
        num:0,
    },
    mutations:{
       add(state,obj){
           console.log(obj)
           let index = state.list.findIndex(val => val.title == obj.title);
           if(index=="-1"){
               state.list.push(obj)
               state.num=state.list.length
           }else{
               console.log(index)
           }
       },
        del(state,obj){
            console.log(obj)
            let index = state.list.findIndex(val => val.title == obj.title);
            if(index!="-1"){
              state.list.splice(index,1)
              state.num=state.list.length
            }
        }

    },
    actions:{}
}
    export default[
    {
        path:"/guidanpage",
        name:'引导页',
        component:()=>import("../../components/public/guidanpage.vue")
    },{
        path:'/vertpag',
        name:'广告',
        component:()=>import('../../components/public/vertpag.vue'),
        beforeEnter:(to,from,next)=>{
            if(localStorage.vertpag){
                next()
            }else{
                localStorage.vertpag=true,
                next("/guidanpage")
            }
        }

    },
    {
        path:"/judge",
        name:'评价',
        component:()=>import('../../components/public/judge.vue')
    },
    {
        path:"/orderjudge",
        name:"评价页",
        component:()=>import("../../components/public/orderjudge.vue")
    },
    {
        path:"/orderrefund",
        name:"退款",
        component:()=>import("../../components/public/orderrefund.vue")
    },
    {
        path:"/refund",
        name:"退款页面",
        component:()=>import("../../components/public/refund.vue")
    },
    {
        path:"/heart",
        name:"收藏夹",
        component:()=>import("../../components/public/heart.vue")
    },
    {
        path:"/shopstore",
        name:"关注店铺",
        component:()=>import("../../components/public/shopstore.vue")
    },
    
]
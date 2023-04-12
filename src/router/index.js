import VueRouter from "vue-router";
import MainPage from "@/components/Main/MainPage";
import NewPush from "@/components/Main/Customization/New/NewPush";
import NewUp from "@/components/Main/Customization/New/NewUp";
import PlayListDetail from "@/components/Main/DetailofPlayList/PlayListDetail";
import MyDetail from "@/components/Top/MyDetail/MyDetail";
import EditMyDetail from "@/components/Top/MyDetail/EditMyDetail";



export default new VueRouter({
    routes:[{
        path:"/MainPage",
        component:MainPage,
        children:[{
            path:"NewPush",
            component:NewPush
        },
            {
                path:"NewUp",
                component:NewUp
            },
        ]
    },
    {
        path:"/Detail",
        component:PlayListDetail
    },
        {
            path:"/MyDetail",
            component:MyDetail
        },
        {
            path:"/Edit",
            component:EditMyDetail
        }


    ]

})
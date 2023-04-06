import VueRouter from "vue-router";
import MainPage from "@/components/MainPage";
import NewPush from "@/components/NewPush";
import NewUp from "@/components/NewUp";


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
            {
                path:"",
                component:NewUp
            }
        ]
    },
    ]

})
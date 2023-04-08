import VueRouter from "vue-router";
import MainPage from "@/components/Main/MainPage";
import NewPush from "@/components/Main/Customization/New/NewPush";
import NewUp from "@/components/Main/Customization/New/NewUp";


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
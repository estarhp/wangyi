import Vue from 'vue';
import Vuex from 'vuex';

import axios from "axios";


Vue.use(Vuex);

const actions={
    getLoginStatus:async function getLoginStatus(context,cookie = '') {
        const res = await axios({
            url: `/login/status?timestamp=${Date.now()}`,
            method: 'post',
            data: {
                cookie,
            },
        })
        return res
    },
    checkStatus:async function checkStatus(context,key) {
        const res = await axios({
            url: `/login/qr/check?key=${key}&timestamp=${Date.now()}`,
        })
        return res.data
    },

    login: async function login(context) {




        let timer
        let timestamp = Date.now()
        const cookie = localStorage.getItem('cookie')
        context.state.userData=(await context.dispatch("getLoginStatus",cookie)).data
        console.log(context.state.userData)
        const res = await axios({
            url: `/login/qr/key?timestamp=${Date.now()}`,
        })
        const key = res.data.data.unikey
        const res2 = await axios({
            url: `/login/qr/create?key=${key}&qrimg=true&timestamp=${Date.now()}`,
        })
        context.state.qrImg=res2.data.data.qrimg


        timer = setInterval(async () => {

            const statusRes = await context.dispatch("checkStatus",key)

            if (statusRes.code === 800) {
                alert('二维码已过期,请重新获取')
                clearInterval(timer)
            }
            if (statusRes.code === 803) {
                // 这一步会返回cookie
                clearInterval(timer)
                alert('授权登录成功')
                await context.dispatch("getLoginStatus",statusRes.cookie)
                localStorage.setItem('cookie', statusRes.cookie)
            }
        }, 3000)
        context.state.timer=timer
    },

    getUserDetail: async function getUserDetail(context) {

        const res = await axios({
            url: `/user/detail?uid=${context.state.userData["account"]["id"]}`,
            method: 'get',
        })
        console.log(res.data)
        context.state.userDetail=res.data


    },

    getNewPush: async function(context, type){
        const res=await axios({
            url:`/top/song?type=${type}`,
            method:"get"
        })

        context.state.NewPushList[type]=res.data.data
    },
    sliceArr:function(context,arr){
        let size = 5; // 指定子数组长度
        let result = [];
        for (let i = 0; i < arr.length; i += size) {
            let chunk = arr.slice(i, i + size); // 截取指定长度的子数组
            result.push(chunk);
        }
        return result
    },
    getNewUp: async function(context, type){
        const res=await axios({
            url:`/top/album?area=${type}`,
            method:"get"
        })
       try {
           context.state.NewUpList[type]["month"] = await context.dispatch("sliceArr",await res.data["monthData"])
           context.state.NewUpList[type]["week"] = await context.dispatch("sliceArr",await res.data["weekData"])
       }catch (err){
           console.log(err)
       }


    }

}

const state={
  isLogin:false,
  userData:"",
    qrImg:"",
    userDetail:"",
    timer:"",
    NewPushList:{
      0:"",
        7:"",
        96:"",
        8:"",
        16:""
    },
    NewUpList:{
        ALL:{week:'',month:''},
        ZH:{week:'',month:''},
        EA:{week:'',month:''},
        KR:{week:'',month:''},
        JP:{week:'',month:''}
    }
}
const mutations={}

const store = new Vuex.Store({
    actions,
    state,
    mutations,

});

export default store;

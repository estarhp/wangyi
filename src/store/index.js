import Vue from 'vue';
import Vuex from 'vuex';

import axios from "axios";





Vue.use(Vuex);

const actions= {
        getLoginStatus: async function getLoginStatus(context, ) {
        const res = await axios({
            url: `/login/status?timestamp=${Date.now()}`,
            method: 'post',

        })
        context.state.userData = res.data.data

        await context.dispatch('getLoveList',res.data.data["account"]["id"])
         await context.dispatch("getUserDetail",res.data.data["account"]["id"])
        return res
    },
    checkStatus: async function checkStatus(context, key) {
        const res = await axios({
            url: `/login/qr/check?key=${key}&timestamp=${Date.now()}`,
        })
        return res.data
    },

    login: async function login(context) {
        let timer
        let timestamp = Date.now()
        const cookie = localStorage.getItem('cookie')
        // context.state.userData = (await context.dispatch("getLoginStatus", cookie)).data
        const res = await axios({
            url: `/login/qr/key?timestamp=${Date.now()}`,
        })
        const key = res.data.data.unikey
        const res2 = await axios({
            url: `/login/qr/create?key=${key}&qrimg=true&timestamp=${Date.now()}`,
        })
        context.state.qrImg = res2.data.data.qrimg


        timer = setInterval(async () => {

            const statusRes = await context.dispatch("checkStatus", key)

            if (statusRes.code === 800) {
                alert('二维码已过期,请重新获取')
                clearInterval(timer)
            }
            if (statusRes.code === 803) {
                // 这一步会返回cookie
                clearInterval(timer)
                alert('授权登录成功')
                // await context.dispatch("getLoginStatus", statusRes.cookie)
                // localStorage.setItem('cookie', statusRes.cookie)
            }
        }, 3000)
        context.state.timer = timer
    },
    getUserDetail: async function getUserDetail(context,uid) {

        const res = await axios({
            url: `/user/detail?uid=${uid}`,
            method: 'get',
        })
        context.state.userDetail = res.data
    },

    getNewPush: async function (context, type) {
        const res = await axios({
            url: `/top/song?type=${type}`,
            method: "get"
        })

        context.state.NewPushList[type] = res.data.data
    },
    sliceArr: function (context, arr) {
        let size = 5; // 指定子数组长度
        let result = [];
        for (let i = 0; i < arr.length; i += size) {
            let chunk = arr.slice(i, i + size); // 截取指定长度的子数组
            result.push(chunk);
        }
        return result
    },
    getNewUp: async function (context, type) {
        const res = await axios({
            url: `/top/album?area=${type}`,
            method: "get"
        })
        try {
            context.state.NewUpList[type]["month"] = await context.dispatch("sliceArr", await res.data["monthData"])
            context.state.NewUpList[type]["week"] = await context.dispatch("sliceArr", await res.data["weekData"])
        } catch (err) {
            console.log(err)
        }


    },
    getPlaylistTag: async function (context) {
        const res = await axios({
            url: `/playlist/catlist`,
            method: "get"
        })
        for (let i = 0; i < res.data.sub.length; i++) {
            if (!(context.state.tags[res.data.sub[i].category].includes(res.data.sub[i]))) {
                Vue.set(context.state.highPlayList, res.data.sub[i].name, [])
                context.state.tags[res.data.sub[i].category].push(res.data.sub[i])
            }
        }

    },
    getDetailPlayList: async function (context,id) {
        const res = await axios({
            url: `/playlist/detail?id=${id}`,
            method: "get"
        })
        context.state.playListDetail=res.data["playlist"]
        await context.dispatch("getAllSongs",id)
        await context.dispatch("getAllComment",id)
    },
    getAllSongs: async function(context,id){
        const res = await axios({
            url: `/playlist/track/all?id=${id}`,
            method: "get"
        })
        context.state.AllSongs=res.data['songs']


    },
    getAllComment: async function(context,id){
        const res= await axios({
            url:`/comment/playlist?id=${id}&limit=100`,
            method:"get"
        })
        context.state.AllComment=res.data
    },
    getLoveList:async function(context,uid){
        console.log(context.state.userData["account"])
         let res=await axios({
             url:`/user/playlist?uid=${uid}`,
             method:"get"
         })
        context.state.LikeListID=res.data['playlist'][0]['id']
        let otherList=res.data['playlist'].slice(1)
        console.log(otherList)
        for (let i = 0; i < otherList.length; i++) {
            otherList[i]["userId"]==uid ? context.state.MyCreateList.push(otherList[i]):context.state.MyLoveList.push(otherList[i])        }
    }

}
const state= {

    category: "全部",
    isLogin: false,
    userData: "",
    qrImg: "",
    userDetail: "",
    timer: "",
    tags: [[], [], [], [], []],
    NewPushList: {
        0: "",
        7: "",
        96: "",
        8: "",
        16: ""
    },
    highPlayList: {},
    NewUpList: {
        ALL: {week: '', month: ''},
        ZH: {week: '', month: ''},
        EA: {week: '', month: ''},
        KR: {week: '', month: ''},
        JP: {week: '', month: ''}
    },
    playListDetail: "",
    AllSongs:"",
    AllComment:"",
    LikeListID:'',
    MyCreateList:[],
    MyLoveList:[]

}


const mutations={}

const store = new Vuex.Store({
    actions,
    state,
    mutations,

});

export default store;

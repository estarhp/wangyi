<template>

    <el-row >
      <el-col  :span="5" style="width: 170px">
        <div id="logo" class="grid-content"></div>
      </el-col>
      <el-col :span="4" :offset="3">
        <div class="grid-content bg-purple">
          <el-input
              placeholder="请输入内容"
              prefix-icon="el-icon-search"
              v-model="input"
              size="mini"
              @change="get_input"


          >
          </el-input>
      </div></el-col>
      <el-col :span="6" :offset="3" type="flex" ><div class="grid-content bg-purple">
       <el-row type="flex" align="middle" justify="center">
         <router-link to="/MyDetail" style="text-decoration: none;vertical-align: center;line-height: 100%">
           <el-avatar icon="el-icon-user-solid" :size="35" :src="avater" >
             <div slot="placeholder" class="image-slot">
               <i class="el-icon-picture-outline"></i>
             </div>
           </el-avatar>&nbsp;
         </router-link>

         <el-link :underline="false" type="info" @click="open" v-if="!this.$store.state.isLogin">未登录<i class="el-icon-caret-bottom"></i></el-link>
         <el-dropdown trigger="click" v-else>
      <el-link class="el-dropdown-link"
               :underline="false"
               type="info"
               >

        {{this.$store.state.userData.profile["nickname"]}}<i class="el-icon-caret-bottom"></i>
      </el-link>
           <el-dropdown-menu slot="dropdown" style="width: 300px;overflow: hidden;margin-right: -100px;margin-top: 0">
             <el-dropdown-item style="height: 120px">编辑个人信息请点击头像(⊙o⊙)</el-dropdown-item>
             <el-dropdown-item icon="el-icon-headset">会员中心</el-dropdown-item>
             <el-dropdown-item icon="el-icon-medal">等级</el-dropdown-item>
             <el-dropdown-item icon="el-icon-shopping-bag-2">商城</el-dropdown-item>
             <el-dropdown-item icon="el-icon-s-custom">个人信息设置</el-dropdown-item>
             <el-dropdown-item icon="el-icon-connection">绑定社交帐号</el-dropdown-item>
             <el-dropdown-item icon="el-icon-service">我的客服</el-dropdown-item>
             <el-dropdown-item  ><div @click="exit"> <i class="el-icon-error"></i> 退出登录</div></el-dropdown-item>

           </el-dropdown-menu>
         </el-dropdown>


         <el-dialog
             v-if="!this.$store.state.isLogin"
             title="扫码登陆"
             :visible.sync="centerDialogVisible"
             draggable="true"
             width="25%"
             center
             :before-close="handleClose"
         >


            <div class="baga">
              <img :src="this.$store.state.qrImg">
              <h6 >使用网易云app扫码登录</h6>
              <el-link :underline="false" class="qita">选择其他登陆模式></el-link>
            </div>
         </el-dialog>




       </el-row>
      </div></el-col>
    </el-row>

</template>

<script>



export default {
  name: "Navigation",
  data(){
    return {
      input:"",
      avater:"",
      centerDialogVisible: false,



    }
  },
  methods:{
    get_input(search_input){
      this.$axios.get(`http://localhost:3000/search?keywords=${search_input}`)
          .then(res=>JSON.stringify(res)).then(
              res => console.log(res)
      )
    },
    open:async function() {
      await this.$store.dispatch("login");
      this.centerDialogVisible = true
    },
    handleClose(done){

        clearInterval(this.$store.state.timer)
        console.log(123)
        done()

    },

    isLogin:async function(){
      this.$store.state.userData=(await this.$store.dispatch("getLoginStatus",localStorage.getItem("cookie"))).data.data
      if(this.$store.state.userData.profile!=null||undefined){
        this.$store.state.isLogin=true

      }
     if(this.$store.state.isLogin===true){
        this.avater=this.$store.state.userData.profile["avatarUrl"]
        console.log(this.avater)
      }
      // await this.$store.dispatch("getUserDetail")



      },
    exit(){

      this.$axios({
        url:'/logout',
        method:"post"
      })
      location.hash=""
      setTimeout(()=>{
        location.reload()
      },2000)
    },













  },
  mounted() {
    this.isLogin()

        }




}
</script>

<style>





.baga {

  font-size: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h6 {
  font-weight: normal;
  transform: translateY(-62px);
  font-size: 14px;
}
.qita {
  font-size: 12px;
  transform: translateY(-20px);
}

</style>

<style scoped>

.el-dropdown-menu__item:hover {
  background-color: rgb(242,242,243);
  color: #333333;
}


.el-message-box {
  height: 800px;
}

.le-link {
  margin-left: 10px;
}

.el-row {
  height: 60px;
}


#logo {
  background: url("@/assets/topbar.png") no-repeat 0 -5px;
  width: 190px



}

.bg-purple {
  background: #d3dce6;
}

.grid-content {
  border-radius: 4px;
  height: 60px;
  background: red;
  width: 30vh
}



</style>


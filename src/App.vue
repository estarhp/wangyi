<template>
  <div id="app" @click="test">

   <el-container>
      <el-header>
      <Navigation></Navigation>
     </el-header>
     <el-container>
      <el-container>
         <el-aside width="200px"><Myaside/></el-aside>
          <el-main >
            <router-view></router-view>
          </el-main>
        </el-container>
        <el-footer style="height: 80px;z-index: 10"></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>


import Navigation from "@/components/Top/Navigation";
import Myaside from "@/components/Main/Myaside";
import MainPage from "@/components/Main/MainPage";



export default {
  name: 'App',
  components:{Navigation,Myaside,MainPage},
  data(){
    return{
      code:""
    }
  },
  methods:{
   test(event){

     this.$bus.$emit("outClick",event)
   }
  },
  beforeCreate() {
    this.$store.dispatch("getPlaylistTag")
    // this.$store.dispatch("getLoginStatus")
  },
  mounted() {

  }
}
</script>

<style>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;

}


.el-aside {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 40px;

}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
  padding: 0;
}

#app > .el-container {
  margin-bottom: 40px;
  height: 100vh;
  background: red;
}
.el-header {
  background: red;
}
.el-input__inner {
  background-color: #F56C6C;
}
* {
  user-select: none;
}

::-webkit-scrollbar {
  width: 0;
  height: 0;
}
::-webkit-scrollbar-track {
  display: none;
}
</style>

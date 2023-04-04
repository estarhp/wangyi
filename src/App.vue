<template>
  <div id="app">

   <el-container>
      <el-header>
      <Navigation></Navigation>
     </el-header>
     <el-container>
      <el-container>
         <el-aside width="200px"><Myaside/></el-aside>
          <el-main >     <Mymain></Mymain>
          </el-main>
        </el-container>
        <el-footer></el-footer>
      </el-container>
    </el-container>



  </div>
</template>

<script>


import Navigation from "@/components/Navigation";
import Myaside from "@/components/Myaside";
import Mymain from "@/components/Mymain";

export default {
  name: 'App',
  components:{Navigation,Myaside,Mymain},
  data(){
    return{
      code:""
    }
  },
  methods:{

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
</style>

<template>
  <div>
    <el-radio-group v-model="isOne" style="margin-bottom: 20px;">
      <router-link tag="button"  to="/MainPage/NewPush" class="router-link" active-class="isactive">新歌速递</router-link>
      <router-link tag="button" to="/MainPage/NewUp"  class="router-link" active-class="isactive" >新碟上架</router-link>
    </el-radio-group>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "NewMusic",
  data() {
    return {
      isOne:true
    }
  },

}
</script>

<style>
.isactive {
  background-color: rgb(187,187,187) !important;
}
.router-link {
  background-color: white;
  border-radius: 20px;
  width: 150px;
  height: 40px;
  margin: 0;
  box-shadow: none;
  border: 0;
  padding: 0;
}


.el-radio-button:last-child .el-radio-button__inner {

}
.el-radio-button:first-child .el-radio-button__inner:hover{
  color: black;
}
.el-radio-button:first-child .el-radio-button__inner {
  border-radius: 20px;
  width: 150px;
}
.el-radio-button:last-child .el-radio-button__inner:hover{
  color: black;
}
.el-radio-button__orig-radio:checked+.el-radio-button__inner{

}
.el-radio-group {
  border-radius: 20px;
  border: 1px solid rgb(187,187,187);

}
</style>

<style scoped>



</style>
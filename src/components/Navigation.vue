<template>

    <el-row :gutter="20">
      <el-col :span="4">
        <div class="grid-content bg-purple" id="logo">

        </div>
      </el-col>
      <el-col :span="4" :offset="3">
        <div class="grid-content bg-purple">
          <el-input
              placeholder="请输入内容"
              prefix-icon="el-icon-search"
              v-model="input"
              size="mini"

          >
          </el-input>
      </div></el-col>
      <el-col :span="6" :offset="3" type="flex" ><div class="grid-content bg-purple">
       <el-row type="flex" align="middle" justify="center">
         <el-avatar icon="el-icon-user-solid" :size="35" ></el-avatar>&nbsp;
         <el-link :underline="false" >未登录</el-link>
         <i class="el-icon-caret-bottom"></i>
       </el-row>
      </div></el-col>
    </el-row>

</template>

<script>
export default {
  name: "Navigation",
  data( ){
    return {
      input:"",

    }
  }
}
</script>

<style scoped>

.le-link {
  margin-left: 10px;
}

.el-row {
  height: 60px;
}


#logo {
  background: url("@/assets/topbar.png") 0px -5px;
  background-size: auto;


}

.bg-purple {
  background: #d3dce6;
}

.grid-content {
  border-radius: 4px;
  height: 60px;
  background: red;
}



</style>
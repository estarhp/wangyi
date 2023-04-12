<template>
<div style="height: 200px;">
  <router-link to="/Edit">
    <div class="edit">
      <i class="el-icon-edit"></i> 编辑个人信息
    </div>
  </router-link>
  <el-row :gutter="20">
    <el-col :span="6" >
      <div class="grid-content bg-purple">
        <el-avatar style="margin: 20px;" :src="userDetail.profile['avatarUrl']" :size="200"></el-avatar>
      </div>
    </el-col>
    <el-row>
      <el-col :span="17" >
        <div class="grid-content bg-purple">
          <h1 style="font-size: 25px;margin: 20px 0px;height: 30px;;line-height: 30px">{{userDetail.profile["nickname"]}}</h1>
          <div style="height: 20px;width:100px;font-size: 10px;font-weight: 400;"> <i class="el-icon-collection-tag"></i>LV{{userDetail["level"]}}</div>
          <hr >
        </div>
      </el-col>
      <el-col :span="17" >
        <div class="grid-content bg-purple">
          <el-col :span="2" style="border-right:1px solid gray;border-radius: 0px;text-align: center" >
          <h2 >
            {{userDetail.profile['eventCount']}}
          </h2>
            <span>
              动态
            </span>
          </el-col>
          <el-col :span="2" style="border-right:1px solid gray;border-radius: 0px;text-align: center">
            <h2>{{userDetail.profile['follows']}}</h2>
            <span>
              关注
            </span>
          </el-col>
          <el-col :span="2" style="text-align: center">
            <h2>{{userDetail.profile['followeds']}}</h2>
            <span>
              粉丝
            </span>
          </el-col>
        </div>
      </el-col>
      <el-col :span="17" style="text-align: left;line-height: 100%;font-size: 12px">
        <span>所在地区</span><br>
        <span>社交网络 <i class="el-icon-female"></i></span><br>
        <span>个人介绍</span><br>
      </el-col>
    </el-row>
  </el-row>

</div>
</template>

<script>
export default {
  name: "MyTopDetail",
  computed:{
    userDetail(){
      return this.$store.state.userDetail
    },

  },mounted(){

  }
}
</script>



<style scoped lang="less">


.edit {
  position: absolute;
  height: 30px;
  width: 130px;
  border-radius: 20px;
  top: 130px;
  right: 40px;
  border: 1px solid #333333;
  line-height: 30px;
  text-align: center;
  text-decoration: none;
  color: #333333;
  z-index: 10;
}

.el-row {
  margin-bottom: 20px;
&:last-child {
   margin-bottom: 0;
 }
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  line-height: 100%;
  text-align: left;
}
.row-bg {
  padding: 10px 0;

}
</style>


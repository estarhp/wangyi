<template>
<div>
  <el-row class="tac" >
    <el-col :span="24" >
      <el-menu
          background-color="white"
          text-color="rgba(51,51,51)"
          default-active="2"
          class="el-menu-vertical-demo"




          >
        <router-link to="/MainPage" style="text-decoration: none">
          <el-menu-item index="1" >
            <span slot="title" >发现音乐</span>
          </el-menu-item>
        </router-link>

        <el-menu-item index="2">
          <span slot="title">播客</span>
        </el-menu-item>
        <el-menu-item index="3">
          <span slot="title">视频</span>
        </el-menu-item>
        <el-menu-item index="4">
          <span slot="title">关注</span>
        </el-menu-item>
        <el-menu-item index="5">
          <span slot="title">直播</span>
        </el-menu-item>
        <el-menu-item index="6">
          <span slot="title">私人FM</span>
        </el-menu-item>
        <el-menu-item style="background-color: white !important;color: rgb(153,153,153)">
          <span slot="title">我的音乐</span>
        </el-menu-item>
        <el-menu-item index="7">
          <span slot="title">我喜欢的音乐</span>
        </el-menu-item>
        <el-menu-item index="8">

          <span slot="title">本地与下载</span>
        </el-menu-item>
        <el-menu-item index="9  ">
          <span slot="title">最近播放</span>
        </el-menu-item>

      </el-menu>
    </el-col>
  </el-row>
  <el-row class="tac" >
    <el-col :span="24">

      <el-row><el-menu
          background-color="white"
          text-color="rgba(51,51,51)"
          class="el-menu-vertical-demo"
          >




      </el-menu></el-row>
    </el-col>
  </el-row>
  <el-row class="gedan">创建的歌单<i class="el-icon-caret-right"></i></el-row>

</div>
</template>

<script>

export default {
  name: "Myaside",
  methods:{
  },


}
</script>


<style scoped>
span {
  height: 20px;
  line-height: 10px;
  margin: 0;
}
.el-menu-item{
  height: 35px;
  line-height: 35px;
}
.el-menu-item:hover {
 background-color: rgb(246,246,247) !important;
}

.hhh {
  font-weight: 1000;
}

.gedan {
  font-size: 12px;
  line-height: 20px;
  height: 20px;
  color: rgb(153,153,153);
}
.el-menu-item.is-active {
  color: #333333;
  font-weight: 1000;
  background-color: rgb(246,246,247) !important;
}

</style>
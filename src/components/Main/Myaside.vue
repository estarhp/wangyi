<template>
<div style="overflow:auto;z-index: 0;height: 84vh" class="infinite-list">
  <el-row class="tac" style="height: 84vh">
    <el-col :span="24" style="height: 84vh" >
      <el-menu
          background-color="white"
          text-color="rgba(51,51,51)"
          default-active="2"
          class="el-menu-vertical-demo"
          style="height: 84vh"




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
        <router-link :to="{path:'/DetailLike',query:{id:this.$store.state.LikeListID}}" style="text-decoration: none">
        <el-menu-item index="7">
          <span slot="title">我喜欢的音乐</span>
        </el-menu-item>
        </router-link>
        <el-menu-item index="8">

          <span slot="title">本地与下载</span>
        </el-menu-item>
        <el-menu-item index="9">
          <span slot="title">最近播放</span>
        </el-menu-item>
        <el-menu-item index="10">
          <span slot="title">我的音乐盒</span>
        </el-menu-item>
        <el-menu-item index="11">
          <span slot="title">我的播客</span>
        </el-menu-item>
        <el-menu-item index="12">
          <span slot="title">我的收藏</span>
        </el-menu-item>
        <el-collapse v-model="activeNames" @change="handleChange" >
          <el-collapse-item title="创建的歌单" name="1">
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </el-collapse-item>
          <el-collapse-item title="收藏的歌单" name="2" style="z-index: -1;position: relative">
            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </el-collapse-item>
        </el-collapse>

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


</div>
</template>

<script>

export default {
  name: "Myaside",
  data(){
    return {
      activeNames: ['']
    }
  },
  methods:{
    handleChange(val) {
      console.log(val);
    }
  }
  }
</script>


<style>
.el-collapse-item__content {
  position: relative;
  z-index: -1;
}
</style>

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
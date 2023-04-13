<template>
<div style="overflow:auto;z-index: 0;height: 77vh" class="infinite-list">
  <el-row class="tac" >
    <el-col :span="24"  >
      <el-menu
          background-color="white"
          text-color="rgba(51,51,51)"

          class="el-menu-vertical-demo"
          >

        <router-link to="/MainPage" style="text-decoration: none">
          <el-menu-item index="f1" >
            <span slot="title" >发现音乐</span>
          </el-menu-item>
        </router-link>
        <el-menu-item index="f2">
          <span slot="title">播客</span>
        </el-menu-item>
        <el-menu-item index="f3">
          <span slot="title">视频</span>
        </el-menu-item>
        <el-menu-item index="f4">
          <span slot="title">关注</span>
        </el-menu-item>
        <el-menu-item index="f5">
          <span slot="title">直播</span>
        </el-menu-item>
        <el-menu-item index="f6">
          <span slot="title">私人FM</span>
        </el-menu-item>

        <el-menu-item style="background-color: white !important;color: rgb(153,153,153)">
          <span slot="title">我的音乐</span>
        </el-menu-item>
        <router-link :to="{path:'/Detail',query:{id:this.$store.state.LikeListID}}" style="text-decoration: none">
        <el-menu-item index="f7" v-if="this.$store.state.isLogin">
          <span slot="title">我喜欢的音乐</span>
        </el-menu-item>
        </router-link>
        <el-menu-item index="f8">

          <span slot="title">本地与下载</span>
        </el-menu-item>
        <el-menu-item index="f9">
          <span slot="title">最近播放</span>
        </el-menu-item>
        <el-menu-item index="f10" v-if="this.$store.state.isLogin">
          <span slot="title" >我的音乐盒</span>
        </el-menu-item>
        <el-menu-item index="f11" v-if="this.$store.state.isLogin">
          <span slot="title">我的收藏</span>
        </el-menu-item>
        <el-collapse v-model="activeNames"  style="text-align: left;" v-if="this.$store.state.isLogin">
          <el-collapse-item title="创建的歌单" name="1" style="margin: 10px 0px;">
          <router-link :to="{path: '/Detail',query: {id:i['id']}}" :ref="i['id']"  style=" text-decoration: none;color: #333333" v-for="(i,index) in this.$store.state.MyCreateList">
            <el-menu-item :index="''+index" style="width: 100%;overflow: hidden;height: 30px;line-height: 30px;padding-left: 20px">
              <span slot="title"><i class="el-icon-s-unfold"></i> {{i.name}}</span>
            </el-menu-item></router-link>
          </el-collapse-item>
          <el-collapse-item title="收藏的歌单" name="2" v-if="this.$store.state.isLogin">
            <router-link :to="`/Detail?id=${i.id}`" :ref="i['id']"  style=" text-decoration: none;color: #333333" v-for="(i,index) in this.$store.state.MyLoveList">
              <el-menu-item  :index="''+index+ 1" style="width: 100%;overflow: hidden;height: 30px;line-height: 30px;padding-left: 20px">
                <span slot="title"><i class="el-icon-s-unfold"></i> {{i.name}}</span>
              </el-menu-item>
            </router-link>
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

<style>
.el-collapse-item__header {
  text-align: center;
  padding-left: 20px;
}
</style>

<script>

export default {
  name: "Myaside",
  data(){
    return {
      activeNames: ['f1']
    }
  },
  created() {

  },
  methods:{

  }
  }
</script>


<style>
.el-collapse-item__content {
  padding: 0px;
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
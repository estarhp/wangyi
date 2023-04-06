<template>
<div id="main">
    <el-tabs v-model="activeName" @tab-click="handleClick" >
      <el-tab-pane label="个性推荐" name="second"><Customize></Customize></el-tab-pane>
      <el-tab-pane label="专属定制" name="first"></el-tab-pane>
      <el-tab-pane label="歌单" name="third"><PlayList></PlayList></el-tab-pane>
      <el-tab-pane label="排行榜" name="fourth"></el-tab-pane>
      <el-tab-pane label="歌手" name="five"></el-tab-pane>
      <el-tab-pane label="最新音乐" name="sixth"><NewMusic></NewMusic></el-tab-pane>
    </el-tabs>
</div>
</template>

<script>
import NewMusic from "@/components/NewMusic";
import Customize from "@/components/Customize";
import PlayList from "@/components/PlayList";
export default {
  name: "MainPage",
  components: {Customize,NewMusic,PlayList},
  data(){
    return {
      activeName: 'second'
    }
  },
  methods: {
    handleClick(tab, event) {
    },

  },
  mounted() {
    this.handleClick()
  }
}
</script>

<style>


.el-tabs__nav-wrap::after {
  height: 0;
}
.el-tabs__nav {
  height: 50px;

}


.el-tabs__item:hover {
  color: #333333;
}
.el-tabs__item.is-active {
  font-weight: 1000;
  color: #333333;
  font-size:20px ;
}
.el-tabs__active-bar {
  background-color: red;
  height: 3px;
  border-radius: 1.5px;
}

.el-tab-pane {
  height: 100%;
  line-height: 63px;
}
</style>

<style scoped>
#main {
  height: 100%;
  width: 100%;
  line-height: 63px;
  background-color: white;


}

</style>
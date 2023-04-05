<template>
  <div class="new-push">
    <el-tabs v-model="activeName"  @tab-click="handleClick">
    <el-tab-pane label="全部" name="first" ><NewMusicItem></NewMusicItem></el-tab-pane>
    <el-tab-pane label="华语" name="second" ><NewMusicItem></NewMusicItem></el-tab-pane>
    <el-tab-pane label="欧美" name="third" ><NewMusicItem></NewMusicItem></el-tab-pane>
      <el-tab-pane label="韩国" name="fourth" ><NewMusicItem></NewMusicItem></el-tab-pane>
      <el-tab-pane label="小日本" name="five" ><NewMusicItem></NewMusicItem></el-tab-pane>
      <el-tab-pane label="小语种" name="sixth" ><NewMusicItem></NewMusicItem></el-tab-pane>
  </el-tabs>
  </div>
</template>
<script>
import NewMusicItem from "@/components/NewMusicItem";
export default {
  name:"NewPush",
  components:{NewMusicItem},
  data() {
    return {
      activeName: 'second'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab,event)
    },
  }
};
</script>

<style >
.new-push .el-tabs__item {
  font-size: 7px;
  padding: 10px;
}
.new-push .el-tabs__active-bar {
  height: 0;
}

.new-push .el-tabs {
  transform: translateY(-20px);
}
</style>
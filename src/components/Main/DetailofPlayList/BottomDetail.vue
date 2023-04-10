<template>

  <div class="detail">

    <el-tabs v-model="activeName" style="line-height: 20px;height: 20px !important;margin: 0 !important">
      <el-tab-pane label="歌曲列表" name="first">
      <AllSongs></AllSongs>
      </el-tab-pane>
      <el-tab-pane :label="`评论(${details['commentCount']})`" name="second">
        <Comment></Comment>
      </el-tab-pane>
      <el-tab-pane label="收藏者" name="third">我没做，hhhh</el-tab-pane>

    </el-tabs>
  </div>
</template>

<script>

import AllSongs from "@/components/Main/DetailofPlayList/AllSongs";
import Comment from "@/components/Main/DetailofPlayList/Comment";

export default {
  name: "BottomDetail",
  components:{AllSongs,Comment},
  props:["details"],
  data(){
    return {
      activeName: 'first'
    }
  },
  methods:{

  },

}
</script>

<style>

.detail .el-tabs__header.is-top{
  height: 35px;
  margin: 0;
  background-color: #FFFFFF;
}

.detail .is-active {
  font-size: 16px;
}

.detail .el-tabs__nav-wrap.is-scrollable.is-top{
  height: 35px;
  margin: 0px;
  font-size: 16px;
  line-height: 35px;

}

.detail .el-tabs__item.is-top {
  height: 30px;
  line-height: 30px;
}

.detail .el-tabs__active-bar.is-top{
  top: 32px;
}

</style>

<style scoped lang="less">

</style>
<template>
  <div class="new-push" >

    <el-tabs v-model="activeName"  @tab-click="handleClick">
    <el-tab-pane label="全部" name="0" ><NewMusicItem :number="0" v-if="this.$store.state.NewPushList[0]"></NewMusicItem></el-tab-pane>
    <el-tab-pane label="华语" name="7" ><NewMusicItem :number="7" v-if="this.$store.state.NewPushList[7]"></NewMusicItem></el-tab-pane>
    <el-tab-pane label="欧美" name="96" ><NewMusicItem :number="96" v-if="this.$store.state.NewPushList[96]"></NewMusicItem></el-tab-pane>
      <el-tab-pane label="韩国" name="8" ><NewMusicItem :number="8" v-if="this.$store.state.NewPushList[8]"></NewMusicItem></el-tab-pane>
      <el-tab-pane label="小日本" name="16" ><NewMusicItem :number="16" v-if="this.$store.state.NewPushList[16]"></NewMusicItem></el-tab-pane>
<!--      <el-tab-pane label="小语种" name="6" ><NewMusicItem></NewMusicItem></el-tab-pane>-->
  </el-tabs>
  </div>
</template>
<script>
import NewMusicItem from "@/components/Main/Customization/New/NewMusicItem";
export default {
  name:"NewPush",
  components:{NewMusicItem},
  data() {
    return {
      activeName: '0'
    };
  },
  methods: {
    handleClick(tab, event) {
      const id=event.target.id.replace("tab-","")
      if(!this.$store.state.NewPushList[id]){
        this.$store.dispatch("getNewPush",id)
      }
    },
  },
  mounted() {
    this.$store.dispatch("getNewPush",0)
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
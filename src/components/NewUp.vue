<template>
  <div class="new-up infinite-list"  style="overflow:auto" scroll-container  ref="scroll">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部" name="ALL" ><NewUpItem area="ALL" v-if="this.$store.state.NewUpList['ALL']['month']"></NewUpItem></el-tab-pane>
      <el-tab-pane label="华语" name="ZH" ><NewUpItem area="ZH" v-if="this.$store.state.NewUpList['ZH']['month']"></NewUpItem></el-tab-pane>
      <el-tab-pane label="欧美" name="EA" ><NewUpItem area="EA" v-if="this.$store.state.NewUpList['EA']['month']"></NewUpItem></el-tab-pane>
      <el-tab-pane label="韩国" name="KR" ><NewUpItem area="KR" v-if="this.$store.state.NewUpList['KR']['month']"></NewUpItem></el-tab-pane>
      <el-tab-pane label="小日本" name="JP" ><NewUpItem area="JP" v-if="this.$store.state.NewUpList['JP']['month']"></NewUpItem></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import NewUpItem from "@/components/NewUpItem";
export default {
  name: "NewUp",
  components: {NewUpItem},

  data(){
    return {
      activeName:"ALL"
    }
  },methods:{
    handleClick(tab, event) {
      console.log(12)
      const area=event.target.id.replace("tab-","")
      if(!this.$store.state.NewUpList[area]["month"]){
        this.$store.dispatch("getNewUp",area)
      }
          }
  },
  mounted() {
    this.$store.dispatch("getNewUp","ALL")
  }
}
</script>

<style>
.new-up .el-tabs__item {
  font-size: 7px;
  padding: 10px;
}
.new-up .el-tabs__active-bar {
  height: 0;
}

.new-up .el-tabs {
  transform: translateY(-20px);
}
</style>
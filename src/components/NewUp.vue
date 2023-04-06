<template>
  <div class="new-up">
    <div
        style="display: flex;
        align-items: center;
        position: absolute;
        transform: translate(875px,-15px);
        z-index: 10"
    ref="select"
        v-if="activeName=='ALL'">
      <div :class="'button-up '+ whatClass('less')"  id="less" @click="handlePick" >推荐</div>
      <span style="font-size: 15px;color: #475669;margin: 0 5px;">|</span>
      <div :class="'button-up '+ whatClass('more')"  id="more" @click="handlePick">全部</div>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部" name="ALL" ><NewUpItem area="ALL" :select="isactive" v-if="this.$store.state.NewUpList['ALL']['month']" ></NewUpItem></el-tab-pane>
      <el-tab-pane label="华语" name="ZH" ><NewUpItem area="ZH" :select="isactive" v-if="this.$store.state.NewUpList['ZH']['month']"></NewUpItem></el-tab-pane>
      <el-tab-pane label="欧美" name="EA" ><NewUpItem area="EA" :select="isactive" v-if="this.$store.state.NewUpList['EA']['month']"></NewUpItem></el-tab-pane>
      <el-tab-pane label="韩国" name="KR" ><NewUpItem area="KR" :select="isactive" v-if="this.$store.state.NewUpList['KR']['month']"></NewUpItem></el-tab-pane>
      <el-tab-pane label="小日本" name="JP" ><NewUpItem area="JP" :select="isactive" v-if="this.$store.state.NewUpList['JP']['month']"></NewUpItem></el-tab-pane>
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
      activeName:"ALL",
      isactive:"less"
    }
  },methods:{
    handleClick(tab, event) {
      const area=event.target.id.replace("tab-","")
      if(!this.$store.state.NewUpList[area]["month"]){
        this.$store.dispatch("getNewUp",area)
      }
          },
    handlePick(event){
      this.isactive=event.target.id
    },
    whatClass(id){
      return this.isactive==id ? "selected":""
    }
  },
  mounted() {
    this.$store.dispatch("getNewUp","ALL")
  }
}
</script>

<style>

.selected {
  background-color: #FEF5F5;
  color: red;
}


.el-tabs__nav-scroll {
  width: 50%;
}

.el-tabs__nav-wrap .is-top {

}

.button-up {
  height: 20px;
  width: 40px;

  border-radius: 10px;
  font-size: 10px;
  line-height: 20px;
}

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
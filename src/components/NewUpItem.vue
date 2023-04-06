<template>
  <div class="infinite-list" style="overflow:auto" scroll-container  ref="scroll">
  <el-row :gutter="25"
          type="flex"
          justify="center"
          style="margin: 0"
          v-for="(i,index) in this.dataWeek"
  >
    <el-col v-for="j in i" :span="4"  :key="i.id"><PlayAlum :src="j.picUrl" :details="j.name" :id="j.id"  ></PlayAlum></el-col>
  </el-row>
</div>
</template>

<script>
import PlayAlum from "@/components/PlayAlum";
export default {
  name: "NewUpItem",
  props:["area"],
  components:{PlayAlum},
  data(){
    return {
      dataMonth:"",

      dataWeek:""
    }
  },
  mounted() {

    console.log(this.area)
    this.dataMonth=this.$store.state.NewUpList[this.area]["month"]
    this.dataWeek=this.$store.state.NewUpList[this.area]["week"]
  }
}
</script>

<style scoped>
.infinite-list::before {
  content: "本周最新";
  font-size: 20px;
  color: #333333;
  font-weight: 1000;
  width: 40px;
  height: 80px;
  position: fixed;
  line-height: 25px;
  z-index: 1;

  margin-left: -50%;
  transform: translateX(25%);

}

.infinite-list {
  height: 44vh;
}


</style>
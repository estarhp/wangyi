<template>
  <div>
  <div class="new-up-item" v-if="dataWeek && select=='less'" >
    <el-row :gutter="25"
            type="flex"
            justify="center"
            style="margin: 0"
            v-for="(i,index) in this.dataWeek"
    >
      <el-col v-for="j in i" :span="4"  :key="i.id"><PlayAlum :src="j.picUrl" :details="j.name" :id="j.id"  ></PlayAlum></el-col>
    </el-row>
  </div>
    <div class="new-up-item-month" v-if="dataMonth&&select=='more'||area!='ALL'" >
      <el-row :gutter="25"
              type="flex"
              justify="center"
              style="margin: 0"
              v-for="(i,index) in this.dataMonth"
      >
        <el-col v-for="j in i" :span="4"  :key="i.id"><PlayAlum :src="j.picUrl" :details="j.name" :id="j.id"  ></PlayAlum></el-col>
      </el-row>
    </div>
</div>
</template>

<script>
import PlayAlum from "@/components/Main/Customization/New/PlayAlum";
export default {
  name: "NewUpItem",
  props:["area",'select'],
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

.new-up-item::before {
  content: "本周最新";
  font-size: 20px;
  color: #333333;
  font-weight: 1000;
  width: 40px;
  height: 80px;
  position: fixed;

  line-height: 25px;
  z-index: 20;
  margin-left: -50%;
  transform: translate(50%,0px);
}
.new-up-item-month::before {
  content: "本月最新";
  font-size: 20px;
  color: #333333;
  font-weight: 1000;
  width: 40px;
  height: 80px;
  position: fixed;

  line-height: 25px;
  z-index: 20;
  margin-left: -50%;
  transform: translate(50%,0px);
}

.infinite-list {
  height: 44vh;
}


</style>
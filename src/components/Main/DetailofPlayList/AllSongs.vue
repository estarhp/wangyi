<template>
  <div >
    <el-row  v-for="(i,index) in this.$store.state.AllSongs" :class="whatBack(index)">
      <div class="grid-content bg-purple"><el-col :span="1" style="overflow: hidden">{{toTwo(index+1)}}</el-col></div>
      <div class="grid-content bg-purple"><el-col :span="6">{{i.name}}</el-col></div>
      <div class="grid-content bg-purple"><el-col :span="6">{{ i["ar"][0]["name"] }}</el-col></div>
      <div class="grid-content bg-purple"><el-col :span="6">{{i['al']['name']}}</el-col></div>
      <div class="grid-content bg-purple"><el-col :span="3">{{duration(i["dt"])}}</el-col></div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "AllSongs",
  methods:{
    duration:function (dt){
      let timestamp=Math.floor(parseInt(dt)/1000)
      let minutes = Math.floor(timestamp / 60);
      let seconds = timestamp % 60;
      let time = seconds>=10 ?`${minutes}:${seconds}`: `${minutes}:0${seconds}`
      return time
    },
    whatBack(index){
      return index%2? "white":"gray";
    },
    toTwo(index){
      if(index<10){
        return '0'+index
      }
      else return index
    }
  }
}
</script>

<style scoped lang="less">





.el-row {

  height: 35px;
  line-height: 35px;
&:last-child {
   margin-bottom: 0;
 }
}
.el-row:hover {
  background-color: #F2F2F3;
}


.el-col {
  font-size: 12px;
  border-radius: 4px;
  height: 35px;
  line-height: 35px;

}


.grid-content {
  border-radius: 4px;
}
.row-bg {
  padding: 10px 0;

}

.white {
  background-color: #FFFFFF;
}
.gray {
  background-color: #FAFAFA;
}



</style>
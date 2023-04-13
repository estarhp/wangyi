
<template>
    <div  @click.stop="handleClick" >
      <el-row  v-for="(i,index) in data" type="flex" align="middle" justify="center" class="New-el-row">
        <el-col :span="2" >
          <div class="grid-content bg-purple">
            <el-image :src="data[index]['album']['picUrl']+'?param=200y200'" fit="contain" lazy style="height: 100%;width: 100%">
              <div slot="placeholder" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </div>
        </el-col>
        <el-col :span="5"  ><div class="grid-content bg-purple" style="text-align: left;padding: 20px" >{{data[index]["name"]}}</div></el-col>
        <el-col :span="9" ><div class="grid-content bg-purple" >{{data[index]['artists'][0]["name"]}}</div></el-col>
        <el-col :span="4" ><div class="grid-content bg-purple">{{data[index]['album']["name"]}}</div></el-col>
        <el-col :span="4" ><div class="grid-content bg-purple">{{duration(data[index]["duration"])}}</div></el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  name:"NewMusicItem",
  props:["number"],
  data(){
    return {
    data:this.$store.state.NewPushList[this.number],

    }
  },mounted() {

  },
  methods:{
    handleClick(event){
      for (let i = 0; i < 100; i++) {
        this.$refs.scroll.children[i].style.backgroundColor="white"
      }
      event.target.parentElement.parentElement.style.backgroundColor="rgb(240,240,240)"
    },
    duration:function (dt){
      let timestamp=Math.floor(parseInt(dt)/1000)
      let minutes = Math.floor(timestamp / 60);
      let seconds = timestamp % 60;
      let time = seconds>=10 ?`${minutes}:${seconds}`: `${minutes}:0${seconds}`
      return time
    }


  },
  computed:{


}


}
</script>

<style scoped lang="less">


.infinite-list {
  height: 44vh;

}
.el-row {
   margin-bottom: 0;
 }

.el-row:hover {
  background-color: rgb(240,240,240) !important;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  font-size: 10px;
  line-height: 100px;
  border-radius: 4px;
  height: 100px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
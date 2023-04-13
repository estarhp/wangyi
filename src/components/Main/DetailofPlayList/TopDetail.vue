<template>
  <el-row style="height: auto;background-color: white" type="flex" v-if="details">
    <el-col :span="6">
      <el-image :src="this.$store.state.playListDetail['coverImgUrl']"
                style="width: 180px; height: 180px; margin: 10px;border-radius: 10px">
        <div slot="placeholder" class="image-slot">
          <i class="el-icon-picture-outline"></i>
        </div>
      </el-image>
    </el-col>
    <el-col :span="18" style="padding: 10px;text-align: left">
      <el-row ><span class="jingpin">精品音乐</span><span style="font-size: 25px">{{Name}}</span></el-row>
      <el-row type="flex" align="middle">
        <el-avatar  :src="details['creator']['avatarUrl']" :size="25"></el-avatar>&nbsp;&nbsp;
        <span>{{details['creator']["nickname"]}}</span>&nbsp;&nbsp;
        <span>{{formatTimestamp(details['createTime'])}}</span>
      </el-row>
      <el-row style="margin-bottom: 10px">
        <span class="button" style="background-color: red;color: white"><i class="el-icon-caret-right"></i>播放全部 </span>
        <span class="button"><i class="el-icon-folder-checked"></i> 收藏</span>
        <span class="button"><i class="el-icon-share"></i> 分享</span>
        <span class="button"><i class="el-icon-download"></i> 下载全部</span>
      </el-row>
      <el-row>
        <h5 v-if="details['tags']">标签：{{details['tags'].join("/")}}</h5>
        <h5>歌曲：{{details['trackCount']}}  播放：{{playCounts(details['playCount'])}}</h5>
        <el-collapse v-model="activeNames" >
          <el-collapse-item  v-if="details['description']" :title="'简介：'+details['description'].slice(0,10)+' ....'" name="1">
            <p>{{details['description']}}</p>
          </el-collapse-item>
        </el-collapse>
      </el-row>

    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "TopDetail",
  props:["details"],
  data(){
    return {
      activeNames: []
    }
  },
  computed:{
    Name(){
     return  this.details['creator']["nickname"].indexOf(this.details["name"])  ? this.details["name"].replace( this.details['creator']["nickname"],"我") : this.details["name"]
    }
  },methods:{
    playCounts(playCount){
      if(playCount>100000000){
        return Math.floor(playCount/100000000)+"亿"
      } else if(playCount>100000){
        return Math.floor(playCount/10000)+"万"
      }else{
        return Math.floor(playCount)
      }
    },
    formatTimestamp(timestamp) {
  let date = new Date(timestamp);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
}

}
}
</script>

<style>

.el-collapse-item__header {
  height: 12px;
  line-height: 12px;

  border: 0px;
}
.el-collapse-item__wrap {
  z-index: 0;
  border: 0px;
}
</style>

<style scoped>
.jingpin {
  border: 1px solid red;
  border-radius: 3px;
  color: red;
  position: relative;
 top: -4px;
}
.button {
  height: 35px;
  width: 100px;
  background-color: transparent;
  border-radius: 20px;
  margin: 5px 0px;
  display: inline-block;
  border: 1px solid #D9D9D9;
  text-align: center;
  line-height: 35px;
  font-size: 16px;
}
.el-row {
  height: auto;
  line-height: 40px;
  margin: 0px 0px;
}
h5 {
  height: 15px;
  line-height: 15px;
  margin: 2px;
}
span {
  font-size: 12px;

}
</style>
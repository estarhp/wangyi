<template>
  <el-badge :value="playCounts"  class="item"  icon="el-icon-search"  v-if="playCount">
  <el-card :body-style="{ padding: '0px' }" shadow="never">
    <router-link :to="{path:'/Detail',query:{id:this.id}} ">

      <el-image :src="src+'?param=200y200'" class="image" :title="details"  :lazy="lazy" ></el-image>

      <div class="bottom">
        <div class="bottom clearfix">
          <span >{{details}}</span>
        </div>
      </div>
    </router-link>
  </el-card>
  </el-badge>
</template>

<script>
export default {
  name: "PlayListItem",
  props:["src","details","id","playCount","lazy"],
  computed:{
    playCounts(){
      if(this.playCount>100000000){
        return Math.floor(this.playCount/100000000)+"亿"
      } else if(this.playCount>100000){
        return Math.floor(this.playCount/10000)+"万"
    }else{
      return Math.floor(this.playCount)
    }
    },

  },
}

</script>

<style>
.el-badge__content.is-fixed {

  transform: translate(5px,0px);
  background-color: transparent;
  border: transparent;
  color: rgba(255, 255, 255, 0.98);
}
.el-badge__content:before {
  content: "▷";

  font-weight: 1000;


}
</style>

<style scoped>



a {
  color: #333333;
  text-decoration: none;
}

.el-card {
  border: white;
  height: 100%
}

.bottom {
  height:30px;
  padding: 0;
  line-height: 14px;
  font-size: 13px;
  margin-top: -20px;
}
.image {
  height: 100%;
  width: 100%;
}


</style>
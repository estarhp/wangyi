<template>
  <div style="overflow:auto;height: 66vh">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in urlList" :key="item.bannerId">
        <el-image :src="item.pic" fit="scale-down" ></el-image>
      </el-carousel-item>
    </el-carousel>
    <el-row :gutter="25"  type="flex" justify="center" style="margin-left: -70px;margin-right: -70px;">
      <el-col :span="4"  v-for="(i,index) in creativesPlayList.slice(0,5)" :key="i.id"><PlayListItem :src="i.picUrl" :details="i.name" :id="i.id" :playCount="i['playcount']" v-if="index<5"></PlayListItem></el-col>
    </el-row>
    <el-row :gutter="25"  type="flex" justify="center" style="margin-left: -70px;margin-right: -70px;">
      <el-col :span="4"  v-for="(i,index) in creativesPlayList.slice(5,10)" :key="i.id"><PlayListItem :src="i.picUrl" :details="i.name" :id="i.id"  :playCount="i['playcount']" v-if="index<5"></PlayListItem></el-col>
    </el-row>



  </div>
</template>

<script>
import axios from "axios";
import PlayListItem from "@/components/Main/Customization/PlayList/PlayListItem"
export default {
  name: "Customize",
  components:{PlayListItem},
  data(){
    return {
      urlList:'',
      allData:"",
      creativesPlayList:"",
    }
  },
  methods:{
    bannerLoad:async function(){
      const res= await axios({
        url:`/homepage/block/page`,
        method: 'get'
      })
      this.allData=res.data.data
      this.urlList=res.data.data.blocks["0"]['extInfo']["banners"]
    },
    getPlayList: async function(){
      const res= await axios({
        url:`/recommend/resource`,
        method: 'get'
      })
      this.creativesPlayList=res.data["recommend"]
    }
    },
    mounted() {
      this.bannerLoad()
      this.getPlayList()
  }

}
</script>
<style>
.el-menu-item {
  text-align: left;
}
</style>

<style lang="less" scoped>

.el-image__inner {
  border-radius: 10px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  border-radius: 10px;
  background-color: white;
}

.is-active {
  border-radius: 10px;
  background-color: white ;
}
.el-carousel__button {
  height: 6px;
  width: 6px;
  border-radius: 50%;
}
.is-active>.el-carousel__button {
  background-color: red;
}

.el-tabs__nav-wrap::after {
  background-color: white;
}

.el-carousel__indicator--horizontal {
  padding: 12px 6px;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: white;
}

.el-carousel  {
  margin: 0 20px;
  overflow: hidden;
}

.el-row {
  margin-bottom: 20px;

&:last-child {
   margin-bottom: 0;
 }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  height: 20vh;
  width: 20vh;
}
.row-bg {
  padding: 10px;
  background-color: #f9fafc;
}



</style>
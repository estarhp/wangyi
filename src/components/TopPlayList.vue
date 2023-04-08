<template>
  <el-row type="flx" class="blur">
    <el-col :span="24"  >
      <div class="grid-content bg-purple-dark" style="text-align: left;display: flex;align-items: center; ">
        <img

            style="width: 140px; height: 140px; margin: 15px;border-radius: 10px"
            :src="全部[0]['coverImgUrl']"
        >

        <div>
          <router-link  tag="button" to="" style="
          border-radius: 20px;
          width: 100px;
          display: block;
          height: 40px;
          font-size: 15px;
          line-height: 0px;
          background: transparent;
          color: #E7AA5A;
          border: 1px solid #E7AA5A" ><i class="el-icon-trophy"></i> 精品歌单</router-link>
          <span >{{全部[0]['name']}}</span>
        </div>
      </div>
    </el-col>

  </el-row>
</template>

<script>
import axios from "axios";

export default {
  name: "TopPlayList",
  data(){
    return {
     全部:""
    }
  },
  mounted() {
    this.getHighQualityList("全部")

  },
  methods:{
    getHighQualityList: async function (cat) {
      const res = await axios({
        url: `/top/playlist?cat=${cat}`,
        method: "get"
      })
      this.全部=res.data["playlists"]
      this.$store.state.highPlayList[cat]=res.data["playlists"]
    }
  }
}
</script>


<style scoped lang="less">


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
  background: radial-gradient(circle, #FEF5F5, #FFFFFF);
}
.bg-purple {
  background: linear-gradient(to right, #FFFFFF, #FEF5F5);
}
.bg-purple-light {
  background: linear-gradient(to right, #FEF5F5, #FFFFFF);
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>

<template>
  <el-row type="flx" class="blur" v-if="showTag">
    <el-col :span="24"  >
      <div class="grid-content bg-purple-dark" style="text-align: left;display: flex;align-items: center; ">
        <el-image
            v-if="showTag!==''"
            style="width: 140px; height: 140px; margin: 15px;border-radius: 10px"
            :src="showTag[0][0]['coverImgUrl']+'?param=200y200'"
        >
          <div slot="placeholder" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>

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
          <span v-if="showTag!==''">{{showTag[0][0]['name']}}</span>
        </div>
      </div>
    </el-col>

  </el-row>
</template>

<script>


export default {
  name: "TopPlayList",
  data(){
    return {
     showTag:""
    }
  },
  created() {
    this.$store.dispatch("getHighQualityList","全部").then(
        res=>{
          this.showTag=this.$store.state.highPlayList
        }
    )
  },
  methods: {

  },
  computed:{
    nowTag(){
      return this.$store.state.category
    }

  },
  watch:{
    nowTag:{
      handler(value){
        this.$store.dispatch("getHighQualityList",value).then(
            res =>{

              this.showTag=this.$store.state.highPlayList
              if(this.showTag.length==0){
                this.showTag=false
              }

            }

        )

      }
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



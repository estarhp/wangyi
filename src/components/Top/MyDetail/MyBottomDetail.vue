<template>
  <div style="height: 300px" >

      <el-tabs  v-model="activeName" style="line-height: 20px;height: 20px !important;margin: 0px !important;text-align: left">
        <el-tab-pane label="我创建的歌单" name="first">
          <el-row :gutter="25"
                  type="flex"
                  justify="left"
                  style="margin: 0px"
                  v-for="(i,index) in MyCreateList"
          >
            <el-col v-for="j in i" :span="5"  :key="i.id"><PlayListItem :src="j.coverImgUrl" :details="j.name" :id="j.id"  :playCount="j['playCount']" ></PlayListItem></el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="收藏的歌单" name="second">
          <el-row :gutter="25"
                  type="flex"
                  justify="left"
                  style="margin: 0px"
                  v-for="(i,index) in MyLoveList"
          >
            <el-col v-for="j in i" :span='5'  :key="i.id"><PlayListItem :src="j.coverImgUrl" :details="j.name" :id="j.id"  :playCount="j['playCount']" :lazy="false" ></PlayListItem></el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="创建建的音乐栏" name="third">我没做，hhhh</el-tab-pane>
      </el-tabs>

  </div>
</template>

<script>
import PlayListItem from "@/components/Main/Customization/PlayList/PlayListItem";
export default {
  name: "MyBottomDetail",
  data() {
    return {
      activeName:"first"
    };
  },
  methods:{
    sliceArr: function (arr) {
      let size = 5; // 指定子数组长度
      let result = [];
      for (let i = 0; i < arr.length; i += size) {
        let chunk = arr.slice(i, i + size); // 截取指定长度的子数组
        result.push(chunk);
      }
      return result
    }
  },
  components:{
    PlayListItem
  },
  computed:{
    MyCreateList(){
      return this.sliceArr(this.$store.state.MyCreateList)
    },
    MyLoveList(){
      return this.sliceArr(this.$store.state.MyLoveList)
    }
  },
  mounted() {
    console.log(this.MyCreateList)
    console.log(this.MyLoveList)
  }


}
</script>


<style>



.my-detail .el-tabs__header.is-top{
  height: 35px;
  margin-top: 20px;
  background-color: #FFFFFF;
  text-align: left;
}

.my-detail .is-active {
  font-size: 16px;
}

.my-detail .el-tabs__nav-wrap.is-scrollable.is-top{
  height: 35px;
  margin: 0px;
  font-size: 16px;
  line-height: 35px;

}

.my-detail .el-tabs__item.is-top {
  height: 30px;
  line-height: 30px;
}

.my-detail .el-tabs__active-bar.is-top{
  top: 32px;
}

.my-detail .el-tabs__header.is-top {
  transform: translateX(-43vh);
}

</style>
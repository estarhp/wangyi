<template>
<div >
  <el-row :gutter="25"
          type="flex"
          justify="center"
          style="margin: 0px -90px"
          v-for="(i,index) in this.$store.state.highPlayList[this.$store.state.category]"
  >
    <el-col v-for="j in i" :span="4"  :key="i.id"><PlayListItem :src="j.coverImgUrl" :details="j.name" :id="j.id"  :playCount="j['playCount']" ></PlayListItem></el-col>
  </el-row>
</div>
</template>

<script>
import PlayListItem from "@/components/Main/Customization/PlayList/PlayListItem";
export default {
  name: "ButtonPlayList",
  components:{PlayListItem},
  mounted() {

  }
}
</script>

<style scoped>



</style>
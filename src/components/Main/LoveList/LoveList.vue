<template>
  <div style="overflow: auto;" class="infinite-list">
    <TopDetail :details="this.$store.state.playListDetail"></TopDetail>
    <BottomDetail :details="this.$store.state.playListDetail"></BottomDetail>
  </div>
</template>

<script>
import TopDetail from "@/components/Main/DetailofPlayList/TopDetail";
import BottomDetail from "@/components/Main/DetailofPlayList/BottomDetail";
export default {
  name: "LoveList",
  components:{TopDetail,BottomDetail},
  created() {
    this.$store.state.playListDetail=undefined
  },
  mounted() {

    this.$store.dispatch("getDetailPlayList",this.$route.query.id)}
}
</script>

<style scoped>

.infinite-list {
  height: 77vh;
}


</style>
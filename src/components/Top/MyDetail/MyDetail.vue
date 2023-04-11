<template>
  <div class="my-detail" style="background-color: white">
    <MyTopDetail></MyTopDetail>
    <MyBottomDetail></MyBottomDetail>
  </div>
</template>

<script>
import MyBottomDetail from "@/components/Top/MyDetail/MyBottomDetail";
import MyTopDetail from "@/components/Top/MyDetail/MyTopDetail";

export default {
  name: "MyDetail",
  components: { MyTopDetail,MyBottomDetail},

}
</script>

<style scoped>

</style>
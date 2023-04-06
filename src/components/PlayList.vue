<template>
  <div>
    <TopPlayList></TopPlayList>
    <BottomPlayList></BottomPlayList>
  </div>
</template>

<script>
import TopPlayList from "@/components/TopPlayList";
import BottomPlayList from "@/components/BottomPlayList";
export default {
  name: "PlayList",
  components:{TopPlayList,BottomPlayList}
}
</script>

<style scoped>

</style>
<template>
<div style="background-color: white">
  <el-input
      type="textarea"
      :rows="2"
      placeholder="请输入内容"
      v-model="textarea">
  </el-input>
  <h1>精彩评论</h1>
  <CommentItem v-for="i in AllComment['hotComments']" :comments="i"></CommentItem>
  <h1>最新评论({{AllComment["comments"].length}})</h1>
  <CommentItem v-for="i in AllComment['comments']" :comments="i"></CommentItem>

</div>
</template>

<script>

import CommentItem from "@/components/Main/DetailofPlayList/CommentItem";
export default {
  name: "Comment",
  components:{CommentItem},
  data() {
    return {
      textarea: ''
    }
  },
  computed:{
    AllComment(){
      return this.$store.state.AllComment
    }
  }
}
</script>

<style>
.el-textarea,.el-textarea__inner{
  height: 70px;
  padding: 20px 30px;
}
</style>

<style scoped>
h1 {
  text-align: left;
  padding-left: 30px;
  margin-bottom: 0px;
}


</style>
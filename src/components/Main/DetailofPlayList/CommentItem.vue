<template>
<el-row>
  <el-col :span="1">
    <div class="grid-content bg-purple">
      <el-avatar :src="comments.user['avatarUrl']"></el-avatar>
    </div>
  </el-col>
  <el-col :span="23" style="text-align: left;font-size: 12px;line-height: 16px;padding-left: 10px"><div class="grid-content bg-purple">
       <span><span style="color: #0B58B0;line-height: 2">
        {{comments.user['nickname']}}
      </span>:{{ comments["content"] }}</span> <br> {{formatTimestamp(comments.time)}}
  </div></el-col>
</el-row>
</template>

<script>


export default {
  name: "CommentItem",
  props:["comments"],
  methods: {
    formatTimestamp(timestamp) {
      let date = new Date(timestamp);
      let year = date.getFullYear();
      let month = (date.getMonth() + 1).toString().padStart(2, '0');
      let day = date.getDate().toString().padStart(2, '0');
      let hour = date.getHours().toString().padStart(2, '0');
      let minute = date.getMinutes().toString().padStart(2, '0');
      return `${year}年${month}月${day}日${hour}:${minute}`;    }
  }

}
</script>

<style scoped lang="less">

.el-row {
  margin-bottom: 5px;
&:last-child {
   margin-bottom: 0;
 }
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;

}


</style>
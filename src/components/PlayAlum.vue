<template>

    <el-card :body-style="{ padding: '0px' }" shadow="never">
      <a :href='"https://music.163.com/playlist?id="+id'>

        <el-image :src="src+'?param=200y200'" class="image" :title="details" :lazy="true"  ></el-image>

        <div class="bottom">
          <div class="bottom clearfix">
            <span >{{details}}</span>
          </div>
        </div>
      </a>
    </el-card>

</template>

<script>
export default {
  name: "PlayAlum",
  props:["src","details","id"],
}

</script>

<style>


</style>

<style scoped>




a {
  color: #333333;
  text-decoration: none;
}

.el-card {
  border: white;
  height: 100%
}

.bottom {
  height:30px;
  padding: 0;
  line-height: 14px;
  font-size: 13px;
  margin-top: -20px;
}
.image {
  height: 100%;
  width: 100%;
}


</style>
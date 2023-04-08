<template>
  <el-row >
    <el-col :span="4" style="line-height: 30px">
      <slot></slot>
    </el-col>
    <el-col :span="20">
      <el-col :span="4" v-for="i in tags[number]"  class="right-tags" style="margin: 10px 0">
        <span><div  :data-id="i['name']" @click="handleClick" :class="'button-up'+isActive(i['name'])">{{i["name"]}}</div></span>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Tags",
  props:["number"],
  data(){
    return {

    }
  },
  methods:{
    handleClick(event){
      this.$bus.$emit("tagClick",event)
      this.$bus.$emit("clicked")
    },
    isActive(tag){
      if(tag==this.$store.state.category){
        return " tag-active"
      }
      return ""
    }

  },

  computed:{
    tags(){
      return this.$store.state.tags
    },


  },
  watch:{



}
}
</script>

<style scoped lang="less">

.el-button:hover {
  background: #F2F2F2;
  border-color: #F2F2F2;
  color: #333333;
}

.button-up {
   height: 20px;
  width: auto;
  padding: 0 10px;
  display: table;
  border-radius: 10px;
  font-size: 10px;
  line-height: 20px;
  text-align: center;
}
</style>
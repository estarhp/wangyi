<template>
<div v-if="this.details!==''" style="text-align: left;padding-left: 30px;" class="edit">
 <el-row>
   <el-col :span='14'> <el-row style="height: 40px">
     昵称： <el-input v-model="data.name" placeholder="请输入内容" style="width: 50%;margin: 0px;height: 30px;line-height: 0px;background: white"></el-input>

   </el-row>
     <el-row >
       <span style="position: relative;top: -150px">介绍：</span> <el-input
         type="textarea"
         :rows="6"
         placeholder="请输入内容"
         v-model="data.signature"
         style="padding-left: 0px;width: 80%;">
     </el-input>
     </el-row>
     <el-row style="height: 40px;line-height: 40px">
       性别：<el-radio v-model="data.gender" :label="1">男</el-radio>
       <el-radio v-model="data.gender" :label="2">女</el-radio>
       生日：<el-date-picker
         v-model="data.birthday"
         type="date"
         placeholder="选择日期"
         format="yyyy 年 MM 月 dd 日"
         value-format="timestamp"
         style="height: 30px">
     </el-date-picker>
     </el-row>
     <el-row>
       <el-button type="danger" round  style="width: 100px"  @click="upData">保存</el-button>
       <el-button round style="width: 100px" @click="cancel">取消</el-button>
     </el-row>
   </el-col>

     <el-col :span="4" style="text-align: center">

       <img style="height: 200px;width: 200px;margin-top: 30px;" :src="data.avatar">
       <el-upload
           class="upload-demo"
           action="/avatar/upload"
           :on-change="handleChange"
           name="imgFile"
           :data="{imgSize:300}"

           :file-list="fileList">
         <el-button round type="primary">点击上传</el-button>
         <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
       </el-upload>

     </el-col>


 </el-row>

</div>
</template>

<style>

.el-radio__input.is-checked .el-radio__inner {
  border-color: red;
  background-color: red;
}

.el-radio__input.is-checked+.el-radio__label {
  color: red;
}

.edit .el-input__inner{
  background-color: white;
}

.el-textarea, .el-textarea__inner {
  height: 150px;
}
</style>

.el-textarea__inner {
height: 200px;
}

<script>
export default {
  name: "EditMyDetail",
  data(){
    return {
      data:{
        name:'',
        signature:"",
        gender:"",
        birthday:"",
        avatar:"",
      },
      flag:0,
      fileList: []
    }
  },
  mounted(){

  },
  computed:{
    details(){
      return this.$store.state.userDetail
    },
  },
  methods:{
    upData(){

      this.$axios({
        url:`/user/update?${this.buildQueryParams(this.data)}`,
        method:"post"
      })
    },
   buildQueryParams(params) {
  /**
   * Builds URL query parameters from an object of key-value pairs.
   *
   * @param {Object} params - The object containing the parameters.
   *
   * @returns {string} - The URL query parameters as a string.
   */

      // Use the URLSearchParams API to convert the object to a query string
  const query = new URLSearchParams(params).toString();

  return query;
},
    cancel(){
      this.$router.go(-1)
    },
    handleChange(file, fileList) {
      this.fileList = fileList.slice(-3);
    }

},
  watch:{
    details:{
      immediate:true,
      handler(){
        // this.flag++;
        // if(this.flag>2&&this.name!==this.details.profile["nickname"]||
        // this.signature!==this.details.profile["signature"]||this.gender!==this.details.profile['gender']||
        // this.gender!==this.details.profile['gender']||this.birthday!==this.details.profile['birthday']||this.avatar!==this.details.profile["avatarUrl"]){
        //   console.log("weqeq")
        //  this.$refs.store.disabled=false
        // }else {
          try {
            this.data.name=this.details.profile["nickname"]
            this.data.signature=this.details.profile["signature"]
            this.data.gender=this.details.profile['gender']
            this.data.birthday=this.details.profile['birthday']
            this.data.avatar=this.details.profile["avatarUrl"]
          }catch {

          }

        // }

      }
    }
  }
}
</script>

<style scoped>



.el-row {
  line-height: 100%;
  margin-top: 20px;
}

</style>
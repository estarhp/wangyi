<template>
<div v-if="this.details!==''" style="text-align: left;padding-left: 30px;" class="edit">
 <el-row>
   <el-col :span='14'> <el-row style="height: 40px">
     昵称： <el-input v-model="data.nickname" placeholder="请输入内容" style="width: 50%;margin: 0px;height: 30px;line-height: 0px;background: white"></el-input>

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

       <img style="height: 200px;width: 200px;margin-top: 30px;" :src="avatar">
       <div style="margin-left: 40px"><a href='javascript:void(0);'  class="Button">选择文件</a>
         <input type="file"ref="file" @change="main" class="myFileUpload" />
         <div class="show"></div></div>
     </el-col>


 </el-row>

</div>
</template>

<style>


.Button{ /*蓝色按钮,绝对定位*/
  position: absolute;
  display: block;
  width: 100px;
  height: 30px;
  background-color: #fff;
  color: #333333;
  text-decoration: none;
  text-align: center;
  font:normal normal normal 16px/40px 'Microsoft YaHei';
  cursor: pointer;
  border-radius: 15px;
  border: 1px solid #D9D9D9;
  line-height: 30px;

}

.Button:hover {
  background-color: #F2F2F2;
}
.blueButton:hover {
  text-decoration: none;
}
.myFileUpload{ /*自定义上传,位置大小都和a完全一样,而且完全透明*/
  position: absolute;
  display: block;
  width: 100px;
  height: 40px;
  opacity: 0;
}
.show{/*显示上传文件夹名的Div*/
  position: absolute;
  top:40px;
  width: 100%;
  height: 30px;
  font:normal normal normal 14px/30px 'Microsoft YaHei';
}


.file {
  background: transparent;
  width: 200px;
  height: 100px;
}

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
        nickname:'',
        signature:"",
        gender:"",
        birthday:"",

      },
      flag:0,
      fileList: [],
      avatar:"",
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
        url:`/user/update?${this.buildQueryParams(this.data)}&timestamp=${Date.now()}`,
        method:"post"
      }).then(res => {
        this.$store.dispatch("getUserDetail",this.$store.state.userData["account"]["id"])
      }).catch(
          err =>{
            alert(err.message)
          }
      )
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

    async main(e) {






      console.log( this.$refs.file)
      var file = this.$refs.file.files[0]
      this.upload(file)


    }
    ,
    getImgSize(file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function (theFile) {
      let image = new Image()
      image.src = theFile.target.result
      image.onload = function () {
        resolve({
          width: this.width,
          height: this.height,
        })
      }
    }
  })
}
    ,
    async upload(file) {
      console.log(123)
      var formData = new FormData()
      formData.append('imgFile', file)
      const imgSize = await this.getImgSize(file)
      const res = await this.$axios({
        method: 'post',
        url: `/avatar/upload?imgSize=${imgSize.width}&imgX=0&imgY=0&timestamp=${Date.now()}`,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        data: formData,
      }).then(res =>{
            this.$store.dispatch("getUserDetail",this.$store.state.userData["account"]["id"])
          }


      )

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
            this.data.nickname=this.details.profile["nickname"]
            this.data.signature=this.details.profile["signature"]
            this.data.gender=this.details.profile['gender']
            this.data.birthday=this.details.profile['birthday']
            this.avatar=this.details.profile["avatarUrl"]
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
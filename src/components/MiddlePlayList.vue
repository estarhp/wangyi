<template>
  <div style="text-align: left;margin-top: -20px" >
    <el-row type="flex" justify="left">
      <el-col :span="4">

        <button ref="button"  style="
        height: 40px;
        width: 90px;

        line-height: 40px;
        border-radius: 17px;
        border: 1px black;
        "
                @click="isShow=!isShow">
          更多菜单<i class="el-icon-arrow-right el-icon--right"></i>
        </button>

        <ul ref="dropdown"
            v-show="isShow"
            style="width: 800px;
            list-style: none;
            margin-top:-10px;
            margin-left: -40px;
            box-shadow:  2px 2px 1px gray;
            position: absolute;
            background: white;
            border-radius: 5px;
            border: 0.5px solid gray;
            z-index: 1;">
          <li style="height: 50px;display: flex;align-items: center;border-bottom: 1px solid gray;padding: 0;" >
            <div :class=" 'button-up'+isActive('全部歌单')" style="font-size: 12px; margin-left: 10px"
                 data-id="全部歌单"  @click="handleClick">全部歌单</div>

          </li>

          <li>
            <tags :number="0">
              <div class="tag-class">
                <i class="el-icon-chat-line-round" style="font-size: 20px"></i>语种
              </div>
            </tags>
          </li>
          <li>
            <tags :number="1" >
            <div class="tag-class">
              <i class="el-icon-suitcase" style="font-size: 20px"></i>风格
            </div>
          </tags>
          </li>
          <li>
            <tags :number="2">
              <div class="tag-class">
                <i class="el-icon-coffee-cup" style="font-size: 20px"></i>场景
              </div>
            </tags>
          </li>
          <li>
            <tags :number="3">
              <div class="tag-class">
                <i class="el-icon-menu" style="font-size: 20px"></i>主题
              </div>
            </tags>
          </li>
          <li>
            <tags :number="4">
              <div class="tag-class">
                <i class="el-icon-chat-line-round" style="font-size: 20px"></i>语种
              </div>
            </tags>
          </li>
        </ul>
      </el-col>
      <el-col :span="20" :offset="6" style="display: flex">
       <el-col v-for="i in this.hotTags"  style="flex-grow: 1;" >
         <div  :data-id="i['name']"  @click="handleClick" :class="'button-up2'+isActive(i['name'])">{{i["name"]}}</div>
       </el-col>
      </el-col>

    </el-row>
  </div>
</template>

<script>
import Tags from "@/components/Tags";
export default {
  name: "MiddlePlayList",
  components:{Tags},
  data(){
    return {
      isShow:false,
      hotTags:''
    }
  },
  methods:{
    handleClick(event){
      this.$bus.$emit("tagClick",event)
    },
    outClick(event){
      if (this.$refs.button==event.target ||this.isShow==false||!this.$refs.dropdown){
        return 0
      }

        if (!this.$refs.dropdown.contains(event.target)) {
          this.isShow=!this.isShow
        }


    },
    isActive(tag) {
      if(tag==this.$store.state.category){
        return " tag-active"
      }
      else return ''

    },
    getHotTags:async function() {
      const res=await this.$axios.get("/playlist/hot")
      this.hotTags=res.data.tags
    }

  },
  mounted(){
    this.$bus.$on("outClick",this.outClick)
    this.$bus.$on("clicked",()=>this.isShow=!this.isShow)
    this.getHotTags()

  },
   computed: {


   }

}
</script>

<style scoped>

.tag-class {
 color: #999999;
}

.el-button:hover {
  background: #F2F2F2;
  border-color: #F2F2F2;
  color: #333333;
}

.button-up2 {
  padding: 0 5px;
  height: 20px;
  width: auto;
  display: table;
  border-radius: 10px;
  font-size: 10px;
  text-align: center;
  line-height: 20px;
  transform: translateY(120%);
}


.button-up {
  padding: 0 10px;
  height: 20px;
  width: auto;
  display: table;
  border-radius: 10px;
  font-size: 10px;
  text-align: center;
}


</style>
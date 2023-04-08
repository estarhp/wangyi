<template>
  <div style="overflow:auto" class="infinite-list">

    <TopPlayList></TopPlayList>
    <MiddlePlayList></MiddlePlayList>
    <ButtonPlayList></ButtonPlayList>
    <div v-for="i in 14" style="height: 200px;background: red"></div>
  </div>
</template>

<script>
import TopPlayList from "@/components/TopPlayList";
import MiddlePlayList from "@/components/MiddlePlayList";
import ButtonPlayList from "@/components/ButtonPlayList";
import axios from "axios";
export default {
  name: "PlayList",
  components:{ButtonPlayList,TopPlayList,MiddlePlayList},
  data(){
    return {

    }
  },
  computed: {
    tags(){
      return this.$store.state.tags

    },
    category(){
      return this.$store.state.category
    }
  },
  watch:{
    category:{
      handler(value){


        if(!this.$store.state.highPlayList.value){
          this.getHighQualityList(value)
          console.log(value)
        }

      }
    }
  },
  mounted() {
    this.$bus.$on("tagClick",this.handleClick)

  },
  methods:{
    handleClick(event) {
      this.$store.state.category=event.target.dataset.id
    },
    getHighQualityList: async function (cat) {
      const res = await axios({
        url: `/top/playlist?cat=${cat}`,
        method: "get"
      })
      this.$store.state.highPlayList[cat]=res.data["playlists"]
    }

  }
}
</script>

<style>

.tag-active {
  background-color: #FEF5F5;
  color: red;
}

.el-dropdown-menu__item:hover {
  background: #FFFFFF!important;
  color: #333333!important;
}

.right-tags:hover {
  color: red;
}


.el-button:focus {
  background: #F2F2F2;
  border-color: #F2F2F2;
  color: #333333;
}
</style>

<style scoped>



.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
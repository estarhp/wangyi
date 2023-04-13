<template>
  <div style="overflow:auto" class="infinite-list">
    <TopPlayList></TopPlayList>
    <MiddlePlayList></MiddlePlayList>
    <ButtonPlayList></ButtonPlayList>
  </div>
</template>

<script>
import TopPlayList from "@/components/Main/Customization/PlayList/TopPlayList";
import MiddlePlayList from "@/components/Main/Customization/PlayList/MiddlePlayList";
import ButtonPlayList from "@/components/Main/Customization/PlayList/ButtonPlayList";

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

  },
  mounted() {
    this.$bus.$on("tagClick",this.handleClick)

  },
  methods:{
    handleClick(event) {
      this.$store.state.category=event.target.dataset.id
    },

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
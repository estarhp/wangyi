<template>
  <div>
    <img id="qrImg" />
<!--    <img :src="userData.profile.avatarUrl" alt="">-->
  </div>
</template>

<script>


export default {
  name: "Mymain",
  data() {
    return {
      code: "",
      userData: {}

    }
  },
  methods: {


  }
  ,
  mounted() {

    this.$bus.$on("login",this.login)


  }




}
</script>

<style scoped>

</style>
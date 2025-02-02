<script setup lang="ts">
import { ref,watch } from "vue";
import { RouterView,useRoute,useRouter } from "vue-router";

const route = useRoute()
const router = useRouter()
// 记录当前选择的 tab
const active = ref(route.name as string)
watch(active, (nv) => {
  router.push({
    name: nv,
  })
})
</script>

<template>
  <RouterView/>
  <van-tabbar v-model="active">
  <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item name="order" icon="bars">订单</van-tabbar-item>
  <van-tabbar-item  name="me" icon="contact">我的</van-tabbar-item>
</van-tabbar>
</template>

<style scoped>

</style>
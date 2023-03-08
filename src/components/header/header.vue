<template>
  <div class="flex justify-between items-center w-full p-6 sticky top-0 bg-black border-b border-b-zinc-800" style="height: 80px;">
    <div class="flex">
      <img src="http://p3.music.126.net/tBTNafgjNnTL1KlZMt7lVA==/18885211718935735.jpg" class="w-8 mr-2 rounded-full">
      <span class="text-gray-50 text-2xl hidden sm:block">Music</span>
    </div>
    <ul ref="uldom" class="flex justify-center items-center absolute w-full left-0 text-xl h-full">
      <li :class="{highlight:menuActive.indexOf(item.path)>=0}" class="mx-3 sm:mx-6 text-gray-400 hover:text-gray-50" v-for="item in listdata" :key="item.path"
        @click="sectpath(item.path)">{{ item.name }}</li>
      <!-- <router-link :to="'/'">
        <li class="mx-3 sm:mx-6 text-gray-400 hover:text-gray-50">首页</li>
      </router-link>
      <router-link :to="'/explore'">
        <li class="mx-3 sm:mx-6 text-gray-400 hover:text-gray-50">探索</li>
      </router-link>
      <router-link :to="'/my'">
        <li class="mx-3 sm:mx-6 text-gray-400 hover:text-gray-50">媒体库</li>
      </router-link> -->
      <li v-show="state" @click="search(true)" class="px-6 text-gray-400 hover:text-gray-50">搜索</li>
      <li v-show="!state" ref="searchbar"
        class="absolute top-1/2 -translate-y-1/2 w-1/2 flex items-center border-zinc-800 border text-sm sm:text-xl">
        <span class="text-gray-400 p-3 bg-zinc-900" @click="search(false)">返回</span>
        <input class="p-3 flex-1 outline-none bg-zinc-900 text-gray-400" type="text" placeholder="搜索尚未开发">
      </li>
    </ul>
    <div class="text-black bg-slate-50 px-4 py-1 text-sm rounded-full">登录</div>
  </div>
</template>

<script setup lang="ts">
import { ref,  computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
let state = ref(true)
const menuActive = computed(() => route.path);
const listdata = [
  {
    path: '/home',
    name: '首页',
  },
  {
    path: '/explore',
    name: '探索'
  },
  {
    path: '/my',
    name: '媒体库'
  },
]
const sectpath = (item:string) => {
  router.push({ path:item })
}


const search = (type: boolean) => {
  return state.value = !type
}




</script>


<style lang="less" scoped>
.highlight {
  color: #f9fafb;
}</style>

<template>
  <div>
    <!-- 头部 -->
    <Header></Header>
    <!-- 为你推荐 -->
    <Recommend></Recommend>
    <!-- 今天最火 -->
    <ToDayHot></ToDayHot>
    <!-- 专属定制音乐 -->
    <ExclusiveSinger></ExclusiveSinger>
    <!-- 经典 -->
    <classic></classic>
    <!-- 韩国 -->
    <southKorea></southKorea>
    <!-- 日本 -->
    <japan></japan>
    <!-- 推荐视频 -->
    <mv></mv>
    <!-- 华语 -->
    <chinese></chinese>
    <!-- 流行 -->
    <popular></popular>
    <!-- 电台 -->
    <radio></radio>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue"
import Header from '../../components/header/header.vue'
import Recommend from '../../components/homelist/recommend.vue'
import ToDayHot from '../../components/homelist/todayhot.vue'
import ExclusiveSinger from '../../components/homelist/exclusiveSinger.vue'
import classic from '../../components/homelist/todayhot.vue'
import southKorea from '../../components/homelist/todayhot.vue'
import japan from '../../components/homelist/todayhot.vue'
import mv from '../../components/homelist/mv.vue'
import chinese from '../../components/homelist/todayhot.vue'
import popular from '../../components/homelist/todayhot.vue'
import radio from '../../components/homelist/radio.vue'


</script>

<style lang="less" scoped module>
</style>

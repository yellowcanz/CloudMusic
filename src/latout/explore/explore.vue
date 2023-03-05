<template>
    <div>
        <div class="w-10/12 h-60 m-auto px-3 my-20 flex justify-between items-center flex-col lg:flex-row lg:h-auto">
            <el-button
                class="w-full lg:w-1/4 h-16 text-3xl justify-start font-semibold bg-neutral-800 hover:bg-neutral-900 bottom-0"
                style="margin-left: 0;" color="#262626" type="info" :icon="HelpFilled">新发行</el-button>
            <el-button
                class="w-full lg:w-1/4 h-16 text-3xl justify-start font-semibold bg-neutral-800 hover:bg-neutral-900 bottom-0"
                style="margin-left: 0;" color="#262626" type="info" :icon="TopRight">排行榜</el-button>
            <el-button
                class="w-full lg:w-1/4 h-16 text-3xl justify-start font-semibold bg-neutral-800 hover:bg-neutral-900 bottom-0"
                style="margin-left: 0;" color="#262626" type="info" :icon="Orange">心情与流派</el-button>
        </div>
        <newAlbumsSingles></newAlbumsSingles>
        <div>
            <div class="text-white text-5xl font-semibold w-10/12 px-3 m-auto">心情与流派</div>
            <div class="w-10/12 mx-auto px-3 py-8 flex flex-wrap justify-between items-center">
                <el-button v-for="(item, index) of 24"
                    class="w-5/12 m-3 lg:w-2/7 xl:w-1/7 lg:mx-0 h-16 text-sm justify-start font-semibold bg-neutral-800 hover:bg-neutral-900 bottom-0"
                    style="margin-left: 0;" color="#262626" type="info" :icon="HelpFilled">新发行</el-button>
            </div>
        </div>
        <radio></radio>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { Search, HelpFilled, TopRight, Orange } from '@element-plus/icons-vue'
import newAlbumsSingles from '../../components/homelist/todayhot.vue'
import radio from '../../components/homelist/radio.vue'

</script>

<style lang="less" scoped module></style>

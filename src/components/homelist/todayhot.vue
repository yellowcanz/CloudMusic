<template>
    <div class="text-white text-5xl font-semibold w-10/12 px-3 m-auto">今日最火</div>
    <el-skeleton :loading="loading" animated :throttle="500" :count=6
        class="flex flex-wrap justify-between m-auto py-8 w-10/12">
        <template #template>
            <div class="flex flex-col items-center justify-between w-full mb-6 p-3 sm:w-1/2 md:w-1/3 xl:w-1/6">
                <el-skeleton-item variant="image" class="w-full h-60 object-cover" />
                <div class="flex-col flex w-full mt-4">
                    <el-skeleton-item variant="text" class="w-1/2 mb-2" />
                    <el-skeleton-item variant="p" class="w-full h-10" />
                </div>
            </div>
        </template>
        <template #default>
            <div class="flex justify-between flex-wrap items-center m-auto py-8 w-10/12">
                <div class="flex  flex-col items-center justify-between mb-6 p-3 w-full sm:w-1/2 md:w-1/3 xl:w-1/6"
                    v-for="(item, index) of 6">
                    <div class="w-full h-60">
                        <el-image
                            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                            class="w-full h-full object-cover image"></el-image>
                    </div>
                    <div class="flex-col flex w-full mt-4 text-white">
                        <div class="w-1/2">热门歌单</div>
                        <div class="calmp w-full text-gray-400 text-lg">Sam Smith、Taylor Swift、威肯、Bad Bunny</div>
                    </div>
                </div>
            </div>
        </template>
    </el-skeleton>
</template>

<script setup  lang="ts">
import { ref } from "vue"
const loading = ref(true) 
</script>

<style lang="less" scoped module></style>

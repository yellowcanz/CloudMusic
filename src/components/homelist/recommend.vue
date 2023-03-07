<template>
    <div class="text-white text-5xl font-semibold w-10/12 px-3 m-auto">为你推荐</div>
    <el-skeleton :loading="loading" animated :throttle="500" :count=16 class="flex flex-wrap justify-between m-auto py-8 w-10/12">
        <template #template>
            <div class="flex w-full sm:w-1/2  xl:w-1/4 px-2 mb-4">
                <el-skeleton-item variant="image" class="w-16 h-16" />
                <div class="flex-1 flex-col flex justify-around overflow-hidden ml-2">
                    <el-skeleton-item variant="text" class="w-full" />
                    <el-skeleton-item variant="text" class="w-1/2" />
                </div>
            </div>
        </template>
        <template #default>
            <div class="flex flex-wrap justify-between w-10/12 px-3 m-auto py-8">
                <div class="flex w-full sm:w-1/2  xl:w-1/4 px-2 mb-4" v-for="(item, index) of 16">
                    <div class="w-16 h-16">
                        <el-image
                            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                            class="w-full h-full"></el-image>
                    </div>
                    <div class="flex item-center justify-around flex-col ml-2 text-white">
                        <div class="p-2">When We Were Young</div>
                        <div class="px-2 text-gray-400">阿黛尔</div>
                    </div>
                </div>
            </div>
        </template>
    </el-skeleton>
</template>

<script setup lang="ts">
import { ref, reactive,onMounted } from "vue"
import {newDiscOnTheShelf} from '../../api/api'

const list = ref({})
const loading = ref(true)
// const loading =  reactive({
//     loading : true
// })
onMounted(()=>{
   let res = newDiscOnTheShelf()
   list.value = res
})
</script>

<style scoped lang="less">
.el-skeleton-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    margin: auto;
    padding: 0 2.5rem;
    width: 60%;
}
</style>

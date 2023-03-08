<template>
    <div class="text-white text-5xl font-semibold w-10/12 px-3 m-auto">为你推荐</div>
    <el-skeleton :loading="loading" animated :throttle="500" :count=16
        class="flex flex-wrap justify-between m-auto py-8 w-10/12">
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
                <!-- <router-link :to="{path:'/playdetail'}"> -->
                <router-link :to="{path:'/album',query:{id:item.id} }" class="flex w-full sm:w-1/2  xl:w-1/4 px-2 mb-4" v-for="(item, index) of rcelist" :key="item.id">
                    <div class="w-16 h-16">
                        <el-image
                            :src="item.picUrl"
                            class="w-full h-full"></el-image>
                    </div>
                    <div class="flex item-center justify-around flex-col ml-2 text-white">
                        <div class="p-2 hover:text-red-800">{{item.name}}</div>
                        <div class="px-2 text-gray-400">{{item.artist.name}}</div>
                    </div>
                </router-link>
            <!-- </router-link> -->
            </div>
        </template>
    </el-skeleton>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
import { newDiscOnTheShelf } from '../../api/api'
import { Recommend } from '../../interface/interface'

const loading = ref(true)

let rcelist = reactive<Recommend[any]>([])

onMounted(async ()=> {
   const rec:any = await newDiscOnTheShelf()
   if(rec.code !== 200) return
   rcelist = rec.weekData.slice(0,16);
   loading.value =false
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

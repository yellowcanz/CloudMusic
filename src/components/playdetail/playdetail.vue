<template>
    <div class="flex flex-col lg:flex-row justify-between items-center w-full h-full">
        <div class="px-20 py-10 h-2/5">
            <img src="../../assets/US_992_X_304.png" class="w-full h-full object-contain">
        </div>
        <div class="text-white tab w-full flex-1">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="接下来播放" name="first">
                    <div class="flex overflow-x-auto py-3 mb-10 scrollbar">
                        <el-button type="info" v-for="(item, index) of 10">信息按钮</el-button>
                    </div>
                    <div class="h-full overflow-y-auto">
                        <ul class="" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
                            <li v-for="i in count" class="flex justify-between items-center p-3">
                                <div class="flex">
                                    <div class="w-16 h-16 mr-4"><img class="w-full h-full" src="../../assets/vue.svg"></div>
                                    <div class="flex flex-col">
                                        <p>歌曲名字</p>
                                        <span>歌手名字</span>
                                    </div>
                                </div>
                                <span>时间</span>
                            </li>
                        </ul>
                        <p v-if="loading">加载中...</p>
                        <p v-if="noMore()">没有更多了</p>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="歌词" name="second">歌词</el-tab-pane>
                <el-tab-pane label="相关内容" name="third">相关内容</el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const activeName = ref('first')
let count = ref(10)
let loading = false
const handleClick = (tab: any, event: any) => {
    console.log(tab, event);
}

const noMore = () => {
    return count.value >= 20
}
const disabled = () => {
    return loading || noMore
}
const load = () => {
    loading = true
    setTimeout(() => {
        count.value += 2
        loading = false
    }, 2000)
}

</script>

<style lang="less" scoped module>
:deep(.tab .el-tabs__item.is-active) {
    color: white !important;
}
</style>

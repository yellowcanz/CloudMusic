<template>
    <div class="p-12 lg:p-48" style="padding-bottom: 64px;">
        <div class="flex items-center mb-6 h-full">
            <img :src="album.picurl" class="w-64 h-64 lg:w-96 lg:h-96 mr-14">
            <div class="text-white flex flex-col items-start">
                <h1 class="text-xl font-semibold md:text-8xl">{{album.albumname}}</h1>
                <div class="text-zinc-300 mt-6 mb-9 flex flex-col text-lg">
                    <p class="text-2xl mb-3">{{moment(album.dt).format('YYYY-MM-DD')}}  {{album.singername}}  {{album.trans}}  {{album.alias}}</p>
                    <p>简介：{{album.description}}</p>
                </div>
                <div>
                    <el-button class="bg-white hover:text-red-800" type="defalult" round :icon="CaretRight">播放</el-button>
                </div>
            </div>
        </div>
        <ul>
            <router-link :to="{path:'/playdetail'}" v-for="(item,index) in album.songs" class="flex items-center justify-between w-full p-3 py-6 text-white border-b border-b-zinc-800 hover:text-red-800">
                <span class="text-lg text-zinc-300 w-14">{{ index + 1 }}</span>
                <span class="font-semibold text-xl flex-1 mr-3">{{item.name}}</span>
                <span class="text-zinc-300">{{moment(item.dt).format('mm:ss')}}</span>
            </router-link>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref ,onMounted,reactive} from "vue"
import { CaretRight } from "@element-plus/icons-vue";
import {useRoute}  from 'vue-router'
import {singinglist} from '../../api/api'
import {Singing} from '../../interface/interface'
import moment from 'moment';

const singingListId:any = useRoute().query.id
let album = reactive<Singing[any]>([])

onMounted(async ()=>{
    const rec:any = await singinglist(singingListId)
    album.songs = rec.songs //专辑歌曲列表

    album.picurl = rec.album.picUrl //专辑图片
    album.description = rec.album.description //专辑简介
    album.albumname =  rec.album.name //专辑名字
    album.singerid =  rec.album.artist.id //专辑id
    album.trans = rec.album.artist.trans //歌手转换名字
    album.alias = rec.album.artist.alias.splice(',').join('/')  //歌手别名
    album.singername = rec.album.artist.name  //歌手名字
    album.dt = rec.album.publishTime //专辑发布时间
    // console.log(singingdata);
    // console.log(album.songs);
    // console.log(rec.album);
})


</script>

<style lang="less" scoped></style>

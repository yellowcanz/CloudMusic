<template>
    <div class="p-12 lg:p-24" style="padding-bottom: 64px;">
        <div class="flex flex-col items-center  mb-6 h-full xl:flex-row">
            <img :src="album.picurl" class="w-96 h-96 lg:mr-14">
            <div class="text-white flex flex-col items-start my-4">
                <h1 class="text-4xl font-semibold lg:text-6xl">{{ album.albumname }}</h1>
                <div class="my-3 flex flex-col text-lg">
                    <p class="lg:text-2xl font-semibold xl:my-3">{{ moment(album.dt).format('YYYY-MM-DD') }}
                        {{ album.singername }} {{ album.trans }} {{ album.alias }}</p>
                    <p class="text-sm text-zinc-300 xl:text-lg text-justify">简介：{{ album.description }}</p>
                </div>
                <div>
                    <el-button class="bg-white w-30 h-12 text-lg hover:text-red-800" type="defalult" round
                        :icon="CaretRight" @click="addplaylist">播放</el-button>
                </div>
            </div>
        </div>
        <ul>
            <!-- :to="{ path: '/playdetail', query: { id: item.id, pic: album.picurl, sn: item.name, sgn: album.singername, time: album.dt } }" -->
            <li v-for="(item, index) in album.songs" :key="item.id" @click="toDetail(index)"
                class="flex items-center justify-between w-full p-3 py-6 text-white border-b border-b-zinc-800 hover:text-red-800">
                <span class="text-lg text-zinc-300 w-14">{{ index + 1 }}</span>
                <span class="font-semibold text-xl flex-1 mr-3">{{ item.name }}</span>
                <span class="text-zinc-300">{{ moment(item.dt).format('mm:ss') }}</span>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { onMounted, reactive,ref } from "vue"
import { CaretRight } from "@element-plus/icons-vue";
import { useRoute, useRouter } from 'vue-router'
import { singinglist } from '../../api/api'
import { Album } from '../../interface/interface'
import moment from 'moment';
import { usePlayListStore } from '../../store/songlist'
import { stringify } from "querystring";

let album = reactive<Album[any]>([])
let songDetailList: any = []
let curSongListIndex = 0

const router = useRouter()
const singingListId: any = useRoute().query.id //接收路由id

const setSongList = usePlayListStore()  //pinia
//这里点击歌曲列表不追加单曲，把歌单的所有歌曲覆盖
const toDetail = (index: number) => {
    addplaylist()
    curSongListIndex = index
    setSongList.curSongListIndex = curSongListIndex 

    // for (let k in setSongList.albumSongs) {
    //     if (setSongList.albumSongs[k].songId === songDetailList[index].songId) return
    // }
    // setSongList.albumSongs.push(songDetailList[index])
}


//播放 选择所有歌单的歌曲播放
const addplaylist = () => {
    curSongListIndex = 0
    setSongList.curSongListIndex = curSongListIndex
    setSongList.albumSongs = songDetailList
    router.push('/playdetail')
}

onMounted(async () => {
    const rec: any = await singinglist(singingListId) //获取专辑信息
    album.songs = rec.songs //专辑歌曲列表
    album.picurl = rec.album.picUrl //专辑图片
    album.description = rec.album.description //专辑简介
    album.albumname = rec.album.name //专辑名字
    album.singerid = rec.album.artist.id //专辑id
    album.trans = rec.album.artist.trans //歌手转换名字
    album.alias = rec.album.artist.alias.splice(',').join('/')  //歌手别名
    album.singername = rec.album.artist.name  //歌手名字
    album.dt = rec.album.publishTime //专辑发布时间

    setSongList.songPic =  album.picurl

    //只保留一些目前需要用到的歌曲信息
    songDetailList = album.songs.map((item: any, index: any) => {
        let obj = {
            songId: item.id,
            songName: item.name,
            songAr: item.ar,
            songAl: item.al,
            songTime: item.dt,
        }
        return obj
    })

})


</script>

<style lang="less" scoped></style>

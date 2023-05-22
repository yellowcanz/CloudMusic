<template>
    <div :class="[rotate ? 'show' : 'hide']"
        class="flex flex-col p-6 pb-0 lg:p-16 lg:flex-row justify-between items-center w-full"
        style="height: calc(100vh - 80px);padding-bottom: 64px;">
        <div class="h-2/5 lg:h-full lg:flex-1 lg:mr-7 p-6">
            <img :src="getSongList.songPic" class="w-full h-full object-contain" :class="[rotate ? 'aniimg' : '']">
        </div>
        <div class="text-white tab w-full h-3/5 flex-1 lg:h-full lg:w-2/5">
            <el-tabs v-model="activeName" @tab-click="handleClick" class="h-full w-full">
                <el-tab-pane label="接下来播放" name="first">
                    <div class="flex overflow-x-auto py-3 mb-3 scrollbar">
                        <el-button type="info" v-for="(item, index) of 10">信息按钮</el-button>
                    </div>
                    <div>
                        <ul v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
                            <li v-for="(item, index) in mergedArray" :key="item.id" @click="getSongInfo(index)"
                                class="flex justify-between items-center px-3 py-1 border-b border-b-zinc-800">
                                <div class="flex">
                                    <div class="w-16 h-16 mr-4"><img class="w-full h-full" :src="item.songAl.picUrl"></div>
                                    <div class="flex flex-col justify-around">
                                        <p>{{ item.songName }}</p>
                                        <span class=" text-zinc-400">{{ item.songAr[0].name }}</span>
                                    </div>
                                </div>
                                <span>{{ moment(item.time).format('mm:ss') }}</span>
                            </li>
                        </ul>
                        <p v-if="loading" class="py-3 text-center">加载中...</p>
                        <p v-if="noMore" class="py-3 text-center">没有更多了</p>
                    </div>
                </el-tab-pane>
                <el-tab-pane class="w-full" label="歌词" name="second">歌词</el-tab-pane>
                <el-tab-pane class="w-full" label="相关内容" name="third">相关内容</el-tab-pane>
            </el-tabs>
        </div>
    </div>
    <!-- 底部条 -->
    <div v-show="hassong"
        class="text-white absolute bottom-0  bg-zinc-900  flex justify-between items-center w-full px-3 main"
        style="height: 64px;">
        <div class="flex items-center">
            <img class="w-4 h-4 lg:w-8 lg:h-8" src="../../assets/48shangyishou.png" alt="上一首">
            <img v-show="isplay" @click="audiohandle(true)" class="w-4 h-4  lg:w-8 lg:h-8  lg:mx-12 scale-150 mx-6"
                src="../../assets/46bofang.png" alt="播放">
            <img v-show="!isplay" @click="audiohandle(false)" class="w-4 h-4 lg:w-8 lg:h-8 lg:mx-12  scale-150 mx-6"
                src="../../assets/47zanting.png" alt="暂停">
            <img class="w-4 h-4 lg:w-8 lg:h-8" src="../../assets/49xiayishou.png" alt="下一首">
        </div>
        <div class="mx-6 hidden lg:block">
            <span>00:00</span>
            <span class="mx-3">/</span>
            <span>{{moment(songInfo.songtotaltime).format('mm:ss')}}</span>
        </div>
        <div class="flex items-center justify-center flex-1 ml-3 pr-3">
            <img :src="songInfo.songpic" class="mr-3 w-12 h-12">
            <div>
                <p>{{ songInfo.songname }}</p>
                <span class="text-zinc-400">{{ songInfo.singername }}</span>
            </div>
        </div>
        <div class="flex items-center w-1/5 mr-3">
            <img class="w-6 h-6 mr-3" src="../../assets/51yinliang.png">
            <div class="w-full">
                <el-slider v-model="value" size="small" tooltip-class="tooltip" :format-tooltip="formatTooltip" />
            </div>
        </div>
        <div class="w-6 h-6" @click="showDetail">
            <img :class="[rotate ? 'up' : 'down']" src="../../assets/up.png">
        </div>

        <div class="absolute w-full top-0 left-0 songbar px-6">
            <el-slider v-model="value2" style="height: auto;" />
        </div>
<!-- 
        <audio ref="audio" @play="onplay" @pause="onpause" @timeupdate="getCurr" @canplay="getTotal"
            :src="getSongList.albumSongs.songurl"></audio> -->

            <audio ref="audio" @play="onplay" @pause="onpause" @timeupdate="getCurr" @canplay="getTotal"
            :src="songInfo.songurl" autoplay></audio>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, reactive } from "vue"
import { getsongurl } from '../../api/api'
import moment from 'moment';
import { usePlayListStore } from '../../store/songlist'

const getSongList = usePlayListStore()
let mergedArray:any = []

// let curSonginfo:any = []

const songInfo: any = reactive({
    songurl: null,
    songpic: null,
    songtotaltime: null,
    singername: '',
    songname: '',
    curtime: ''
})
const getSongInfo = (index: any) => {
    // songInfo.songurl = getSongList.albumSongs[index].url
    songInfo.songurl = `https://music.163.com/song/media/outer/url?id=${getSongList.albumSongs[index].id}.mp3`
    songInfo.songpic = getSongList.albumSongs[index].songAl.picUrl
    songInfo.songtotaltime = getSongList.albumSongs[index].songTime
    songInfo.singername = getSongList.albumSongs[index].songAr[0].name
    songInfo.songname = getSongList.albumSongs[index].songName
    // getSongList.changeSongStore(songInfo)
    // console.log(songInfo.songurl);
}

// const songplay = ()=>{
    // console.log($refs.audio);
// }


let getSongId: any = []
const handleId = () => {
    let songId = ''
    for (let k in getSongList.albumSongs) {
        getSongId.push(getSongList.albumSongs[k].songId)
        songId = getSongId.join(',')
    }
    return songId
}

onMounted(async () => {
    const res: any = await getsongurl(handleId(), 'hires')
    if(res.code !== 200) return
  
    // console.log(...res.data);
    // console.log(...getSongList.albumSongs);
    // console.log([...getSongList.albumSongs,...res.data]);
    mergedArray = getSongList.albumSongs.map((item: any, index: any) =>{
        return {...item,...res.data[index]}
    })

    // albumPic = mergedArray[0].songAl.picUrl

    // console.log(...mergedArray);
    // console.log(albumPic);

    // console.log(...getSongList.albumSongs);
    // getSongList.songList = data.map((item: any, index: any) => {
    //     return { ...item, ...getSongList.albumSongs[index] }
    // })

    getSongList.albumSongs = mergedArray
    getSongInfo(getSongList.curSongListIndex)
    audiohandle(false)
})

// 播放
const onplay = () => {
    if (audio.value.src == '') {
        audio.value.src = songInfo.songurl
    }
    audio.value.play();
    isplay.value = false
}
// 暂停
const onpause = () => {
    audio.value.pause();
    isplay.value = true
}

const audiohandle = (type: any) => {
    // isplay.value = !type
    // isplay.value ? onplay() : onpause()
    type ? onplay() : onpause()
}

// 当前时间
const getCurr = () => { }
// 总时间
const getTotal = () => { }


let audio = ref()
let count = ref(20)
let loading = ref(false)
const value2 = ref(0)
const activeName = ref('first')
const value = ref(0)
const isplay = ref(true)
const rotate = ref(true)
const hassong = ref(true)

const formatTooltip = (val: number) => {
    return val / 100
}
const showDetail = () => {
    rotate.value = !rotate.value
}
const play = (type: boolean) => {
    isplay.value = !type
}

const handleClick = (tab: any, event: any) => {
    console.log(tab, event);
}

const noMore = computed(() => count.value >= 30)

const disabled = computed(() => loading.value || noMore.value)

const load = () => {
    loading.value = true
    setTimeout(() => {
        count.value += 2
        loading.value = false
    }, 2000)
}

</script>



<style lang="less" scoped >
.show {
    transform: scaleY(100%);
    transform-origin: 50% 100%;
    transition: all 0.3s ease-in-out;
}

.hide {
    transform: scaleY(0%);
    transform-origin: 50% 100%;
    transition: all 0.3s ease-in-out;
}

.up {
    transform: rotate(0deg);
}

.down {
    transform: rotate(180deg);
}

.aniimg {
    animation: imgin 0.3s ease-in-out;
    transform-origin: 100% 100%;
}

@keyframes imgin {
    0% {
        transform: scale(0);
    }

    100% {
        transform: scale(1);
    }
}
</style>

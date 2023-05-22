import { defineStore } from "pinia";



export const usePlayListStore =  defineStore('playlist',{
    state:()=>{
        return {
            // songList:[] as any,

            albumSongs:[] as any, //歌单列表
            // allSongID: '',
            // songName:'',
            songPic:'',
            // singerName:'',
            // changeSong:{} as any,
            curSongListIndex:0 as number
        }
    },

    persist:{ // 自定义持久化方式
        storage: window.localStorage,
        beforeRestore: context => {
            console.log('Before', context)
        },
        afterRestore: context => {
            console.log('After', context)
        }
    },

    actions:{
        // mergeArr(data:any){
        //     this.albumSongs = data
        // },

        // changeSongStore(data:number){
        //     this.changeSong = data
        //     console.log(this.changeSong);
        // }

        // getCurIndex(index:any){
        //     this.curIndex = index
        // }
    },

    getters:{

    }
})
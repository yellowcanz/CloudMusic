import { defineStore } from "pinia";



export const usePlayListStore =  defineStore('playlist',{
    state:()=>{
        return {
            songList:[] as any,
            allSongID: '',
            songName:'',
            songPic:'',
            singerName:'',
            albumSongs:[] as any
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
        mergeArr(data:any){
            this.songList = data
        }
    },

    getters:{

    }
})
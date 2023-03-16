import { defineStore } from "pinia";



export const usePlayListStore =  defineStore('playlist',{
    state:()=>{
        return {
            songList:[] as any,
            albumSongs:[] as any,
            changeSong:{} as any,
            allSongID: '',
            songName:'',
            songPic:'',
            singerName:'',
            curIndex:'0'
        }
    },

    persist:{ // 自定义持久化方式
        storage: window.localStorage,
    },

    actions:{
        mergeArr(data:any){
            this.songList = data
        },

        changeSongStore(data:number){
            this.changeSong = data
        },

        getCurIndex(index:any){
            this.curIndex = index
        }
    },

    getters:{

    }
})
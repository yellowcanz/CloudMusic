import { defineStore } from "pinia";



export const usePlayListStore =  defineStore('playlist',{
    state:()=>{
        return {
            songList:[] as any,
            albumSongs:[] as any,
            allSongID: '',
            songName:'',
            songPic:'',
            singerName:'',
            changeSong:{} as any
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
        },

        changeSongStore(data:number){
            this.changeSong = data
            console.log(this.changeSong);
        }

        // getSongStoreInfo(index:number){
        //  console.log(JSON.parse(window.localStorage.getItem('playlist')));
        // },
        
        // getSongInfo
    },

    getters:{

    }
})
import { defineStore } from "pinia";



export const usePlayListStore =  defineStore('playlist',{
    state:()=>{
        return {
            songList:[] as any
        }
    },

    actions:{
        
    },

    getters:{

    }
})
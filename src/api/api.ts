import http from "./http";

// 为你推荐 新碟上架
const newDiscOnTheShelf = async ( limit:number = 20, offset:number = 0, area:string = 'ALL', type:string = 'new') => { 
    return await http.get(`/top/album`,{limit:limit,offset:offset,area:area,type:type}) 
}
// 新碟上架 详情信息
const singinglist = async (id:string = '') => { 
    return await http.get(`/album`,{id}) 
}

// 新碟上架 获取专辑歌曲url
const getsongurl = async (id:any,level:string) => { 
    return await http.get(`/song/url/v1`,{id,level}) 
}



export {
    newDiscOnTheShelf,
    singinglist,
    getsongurl
}
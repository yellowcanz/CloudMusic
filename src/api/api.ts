import http from "./http";

// 为你推荐 数字专辑 新碟上架
const newDiscOnTheShelf = async () => { await http.get('/album/list', { limit: 6 }) }




export {
    newDiscOnTheShelf
}
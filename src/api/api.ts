import http from "./http";

// 为你推荐 新碟上架
const newDiscOnTheShelf = async ({ limit = 20, offset = 0, area = 'all', type = 'new', year = '2023', month = ''}) => { 
    return await http.get(`/top/album?limit=${limit}&offset=${offset}&area=${area}&type=${type}&year=${year}&month=${month}`) 
}




export {
    newDiscOnTheShelf
}
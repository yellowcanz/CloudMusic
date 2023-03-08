export interface Recommend{
    artist:{},
    id:number,
    name:string,
    picUrl:string,
    [proName:string]:any
}


// 专辑详细
export interface Singing{
    songs:[],
    description:string
    singername:string,
    singerid:number
    picurl:string,
    albumname:string
    trans:string
    alias:string
    [proName:string]:any
}

//歌曲详情
export interface Songdata{
    songs:[],
    description:string
    singername:string,
    singerid:number
    picurl:string,
    albumname:string
    trans:string
    alias:string
    [proName:string]:any
}
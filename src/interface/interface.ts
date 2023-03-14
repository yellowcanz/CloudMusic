export interface Recommend{
    artist:{},
    id:number,
    name:string,
    picUrl:string,
    [proName:string]:any
}


// 专辑详细
export interface Album{
    songs:{},
    description:string
    singername:string,
    singerid:number
    picurl:string,
    albumname:string
    trans:string
    alias:string
    [proName:string]:any
}


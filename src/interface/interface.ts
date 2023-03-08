export interface Recommend{
    artist:{},
    id:number,
    name:string,
    picUrl:string,
    [proName:string]:any
}

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
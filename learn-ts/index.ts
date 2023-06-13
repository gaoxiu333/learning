interface Point  {
    x:number;
    y:number;
}
type Point1 = {
    x:number;
    y:number;
    z:()=>{}
}
type S1 = unknown
let ss:unknown = 1
ss = ''
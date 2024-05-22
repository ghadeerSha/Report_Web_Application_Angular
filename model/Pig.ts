import { Time } from "@angular/common";

export class Pig{
    id?: number;
    name: string='';
    type: string='';
    height: string='';
    weight: string="";
    location:string='';
    landmark:string='';
    status:string='';
    time:Date=new Date();

    latitude:number=0;

    longitude:number=0;

    constructor(){}
}
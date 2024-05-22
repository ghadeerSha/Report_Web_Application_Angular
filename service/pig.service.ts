import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pig } from '../model/Pig';

@Injectable({
  providedIn: 'root'
})
export class PigService {
 

 
  public statusCode:boolean=false;
  public pigs:Pig[]=[];

  constructor() { 
    localStorage.setItem('local',JSON.stringify(this.pigs));
  }




  public addPig(pig:Pig){

   
    this.pigs.push(pig);
    
    console.log(this.pigs);
  }

  public getPigInfo(id:number):Observable<Pig>{

    const index=this.pigs.findIndex(temp=>temp.id===id);
    if(index>-1){
      return of(this.pigs[index]);
    }
    else{
      return of();
    }
    
  }

  public getAllPigs() :Observable<Pig[]> {
      return of(this.pigs);
  }

 
  public remove(id:number){
    const index=this.pigs.findIndex(temp=>temp.id===id);
    if(index>-1){
      this.pigs.splice(index,1);
    }
  }

  public changeStatus(id:number){
    const index=this.pigs.findIndex(temp=>temp.id===id);
    if(index>-1){
      this.pigs[index].status='Retrived';
    }
  }

  public sort():Observable<Pig[]>{
   this.pigs = this.pigs.sort((n1,n2) => {
      if (n1.location > n2.location) {
          return 1;
      }
  
      if (n1.location < n2.location) {
          return -1;
      }
  
      return 0;
  });

  return of(this.pigs);
  }

  
  
  
}

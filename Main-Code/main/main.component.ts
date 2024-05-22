import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pig } from 'src/app/model/Pig';
import { PigService } from 'src/app/service/pig.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {



  pigs:Pig[]=[];

  
  constructor(private pigService:PigService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(()=>{
        this.getPigs();
    })

  }

  public getPigs(){

    const sort=this.route.snapshot.paramMap.has('sortBy');
    if(sort){
        let sortBy=this.route.snapshot.paramMap.get('sortBy')!;
        this.sortHandler(sortBy);
    }
    else{
      this.pigService.getAllPigs().subscribe(
        data=>{
          this.pigs=data
        }
       );
    }
    
    
  }

 

  public sortHandler(sortBy:string){

    this.pigService.sort().subscribe(
      data=>{
        this.pigs=data
      }
    );

  }
 

 

}

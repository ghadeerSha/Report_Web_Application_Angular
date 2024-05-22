import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Pig } from 'src/app/model/Pig';
import { PigService } from 'src/app/service/pig.service';

@Component({
  selector: 'app-pig-report',
  templateUrl: './pig-report.component.html',
  styleUrls: ['./pig-report.component.css']
})
export class PigReportComponent implements OnInit {

 

  public pig:Pig | undefined;
  id:number=1;

  constructor(private pigService:PigService,private router:Router) { }

  ngOnInit(): void {
  
   
  }

  public save(name:string,type:string,location:string,landmark:string,height:string,weight:string,lat:string,lon:string){
       console.log(name,type,location,landmark,height,weight);
       this.pig=new Pig();
       this.pig.id=this.id;
       this.id++;
       this.pig.name=name;
       this.pig.type=type;
       this.pig.location=location;
       this.pig.landmark=landmark;
       this.pig.height=height;
       this.pig.weight=weight;
       this.pig.status="Ready for pick up";
       this.pig.time=new Date();
       this.pig.latitude=+lat;
       this.pig.longitude=+lon;
       console.log(this.pig);

       this.pigService.addPig(this.pig);
       alert('Pig Added!');
       
  }

}

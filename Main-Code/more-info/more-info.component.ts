import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pig } from 'src/app/model/Pig';
import { PigService } from 'src/app/service/pig.service';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent implements OnInit {

  id:number=0;
  public pig:Pig=new Pig;
  constructor(private route:ActivatedRoute,private pigService:PigService) { }

  ngOnInit(): void {

    this.getPigInfo();
   


  }

  public getPigInfo(){
    this.id=+this.route.snapshot.paramMap.get('id')!;
    this.pigService.getPigInfo(this.id).subscribe(
      data=>{
        this.pig=data
      }
    );
  }

}

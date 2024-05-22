import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PigService } from 'src/app/service/pig.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {


 
  constructor(private pigService:PigService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

  }

  public sortHandler(sortBy:string){

      this.router.navigateByUrl('/'+sortBy)
    
  }
  

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PigService } from 'src/app/service/pig.service';

@Component({
  selector: 'app-status-change-confirmation',
  templateUrl: './status-change-confirmation.component.html',
  styleUrls: ['./status-change-confirmation.component.css']
})
export class StatusChangeConfirmationComponent implements OnInit {

  public Password:string='OINK!!';
  id:number=0;
  constructor(private pigService:PigService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=+this.route.snapshot.paramMap.get('id')!;
  }

  public validate(password:string){
    if(this.Password===password){
      
      this.pigService.changeStatus(this.id);
      alert('Status Changed');
      this.router.navigateByUrl('/');

    }
    else{
      alert('Bad Credentials, Validation failed. Sorry, you cannot modify the report.');
      this.router.navigateByUrl('/');
    }
  }


}

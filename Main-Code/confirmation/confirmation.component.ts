import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PigService } from 'src/app/service/pig.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  Password:string='OINK!!';
  id:number=0;
  constructor(private pigService:PigService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    
    this.id=+this.route.snapshot.paramMap.get('id')!;
  }

  public validate(password:string){
    if(this.Password===password){
      
      this.pigService.remove(this.id);
      alert('Data discarded.');
      this.router.navigateByUrl('/');

    }
    else{
      alert('Bad Credentials, Validation failed. Sorry, you cannot modify the report.');
      this.router.navigateByUrl('/');
    }
  }

}

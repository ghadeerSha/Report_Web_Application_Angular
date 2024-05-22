import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { MainComponent } from './components/main/main.component';
import { MoreInfoComponent } from './components/more-info/more-info.component';
import { PigReportComponent } from './components/pig-report/pig-report.component';
import { StatusChangeConfirmationComponent } from './components/status-change-confirmation/status-change-confirmation.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    pathMatch:"full"
  },


  {
    path:'create-report',
    component:PigReportComponent,
    pathMatch:"full"
  },
  {
    path:'more-info/:id',
    component:MoreInfoComponent,
    pathMatch:"full"
  },
  {
    path:'confirm/:id',
    component:ConfirmationComponent,
    pathMatch:"full"
  },
  {
    path:'confirm-status/:id',
    component:StatusChangeConfirmationComponent,
    pathMatch:"full"
  },
  {
    path:'sort/:sortBy',
    component:MainComponent,
    pathMatch:"full"
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

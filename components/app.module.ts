import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PigReportComponent } from './components/pig-report/pig-report.component';
import { MainComponent } from './components/main/main.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { MapComponent } from './components/map/map.component';
import { SortComponent } from './components/sort/sort.component';
import { MoreInfoComponent } from './components/more-info/more-info.component';
import { StatusChangeConfirmationComponent } from './components/status-change-confirmation/status-change-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    PigReportComponent,
    MainComponent,
    ConfirmationComponent,
    MapComponent,
    SortComponent,
    MoreInfoComponent,
    StatusChangeConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

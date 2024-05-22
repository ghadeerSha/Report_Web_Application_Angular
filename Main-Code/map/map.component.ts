import { Component,AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as L from 'leaflet';
import { Pig } from 'src/app/model/Pig';
import { PigService } from 'src/app/service/pig.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  pigs:Pig[]=[];
  private map: any;
  constructor(private pigService:PigService,private route:ActivatedRoute) { }

  private initMap(): void {
    this.map = L.map('map').setView([49.2, -123], 11);

    
    const tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2FhMzQiLCJhIjoiY2xiYTMwb3E4MDRpdjNvcGs1MWtwZjE2aCJ9.jnLEnZ578RrpHQY3DQFSLA', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/streets-v11',
    
    }).addTo(this.map);


   
   this.pigService.getAllPigs().subscribe(
     data=>{
      this.pigs=data
     }
    );
   

    this.addMarkers(this.pigs);

  }
  ngAfterViewInit(): void {
    this.route.paramMap.subscribe(()=>{
      this.initMap()
    });
  }

  public addMarkers(pigs:Pig[]){

    
    for(let i=0;i<pigs.length;i++){
      let markerOptions={
        title:pigs[i].location,
        clickable:true,
        draggable:false
      }
      let marker=L.marker([pigs[i].latitude,pigs[i].longitude],markerOptions);
      marker.addTo(this.map).bindPopup((i+1)+" casses reported.").openPopup();
    }
  }

 

}

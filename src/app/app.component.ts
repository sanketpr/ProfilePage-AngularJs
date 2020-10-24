import { Component } from '@angular/core';

// Map imports
import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imageURL = "/assets/user_avatar.png"

  firstName = "Sterling";
  lastName = "Lockwood";
  phone = "716-555-6789";
  email = "sterling@strayos.com";
  address = "Building #1, Buffalo, New York - 14203";
  lat = 42.880614;
  lon = -78.8781409;

  bio = "I am the very model of a modern Major-General, I've information vegetable, animal, and mineral, I know the kings of England, and I quote the fights historical, From Marathon to Waterloo, in order categorical; I'm very well acquainted too with matters mathematical, I understand equations, both the simple and quadratical, About binomial theorem I'm teeming with a lot o' news--- With many cheerful facts about the square of the hypotenuse.";

  ngOnInit(){
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: olProj.fromLonLat([this.lon, this.lat]),
        zoom: 11
      })
    });
  }
}

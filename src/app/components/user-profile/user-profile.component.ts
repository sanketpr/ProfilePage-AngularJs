import { Component, OnInit } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';

import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import { Address, UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: UserModel;
  imageURL: String;
  firstName: String;
  lastName: String;
  phone: String;
  email: String;
  address: Address;
  lat: number;
  lon: number;
  bio: String;

  constructor(private service: UserService) { }

  ngOnInit(){
    this.service.getUser().subscribe(data => this.updateData(data));
  }

  updateData(model: UserModel) {
    this.imageURL = model.avatarUrl;
    this.firstName = model.firstName;
    this.lastName = model.lastName;
    this.phone = model.phone;
    this.email = model.email;
    this.bio = model.bio;

    this.address = model.address;
    this.lat = +model.address.coordinates.split(",",2)[0];
    this.lon = +model.address.coordinates.split(",",2)[1];
    this.updateMap()
  }

  updateMap() {
    new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: olProj.fromLonLat([this.lon, this.lat]),
        zoom: 12
      })
    });
  }

  getAddressString() {
    return this.address.building + ", " + this.address.city + ", " + this.address.state + " - " + this.address.zipCode
  }
}

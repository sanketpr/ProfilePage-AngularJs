import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserModel{

    address: Address;
    avatarUrl = "/assets/user_avatar.png";
     bio =  "I am the very model of a modern Major-General, I've information vegetable, animal, and mineral, I know the kings of England, and I quote the fights historical, From Marathon to Waterloo, in order categorical; I'm very well acquainted too with matters mathematical, I understand equations, both the simple and quadratical, About binomial theorem I'm teeming with a lot o' news--- With many cheerful facts about the square of the hypotenuse.";
     
    email = "sterling@strayos.com";
    firstName = "Sterling";
    lastName = "Lockwood";
    phone = "716-555-6789";
}

export class Address {
    building = "Building #1";
    city = "Buffalo";
    coordinates = "42.880614, -78.8781409";
    state = "New York";
    street = "West Seneca Street";
    zipCode = "14203";
}
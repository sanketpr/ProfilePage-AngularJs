export interface UserModel{
    address: Address;
    avatarUrl: String;
    bio: String; 
    email: String;
    firstName: String;
    lastName: String;
    phone: String;
}

export interface Address {
    building: String;
    city: String;
    coordinates: String;
    state: String;
    street: String;
    zipCode: String;
}
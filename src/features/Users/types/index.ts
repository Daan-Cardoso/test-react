export type tGeo = {
  lat: string;
  lng: string;
};

export type tAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: tGeo;
};

export type tCompany = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type tUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: tAddress;
  website: string;
  company: tCompany;
};

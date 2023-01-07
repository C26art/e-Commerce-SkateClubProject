export interface SignUp {
  name: string;
  email: string;
  password: string;
}
export interface Login {
  email: string;
  password: string;
}

export interface Product{
  name:string,
  price:number,
  category:string,
  color:string,
  image:string,
  description:string,
  id:number,
  quantity:undefined | number,
  productId:undefined|number
}
export interface Cart{
  name:string,
  price:number,
  category:string,
  color:string,
  image:string,
  description:string,
  id:number| undefined,
  quantity:undefined | number,
  productId:number,
  userId:number
}

export interface PriceSummary{
  price:number,
  discount:number,
  tax:number,
  delivery:number,
  total:number
}

export interface Order {
  email:string,
  address:string,
  contact:string,
  totalPrice:number,
  userId:string,
  id:number|undefined
}
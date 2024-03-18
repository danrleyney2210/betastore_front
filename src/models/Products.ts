export interface IProducts {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: Array<string>
}


export interface IDataProduct<T> {
  products: Array<T>
}
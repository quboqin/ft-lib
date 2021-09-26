import { Order } from '../order'

export class Item {
  id: number

  name: string

  amount: number

  goodsId: number

  imgUrl?: string

  price: number

  order: Order
}

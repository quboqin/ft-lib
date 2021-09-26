import { User } from '../user'
import { Item } from '../item'

export enum OrderStatus {
  UNPAID = '未支付',
  PAID = '已支付',
  DELIVERED = '已完成',
}

export class Order {
  id: number

  deliverAt?: number

  paidAt?: number

  last4?: string

  status: OrderStatus

  totalPrice: number

  tax: number

  owner: User

  items: Item[]
}

import { Order } from '../order'
import { Card } from '../card'
import { Address } from '../address'

export enum UserGender {
  MALE,
  FEMALE,
  UNKNOWN,
}

export class User {
  phone: string

  email?: string

  firstName: string

  lastName: string

  gender: UserGender

  avatorUrl?: string

  registerAt?: number

  lastLoginAt?: number

  defaultCard?: string

  cards?: Card[]

  defaultAddress?: string

  addresses?: Address[]

  orders?: Order[]
}

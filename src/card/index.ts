import { User } from '../user'

export enum PAYMENT_TYPE {
  WECHAT = 'WECHAT',
  ALIPAY = 'ALIPAY',
  STRIPE_ONLINE = 'STRIPE_ONLINE',
  STRIPE_TEST = 'STRIPE_TEST',
}

export class Card {
  customerId: string

  brand: string

  country: string

  expirationMonth: number

  expirationYear: number

  last4: string

  owner: User
}

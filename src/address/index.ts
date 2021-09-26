import { User } from '../user'

export class Address {
  id: string

  zipCode: string

  street: string

  city: string

  owner: User
}

export enum Category {
  ALL = '全部',
  FRUIT = '水果',
  VEGETABLES = '蔬菜',
  MEAT = '肉类',
  SEA_FOOD = '海鲜',
  SNACK_DIM_SUM = '面食点心',
  INSTANT_NOODLES = '方便面',
}

export class Good {
  id: number

  category: Category

  name: string

  desc?: string

  imgUrl?: string

  price: number

  discount?: number
}

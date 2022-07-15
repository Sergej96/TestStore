export interface SimpleProduct{
  ID: number,
  NAME: string,
  SORT: number,
  TYPE: string,
  WEIGHT?: number,
  PICTURE: string,
  PART?: number,
  PRICE?: number
}

export interface CompositeProduct extends SimpleProduct{
  COLOR_CODE?: string,
  COLOR_SAMPLE?: string,
  COVER_SIDE?: string,
  WIDTH: string,
  STOCK: string,
  SKU: SKU[]
}

export interface SKU {
  ID: number,
  NAME: string,
  SORT: number,
  DEEP: number,
  LENGTH: number,
  PRICE: number,
  WEIGHT: number
}

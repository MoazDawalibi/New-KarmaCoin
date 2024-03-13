

export interface IProduct {
    id: number
    product_main_image: string
    product_price: string
    product_quantity: number
    product_translations :IProductTranslation[]
}

export interface IProductTranslation {
    name: string
    description: string
    product_id: number
    locale: '1' |'2'
}
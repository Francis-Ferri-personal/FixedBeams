export interface Product {
    id: number;
    name: string;
    summary: string;
    price: number;
    stock: number;
    srcImage: string;
}

export interface ProductCart {
    id: number;
    name: string;
    price: number;
    quantity: number;
    srcImage: string;
}
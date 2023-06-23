export interface Product {
    id: number; 
    img: string;
    description: string;
    price: number;
    quantity: number;
    promotion: number | null;
}
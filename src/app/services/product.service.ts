import { Injectable } from '@angular/core';
import { Product } from '../Product';
import { Observable, Subject } from 'rxjs';


@Injectable({providedIn: 'root'})
export class ProductService {
        private cartItems: Product[] = [];
        private totalQuantitySubject: Subject<number> = new Subject<number>();
        public totalQuantity$ = this.totalQuantitySubject.asObservable();

        constructor() {
            this.loadCartItems(); 
            this.updateTotalQuantity();
          }
      
        addToCart(product: Product) {
          
          const existingItem = this.cartItems.find(item => item.id === product.id);
          if (existingItem) {
            existingItem.quantity++;
          } else {
            const newItem: Product = { ...product, quantity: 1 };
            this.cartItems.push(newItem);
          }
          this.updateTotalQuantity();
          this.saveCartItems();
        }

        getProductQuantityById(id: number): number {
            const product = this.cartItems.find(item => item.id === id);
            return product ? product.quantity : 0;
        }

        removeFromCart(product: Product) {
          const existingItem = this.cartItems.find(item => item.id === product.id);
          if (existingItem) {
            existingItem.quantity--;
            if (existingItem.quantity === 0) {
              const index = this.cartItems.indexOf(existingItem);
              this.cartItems.splice(index, 1);
            }
            this.updateTotalQuantity();
            this.saveCartItems();
          }
        }
        
        removeAllFromCart(product: Product) {
          const existingItem = this.cartItems.find(item => item.id === product.id);
          if (existingItem) {
            const index = this.cartItems.indexOf(existingItem);
            this.cartItems.splice(index, 1);
            this.updateTotalQuantity();
            this.saveCartItems();
          }
        }
      
        getCartItems(): Product[] {
          return [...this.cartItems]; // возвращаем копию массива
        }
      
        private saveCartItems() {
          localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
        }
        
    
        public loadCartItems() {
          const cartItemsString = localStorage.getItem('cartItems');
          if (cartItemsString) {
            this.cartItems = JSON.parse(cartItemsString).map((item: any) => ({
              ...item,
              img: item.img as string
            }));
          } else {
            this.cartItems = [];
          }
        }
        
    getCartItemsFromLocalStorage(): Product[] {
        const cartItemsString = localStorage.getItem('cartItems');
        if (cartItemsString) {
          const cartItemsData: Product[] = JSON.parse(cartItemsString);
          return cartItemsData.map(item => {
            return { ...item, img: item.img as string };
          });
        }
        return [];
      }

      removeAllItems() {
        this.cartItems = [];
        this.updateTotalQuantity();
        this.saveCartItems();
      }  

      getTotalProductQuantity(): number {
        let totalQuantity = 0;
        for (const item of this.cartItems) {
          totalQuantity += item.quantity;
        }
        return totalQuantity;
      }

      public updateTotalQuantity() {
        const totalQuantity = this.cartItems.reduce((total, item) => total + item.quantity, 0);
        this.totalQuantitySubject.next(totalQuantity);
        localStorage.setItem('totalQuantity', String(totalQuantity)); // сохраняем общее количество в localStorage
      }
      

}

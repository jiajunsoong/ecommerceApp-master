import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component'; 
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
const routeConfig: Routes = [
  {
    path: '',
    component: ProductListComponent,
    title: 'Home page'
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Cart page'
  },
  {
    path: 'details/:productId',
    component: ProductDetailsComponent,
    title: 'Product Details page'
  }
];

export default routeConfig;
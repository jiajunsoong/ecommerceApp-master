import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from "./top-bar/top-bar.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, ProductListComponent, RouterModule, TopBarComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    
})
export class AppComponent {
  //title = 'ecommerceApp';
}

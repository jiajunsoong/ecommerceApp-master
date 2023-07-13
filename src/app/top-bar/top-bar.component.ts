import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from "../product-list/product-list.component";

@Component({
    selector: 'app-top-bar',
    standalone: true,
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.css'],
    imports: [CommonModule, RouterModule, ProductListComponent]
})
export class TopBarComponent {

}

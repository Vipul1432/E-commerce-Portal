import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: any;
  @Output() productSelected = new EventEmitter<any>();
  
  onProductClick() {
    this.productSelected.emit(this.product); 
    
    
  }
  addToCart(product: any) {
    //console.log
  }
  
}

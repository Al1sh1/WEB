import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

 @Input() product!: Product;

currentImageIndex = 0;

nextImage() {
  this.currentImageIndex =
    (this.currentImageIndex + 1) % this.product.images.length;
}

prevImage() {
  this.currentImageIndex =
    (this.currentImageIndex - 1 + this.product.images.length)
    % this.product.images.length;
}

shareWhatsApp() {
  const url = encodeURIComponent(this.product.link);
  window.open(`https://wa.me/?text=Check out this product: ${url}`, '_blank');
}

shareTelegram() {
  const url = encodeURIComponent(this.product.link);
  const text = encodeURIComponent(this.product.name);
  window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
}

}

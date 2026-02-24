import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      description: 'Latest Apple smartphone.',
      price: 649990,
      rating: 4.9,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/ha3/h5b/86302542495774.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h37/ha8/86319883452446.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h37/hcb/86319883517982.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-seryi-113138213/?c=750000000'
    },
    { id: 2,
      name: 'iPhone 15',
      description: 'Basic Iphone 15',
      price: 389868,
      rating: 4.9,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000'
    },
  {
    id: 3,
    name: 'iPhone 16 Pro Max',
    description: 'High-end Apple smartphone with exceptional performance and battery life.',
    price: 719990,
    rating: 4.9,
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h08/hd3/87295489376286.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h04/h8b/87295489409054.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000'
  },
  {
    id: 4,
    name: 'Xiaomi 15 Pro',
    description: 'Powerful flagship with high-refresh-rate display and fast charging.',
    price: 399990,
    rating: 4.7,
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p28/pbb/92759021.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p7d/pbb/92759024.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p45/pbb/92759022.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-15-pro-4g-nfc-8-gb-256-gb-chernyi-153917502/?c=750000000'
  },
  {
    id: 5,
    name: 'Samsung Galaxy A55',
    description: 'Mid-range device offering reliable performance and long software support.',
    price: 189990,
    rating: 4.6,
    images: [
     'https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=gallery-medium',
     'https://resources.cdn-kaspi.kz/img/m/p/hf7/hd9/85428899610654.png?format=gallery-medium',
     'https://resources.cdn-kaspi.kz/img/m/p/hae/had/85428543717406.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/?c=750000000'
  },
  {
    id: 6,
    name: 'HONOR Magic7 Pro',
    description: 'Premium model featuring advanced AI camera features and durable build.',
    price: 449990,
    rating: 4.8,
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p3c/p5a/50006964.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pc9/p5a/50006969.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p8a/p5d/50006973.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/honor-magic7-pro-12-gb-512-gb-seryi-133147088/?c=750000000'
  },
  {
    id: 7,
    name: 'Nokia 3310',
    description: 'Mjolnir',
    price: 188880,
    rating: 4.8,
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/heb/h01/86249449160734.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h20/h23/86249449226270.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/ha2/h93/86249449291806.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/nokia-3210-4g-chernyi-120273778/?c=750000000'
  },
  {
    id: 8,
    name: 'POCO F7 Pro',
    description: 'High-performance mid-range phone focused on gaming and speed.',
    price: 249990,
    rating: 4.7,
    images: [
    'https://resources.cdn-kaspi.kz/img/m/p/p81/p59/67021829.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p34/p70/32527551.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/pfc/p6f/32527553.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/poco-f7-pro-12-gb-512-gb-goluboi-136997083/?c=750000000'
  },
  {
    id: 9,
    name: 'Samsung Galaxy S24',
    description: 'Previous-generation flagship still offering top-tier features at a reduced price.',
    price: 500000,
    rating: 4.8,
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p87/pc0/1610158.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p80/pc3/1610164.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pb8/pc3/1610166.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-fe-5g-8-gb-256-gb-chernyi-128143468/?c=750000000'
  },
  {
    id: 10,
    name: 'Xiaomi Redmi Note 14 Pro',
    description: 'Popular budget-to-mid-range option with large battery and capable cameras.',
    price: 149990,
    rating: 4.6,
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pe3/p87/67214848.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pf8/p78/23145244.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p4d/p79/23145247.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-14-pro-12-gb-512-gb-chernyi-134217937/?c=750000000'
  }
  ];
}

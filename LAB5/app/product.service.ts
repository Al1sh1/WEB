import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import { Category } from './models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

  private products: Product[] = [
    
    { id: 1, name: 'iPhone 15 Pro', description: 'Latest Apple smartphone.', price: 649990, rating: 4.9, images: ['https://resources.cdn-kaspi.kz/img/m/p/ha3/h5b/86302542495774.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h37/ha8/86319883452446.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h37/hcb/86319883517982.jpg?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-seryi-113138213/?c=750000000', likes: 0, categoryId: 1 },
    { id: 2, name: 'iPhone 15', description: 'Basic iPhone 15.', price: 389868, rating: 4.9, images: ['https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000', likes: 0, categoryId: 1 },
    { id: 3, name: 'iPhone 16 Pro Max', description: 'High-end Apple smartphone.', price: 719990, rating: 4.9, images: ['https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h08/hd3/87295489376286.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h04/h8b/87295489409054.png?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000', likes: 0, categoryId: 1 },
    { id: 4, name: 'Xiaomi 15 Pro', description: 'Powerful flagship.', price: 399990, rating: 4.7, images: ['https://resources.cdn-kaspi.kz/img/m/p/p28/pbb/92759021.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p7d/pbb/92759024.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p45/pbb/92759022.jpg?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-15-pro-4g-nfc-8-gb-256-gb-chernyi-153917502/?c=750000000', likes: 0, categoryId: 1 },
    { id: 5, name: 'Samsung Galaxy A55', description: 'Mid-range with long support.', price: 189990, rating: 4.6, images: ['https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hf7/hd9/85428899610654.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hae/had/85428543717406.jpg?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/?c=750000000', likes: 0, categoryId: 1 },

    { id: 6, name: 'Apple MacBook Pro 14 2024', description: 'High-end Apple laptop with M4 chip.', price: 799990, rating: 4.9, images: ['https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h08/hd3/87295489376286.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h04/h8b/87295489409054.png?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-14-2-16-gb-ssd-512-gb-macos-mw2u3ru-a-132088460/?c=750000000', likes: 0, categoryId: 2 },
    { id: 7, name: 'Jetrix 2025 14.1"', description: 'Affordable laptop for study and work.', price: 149990, rating: 4.5, images: ['https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/jetrix-2025-14-1-6-gb-ssd-256-gb-win-11-pro-12125858-145610140/?c=750000000', likes: 0, categoryId: 2 },
    { id: 8, name: 'Apple MacBook Pro 16 2024', description: 'Premium 16-inch professional laptop.', price: 1499990, rating: 5.0, images: ['https://resources.cdn-kaspi.kz/img/m/p/h37/ha8/86319883452446.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h37/hcb/86319883517982.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/ha3/h5b/86302542495774.jpg?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2024-48-gb-ssd-1024-gb-macos-mx313ru-a-132544204/?c=750000000', likes: 0, categoryId: 2 },
    { id: 9, name: 'Lenovo Legion 5', description: 'Powerful gaming laptop.', price: 449990, rating: 4.7, images: ['https://resources.cdn-kaspi.kz/img/m/p/p28/pbb/92759021.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p7d/pbb/92759024.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p45/pbb/92759022.jpg?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/lenovo-legion-5-16ach6h-82jq00f1rk-16-16-gb-512-gb-chernyi-113138213/?c=750000000', likes: 0, categoryId: 2 },
    { id: 10, name: 'Samsung Galaxy Book4', description: 'Thin and light Windows laptop.', price: 349990, rating: 4.6, images: ['https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hf7/hd9/85428899610654.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hae/had/85428543717406.jpg?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/samsung-galaxy-book4-15-6-16-gb-512-gb-seryi-119420207/?c=750000000', likes: 0, categoryId: 2 },

    { id: 11, name: 'Apple AirPods Pro 2', description: 'Premium noise-cancelling earbuds.', price: 119990, rating: 4.9, images: ['https://resources.cdn-kaspi.kz/img/m/p/ha3/h5b/86302542495774.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h37/ha8/86319883452446.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h37/hcb/86319883517982.jpg?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-2022-belyi-106362601/?c=750000000', likes: 0, categoryId: 3 },
    { id: 12, name: 'Sony WH-1000XM5', description: 'Best over-ear noise cancelling headphones.', price: 229990, rating: 4.8, images: ['https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-110000000/?c=750000000', likes: 0, categoryId: 3 },
    { id: 13, name: 'JBL Tune 760NC', description: 'Wireless over-ear headphones.', price: 34990, rating: 4.5, images: ['https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h08/hd3/87295489376286.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h04/h8b/87295489409054.png?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/jbl-tune-760nc-chernyi-101000000/?c=750000000', likes: 0, categoryId: 3 },
    { id: 14, name: 'Samsung Galaxy Buds 3', description: 'True wireless earbuds.', price: 89990, rating: 4.7, images: ['https://resources.cdn-kaspi.kz/img/m/p/p28/pbb/92759021.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p7d/pbb/92759024.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p45/pbb/92759022.jpg?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds-3-chernyi-120000000/?c=750000000', likes: 0, categoryId: 3 },
    { id: 15, name: 'Xiaomi Redmi Buds 5', description: 'Budget noise-cancelling earbuds.', price: 19990, rating: 4.6, images: ['https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hf7/hd9/85428899610654.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hae/had/85428543717406.jpg?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/xiaomi-redmi-buds-5-chernyi-130000000/?c=750000000', likes: 0, categoryId: 3 },

    
    { id: 16, name: 'Apple iPad A16 11" 2025', description: 'Latest Apple tablet.', price: 203915, rating: 4.9, images: ['https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h08/hd3/87295489376286.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h04/h8b/87295489409054.png?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=750000000', likes: 0, categoryId: 4 },
    { id: 17, name: 'Apple iPad A16 11" 2025 Blue', description: 'Stylish blue version.', price: 202788, rating: 4.9, images: ['https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-sinii-138202165/?c=750000000', likes: 0, categoryId: 4 },
    { id: 18, name: 'OZCT Pro S9 Ultra', description: 'Budget large-screen tablet.', price: 37054, rating: 4.3, images: ['https://resources.cdn-kaspi.kz/img/m/p/p28/pbb/92759021.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p7d/pbb/92759024.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/p45/pbb/92759022.jpg?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/ozct-pro-s9-ultra-10-1-djuim-16-gb-512-gb-chernyi-130134617/?c=750000000', likes: 0, categoryId: 4 },
    { id: 19, name: 'Xiaomi Redmi Pad 2', description: '11-inch Android tablet.', price: 107193, rating: 4.6, images: ['https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hf7/hd9/85428899610654.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hae/had/85428543717406.jpg?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-2-11-djuim-8-gb-256-gb-seryi-140639712/?c=750000000', likes: 0, categoryId: 4 },
    { id: 20, name: 'Apple iPad 10.9" 2022', description: 'Popular everyday tablet.', price: 149990, rating: 4.8, images: ['https://resources.cdn-kaspi.kz/img/m/p/ha3/h5b/86302542495774.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h37/ha8/86319883452446.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h37/hcb/86319883517982.jpg?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/apple-ipad-10-9-2022-10-9-djuim-4-gb-64-gb-serebristyi-106362601/?c=750000000', likes: 0, categoryId: 4 }
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }

  incrementLikes(productId: number) {
    const product = this.products.find(p => p.id === productId);
    if (product) product.likes++;
  }

  deleteProduct(productId: number) {
    this.products = this.products.filter(p => p.id !== productId);
  }
}
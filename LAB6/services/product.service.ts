import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({ providedIn: 'root' })
export class ProductService {

  getCategories(): Category[] {
    return [
      { id: 1, name: 'Smartphones', icon: '📱' },
      { id: 2, name: 'Laptops',     icon: '💻' },
      { id: 3, name: 'Headphones',  icon: '🎧' },
      { id: 4, name: 'Tablets',     icon: '📟' },
    ];
  }

  getProducts(): Product[] {
    return [
      {
        id: 1, categoryId: 1,
        name: 'iPhone 16 Pro Max',
        description: 'Apple flagship with A18 Pro chip and titanium design.',
        price: 719990, rating: 4.9, likes: 0,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h08/hd3/87295489376286.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h04/h8b/87295489409054.png?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000',
      },
      {
        id: 2, categoryId: 1,
        name: 'iPhone 15 Pro',
        description: 'Pro-grade Apple smartphone with action button.',
        price: 649990, rating: 4.9, likes: 0,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/ha3/h5b/86302542495774.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h37/ha8/86319883452446.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h37/hcb/86319883517982.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-seryi-113138213/?c=750000000',
      },
      {
        id: 3, categoryId: 1,
        name: 'Samsung Galaxy S24',
        description: 'Samsung flagship with Galaxy AI and brilliant display.',
        price: 500000, rating: 4.8, likes: 0,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p87/pc0/1610158.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p80/pc3/1610164.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pb8/pc3/1610166.png?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-fe-5g-8-gb-256-gb-chernyi-128143468/?c=750000000',
      },
      {
        id: 4, categoryId: 1,
        name: 'POCO F7 Pro',
        description: 'High-performance mid-range phone focused on gaming and speed.',
        price: 249990, rating: 4.7, likes: 0,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p81/p59/67021829.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p34/p70/32527551.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pfc/p6f/32527553.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/poco-f7-pro-12-gb-512-gb-goluboi-136997083/?c=750000000',
      },
      {
        id: 5, categoryId: 1,
        name: 'Xiaomi Redmi Note 14 Pro',
        description: 'Budget champion with large battery and capable cameras.',
        price: 149990, rating: 4.6, likes: 0,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/pe3/p87/67214848.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pf8/p78/23145244.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p4d/p79/23145247.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-14-pro-12-gb-512-gb-chernyi-134217937/?c=750000000',
      },
      {
        id: 6, categoryId: 2,
        name: 'Apple MacBook Air M3',
        description: 'Ultra-thin laptop powered by Apple M3 chip, all-day battery.',
        price: 699990, rating: 4.9, likes: 0,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h4a/h23/86171267694622.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h53/hc6/86171267727390.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h99/hb1/86490877952030.png?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-15-2024-15-3-16-gb-ssd-512-gb-macos-mxd43-119975059/?c=750000000',
      },
      {
        id: 7, categoryId: 2,
        name: 'ASUS VivoBook 15',
        description: 'Slim everyday laptop with AMD Ryzen and FHD display.',
        price: 279990, rating: 4.6, likes: 0,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h0b/hd3/86542194966558.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hf7/h2a/86542195097630.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hdf/hfe/86542195163166.png?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/asus-vivobook-15-x1504za-bq1364w-15-6-16-gb-ssd-512-gb-win-11-90nb1021-m02090-121433042/?c=750000000',
      },
      {
        id: 8, categoryId: 2,
        name: 'Lenovo IdeaPad 3',
        description: 'Reliable student laptop with Intel Core and ample storage.',
        price: 219990, rating: 4.5, likes: 0,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h2f/h20/64231858077726.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/ha2/h3f/64231926562846.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-256-gb-dos-15igl05-81wq00errk-102715483/?c=750000000',
      },
      {
        id: 9, categoryId: 2,
        name: 'HP Pavilion 15',
        description: 'Stylish HP laptop with dedicated graphics for light gaming.',
        price: 349990, rating: 4.7, likes: 0,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h56/h78/85761636073502.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hb6/h7a/82089388638238.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h8e/h11/82089389162526.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/hp-pavilion-15-6-16-gb-ssd-1024-gb-win-11-home-15-eh3000ci-7p437ea-118476602/?c=750000000',
      },
      {
        id: 10, categoryId: 2,
        name: 'Acer Aspire 5',
        description: 'Well-rounded laptop for everyday productivity and study.',
        price: 259990, rating: 4.6, likes: 0,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p5a/p0f/55291865.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p3e/p0f/55291866.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p22/p0f/55291867.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/acer-aspire-5-spin-14-14-16-gb-ssd-1000-gb-win-11-pro-nx-khter-002w-143152048/?c=750000000',
      },
      {
        id: 11, categoryId: 3,
        name: 'Sony WH-1000XM5',
        description: 'Industry-leading noise-cancelling over-ear headphones.',
        price: 189990, rating: 4.9, likes: 0,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hd5/hd0/65099686150174.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hc7/hde/65099687657502.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?c=750000000',
      },
      {
        id: 12, categoryId: 3,
        name: 'Apple AirPods Pro 2',
        description: 'Adaptive audio and top-tier ANC in compact earbuds.',
        price: 149990, rating: 4.8, likes: 0,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000',
      },
      {
        id: 13, categoryId: 3,
        name: 'JBL Tune 770NC',
        description: 'Comfortable wireless headphones with active noise cancelling.',
        price: 49990, rating: 4.6, likes: 0,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/hcb/h78/82294170255390.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h5e/h26/82294170779678.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h69/h5f/82294171303966.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/jbl-tune-770nc-chernyi-122001175/?c=750000000',
      },
      {
        id: 14, categoryId: 3,
        name: 'Samsung Galaxy Buds2 Pro',
        description: 'Premium earbuds with Hi-Fi 24-bit audio and compact design.',
        price: 89990, rating: 4.7, likes: 0,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h69/h44/64496879435806.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hcb/h7c/64496882024478.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h7c/h52/64496884776990.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/naushniki-samsung-galaxy-buds2-pro-belyi-106128764/?c=750000000',
      },
      {
        id: 15, categoryId: 3,
        name: 'Xiaomi Redmi Buds 5 Pro',
        description: 'Budget ANC earbuds with impressive 43 dB noise reduction.',
        price: 29990, rating: 4.5, likes: 0,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p3b/pf5/95093129.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p84/pee/95093148.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pe0/peb/95093151.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/naushniki-xiaomi-redmi-buds-5-pro-chernyi-115820788/?c=750000000',
      },
      {
        id: 16, categoryId: 4,
        name: 'Apple iPad Air M2',
        description: 'Powerful tablet with M2 chip, perfect for creative work.',
        price: 449990, rating: 4.9, likes: 0,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h9f/hdb/86223792013342.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h8a/h3a/86223759474718.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hd7/hdb/86223759507486.png?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2024-wi-fi-11-djuim-8-gb-256-gb-seryi-120178607/?c=750000000',
      },
      {
        id: 17, categoryId: 4,
        name: 'Samsung Galaxy Tab S9',
        description: 'Premium Android tablet with AMOLED display and S Pen.',
        price: 349990, rating: 4.8, likes: 0,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h02/h6e/82770436030494.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hde/h76/82770436784158.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h53/h0f/82770863226910.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-sm-x716bzaas-11-djuim-8-gb-128-gb-grafit-112488621/?c=750000000',
      },
      {
        id: 18, categoryId: 4,
        name: 'Xiaomi Pad 6',
        description: 'High-performance tablet with Snapdragon 870 and 144 Hz display.',
        price: 169990, rating: 4.7, likes: 0,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/h32/hdc/82729741582366.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p95/pfa/78318163.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pb1/pfa/78318164.png?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-11-djuim-8-gb-256-gb-seryi-112453226/?c=750000000',
      },
      {
        id: 19, categoryId: 4,
        name: 'Lenovo Tab P12',
        description: 'Versatile large-screen tablet for entertainment and productivity.',
        price: 129990, rating: 4.5, likes: 0,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p2b/p29/43598687.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p63/p29/43598689.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pcf/p2b/43598690.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/lenovo-tb311xu-tab-4g-128g-10-1-djuim-4-gb-128-gb-seryi-140035943/?c=750000000',
      },
      {
        id: 20, categoryId: 4,
        name: 'Huawei MatePad 11.5',
        description: 'Stunning 11.5" display tablet ideal for studying and media.',
        price: 149990, rating: 4.6, likes: 0,
        images: [
          'https://resources.cdn-kaspi.kz/img/m/p/p12/p46/65766777.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/p52/p1c/66000867.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pd6/p0b/65766807.jpg?format=gallery-medium',
        ],
        link: 'https://kaspi.kz/shop/p/huawei-matepad-11-5-2025-papermatte-11-5-djuim-8-gb-256-gb-seryi-podarok-145939457/?c=750000000',
      },
    ];
  }
}
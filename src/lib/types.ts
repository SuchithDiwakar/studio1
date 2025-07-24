export interface Product {
  id: string;
  name: string;
  brand: 'Dell' | 'Lenovo' | 'HP' | 'Other';
  category: 'Laptops' | 'Desktops' | 'Workstations' | 'Accessories';
  price?: number;
  image: string;
  description: string;
  specs: {
    processor?: string;
    ram?: string;
    storage?: string;
    display?: string;
  };
}

'use client';
import { useState, useMemo } from 'react';
import { ProductCard } from '@/components/product-card';
import { products } from '@/lib/placeholder-data';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Search } from 'lucide-react';
import { useSearchParams } from 'next/navigation';


const brands = ['Dell', 'HP', 'Lenovo'];
const categories = ['Laptops', 'Desktops', 'Workstations', 'Accessories'];

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const initialBrand = searchParams.get('brand');
  const initialCategory = searchParams.get('category');
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrands, setSelectedBrands] = useState<string[]>(initialBrand ? [initialBrand] : []);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialCategory ? [initialCategory] : []);
  const [sortOption, setSortOption] = useState('name-asc');

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      return matchesSearch && matchesBrand && matchesCategory;
    });

    return filtered.sort((a, b) => {
      switch (sortOption) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });
  }, [searchTerm, selectedBrands, selectedCategories, sortOption]);

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold font-headline tracking-tight lg:text-5xl">Our Products</h1>
        <p className="mt-2 text-lg text-muted-foreground">Find the best tech from top brands, all in one place.</p>
      </header>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <aside className="md:col-span-1">
          <div className="sticky top-24 space-y-6">
            <div>
              <h3 className="text-lg font-semibold font-headline mb-4">Search</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold font-headline mb-4">Brands</h3>
              <div className="space-y-2">
                {brands.map((brand) => (
                  <div key={brand} className="flex items-center space-x-2">
                    <Checkbox id={`brand-${brand}`} checked={selectedBrands.includes(brand)} onCheckedChange={() => handleBrandChange(brand)} />
                    <Label htmlFor={`brand-${brand}`}>{brand}</Label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold font-headline mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox id={`cat-${category}`} checked={selectedCategories.includes(category)} onCheckedChange={() => handleCategoryChange(category)} />
                    <Label htmlFor={`cat-${category}`}>{category}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold font-headline mb-4">Sort By</h3>
              <Select value={sortOption} onValueChange={setSortOption}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                  <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                  <SelectItem value="price-asc">Price (Low to High)</SelectItem>
                  <SelectItem value="price-desc">Price (High to Low)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </aside>

        <main className="md:col-span-3">
          {filteredAndSortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredAndSortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <p className="text-xl font-semibold">No products found</p>
              <p className="text-muted-foreground mt-2">Try adjusting your search or filters.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

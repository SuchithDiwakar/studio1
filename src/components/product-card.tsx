'use client';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { type Product } from '@/lib/types';
import { useCart } from '@/context/cart-provider';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
      <CardHeader className="p-0">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="aspect-square w-full object-cover"
          data-ai-hint={`${product.brand} ${product.category}`}
        />
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">{product.brand}</p>
          <CardTitle className="text-lg font-headline line-clamp-2">{product.name}</CardTitle>
          <CardDescription className="line-clamp-3 text-sm">{product.description}</CardDescription>
        </div>
      </CardContent>
      <CardFooter className="p-4 flex items-center justify-between">
        <p className="text-xl font-semibold">${product.price.toFixed(2)}</p>
        <Button size="sm" onClick={() => addToCart(product)}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}

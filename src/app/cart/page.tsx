'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/cart-provider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trash2, ShoppingCart, CreditCard } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, cartCount, clearCart } = useCart();

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <header className="mb-8">
        <h1 className="text-4xl font-bold font-headline tracking-tight lg:text-5xl flex items-center gap-4">
          <ShoppingCart className="h-10 w-10" />
          Your Cart
        </h1>
      </header>
      
      {cartCount > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <div className="flex items-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow p-4">
                    <h2 className="font-semibold font-headline">{item.name}</h2>
                    <p className="text-sm text-muted-foreground">{item.brand}</p>
                    <p className="font-bold text-lg mt-1">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-4 p-4">
                     <Input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                        className="w-20 text-center"
                        aria-label={`Quantity for ${item.name}`}
                      />
                    <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                      <Trash2 className="h-5 w-5 text-destructive" />
                      <span className="sr-only">Remove item</span>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
            <Button variant="outline" onClick={clearCart}>Clear Cart</Button>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="font-headline">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal ({cartCount} items)</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <Button className="w-full" size="lg">
                  <CreditCard className="mr-2 h-5 w-5" />
                  Proceed to Checkout
                </Button>
                <div className="text-center text-sm text-muted-foreground">
                  <p>Secure payments through Stripe, Razorpay, UPI, etc.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        <div className="text-center py-24">
          <ShoppingCart className="mx-auto h-24 w-24 text-muted-foreground" />
          <h2 className="mt-6 text-2xl font-semibold font-headline">Your cart is empty</h2>
          <p className="mt-2 text-muted-foreground">Looks like you haven't added anything to your cart yet.</p>
          <Button asChild className="mt-6">
            <Link href="/products">Start Shopping</Link>
          </Button>
        </div>
      )}
    </div>
  );
}

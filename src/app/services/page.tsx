'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wrench, ShieldCheck, ArrowUpCircle, Package, Settings } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  productInterest: z.string().optional(),
  service: z.string({ required_error: 'Please select a service.' }),
  configuration: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export default function ServicesPage() {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const productName = searchParams.get('product');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      productInterest: productName || '',
      configuration: '',
    },
  });

  useEffect(() => {
    if (productName) {
      form.setValue('productInterest', productName);
      form.setValue('service', 'product-enquiry');
    }
  }, [productName, form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Request Submitted!',
      description: "Thank you for your inquiry. We'll get back to you shortly.",
    });
    form.reset();
  }

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold font-headline tracking-tight lg:text-5xl">Services & Enquiries</h1>
        <p className="mt-2 text-lg text-muted-foreground">Let us know how we can help you with our products and services.</p>
      </header>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <Wrench className="h-10 w-10 text-primary mb-2" />
                    <CardTitle className="font-headline">Repairs & Upgrades</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">From screen replacements to performance boosts with SSDs and RAM, our certified technicians handle it all with precision and care.</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <ShieldCheck className="h-10 w-10 text-primary mb-2" />
                    <CardTitle className="font-headline">Annual Maintenance (AMC)</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Ensure your systems run smoothly with our comprehensive AMC plans, including regular check-ups, cleaning, and priority support.</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <Package className="h-10 w-10 text-primary mb-2" />
                    <CardTitle className="font-headline">Product Enquiries</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Interested in a product? Let us know your requirements, and we'll provide a custom quote and consultation.</p>
                </CardContent>
            </Card>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold font-headline mb-4 flex items-center"><Settings className="mr-3" />Enquiry Form</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john.doe@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+91 12345 67890" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Required</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="product-enquiry">Product Enquiry & Configuration</SelectItem>
                            <SelectItem value="repair">Laptop/Desktop Repair</SelectItem>
                            <SelectItem value="upgrade">Hardware Upgrade</SelectItem>
                            <SelectItem value="amc">Annual Maintenance Contract (AMC)</SelectItem>
                            <SelectItem value="other">Other Inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {form.watch('service') === 'product-enquiry' && (
                    <FormField
                      control={form.control}
                      name="productInterest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Product of Interest</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Dell XPS 15" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                  
                  <FormField
                    control={form.control}
                    name="configuration"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Describe Your Requirements</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Please describe your desired configuration (e.g., RAM, Storage, CPU) or the issue with your device..."
                            className="resize-none"
                            rows={5}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">Submit Request</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

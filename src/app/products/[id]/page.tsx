'use client';
import { useState } from 'react';
import { products } from '@/lib/placeholder-data';
import Image from 'next/image';
import { notFound, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const product = products.find((p) => p.id === params.id);

  const [selectedProcessor, setSelectedProcessor] = useState<string | undefined>(product?.specs.processor?.split('/')[0]);
  const [selectedRam, setSelectedRam] = useState<string | undefined>(product?.specs.ram?.split('/')[0]);
  const [selectedStorage, setSelectedStorage] = useState<string | undefined>(product?.specs.storage?.split('/')[0]);
  const [additionalRequirements, setAdditionalRequirements] = useState('');

  if (!product) {
    notFound();
  }

  const handleEnquiry = () => {
    const configurationDetails = `
Configuration for ${product.name}:
- Processor: ${selectedProcessor}
- RAM: ${selectedRam}
- Storage: ${selectedStorage}
- Additional Requirements: ${additionalRequirements || 'None'}
    `;
    
    const query = new URLSearchParams({
      product: product.name,
      configuration: configurationDetails.trim(),
    }).toString();

    router.push(`/services?${query}`);
  };
  
  const specOptions = (spec: string | undefined) => spec ? spec.split('/') : [];

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            className="rounded-lg shadow-lg aspect-square object-cover w-full"
            data-ai-hint={`${product.brand} ${product.category}`}
          />
        </div>
        <div className="space-y-6">
          <div>
            <p className="text-sm text-muted-foreground">{product.brand} {product.category}</p>
            <h1 className="text-3xl lg:text-4xl font-bold font-headline">{product.name}</h1>
            <p className="text-muted-foreground mt-2">{product.description}</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Select Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {product.specs.processor && (
                <div className="space-y-2">
                  <Label className="font-semibold">Processor</Label>
                  <RadioGroup value={selectedProcessor} onValueChange={setSelectedProcessor}>
                    {specOptions(product.specs.processor).map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <RadioGroupItem value={option} id={`proc-${option}`} />
                        <Label htmlFor={`proc-${option}`}>{option}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              )}
              {product.specs.ram && (
                <div className="space-y-2">
                  <Label className="font-semibold">Memory (RAM)</Label>
                   <RadioGroup value={selectedRam} onValueChange={setSelectedRam}>
                    {specOptions(product.specs.ram).map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <RadioGroupItem value={option} id={`ram-${option}`} />
                        <Label htmlFor={`ram-${option}`}>{option}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              )}
              {product.specs.storage && (
                <div className="space-y-2">
                  <Label className="font-semibold">Storage</Label>
                   <RadioGroup value={selectedStorage} onValueChange={setSelectedStorage}>
                    {specOptions(product.specs.storage).map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <RadioGroupItem value={option} id={`stor-${option}`} />
                        <Label htmlFor={`stor-${option}`}>{option}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              )}
               <div>
                <Label htmlFor="additional-reqs" className="font-semibold">Additional Requirements</Label>
                <Textarea
                  id="additional-reqs"
                  placeholder="e.g., Specific software, warranty extensions, accessories..."
                  value={additionalRequirements}
                  onChange={(e) => setAdditionalRequirements(e.target.value)}
                  className="mt-2"
                />
              </div>
            </CardContent>
          </Card>
          
          <Button onClick={handleEnquiry} size="lg" className="w-full">
            <Send className="mr-2 h-5 w-5" />
            Enquire Now
          </Button>
        </div>
      </div>
    </div>
  );
}

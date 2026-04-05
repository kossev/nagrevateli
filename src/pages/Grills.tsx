"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Grills = () => {
  const grills = [
    { id: 1, name: "Професионална скара - Модел S1", features: "16 тръбни нагревателя, 3200W, неръждаема стомана.", img: "https://public.placeholder.com/600x400?text=Скара+Модел+S1" },
    { id: 2, name: "Домашна скара - Модел H1", features: "12 тръбни нагревателя, 2400W, компактен дизайн.", img: "https://public.placeholder.com/600x400?text=Скара+Модел+H1" },
    { id: 3, name: "Скара with Lid", features: "For even grilling and juice retention.", img: "https://public.placeholder.com/600x400?text=Скара+с+Капак" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold uppercase mb-4">Електрически скари</h1>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Нашите скари са легендарни със своята здравина и способността си да достигат работна температура изключително бързо. Използваме само дебелостенни неръждаеми тръби.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {grills.map((item) => (
            <Card key={item.id} className="flex flex-col md:flex-row overflow-hidden shadow-lg border-l-4 border-l-orange-600">
              <div className="md:w-1/2 h-64 md:h-auto bg-slate-200">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>
              <div className="md:w-1/2 flex flex-col p-6">
                <CardTitle className="uppercase mb-4">{item.name}</CardTitle>
                <p className="text-slate-600 text-sm mb-6 flex-grow">{item.features}</p>
                <Button className="bg-slate-900 text-white hover:bg-orange-600">Детайли</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Grills;
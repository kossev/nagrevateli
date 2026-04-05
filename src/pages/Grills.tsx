"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Grills = () => {
  const grills = [
    { 
      id: 1, 
      name: "Професионална скара - Модел S1", 
      features: "размери и брой нагреватели по ваш проект. Идеална за ресторанти и интензивна употреба.", 
      img: "/images/ps1.jpg" 
    },
    { 
      id: 2, 
      name: "Домашна скара - Модел H1", 
      features: "16 тръби 2200W, компактен дизайн. Подходяща за тераси и градини.", 
      img: "/images/ds1.jpg" 
    },
    { 
      id: 3, 
      name: "Малка скара-24V", 
      features: "Подходяща за кемпери, каравани T.I.R и др.", 
      img: "/images/ms1.jpg" 
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold uppercase mb-4 tracking-tighter">Електрически скари</h1>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Нашите скари са легендарни със своята здравина и способността си да достигат работна температура изключително бързо. Използваме само дебелостенни неръждаеми тръби.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {grills.map((item) => (
            <Card key={item.id} className="flex flex-col md:flex-row overflow-hidden shadow-lg border-l-4 border-l-orange-600 bg-white">
              <div className="md:w-1/2 h-64 md:h-auto bg-slate-200">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                  loading="lazy"
                />
              </div>
              <div className="md:w-1/2 flex flex-col p-8">
                <CardTitle className="uppercase mb-4 text-xl font-bold">{item.name}</CardTitle>
                <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed italic">{item.features}</p>
                <Button className="bg-slate-900 text-white hover:bg-orange-600 font-bold uppercase tracking-wider" asChild>
                  <a href="/contact">Запитване за цена</a>
                </Button>
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
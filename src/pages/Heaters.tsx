"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Heaters = () => {
  const heaters = [
    { id: 1, name: "Тръбни нагреватели", desc: "Разнообразие от форми и мощности за въздушна и водна среда.", img: "https://public.placeholder.com/600x400?text=Тръбен+Нагревател" },
    { id: 2, name: "Патронни нагреватели", desc: "Високо натоварване за инструментална екипировка.", img: "https://public.placeholder.com/600x400?text=Патронен+Нагревател" },
    { id: 3, name: "Керамични нагреватели", desc: "За високи температури и равномерно разпределение.", img: "https://public.placeholder.com/600x400?text=Керамичен+Нагревател" },
    { id: 4, name: "Инфрачервени нагреватели", desc: "Ефективно отопление за индустриални халета.", img: "https://public.placeholder.com/600x400?text=Инфрачервен+Нагревател" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold uppercase mb-4">Нестандартни нагреватели</h1>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Ние сме специализирани в изработката на нагреватели по Ваша мостра или чертеж. Без значение от сложността на формата, ние можем да я реализираме.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {heaters.map((item) => (
            <Card key={item.id} className="overflow-hidden group">
              <div className="h-48 bg-slate-200 overflow-hidden relative">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-orange-600/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <CardHeader>
                <CardTitle className="uppercase text-lg">{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm mb-4">{item.desc}</p>
                <Button variant="outline" className="w-full hover:bg-orange-600 hover:text-white transition-colors" asChild>
                  <a href="/contact">Запитване</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Heaters;
"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Info } from 'lucide-react';

const Heaters = () => {
  const heaters = [
    { 
      id: 1, 
      name: "Тръбни нагреватели (ф6.5, ф8.5, ф10)", 
      desc: "Огъване по всякакъв радиус и форма. Подходящи за фурни, бойлери и фритюрници.", 
      specs: ["Неръждаема стомана AISI 304/316", "До 2500W на линеен метър", "Магнезиева изолация клас A"],
      img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: 2, 
      name: "Патронни нагреватели", 
      desc: "Висока плътност на мощността за метални блокове и калъпи.", 
      specs: ["Прецизен диаметър h7", "Вградена термодвойка (опция)", "Устойчиви на вибрации"],
      img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: 3, 
      name: "Керамични нагреватели", 
      desc: "За равномерно инфрачервено излъчване и висока топлинна инерция.", 
      specs: ["Температури до 700°C", "Стеатитова керамика", "Енергийна ефективност"],
      img: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=800" 
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mb-16">
          <Badge className="bg-orange-600 text-white mb-4 uppercase px-4 py-1">Професионални решения</Badge>
          <h1 className="text-5xl font-black uppercase mb-6 leading-tight">Нестандартни <br />нагревателни елементи</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Произвеждаме нагреватели по Ваша мостра, чертеж или техническо описание. Използваме материали от водещи европейски доставчици.
          </p>
        </div>

        <div className="space-y-20">
          {heaters.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              <div className="lg:w-1/2 group">
                <div className="relative overflow-hidden rounded-[32px] shadow-2xl">
                  <img src={item.img} alt={item.name} className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-orange-600/10 group-hover:bg-transparent transition-colors"></div>
                </div>
              </div>
              <div className="lg:w-1/2 space-y-6">
                <h3 className="text-3xl font-black uppercase text-slate-900">{item.name}</h3>
                <p className="text-lg text-slate-600 italic">"{item.desc}"</p>
                <div className="space-y-3">
                  <h4 className="flex items-center text-sm font-black uppercase text-orange-600 tracking-wider">
                    <Info className="h-4 w-4 mr-2" /> Спецификации
                  </h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {item.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-slate-700">
                        <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="bg-slate-900 hover:bg-orange-600 text-white px-8 h-12 uppercase font-bold" asChild>
                  <a href="/contact">Поискай цена</a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Heaters;
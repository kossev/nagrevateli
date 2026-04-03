"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Zap, ShieldCheck, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=2000" 
            alt="Industrial Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">
            Индустриално качество <br />
            <span className="text-orange-500 underline decoration-4 underline-offset-8">без компромиси</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Производство на нестандартни нагреватели и професионални електрически скари с доказана надеждност.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white w-full sm:w-auto px-8" asChild>
              <Link to="/heaters">Нашите продукти</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900 w-full sm:w-auto px-8" asChild>
              <Link to="/contact">Свържете се с нас</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-xl h-80">
              <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800" alt="Heaters" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-slate-900/60 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Нестандартни нагреватели</h3>
                <p className="text-slate-300 mb-4">Изработка по индивидуален проект за индустриални нужди.</p>
                <Link to="/heaters" className="text-orange-400 font-medium flex items-center hover:text-orange-300">
                  Виж повече <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl h-80">
              <img src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800" alt="Grills" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-slate-900/60 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Електрически скари</h3>
                <p className="text-slate-300 mb-4">Високоефективни скари за дома и ресторанта.</p>
                <Link to="/grills" className="text-orange-400 font-medium flex items-center hover:text-orange-300">
                  Виж повече <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 uppercase">Защо да изберете нас?</h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto"></div>
        </div>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Settings className="h-10 w-10 text-orange-600" />, title: "Персонализация", desc: "Изработваме продукти по ваши размери и технически спецификации." },
            { icon: <Zap className="h-10 w-10 text-orange-600" />, title: "Ефективност", desc: "Високо КПД и икономия на енергия при всички наши нагреватели." },
            { icon: <ShieldCheck className="h-10 w-10 text-orange-600" />, title: "Гаранция", desc: "Използваме само сертифицирани материали с гарантиран произход." }
          ].map((feature, i) => (
            <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-8 pb-8 flex flex-col items-center">
                <div className="mb-4 p-4 bg-orange-100 rounded-full">{feature.icon}</div>
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">{feature.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
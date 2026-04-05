"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Zap, ShieldCheck, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Stats from '@/components/Stats';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0 opacity-50">
          <img 
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=2000" 
            alt="Industrial Background" 
            className="w-full h-full object-cover scale-105"
            loading="lazy"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
              Индустриална <span className="text-orange-500">мощност</span> <br />
              и прецизност
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 font-light">
              Ние превръщаме енергията в топлина чрез иновативни решения и безкомпромисно качество.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white w-full sm:w-auto px-10 h-14 text-lg uppercase font-bold" asChild>
                <Link to="/heaters">Каталог Продукти</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-black border-white hover:bg-slate-100 w-full sm:w-auto px-10 h-14 text-lg uppercase font-bold" asChild>
                <Link to="/contact">Направи запитване</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Stats />

      {/* Quick Categories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tight">Нашите специализации</h2>
              <div className="w-20 h-2 bg-orange-600 mt-4"></div>
            </div>
            <p className="text-slate-500 max-w-md">От единични бройки до големи серии - ние покриваме пълния спектър на индустриалните нужди.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div 
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl h-[450px] shadow-2xl"
            >
              <img 
                src="/images/n1.jpg" 
                alt="Heaters" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex flex-col justify-end p-10">
                <h3 className="text-3xl font-bold text-white mb-3">Нестандартни нагреватели</h3>
                <p className="text-slate-200 mb-6 text-lg">Изработка по индивидуален проект за специфични машини и съоръжения.</p>
                <Link to="/heaters" className="inline-flex items-center text-orange-500 font-bold text-lg hover:text-orange-400 group/link">
                  Разгледай детайли <ChevronRight className="h-5 w-5 ml-2 transition-transform group-hover/link:translate-x-2" />
                </Link>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl h-[450px] shadow-2xl"
            >
              <img 
                src="/images/s1.jpg" 
                alt="Grills" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex flex-col justify-end p-10">
                <h3 className="text-3xl font-bold text-white mb-3">Професионални скари</h3>
                <p className="text-slate-200 mb-6 text-lg">Неръждаеми изделия с доказана издръжливост в натоварена среда.</p>
                <Link to="/grills" className="inline-flex items-center text-orange-500 font-bold text-lg hover:text-orange-400 group/link">
                  Разгледай детайли <ChevronRight className="h-5 w-5 ml-2 transition-transform group-hover/link:translate-x-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-600/5 skew-x-12 translate-x-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase mb-4 tracking-tighter">Нашето предимство</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Комбинация от традиционна занаятчийска прецизност и съвременни технологии.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Settings className="h-12 w-12 text-orange-500" />, title: "Гъвкавост", desc: "Можем да изработим нагревател от 100W до 100kW по Ваши размери." },
              { icon: <Zap className="h-12 w-12 text-orange-500" />, title: "Бързина", desc: "Оптимизиран производствен процес за минимални срокове на доставка." },
              { icon: <ShieldCheck className="h-12 w-12 text-orange-500" />, title: "Дълголетие", desc: "Използваме само висококачествени съпротивителни проводници Kanthal." }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-10 rounded-3xl border border-slate-700 hover:border-orange-500/50 transition-colors"
              >
                <div className="mb-6">{feature.icon}</div>
                <h4 className="text-2xl font-bold mb-4 uppercase">{feature.title}</h4>
                <p className="text-slate-400 leading-relaxed italic">"{feature.desc}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
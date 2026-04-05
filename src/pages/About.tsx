"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const stats = [
  { label: 'Години опит', value: '20+' },
  { label: 'Проектирани нагревателя', value: '5000+' },
  { label: 'Доволни клиенти', value: '1200+' },
  { label: 'Сертифицирано качество', value: '100%' },
];

const steps = [
  { title: "Запитване", desc: "Приемаме Вашите чертежи, мостри или описание на нуждите Ви." },
  { title: "Проектиране", desc: "Изчисляваме оптималната мощност и материали за Вашата работна среда." },
  { title: "Производство", desc: "Ръчна изработка с прецизен контрол на качеството на всеки етап." },
  { title: "Тестване", desc: "Всеки нагревател преминава през тест за изолация и мощност." },
];

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Header */}
      <div className="bg-slate-900 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=2000" 
            alt="Factory" 
            className="w-full h-full object-cover" 
            loading="lazy"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter"
          >
            Нашето наследство
          </motion.h1>
          <p className="text-orange-500 mt-4 text-xl font-bold uppercase tracking-widest">Традиция и качество от гр. Русе</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black text-slate-900 mb-8 uppercase leading-tight">Повече от двадесет години <span className="text-orange-600">традиция</span></h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                Основана с мисията да предостави надеждни решения, "ЕТ БК-Насю Великов" днес е водещ производител на електрически нагреватели в региона.
              </p>
              <p>
                Ние не просто произвеждаме – ние създаваме решения за вашия бизнес. Всеки проект е индивидуален, защото вярваме, че качеството не е случайност, а резултат от прецизна работа.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {['Европейски стандарти', 'Гарантиран произход', 'Бърза реакция', 'Конкурентни цени'].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-slate-900 font-bold uppercase text-sm">
                    <CheckCircle2 className="text-orange-600 h-5 w-5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          <div className="relative">
            <img 
              src="/images/us.jpg" 
              alt="Нашият екип" 
              className="rounded-[40px] shadow-2xl border-b-8 border-r-8 border-orange-600" 
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Stats Section - Ensuring Visibility with contrasting colors */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-black mb-2">{stat.value}</div>
                <div className="text-orange-100 text-sm uppercase font-bold tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase mb-4 text-slate-900">Как работим?</h2>
            <div className="w-20 h-1 bg-orange-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative group p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="text-6xl font-black text-slate-100 absolute -top-4 -right-2 group-hover:text-orange-50 transition-colors">{i + 1}</div>
                <div className="relative z-10">
                  <h4 className="text-xl font-black uppercase mb-3 text-slate-900">{step.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
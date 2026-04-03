"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const steps = [
    { title: "Запитване", desc: "Приемаме Вашите чертежи, мостри или описание на нуждите Ви." },
    { title: "Проектиране", desc: "Изчисляваме оптималната мощност и материали за Вашата работна среда." },
    { title: "Производство", desc: "Ръчна изработка с прецизен контрол на качеството на всеки етап." },
    { title: "Тестване", desc: "Всеки нагревател преминава през тест за изолация и мощност." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <div className="bg-slate-900 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=2000" alt="Factory" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Нашето наследство</h1>
          <p className="text-orange-500 mt-4 text-xl font-bold uppercase tracking-widest">Тъй като качеството не е случайност</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black text-slate-900 mb-8 uppercase leading-tight">Повече от двадесет години <span className="text-orange-600">традиция</span></h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Основана в сърцето на индустриална България, "ЕТ-НАСКО ВЕЛИКОВ" започва като малка семейна работилница. Днес ние сме синоним на надеждност за стотици предприятия в страната и чужбина.
              </p>
              <p>
                Нашата философия е проста: всеки клиент заслужава продукт, който работи безотказно. Не вярваме в масовото производство на нискокачествени елементи. Вярваме в персонализирания подход.
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
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-600 -z-10 rounded-full blur-3xl opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&q=80&w=1200" 
              alt="Team Work" 
              className="rounded-[40px] shadow-2xl border-b-8 border-r-8 border-orange-600" 
            />
          </div>
        </div>
      </div>

      {/* Process Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase mb-4">Как работим?</h2>
            <p className="text-slate-500">Процесът ни е прозрачен и фокусиран върху крайния резултат.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative group">
                <div className="text-8xl font-black text-slate-200 absolute -top-10 -left-2 group-hover:text-orange-100 transition-colors">{i + 1}</div>
                <div className="relative z-10 pt-8">
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
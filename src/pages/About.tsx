"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <div className="bg-slate-900 py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">За нас</h1>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto italic">Традиция и качество в производството на нагревателни елементи.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">История на фирмата</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              "ЕТ-НАСКО ВЕЛИКОВ" е създадена с мисията да предостави на българския пазар надеждни и висококачествени решения в областта на електронагревателните уреди. Вече над две десетилетия ние сме се утвърдили като водещ производител, специализиран в нестандартни проекти.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Нашият екип се състои от опитни специалисти, които не правят компромис с материалите. Използваме висококачествена стомана и изолационни материали, които гарантират дълъг живот и безопасност на всеки наш продукт.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border-8 border-slate-100">
            <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800" alt="Workshop" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
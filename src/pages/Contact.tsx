"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Благодарим ви! Вашето съобщение беше изпратено успешно.');
  };

  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Средна+Кула-Русе,+ул.+Яворица+1";

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold uppercase tracking-tight mb-4">Контакти</h1>
          <p className="text-slate-500">Свържете се с нас за консултация или оферта.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <a 
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white p-6 rounded-xl shadow-sm flex items-start space-x-4 border-l-4 border-orange-600 hover:shadow-md hover:border-orange-500 transition-all group"
            >
              <MapPin className="h-6 w-6 text-orange-600 shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <h4 className="font-bold uppercase text-sm mb-1">Адрес</h4>
                <p className="text-slate-600 text-sm italic group-hover:text-orange-600 transition-colors">кв. Средна Кула-Русе, ул. „Яворица“ №1</p>
                <span className="text-[10px] text-orange-500 font-bold uppercase mt-2 block transition-opacity">Виж в Google Maps</span>
              </div>
            </a>
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-start space-x-4 border-l-4 border-orange-600">
              <Phone className="h-6 w-6 text-orange-600 shrink-0" />
              <div>
                <h4 className="font-bold uppercase text-sm mb-1">Телефон</h4>
                <p className="text-slate-600 text-sm italic">089 681 5155</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-start space-x-4 border-l-4 border-orange-600">
              <Clock className="h-6 w-6 text-orange-600 shrink-0" />
              <div>
                <h4 className="font-bold uppercase text-sm mb-1">Работно време</h4>
                <p className="text-slate-600 text-sm italic">Пон - Пет: 08:30 - 17:30</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-500">Име</label>
                  <Input placeholder="Вашето име" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-500">Имейл</label>
                  <Input type="email" placeholder="example@mail.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-500">Тема</label>
                <Input placeholder="Напр. Запитване за нагреватели" required />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-500">Съобщение</label>
                <Textarea placeholder="Опишете вашите нужди..." className="min-h-[150px]" required />
              </div>
              <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold h-12 uppercase tracking-widest">
                Изпрати съобщение
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
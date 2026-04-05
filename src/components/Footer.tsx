"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Flame } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-200 py-12 mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <Flame className="h-6 w-6 text-orange-600" />
            <h3 className="text-xl font-bold text-white uppercase tracking-tight">ЕТ БК-Насю Великов</h3>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            Над 30 години опит в производството на качествени електрически нагреватели и професионални скари за дома и индустрията в гр. Русе.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">Бързи връзки</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-orange-500 transition-colors">За нас</Link></li>
            <li><Link to="/heaters" className="hover:text-orange-500 transition-colors">Нестандартни нагреватели</Link></li>
            <li><Link to="/grills" className="hover:text-orange-500 transition-colors">Електрически скари</Link></li>
            <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Контакти</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">Контакти</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <Phone className="h-5 w-5 text-orange-500 shrink-0" />
              <span className="text-slate-300">089 681 5155</span>
            </li>
            <li className="flex items-start space-x-3">
              <Mail className="h-5 w-5 text-orange-500 shrink-0" />
              <span className="text-slate-300">office@nasko-velikov.com</span>
            </li>
            <li className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-orange-500 shrink-0" />
              <span className="text-slate-300 italic">кв. Средна Кула-Русе, ул. „Яворица“ №1</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-900 text-center text-xs text-slate-500 uppercase tracking-widest">
        © {new Date().getFullYear()} ЕТ БК-Насю Великов. Всички права запазени.
      </div>
    </footer>
  );
};

export default Footer;
"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-200 py-12 mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-4 uppercase">ЕТ БК-Насю Великов</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Над 30 години опит в производството на качествени електрически нагреватели и професионални скари за дома и индустрията.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Бързи връзки</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-orange-500 transition-colors">За нас</Link></li>
            <li><Link to="/heaters" className="hover:text-orange-500 transition-colors">Нестандартни нагреватели</Link></li>
            <li><Link to="/grills" className="hover:text-orange-500 transition-colors">Електрически скари</Link></li>
            <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Контакти</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Контакти</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-3">
              <Phone className="h-4 w-4 text-orange-500" />
              <span>089 681 5155</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="h-4 w-4 text-orange-500" />
              <span>nasko_velikov@abv.bg</span>
            </li>
            <li className="flex items-center space-x-3">
              <MapPin className="h-4 w-4 text-orange-500" />
              <span>кв. Средна Кула-Русе, ул. „Яворица“ №1</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} ЕТ БК-Насю Великов. Всички права запазени.
      </div>
    </footer>
  );
};

export default Footer;
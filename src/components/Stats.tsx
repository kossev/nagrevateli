"use client";

import React from 'react';
import { motion } from 'framer-motion';

const statsData = [
  { label: 'Години опит', value: '30+' },
  { label: 'Проектирани нагревателя', value: '5000+' },
  { label: 'Доволни клиенти', value: '1200+' },
  { label: 'Сертифицирано качество', value: '100%' },
];

const Stats = () => {
  return (
    <section className="py-20 bg-orange-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {statsData.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-6xl font-black mb-3 tabular-nums">{stat.value}</div>
              <div className="text-orange-100 text-xs md:text-sm uppercase font-black tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
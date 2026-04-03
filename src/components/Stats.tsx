"use client";

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Години опит', value: '20+' },
  { label: 'Проектирани нагревателя', value: '5000+' },
  { label: 'Доволни клиенти', value: '1200+' },
  { label: 'Сертифицирано качество', value: '100%' },
];

const Stats = () => {
  return (
    <section className="py-16 bg-orange-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-black mb-2">{stat.value}</div>
              <div className="text-orange-100 text-sm uppercase font-bold tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
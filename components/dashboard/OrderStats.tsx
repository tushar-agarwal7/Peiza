'use client';

import { motion } from 'framer-motion';
import { formatCurrency } from '@/lib/utils';
import { useOrderStats } from '@/lib/store';
import { ShoppingCart, Clock, Truck, CheckCircle, XCircle, DollarSign, TrendingUp, Award } from 'lucide-react';

export default function OrderStats() {
  const stats = useOrderStats();

  const statCards = [
    {
      title: 'Total Orders',
      value: stats.total,
      icon: ShoppingCart,
      gradient: 'from-[#2A2E1F] to-[#1a1e11]',
      bgColor: 'bg-[#2A2E1F]/10',
      textColor: 'text-[#2A2E1F]',
      change: '+12%',
      changePositive: true
    },
    {
      title: 'Pending Orders',
      value: stats.pending,
      icon: Clock,
      gradient: 'from-amber-500 to-amber-600',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-700',
      change: '+3%',
      changePositive: true
    },
    {
      title: 'Out for Delivery',
      value: stats.outForDelivery,
      icon: Truck,
      gradient: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700',
      change: '+8%',
      changePositive: true
    },
    {
      title: 'Delivered',
      value: stats.delivered,
      icon: CheckCircle,
      gradient: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-700',
      change: '+15%',
      changePositive: true
    },
    {
      title: 'Cancelled',
      value: stats.cancelled,
      icon: XCircle,
      gradient: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-700',
      change: '-2%',
      changePositive: false
    },
    {
      title: 'Total Revenue',
      value: formatCurrency(stats.totalRevenue),
      icon: DollarSign,
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      change: '+24%',
      changePositive: true
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
      {statCards.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.1,
            type: "spring",
            stiffness: 300
          }}
          whileHover={{ 
            scale: 1.05, 
            y: -8,
            transition: { duration: 0.2 }
          }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-[#2A2E1F]/10 p-6 hover:bg-white/90 transition-all duration-300 relative overflow-hidden group"
        >
          {/* Background Glow Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300">
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-3xl`}></div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <motion.div 
                className={`p-3 rounded-2xl bg-gradient-to-br ${stat.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="h-6 w-6 text-white" />
              </motion.div>
              
              <div className="flex items-center space-x-1">
                <TrendingUp className={`h-4 w-4 ${stat.changePositive ? 'text-emerald-500' : 'text-red-500'} ${stat.changePositive ? 'rotate-0' : 'rotate-180'}`} />
                <span className={`text-xs font-bold ${stat.changePositive ? 'text-emerald-600' : 'text-red-600'}`}>
                  {stat.change}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-semibold text-[#2A2E1F]/70 uppercase tracking-wider">
                {stat.title}
              </p>
              <p className="text-3xl font-black text-[#2A2E1F] tracking-tight">
                {stat.value}
              </p>
            </div>

            {/* Subtle bottom decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2A2E1F]/10 to-transparent rounded-b-3xl"></div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
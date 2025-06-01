'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Plus, Filter, TrendingUp } from 'lucide-react';
import OrdersTable from '@/components/dashboard/OrdersTable';
import OrderStats from '@/components/dashboard/OrderStats';
import Button from '@/components/ui/button';

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-[#F2F0E9] relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 5L55 25L75 25L59 40L66 60L50 45L34 60L41 40L25 25L45 25Z' fill='%232A2E1F'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="relative z-10 space-y-8 p-6">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-[#2A2E1F]/10 p-8 relative overflow-hidden"
        >
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='20' fill='none' stroke='%232A2E1F' stroke-width='2'/%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>

          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center space-x-6 mb-6 lg:mb-0">
                <motion.div 
                  className="bg-[#2A2E1F] p-4 rounded-2xl shadow-lg"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ShoppingCart className="h-10 w-10 text-[#F2F0E9]" />
                </motion.div>
                <div>
                  <h1 className="text-4xl lg:text-5xl font-black text-[#2A2E1F] tracking-tight">
                    Pizza Orders
                  </h1>
                  <p className="text-[#2A2E1F]/70 text-xl font-medium mt-2">
                    Manage and track all your pizza orders with precision
                  </p>
                </div>
              </div>
              

            </div>
          </div>
        </motion.div>

        {/* Order Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-3xl font-black text-[#2A2E1F] mb-6 tracking-tight">Order Overview</h2>
          <OrderStats />
        </motion.div>

        {/* Orders Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-[#2A2E1F]/10 p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-black text-[#2A2E1F] tracking-tight">All Orders</h3>
              <Button 
                variant="outline" 
                className="border-[#2A2E1F]/20 text-[#2A2E1F] hover:bg-[#2A2E1F]/5 font-bold"
              >
                <TrendingUp className="mr-2 h-4 w-4" />
                Export Data
              </Button>
            </div>
            <OrdersTable />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
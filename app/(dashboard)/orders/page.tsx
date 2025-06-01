'use client';

import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { mockPizzaOrders } from '@/lib/mockdata';
import OrdersTable from '@/components/dashboard/OrdersTable';
import OrderStats from '@/components/dashboard/OrderStats';

export default function OrdersPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-xl shadow-sm border p-6"
      >
        <div className="flex items-center space-x-4">
          <div className="bg-primary-100 p-3 rounded-xl">
            <ShoppingCart className="h-8 w-8 text-primary-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Pizza Orders</h1>
            <p className="text-gray-600 mt-1">
              Manage and track all your pizza orders in one place
            </p>
          </div>
        </div>
      </motion.div>

      {/* Order Statistics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <OrderStats orders={mockPizzaOrders} />
      </motion.div>

      {/* Orders Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <OrdersTable orders={mockPizzaOrders} />
      </motion.div>
    </div>
  );
}
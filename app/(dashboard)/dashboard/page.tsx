'use client';

import { useSession } from 'next-auth/react';
import { motion } from 'framer-motion';
import { Pizza, TrendingUp, Clock, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { getOrderStats, formatCurrency } from '@/lib/utils';
import OrderStats from '@/components/dashboard/OrderStats';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { mockPizzaOrders } from '@/lib/mockdata';
import Button from '@/components/ui/button';

export default function DashboardPage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-96">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  const stats = getOrderStats(mockPizzaOrders);
  const todayOrders = mockPizzaOrders.filter(order => 
    new Date(order.orderDate).toDateString() === new Date().toDateString()
  ).length;

  const recentOrders = mockPizzaOrders
    .sort((a, b) => new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime())
    .slice(0, 5);

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white relative overflow-hidden"
      >
        <div className="relative z-10">
          <div className="flex items-center space-x-4 mb-4">
            {session?.user?.image && (
              <img
                src={session.user.image}
                alt={session.user.name || 'User'}
                className="w-16 h-16 rounded-full border-4 border-white/20"
              />
            )}
            <div>
              <h1 className="text-3xl font-bold">
                Hello, {session?.user?.name?.split(' ')[0] || 'User'}! 👋
              </h1>
              <p className="text-primary-100 text-lg">
                Welcome back to your Pieza dashboard
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center space-x-3">
                <Pizza className="h-8 w-8 text-white" />
                <div>
                  <p className="text-white/80 text-sm">Today's Orders</p>
                  <p className="text-2xl font-bold text-white">{todayOrders}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-8 w-8 text-white" />
                <div>
                  <p className="text-white/80 text-sm">Total Revenue</p>
                  <p className="text-2xl font-bold text-white">{formatCurrency(stats.totalRevenue)}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center space-x-3">
                <Clock className="h-8 w-8 text-white" />
                <div>
                  <p className="text-white/80 text-sm">Active Orders</p>
                  <p className="text-2xl font-bold text-white">{stats.pending + stats.preparing + stats.outForDelivery}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Overview</h2>
        <OrderStats orders={mockPizzaOrders} />
      </motion.div>

      {/* Recent Orders & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Orders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-xl shadow-sm border p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Recent Orders</h3>
            <Link href="/orders">
              <Button variant="ghost" size="sm">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Pizza className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{order.id}</p>
                    <p className="text-sm text-gray-500">{order.customerName}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{formatCurrency(order.price)}</p>
                  <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                    order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                    order.status === 'Preparing' ? 'bg-blue-100 text-blue-800' :
                    order.status === 'Out for Delivery' ? 'bg-purple-100 text-purple-800' :
                    order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-xl shadow-sm border p-6"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h3>
          
          <div className="space-y-4">
            <Link href="/orders">
              <div className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors cursor-pointer group">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                  <Pizza className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">Manage Orders</h4>
                  <p className="text-sm text-gray-500">View and update pizza orders</p>
                </div>
                <ArrowRight className="ml-auto h-5 w-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
              </div>
            </Link>
            
            <div className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors cursor-pointer group">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <h4 className="font-medium text-gray-900">View Analytics</h4>
                <p className="text-sm text-gray-500">Coming soon...</p>
              </div>
              <ArrowRight className="ml-auto h-5 w-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
            </div>
            
            <div className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors cursor-pointer group">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h4 className="font-medium text-gray-900">Customer Management</h4>
                <p className="text-sm text-gray-500">Coming soon...</p>
              </div>
              <ArrowRight className="ml-auto h-5 w-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
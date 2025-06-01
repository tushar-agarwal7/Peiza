'use client';

import { useSession } from 'next-auth/react';
import { motion } from 'framer-motion';
import { Pizza, TrendingUp, Clock, Users, ArrowRight, Star, ChefHat, Truck, Plus, Eye } from 'lucide-react';
import Link from 'next/link';
import { mockPizzaOrders } from '@/lib/mockdata';
import { getOrderStats, formatCurrency } from '@/lib/utils';
import OrderStats from '@/components/dashboard/OrderStats';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import Button from '@/components/ui/button';

export default function DashboardPage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-96 bg-[#F2F0E9]">
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
    <div className="min-h-screen bg-[#F2F0E9] relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 5L55 25L75 25L59 40L66 60L50 45L34 60L41 40L25 25L45 25Z' fill='%232A2E1F'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="relative z-10 space-y-8 p-6">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-[#2A2E1F]/10 shadow-lg relative overflow-hidden"
        >
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='20' fill='none' stroke='%232A2E1F' stroke-width='2'/%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center space-x-4 mb-6">
              {session?.user?.image && (
                <img
                  src={session.user.image}
                  alt={session.user.name || 'User'}
                  className="w-20 h-20 rounded-2xl border-4 border-[#2A2E1F]/10 shadow-lg"
                />
              )}
              <div>
                <h1 className="text-4xl font-black text-[#2A2E1F] tracking-tight">
                  Hello, {session?.user?.name?.split(' ')[0] || 'User'}! 👋
                </h1>
                <p className="text-[#2A2E1F]/70 text-xl font-medium">
                  Welcome back to your Pieza dashboard
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                className="bg-[#2A2E1F] rounded-2xl p-6 text-white shadow-lg"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center space-x-3">
                  <Pizza className="h-10 w-10 text-[#F2F0E9]" />
                  <div>
                    <p className="text-[#F2F0E9]/80 text-sm font-medium">Today's Orders</p>
                    <p className="text-3xl font-black text-[#F2F0E9]">{todayOrders}</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-[#2A2E1F]/10 shadow-lg"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-10 w-10 text-[#2A2E1F]" />
                  <div>
                    <p className="text-[#2A2E1F]/70 text-sm font-medium">Total Revenue</p>
                    <p className="text-3xl font-black text-[#2A2E1F]">{formatCurrency(stats.totalRevenue)}</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-[#2A2E1F]/10 shadow-lg"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center space-x-3">
                  <Clock className="h-10 w-10 text-[#2A2E1F]" />
                  <div>
                    <p className="text-[#2A2E1F]/70 text-sm font-medium">Active Orders</p>
                    <p className="text-3xl font-black text-[#2A2E1F]">{stats.pending + stats.preparing + stats.outForDelivery}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-black text-[#2A2E1F] mb-6 tracking-tight">Order Overview</h2>
          <OrderStats />
        </motion.div>

        {/* Recent Orders & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Orders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-[#2A2E1F]/10 p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-black text-[#2A2E1F]">Recent Orders</h3>
              <Link href="/orders">
                <Button variant="ghost" size="sm" className="text-[#2A2E1F] hover:bg-[#2A2E1F]/5">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <motion.div 
                  key={order.id} 
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#F2F0E9] hover:bg-white/60 transition-all duration-300 border border-[#2A2E1F]/5"
                  whileHover={{ x: 5, scale: 1.01 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-[#2A2E1F] rounded-2xl flex items-center justify-center shadow-lg">
                      <Pizza className="h-6 w-6 text-[#F2F0E9]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#2A2E1F]">{order.id}</p>
                      <p className="text-sm text-[#2A2E1F]/70">{order.customerName}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-[#2A2E1F]">{formatCurrency(order.price)}</p>
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                      order.status === 'Preparing' ? 'bg-blue-100 text-blue-800' :
                      order.status === 'Out for Delivery' ? 'bg-purple-100 text-purple-800' :
                      order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-[#2A2E1F]/10 p-6"
          >
            <h3 className="text-2xl font-black text-[#2A2E1F] mb-6">Quick Actions</h3>
            
            <div className="space-y-4">
              <Link href="/orders">
                <motion.div 
                  className="flex items-center p-4 rounded-2xl border-2 border-[#2A2E1F]/10 hover:border-[#2A2E1F]/30 hover:bg-[#2A2E1F]/5 transition-all duration-300 cursor-pointer group"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="w-14 h-14 bg-[#2A2E1F] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Pizza className="h-7 w-7 text-[#F2F0E9]" />
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="font-bold text-[#2A2E1F] text-lg">Manage Orders</h4>
                    <p className="text-sm text-[#2A2E1F]/70">View and update all pizza orders</p>
                  </div>
                  <ArrowRight className="h-6 w-6 text-[#2A2E1F]/50 group-hover:text-[#2A2E1F] group-hover:translate-x-1 transition-all" />
                </motion.div>
              </Link>
              
              <motion.div 
                className="flex items-center p-4 rounded-2xl border-2 border-[#2A2E1F]/10 hover:border-[#2A2E1F]/30 hover:bg-[#2A2E1F]/5 transition-all duration-300 cursor-pointer group"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-7 w-7 text-white" />
                </div>
                <div className="ml-4 flex-1">
                  <h4 className="font-bold text-[#2A2E1F] text-lg">View Analytics</h4>
                  <p className="text-sm text-[#2A2E1F]/70">Business insights and reports</p>
                </div>
                <ArrowRight className="h-6 w-6 text-[#2A2E1F]/50 group-hover:text-[#2A2E1F] group-hover:translate-x-1 transition-all" />
              </motion.div>
              
              <motion.div 
                className="flex items-center p-4 rounded-2xl border-2 border-[#2A2E1F]/10 hover:border-[#2A2E1F]/30 hover:bg-[#2A2E1F]/5 transition-all duration-300 cursor-pointer group"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <div className="ml-4 flex-1">
                  <h4 className="font-bold text-[#2A2E1F] text-lg">Customer Management</h4>
                  <p className="text-sm text-[#2A2E1F]/70">Manage customer relationships</p>
                </div>
                <ArrowRight className="h-6 w-6 text-[#2A2E1F]/50 group-hover:text-[#2A2E1F] group-hover:translate-x-1 transition-all" />
              </motion.div>

              <motion.div 
                className="flex items-center p-4 rounded-2xl border-2 border-[#2A2E1F]/10 hover:border-[#2A2E1F]/30 hover:bg-[#2A2E1F]/5 transition-all duration-300 cursor-pointer group"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <ChefHat className="h-7 w-7 text-white" />
                </div>
                <div className="ml-4 flex-1">
                  <h4 className="font-bold text-[#2A2E1F] text-lg">Kitchen Dashboard</h4>
                  <p className="text-sm text-[#2A2E1F]/70">Monitor kitchen operations</p>
                </div>
                <ArrowRight className="h-6 w-6 text-[#2A2E1F]/50 group-hover:text-[#2A2E1F] group-hover:translate-x-1 transition-all" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-[#2A2E1F]/10 p-8"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-black text-[#2A2E1F]">Today's Performance</h3>
            <Button 
              variant="outline" 
              className="border-[#2A2E1F]/20 text-[#2A2E1F] hover:bg-[#2A2E1F]/5"
            >
              <Eye className="mr-2 h-4 w-4" />
              View Details
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <motion.div 
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#2A2E1F] to-[#1a1e11] text-white shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Pizza className="h-10 w-10 mx-auto mb-3 text-[#F2F0E9]" />
              <div className="text-3xl font-black mb-1">{stats.total}</div>
              <div className="text-sm opacity-90">Total Orders</div>
            </motion.div>

            <motion.div 
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Star className="h-10 w-10 mx-auto mb-3" />
              <div className="text-3xl font-black mb-1">{stats.delivered}</div>
              <div className="text-sm opacity-90">Delivered</div>
            </motion.div>

            <motion.div 
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Clock className="h-10 w-10 mx-auto mb-3" />
              <div className="text-3xl font-black mb-1">{stats.preparing + stats.outForDelivery}</div>
              <div className="text-sm opacity-90">In Progress</div>
            </motion.div>

            <motion.div 
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <TrendingUp className="h-10 w-10 mx-auto mb-3" />
              <div className="text-3xl font-black mb-1">{formatCurrency(stats.totalRevenue)}</div>
              <div className="text-sm opacity-90">Revenue</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
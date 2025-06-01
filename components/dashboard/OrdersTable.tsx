'use client';

import { motion } from 'framer-motion';
import { ArrowUpDown, ArrowUp, ArrowDown, Filter, Search, RotateCcw, Pizza, User, Calendar, DollarSign } from 'lucide-react';
import { PizzaOrder, OrderStatus } from '@/types';
import { formatDate, formatCurrency } from '@/lib/utils';
import { useOrderStore } from '@/lib/store';
import { Badge } from '../ui/badge';
import Button from '../ui/button';

export default function OrdersTable() {
  const {
    filteredOrders,
    sortConfig,
    filterConfig,
    searchQuery,
    setSortConfig,
    setFilterConfig,
    setSearchQuery,
    resetFilters,
    updateOrderStatus
  } = useOrderStore();

  const handleSort = (key: keyof PizzaOrder) => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc',
    });
  };

  const getSortIcon = (key: keyof PizzaOrder) => {
    if (sortConfig.key !== key) return <ArrowUpDown className="h-4 w-4" />;
    return sortConfig.direction === 'asc' ? 
      <ArrowUp className="h-4 w-4" /> : 
      <ArrowDown className="h-4 w-4" />;
  };

  const statusOptions: (OrderStatus | 'all')[] = ['all', 'Pending', 'Preparing', 'Out for Delivery', 'Delivered', 'Cancelled'];

  const getStatusBadge = (status: OrderStatus) => {
    const styles = {
      'Delivered': 'bg-emerald-100 text-emerald-800 border-emerald-200',
      'Preparing': 'bg-blue-100 text-blue-800 border-blue-200',
      'Out for Delivery': 'bg-purple-100 text-purple-800 border-purple-200',
      'Pending': 'bg-amber-100 text-amber-800 border-amber-200',
      'Cancelled': 'bg-red-100 text-red-800 border-red-200'
    };

    return (
      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold border ${styles[status]} shadow-sm`}>
        {status}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      {/* Filters and Search */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-[#2A2E1F]/10"
      >
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#2A2E1F]/50 h-5 w-5" />
              <input
                type="text"
                placeholder="Search orders, customers, or pizza types..."
                className="w-full pl-12 pr-4 py-4 border-2 border-[#2A2E1F]/10 rounded-2xl focus:ring-2 focus:ring-[#2A2E1F]/20 focus:border-[#2A2E1F]/30 bg-white/80 backdrop-blur-sm text-[#2A2E1F] placeholder-[#2A2E1F]/50 font-medium transition-all duration-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <Filter className="h-5 w-5 text-[#2A2E1F]/70" />
              <select
                className="border-2 border-[#2A2E1F]/10 rounded-2xl px-4 py-4 focus:ring-2 focus:ring-[#2A2E1F]/20 focus:border-[#2A2E1F]/30 bg-white/80 backdrop-blur-sm text-[#2A2E1F] font-medium min-w-[160px] transition-all duration-300"
                value={filterConfig.status}
                onChange={(e) => setFilterConfig({ ...filterConfig, status: e.target.value as OrderStatus | 'all' })}
              >
                {statusOptions.map((status) => (
                  <option key={status} value={status}>
                    {status === 'all' ? 'All Status' : status}
                  </option>
                ))}
              </select>
            </div>
            
            <Button
              variant="outline"
              onClick={resetFilters}
              className="border-[#2A2E1F]/20 text-[#2A2E1F] hover:bg-[#2A2E1F]/5 font-bold px-6 py-4"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset
            </Button>
          </div>
        </div>

        {/* Results Summary */}
        <div className="flex justify-between items-center mt-6 pt-6 border-t border-[#2A2E1F]/10">
          <span className="text-sm font-semibold text-[#2A2E1F]/70">
            Showing <span className="text-[#2A2E1F] font-bold">{filteredOrders.length}</span> orders
          </span>
          {(searchQuery || filterConfig.status !== 'all') && (
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#2A2E1F]/10 text-[#2A2E1F] border border-[#2A2E1F]/20"
            >
              Filters active
            </motion.span>
          )}
        </div>
      </motion.div>

      {/* Table */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-[#2A2E1F]/10 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-[#2A2E1F]/5 backdrop-blur-sm">
              <tr>
                <th className="px-6 py-6 text-left">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('id')}
                    className="flex items-center space-x-2 p-0 h-auto font-bold text-[#2A2E1F] hover:text-[#2A2E1F]/80 text-sm uppercase tracking-wider"
                  >
                    <Pizza className="h-4 w-4" />
                    <span>Order ID</span>
                    {getSortIcon('id')}
                  </Button>
                </th>
                <th className="px-6 py-6 text-left">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('customerName')}
                    className="flex items-center space-x-2 p-0 h-auto font-bold text-[#2A2E1F] hover:text-[#2A2E1F]/80 text-sm uppercase tracking-wider"
                  >
                    <User className="h-4 w-4" />
                    <span>Customer</span>
                    {getSortIcon('customerName')}
                  </Button>
                </th>
                <th className="px-6 py-6 text-left">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('pizzaType')}
                    className="flex items-center space-x-2 p-0 h-auto font-bold text-[#2A2E1F] hover:text-[#2A2E1F]/80 text-sm uppercase tracking-wider"
                  >
                    <span>Pizza Details</span>
                    {getSortIcon('pizzaType')}
                  </Button>
                </th>
                <th className="px-6 py-6 text-left">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('orderDate')}
                    className="flex items-center space-x-2 p-0 h-auto font-bold text-[#2A2E1F] hover:text-[#2A2E1F]/80 text-sm uppercase tracking-wider"
                  >
                    <Calendar className="h-4 w-4" />
                    <span>Order Date</span>
                    {getSortIcon('orderDate')}
                  </Button>
                </th>
                <th className="px-6 py-6 text-left">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('price')}
                    className="flex items-center space-x-2 p-0 h-auto font-bold text-[#2A2E1F] hover:text-[#2A2E1F]/80 text-sm uppercase tracking-wider"
                  >
                    <DollarSign className="h-4 w-4" />
                    <span>Price</span>
                    {getSortIcon('price')}
                  </Button>
                </th>
                <th className="px-6 py-6 text-left">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('status')}
                    className="flex items-center space-x-2 p-0 h-auto font-bold text-[#2A2E1F] hover:text-[#2A2E1F]/80 text-sm uppercase tracking-wider"
                  >
                    <span>Status</span>
                    {getSortIcon('status')}
                  </Button>
                </th>
                <th className="px-6 py-6 text-left">
                  <span className="font-bold text-[#2A2E1F] text-sm uppercase tracking-wider">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2A2E1F]/5">
              {filteredOrders.map((order, index) => (
                <motion.tr 
                  key={order.id} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-[#2A2E1F]/5 transition-all duration-300 group"
                >
                  <td className="px-6 py-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[#2A2E1F] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Pizza className="h-5 w-5 text-[#F2F0E9]" />
                      </div>
                      <span className="font-bold text-[#2A2E1F] text-lg">{order.id}</span>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <div className="space-y-1">
                      <div className="font-bold text-[#2A2E1F] text-lg">{order.customerName}</div>
                      <div className="text-sm text-[#2A2E1F]/70 font-medium">{order.customerEmail}</div>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <div className="space-y-1">
                      <div className="font-bold text-[#2A2E1F]">{order.pizzaType}</div>
                      <div className="text-sm text-[#2A2E1F]/70 font-medium">Qty: {order.quantity}</div>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <div className="font-medium text-[#2A2E1F]">
                      {formatDate(order.orderDate)}
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <div className="text-2xl font-black text-[#2A2E1F]">
                      {formatCurrency(order.price)}
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    {getStatusBadge(order.status)}
                  </td>
                  <td className="px-6 py-6">
                    <select
                      className="border-2 border-[#2A2E1F]/10 rounded-xl px-3 py-2 text-sm font-medium bg-white/80 backdrop-blur-sm text-[#2A2E1F] focus:ring-2 focus:ring-[#2A2E1F]/20 focus:border-[#2A2E1F]/30 transition-all duration-300"
                      value={order.status}
                      onChange={(e) => updateOrderStatus(order.id, e.target.value as OrderStatus)}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Preparing">Preparing</option>
                      <option value="Out for Delivery">Out for Delivery</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredOrders.length === 0 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="w-20 h-20 bg-[#2A2E1F]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Pizza className="h-10 w-10 text-[#2A2E1F]/50" />
            </div>
            <div className="text-[#2A2E1F]/70 text-lg font-medium mb-4">No orders found matching your criteria</div>
            <Button 
              variant="outline" 
              onClick={resetFilters} 
              className="border-[#2A2E1F]/20 text-[#2A2E1F] hover:bg-[#2A2E1F]/5 font-bold"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Clear all filters
            </Button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
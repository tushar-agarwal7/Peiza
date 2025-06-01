'use client';

import { ArrowUpDown, ArrowUp, ArrowDown, Filter, Search, RotateCcw } from 'lucide-react';
import { PizzaOrder, OrderStatus } from '@/types';
import { formatDate, formatCurrency, cn } from '@/lib/utils';
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

  return (
    <div className="space-y-4">
      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-lg shadow-sm border">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search orders..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Filter className="h-4 w-4 text-gray-400" />
          <select
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            value={filterConfig.status}
            onChange={(e) => setFilterConfig({ ...filterConfig, status: e.target.value as OrderStatus | 'all' })}
          >
            {statusOptions.map((status) => (
              <option key={status} value={status}>
                {status === 'all' ? 'All Status' : status}
              </option>
            ))}
          </select>
          <Button
            variant="outline"
            size="sm"
            onClick={resetFilters}
            className="flex items-center space-x-2"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Reset</span>
          </Button>
        </div>
      </div>

      {/* Results Summary */}
      <div className="flex justify-between items-center text-sm text-gray-600">
        <span>Showing {filteredOrders.length} orders</span>
        {(searchQuery || filterConfig.status !== 'all') && (
          <span className="text-primary-600">Filters applied</span>
        )}
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('id')}
                    className="flex items-center space-x-1 p-0 h-auto font-medium text-gray-500 hover:text-gray-700"
                  >
                    <span>Order ID</span>
                    {getSortIcon('id')}
                  </Button>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('customerName')}
                    className="flex items-center space-x-1 p-0 h-auto font-medium text-gray-500 hover:text-gray-700"
                  >
                    <span>Customer</span>
                    {getSortIcon('customerName')}
                  </Button>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('pizzaType')}
                    className="flex items-center space-x-1 p-0 h-auto font-medium text-gray-500 hover:text-gray-700"
                  >
                    <span>Pizza Type</span>
                    {getSortIcon('pizzaType')}
                  </Button>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('quantity')}
                    className="flex items-center space-x-1 p-0 h-auto font-medium text-gray-500 hover:text-gray-700"
                  >
                    <span>Quantity</span>
                    {getSortIcon('quantity')}
                  </Button>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('orderDate')}
                    className="flex items-center space-x-1 p-0 h-auto font-medium text-gray-500 hover:text-gray-700"
                  >
                    <span>Order Date</span>
                    {getSortIcon('orderDate')}
                  </Button>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('price')}
                    className="flex items-center space-x-1 p-0 h-auto font-medium text-gray-500 hover:text-gray-700"
                  >
                    <span>Price</span>
                    {getSortIcon('price')}
                  </Button>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('status')}
                    className="flex items-center space-x-1 p-0 h-auto font-medium text-gray-500 hover:text-gray-700"
                  >
                    <span>Status</span>
                    {getSortIcon('status')}
                  </Button>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{order.customerName}</div>
                      <div className="text-sm text-gray-500">{order.customerEmail}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.pizzaType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {formatDate(order.orderDate)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {formatCurrency(order.price)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <select
                      className="text-xs border border-gray-300 rounded px-2 py-1"
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredOrders.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-sm">No orders found matching your criteria.</div>
            <Button variant="outline" size="sm" onClick={resetFilters} className="mt-2">
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
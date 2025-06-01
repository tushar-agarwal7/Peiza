import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { PizzaOrder, SortConfig, FilterConfig, OrderStatus } from '@/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

export function getStatusColor(status: OrderStatus): string {
  const colors = {
    'Pending': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'Preparing': 'bg-blue-100 text-blue-800 border-blue-200',
    'Out for Delivery': 'bg-purple-100 text-purple-800 border-purple-200',
    'Delivered': 'bg-green-100 text-green-800 border-green-200',
    'Cancelled': 'bg-red-100 text-red-800 border-red-200',
  };
  return colors[status] || 'bg-gray-100 text-gray-800 border-gray-200';
}

export function sortOrders(orders: PizzaOrder[], config: SortConfig): PizzaOrder[] {
  return [...orders].sort((a, b) => {
    let aValue = a[config.key];
    let bValue = b[config.key];

    // Handle date sorting
    if (config.key === 'orderDate') {
      aValue = new Date(aValue as string).getTime();
      bValue = new Date(bValue as string).getTime();
    }

    // Handle string sorting
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      aValue = aValue.toLowerCase();
      bValue = bValue.toLowerCase();
    }

    if (aValue < bValue) {
      return config.direction === 'asc' ? -1 : 1;
    }
    if (aValue > bValue) {
      return config.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });
}

export function filterOrders(orders: PizzaOrder[], config: FilterConfig): PizzaOrder[] {
  return orders.filter(order => {
    // Filter by status
    if (config.status !== 'all' && order.status !== config.status) {
      return false;
    }

    // Filter by date range if provided
    if (config.dateRange) {
      const orderDate = new Date(order.orderDate);
      const startDate = new Date(config.dateRange.start);
      const endDate = new Date(config.dateRange.end);
      
      if (orderDate < startDate || orderDate > endDate) {
        return false;
      }
    }

    return true;
  });
}

export function getOrderStats(orders: PizzaOrder[]) {
  const total = orders.length;
  const delivered = orders.filter(o => o.status === 'Delivered').length;
  const pending = orders.filter(o => o.status === 'Pending').length;
  const preparing = orders.filter(o => o.status === 'Preparing').length;
  const outForDelivery = orders.filter(o => o.status === 'Out for Delivery').length;
  const cancelled = orders.filter(o => o.status === 'Cancelled').length;
  
  const totalRevenue = orders
    .filter(o => o.status === 'Delivered')
    .reduce((sum, order) => sum + order.price, 0);

  return {
    total,
    delivered,
    pending,
    preparing,
    outForDelivery,
    cancelled,
    totalRevenue,
  };
}
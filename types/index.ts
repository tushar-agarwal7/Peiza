export interface PizzaOrder {
  id: string;
  customerName: string;
  pizzaType: string;
  quantity: number;
  orderDate: string;
  status: OrderStatus;
  price: number;
  customerEmail?: string;
  deliveryAddress?: string;
}

export type OrderStatus = 
  | 'Pending' 
  | 'Preparing' 
  | 'Out for Delivery' 
  | 'Delivered' 
  | 'Cancelled';

export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}

export interface SortConfig {
  key: keyof PizzaOrder;
  direction: 'asc' | 'desc';
}

export interface FilterConfig {
  status: OrderStatus | 'all';
  dateRange?: {
    start: string;
    end: string;
  };
}
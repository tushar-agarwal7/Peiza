import { PizzaOrder } from '@/types';

export const mockPizzaOrders: PizzaOrder[] = [
  {
    id: 'PZA001',
    customerName: 'John Doe',
    pizzaType: 'Margherita Supreme',
    quantity: 2,
    orderDate: '2024-12-01 14:30',
    status: 'Delivered',
    price: 24.99,
    customerEmail: 'john.doe@email.com',
    deliveryAddress: '123 Main St, City'
  },
  {
    id: 'PZA002',
    customerName: 'Sarah Wilson',
    pizzaType: 'Pepperoni Deluxe',
    quantity: 1,
    orderDate: '2024-12-01 15:45',
    status: 'Out for Delivery',
    price: 16.99,
    customerEmail: 'sarah.wilson@email.com',
    deliveryAddress: '456 Oak Ave, Town'
  },
  {
    id: 'PZA003',
    customerName: 'Mike Johnson',
    pizzaType: 'Veggie Supreme',
    quantity: 3,
    orderDate: '2024-12-01 16:20',
    status: 'Preparing',
    price: 45.97,
    customerEmail: 'mike.j@email.com',
    deliveryAddress: '789 Pine Rd, Village'
  },
  {
    id: 'PZA004',
    customerName: 'Emily Chen',
    pizzaType: 'BBQ Chicken',
    quantity: 1,
    orderDate: '2024-12-01 17:10',
    status: 'Pending',
    price: 18.99,
    customerEmail: 'emily.chen@email.com',
    deliveryAddress: '321 Elm St, District'
  },
  {
    id: 'PZA005',
    customerName: 'David Brown',
    pizzaType: 'Hawaiian Paradise',
    quantity: 2,
    orderDate: '2024-12-01 18:00',
    status: 'Cancelled',
    price: 33.98,
    customerEmail: 'david.brown@email.com',
    deliveryAddress: '654 Maple Dr, Area'
  },
  {
    id: 'PZA006',
    customerName: 'Lisa Garcia',
    pizzaType: 'Meat Lovers',
    quantity: 1,
    orderDate: '2024-12-01 19:15',
    status: 'Preparing',
    price: 21.99,
    customerEmail: 'lisa.garcia@email.com',
    deliveryAddress: '987 Cedar Ln, Zone'
  },
  {
    id: 'PZA007',
    customerName: 'Tom Anderson',
    pizzaType: 'Four Cheese',
    quantity: 2,
    orderDate: '2024-12-01 20:30',
    status: 'Out for Delivery',
    price: 37.98,
    customerEmail: 'tom.anderson@email.com',
    deliveryAddress: '147 Birch Way, Sector'
  },
  {
    id: 'PZA008',
    customerName: 'Rachel Martinez',
    pizzaType: 'Spicy Italian',
    quantity: 1,
    orderDate: '2024-12-01 21:45',
    status: 'Delivered',
    price: 19.99,
    customerEmail: 'rachel.m@email.com',
    deliveryAddress: '258 Spruce Ave, Quarter'
  },
  {
    id: 'PZA009',
    customerName: 'Alex Thompson',
    pizzaType: 'Mediterranean',
    quantity: 3,
    orderDate: '2024-12-02 12:20',
    status: 'Pending',
    price: 56.97,
    customerEmail: 'alex.thompson@email.com',
    deliveryAddress: '369 Willow St, Region'
  },
  {
    id: 'PZA010',
    customerName: 'Jessica Lee',
    pizzaType: 'Buffalo Chicken',
    quantity: 1,
    orderDate: '2024-12-02 13:40',
    status: 'Preparing',
    price: 17.99,
    customerEmail: 'jessica.lee@email.com',
    deliveryAddress: '741 Ash Blvd, Territory'
  }
];
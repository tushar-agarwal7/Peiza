import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { useMemo } from 'react';
import { PizzaOrder, SortConfig, FilterConfig, OrderStatus } from '@/types';
import { mockPizzaOrders } from './mockdata';

interface OrderStore {
  // State
  orders: PizzaOrder[];
  filteredOrders: PizzaOrder[];
  sortConfig: SortConfig;
  filterConfig: FilterConfig;
  searchQuery: string;
  isLoading: boolean;
  
  // Actions
  setOrders: (orders: PizzaOrder[]) => void;
  setSortConfig: (config: SortConfig) => void;
  setFilterConfig: (config: FilterConfig) => void;
  setSearchQuery: (query: string) => void;
  updateOrderStatus: (orderId: string, status: OrderStatus) => void;
  applyFiltersAndSort: () => void;
  resetFilters: () => void;
}

export const useOrderStore = create<OrderStore>()(
  devtools(
    persist(
      (set, get) => ({
        // Initial State
        orders: mockPizzaOrders,
        filteredOrders: mockPizzaOrders,
        sortConfig: { key: 'orderDate', direction: 'desc' },
        filterConfig: { status: 'all' },
        searchQuery: '',
        isLoading: false,

        // Actions
        setOrders: (orders) =>
          set({ orders }, false, 'setOrders'),

        setSortConfig: (config) => {
          set({ sortConfig: config }, false, 'setSortConfig');
          get().applyFiltersAndSort();
        },

        setFilterConfig: (config) => {
          set({ filterConfig: config }, false, 'setFilterConfig');
          get().applyFiltersAndSort();
        },

        setSearchQuery: (query) => {
          set({ searchQuery: query }, false, 'setSearchQuery');
          get().applyFiltersAndSort();
        },

        updateOrderStatus: (orderId, status) => {
          const { orders } = get();
          const updatedOrders = orders.map(order =>
            order.id === orderId ? { ...order, status } : order
          );
          set({ orders: updatedOrders }, false, 'updateOrderStatus');
          get().applyFiltersAndSort();
        },

        applyFiltersAndSort: () => {
          const { orders, sortConfig, filterConfig, searchQuery } = get();
          let filtered = [...orders];

          // Apply search filter
          if (searchQuery) {
            filtered = filtered.filter(order =>
              order.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
              order.pizzaType.toLowerCase().includes(searchQuery.toLowerCase()) ||
              order.id.toLowerCase().includes(searchQuery.toLowerCase())
            );
          }

          // Apply status filter
          if (filterConfig.status !== 'all') {
            filtered = filtered.filter(order => order.status === filterConfig.status);
          }

          // Apply date range filter
          if (filterConfig.dateRange) {
            const startDate = new Date(filterConfig.dateRange.start);
            const endDate = new Date(filterConfig.dateRange.end);
            filtered = filtered.filter(order => {
              const orderDate = new Date(order.orderDate);
              return orderDate >= startDate && orderDate <= endDate;
            });
          }

          // Apply sorting
          filtered.sort((a, b) => {
            let aValue = a[sortConfig.key];
            let bValue = b[sortConfig.key];

            // Handle date sorting
            if (sortConfig.key === 'orderDate') {
              aValue = new Date(aValue as string).getTime();
              bValue = new Date(bValue as string).getTime();
            }

            // Handle string sorting
            if (typeof aValue === 'string' && typeof bValue === 'string') {
              aValue = aValue.toLowerCase();
              bValue = bValue.toLowerCase();
            }

            if (aValue < bValue) {
              return sortConfig.direction === 'asc' ? -1 : 1;
            }
            if (aValue > bValue) {
              return sortConfig.direction === 'asc' ? 1 : -1;
            }
            return 0;
          });

          set({ filteredOrders: filtered }, false, 'applyFiltersAndSort');
        },

        resetFilters: () => {
          set({
            filterConfig: { status: 'all' },
            searchQuery: '',
            sortConfig: { key: 'orderDate', direction: 'desc' }
          }, false, 'resetFilters');
          get().applyFiltersAndSort();
        },
      }),
      {
        name: 'order-store',
        partialize: (state) => ({ 
          sortConfig: state.sortConfig,
          filterConfig: state.filterConfig 
        }),
      }
    ),
    { name: 'OrderStore' }
  )
);



export const useOrderStats = () => {
  const orders = useOrderStore(state => state.orders);
  
  return useMemo(() => {
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
  }, [orders]);
};

// Alternative individual selectors for better performance
export const useOrderCount = () => useOrderStore(state => state.orders.length);

export const useDeliveredCount = () => useOrderStore(state => 
  state.orders.filter(o => o.status === 'Delivered').length
);

export const usePendingCount = () => useOrderStore(state => 
  state.orders.filter(o => o.status === 'Pending').length
);

export const usePreparingCount = () => useOrderStore(state => 
  state.orders.filter(o => o.status === 'Preparing').length
);

export const useOutForDeliveryCount = () => useOrderStore(state => 
  state.orders.filter(o => o.status === 'Out for Delivery').length
);

export const useCancelledCount = () => useOrderStore(state => 
  state.orders.filter(o => o.status === 'Cancelled').length
);

export const useTotalRevenue = () => useOrderStore(state => 
  state.orders
    .filter(o => o.status === 'Delivered')
    .reduce((sum, order) => sum + order.price, 0)
);

// Filtered orders selector
export const useFilteredOrders = () => useOrderStore(state => state.filteredOrders);

// Search and filter states
export const useSearchQuery = () => useOrderStore(state => state.searchQuery);
export const useFilterConfig = () => useOrderStore(state => state.filterConfig);
export const useSortConfig = () => useOrderStore(state => state.sortConfig);
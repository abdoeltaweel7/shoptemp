import { Product, User, Order } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    description: 'Premium noise-cancelling wireless headphones with 30-hour battery life',
    price: 199.99,
    category: 'Electronics',
    imageUrl: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    stock: 25,
    specifications: ['Bluetooth 5.0', '30-hour battery', 'Active noise cancellation', 'Quick charge']
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    description: 'Advanced fitness tracking with heart rate monitor and GPS',
    price: 299.99,
    category: 'Electronics',
    imageUrl: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500',
    stock: 15,
    specifications: ['GPS tracking', 'Heart rate monitor', '7-day battery', 'Water resistant']
  },
  {
    id: '3',
    name: 'Premium Cotton T-Shirt',
    description: 'Soft, comfortable cotton t-shirt in various colors',
    price: 29.99,
    category: 'Clothing',
    imageUrl: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=500',
    stock: 50,
    specifications: ['100% cotton', 'Pre-shrunk', 'Machine washable', 'Available in 6 colors']
  },
  {
    id: '4',
    name: 'Leather Crossbody Bag',
    description: 'Stylish genuine leather crossbody bag for everyday use',
    price: 89.99,
    category: 'Accessories',
    imageUrl: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500',
    stock: 20,
    specifications: ['Genuine leather', 'Adjustable strap', 'Multiple compartments', 'Compact design']
  },
  {
    id: '5',
    name: 'Wireless Charging Pad',
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices',
    price: 39.99,
    category: 'Electronics',
    imageUrl: 'https://images.pexels.com/photos/4526427/pexels-photo-4526427.jpeg?auto=compress&cs=tinysrgb&w=500',
    stock: 30,
    specifications: ['Qi wireless charging', '15W fast charge', 'LED indicator', 'Non-slip base']
  },
  {
    id: '6',
    name: 'Classic Denim Jacket',
    description: 'Vintage-style denim jacket perfect for layering',
    price: 79.99,
    category: 'Clothing',
    imageUrl: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=500',
    stock: 12,
    specifications: ['100% cotton denim', 'Classic fit', 'Button closure', 'Chest pockets']
  }
];

export const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@modernshop.com',
    name: 'Admin User',
    isAdmin: true
  },
  {
    id: '2',
    email: 'user@example.com',
    name: 'John Doe',
    isAdmin: false
  }
];

export const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    userId: '2',
    items: [
      { product: mockProducts[0], quantity: 1 },
      { product: mockProducts[2], quantity: 2 }
    ],
    total: 259.97,
    status: 'pending',
    paymentMethod: 'card',
    shippingAddress: '123 Main St, City, State 12345',
    createdAt: new Date('2024-01-15')
  },
  {
    id: 'ORD-002',
    userId: '2',
    items: [
      { product: mockProducts[1], quantity: 1 }
    ],
    total: 299.99,
    status: 'shipped',
    paymentMethod: 'cash',
    shippingAddress: '456 Oak Ave, City, State 67890',
    createdAt: new Date('2024-01-14')
  }
];

export const categories = ['Electronics', 'Clothing', 'Accessories'];
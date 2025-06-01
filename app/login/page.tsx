'use client';

import { motion } from 'framer-motion';
import { Pizza, ChefHat, Clock, Star } from 'lucide-react';
import LoginButton from '@/components/auth/LoginButton';

export default function LoginPage() {
  const features = [
    {
      icon: Pizza,
      title: 'Order Management',
      description: 'Track and manage all pizza orders in real-time'
    },
    {
      icon: ChefHat,
      title: 'Kitchen Dashboard',
      description: 'Monitor preparation status and delivery times'
    },
    {
      icon: Clock,
      title: 'Real-time Updates',
      description: 'Get instant notifications on order status changes'
    },
    {
      icon: Star,
      title: 'Analytics',
      description: 'Comprehensive insights into your pizza business'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100">
      <div className="flex min-h-screen">
        {/* Left side - Hero Section */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg opacity-90"></div>
          <div className="relative z-10 flex flex-col justify-center items-center p-12 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-8">
                <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                  <Pizza className="h-16 w-16 text-white" />
                </div>
              </div>
              <h1 className="text-5xl font-bold mb-6">
                Welcome to
                <br />
                <span className="bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                  Pieza
                </span>
              </h1>
              <p className="text-xl text-white/90 mb-12 max-w-lg">
                Your ultimate pizza order management dashboard. Track orders, manage deliveries, and grow your business.
              </p>
              
              <div className="grid grid-cols-2 gap-6 max-w-lg">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                    className="glass-effect rounded-xl p-4 text-center"
                  >
                    <feature.icon className="h-8 w-8 text-white mx-auto mb-3" />
                    <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-white/80">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
        </div>

        {/* Right side - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md"
          >
            {/* Mobile logo */}
            <div className="lg:hidden text-center mb-8">
              <div className="inline-flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-3 rounded-xl">
                  <Pizza className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900">Pieza</h1>
              </div>
              <p className="text-gray-600">Manage your pizza orders with ease</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
                <p className="text-gray-600">Sign in to access your dashboard</p>
              </div>

              <div className="space-y-6">
                <LoginButton />
                
                <div className="text-center">
                  <p className="text-sm text-gray-500">
                    By signing in, you agree to our{' '}
                    <a href="#" className="text-primary-600 hover:text-primary-500 font-medium">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-primary-600 hover:text-primary-500 font-medium">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 grid grid-cols-3 gap-4 text-center"
            >
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-primary-600">1000+</div>
                <div className="text-sm text-gray-600">Orders Processed</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-primary-600">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-primary-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
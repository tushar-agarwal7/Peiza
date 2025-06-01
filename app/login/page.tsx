'use client';

import { motion } from 'framer-motion';
import { Pizza, ChefHat, Clock, Star, Sparkles, ArrowLeft, Shield, Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';
import LoginButton from '@/components/auth/LoginButton';

export default function LoginPage() {
  const router = useRouter();

  const features = [
    {
      icon: Pizza,
      title: 'Smart Order Management',
      description: 'Track every pizza from order to delivery with intelligent workflow automation'
    },
    {
      icon: ChefHat,
      title: 'Kitchen Intelligence',
      description: 'Optimize preparation times and reduce waste with AI-powered insights'
    },
    {
      icon: Clock,
      title: 'Real-time Analytics',
      description: 'Monitor performance metrics and customer satisfaction in real-time'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security protecting your business data and customer information'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F2F0E9] relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='1.5' fill='%232A2E1F'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 flex min-h-screen">
        {/* Left side - Features Section */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
          <div className="flex flex-col justify-center items-start p-16 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-lg"
            >
              <motion.div
                className="flex items-center mb-12"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="bg-[#2A2E1F] p-4 rounded-2xl shadow-lg mr-4">
                  <Pizza className="h-10 w-10 text-[#F2F0E9]" />
                </div>
                <div>
                  <h1 className="text-4xl font-black text-[#2A2E1F] tracking-tight">Pieza</h1>
                  <p className="text-[#2A2E1F]/70 text-lg">Management Platform</p>
                </div>
              </motion.div>
              
              <h2 className="text-4xl lg:text-5xl font-black text-[#2A2E1F] mb-8 leading-tight tracking-tight">
                Welcome to the Future of
                <span className="block text-[#2A2E1F]/80">Pizza Business</span>
              </h2>
              
              <p className="text-xl text-[#2A2E1F]/70 mb-12 leading-relaxed">
                Join thousands of successful pizza businesses using our{' '}
                <span className="text-[#2A2E1F] font-semibold">intelligent platform</span>{' '}
                to streamline operations and boost customer satisfaction.
              </p>
              
              <div className="grid grid-cols-1 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-start space-x-4 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-[#2A2E1F]/10 hover:bg-white/80 transition-all duration-300 shadow-sm hover:shadow-lg"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="bg-[#2A2E1F] p-3 rounded-xl shadow-lg"
                    >
                      <feature.icon className="h-6 w-6 text-[#F2F0E9]" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-[#2A2E1F] mb-2 text-lg">{feature.title}</h3>
                      <p className="text-[#2A2E1F]/70 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right side - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => router.push('/')}
            className="absolute top-8 left-8 flex items-center space-x-2 text-[#2A2E1F]/70 hover:text-[#2A2E1F] transition-colors group font-medium"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md"
          >
            {/* Mobile logo */}
            <div className="lg:hidden text-center mb-12">
              <motion.div
                className="inline-flex items-center space-x-3 mb-6"
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-[#2A2E1F] p-4 rounded-2xl shadow-lg">
                  <Pizza className="h-8 w-8 text-[#F2F0E9]" />
                </div>
                <h1 className="text-3xl font-black text-[#2A2E1F] tracking-tight">
                  Pieza
                </h1>
              </motion.div>
              <p className="text-[#2A2E1F]/70 text-lg">Manage your pizza business with intelligence</p>
            </div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-[#2A2E1F]/10"
            >
              <div className="text-center mb-10">
                <h2 className="text-3xl font-black text-[#2A2E1F] mb-3 tracking-tight">Welcome Back</h2>
                <p className="text-[#2A2E1F]/70 text-lg">Sign in to access your intelligent dashboard</p>
              </div>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <LoginButton />
                </motion.div>
                
                <div className="text-center">
                  <p className="text-sm text-[#2A2E1F]/60">
                    By signing in, you agree to our{' '}
                    <a href="#" className="text-[#2A2E1F] hover:text-[#2A2E1F]/80 font-medium transition-colors underline">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-[#2A2E1F] hover:text-[#2A2E1F]/80 font-medium transition-colors underline">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 grid grid-cols-3 gap-6 text-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[#2A2E1F]/10 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="text-2xl font-black text-[#2A2E1F]">50K+</div>
                <div className="text-sm text-[#2A2E1F]/70 font-medium">Orders Processed</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[#2A2E1F]/10 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="text-2xl font-black text-[#2A2E1F]">99.9%</div>
                <div className="text-sm text-[#2A2E1F]/70 font-medium">Uptime</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[#2A2E1F]/10 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="text-2xl font-black text-[#2A2E1F]">24/7</div>
                <div className="text-sm text-[#2A2E1F]/70 font-medium">Support</div>
              </motion.div>
            </motion.div>

            {/* Hero Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-10 text-center"
            >
              {/* Replace this with your stunning pizza dashboard preview image */}
              <div className="relative">
                <img 
                  src="" 
                  alt="Pieza Dashboard Preview"
                  className="w-full h-[250px] object-cover rounded-2xl shadow-2xl border border-[#2A2E1F]/10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2E1F]/10 to-transparent rounded-2xl"></div>
                
                {/* Floating Badge */}
                <motion.div
                  className="absolute -top-3 -right-3 bg-[#2A2E1F] text-[#F2F0E9] px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                  animate={{ 
                    y: [0, -5, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles className="h-4 w-4 inline mr-1" />
                  Live Demo
                </motion.div>
              </div>
              <p className="mt-4 text-[#2A2E1F]/70 font-medium">
                Get a preview of your powerful dashboard
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

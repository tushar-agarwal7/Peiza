'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Pizza, User, ShoppingCart, Menu, X, BarChart3, Settings, Bell } from 'lucide-react';
import { useState } from 'react';
import LogoutButton from '@/components/auth/LogoutButton';
import Button from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: BarChart3 },
    { name: 'Pizza Orders', href: '/orders', icon: ShoppingCart },
  
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white/80 backdrop-blur-sm shadow-lg border-b border-[#2A2E1F]/10 sticky top-0 z-50"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='2' fill='%232A2E1F'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-8xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex justify-between h-20">
          {/* Logo and Desktop Navigation */}
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/dashboard" className="flex items-center space-x-3 mr-12">
              <motion.div 
                className="bg-[#2A2E1F] p-3 rounded-2xl shadow-lg"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Pizza className="h-8 w-8 text-[#F2F0E9]" />
              </motion.div>
              <h1 className="text-3xl font-black text-[#2A2E1F] tracking-tight">
                Pieza
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navigation.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        'inline-flex items-center px-4 py-3 rounded-2xl text-sm font-bold transition-all duration-300 relative group',
                        isActive
                          ? 'bg-[#2A2E1F] text-[#F2F0E9] shadow-lg'
                          : 'text-[#2A2E1F]/70 hover:text-[#2A2E1F] hover:bg-[#2A2E1F]/5'
                      )}
                    >
                      <item.icon className="mr-2 h-5 w-5" />
                      {item.name}
                      
                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#F2F0E9] rounded-full"
                          layoutId="activeTab"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Desktop User Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Notifications */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-3 rounded-2xl bg-[#2A2E1F]/5 hover:bg-[#2A2E1F]/10 transition-all duration-300 group"
            >
              <Bell className="h-5 w-5 text-[#2A2E1F]/70 group-hover:text-[#2A2E1F]" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            </motion.button>

            {/* User Profile */}
            <div className="flex items-center space-x-4 bg-white/60 backdrop-blur-sm rounded-2xl p-3 shadow-lg border border-[#2A2E1F]/10">
              {session?.user?.image && (
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  className="h-10 w-10 rounded-xl border-2 border-[#2A2E1F]/10 shadow-lg"
                  src={session.user.image}
                  alt={session.user.name || 'User'}
                />
              )}
              <div className="hidden xl:block">
                <p className="font-bold text-[#2A2E1F] text-sm">{session?.user?.name}</p>
                <p className="text-[#2A2E1F]/70 text-xs font-medium">{session?.user?.email}</p>
              </div>
            </div>

            <LogoutButton 
              variant="outline" 
              className="border-[#2A2E1F]/20 text-[#2A2E1F] hover:bg-[#2A2E1F]/5 font-bold"
            />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-3 rounded-2xl text-[#2A2E1F]/70 hover:text-[#2A2E1F] hover:bg-[#2A2E1F]/5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#2A2E1F]/20 transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{
          height: mobileMenuOpen ? 'auto' : 0,
          opacity: mobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="lg:hidden overflow-hidden bg-white/90 backdrop-blur-sm border-t border-[#2A2E1F]/10"
      >
        <div className="px-6 pt-4 pb-6 space-y-2">
          {navigation.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <motion.div
                key={item.name}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center px-4 py-4 rounded-2xl text-base font-bold transition-all duration-300',
                    isActive
                      ? 'bg-[#2A2E1F] text-[#F2F0E9] shadow-lg'
                      : 'text-[#2A2E1F]/70 hover:bg-[#2A2E1F]/5 hover:text-[#2A2E1F]'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="mr-3 h-6 w-6" />
                  {item.name}
                </Link>
              </motion.div>
            );
          })}
          
          {/* Mobile User Section */}
          <div className="pt-6 border-t border-[#2A2E1F]/10">
            <div className="flex items-center px-4 py-3 space-x-4 bg-[#2A2E1F]/5 rounded-2xl mb-4">
              {session?.user?.image && (
                <img
                  className="h-12 w-12 rounded-xl border-2 border-[#2A2E1F]/10"
                  src={session.user.image}
                  alt={session.user.name || 'User'}
                />
              )}
              <div>
                <div className="text-base font-bold text-[#2A2E1F]">{session?.user?.name}</div>
                <div className="text-sm font-medium text-[#2A2E1F]/70">{session?.user?.email}</div>
              </div>
            </div>
            <LogoutButton 
              variant="outline" 
              className="w-full border-[#2A2E1F]/20 text-[#2A2E1F] hover:bg-[#2A2E1F]/5 font-bold" 
            />
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
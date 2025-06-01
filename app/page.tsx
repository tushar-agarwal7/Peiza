'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Pizza, 
  ArrowRight, 
  Star, 
  Clock, 
  Users, 
  TrendingUp,
  ChefHat,
  Truck,
  Heart,
  CheckCircle,
  Play,
  Sparkles,
  Award,
  Shield,
  Zap,
  Target,
  Globe,
  BarChart3,
  Flame,
  Rocket,
  ThumbsUp,
  Trophy
} from 'lucide-react';
import Button from '@/components/ui/button';

export default function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [showVideo, setShowVideo] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    if (status === 'loading') return;
    // Don't redirect immediately - let users see the landing page
  }, [status]);

  const handleGetStarted = () => {
    if (session) {
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  };

  const stats = [
    { number: "50K+", label: "Happy Customers", icon: Users, color: "#2A2E1F" },
    { number: "99.9%", label: "Delivery Success", icon: Truck, color: "#2A2E1F" },
    { number: "24/7", label: "Support", icon: Clock, color: "#2A2E1F" },
    { number: "4.9★", label: "Average Rating", icon: Star, color: "#2A2E1F" },
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Processing",
      description: "Handle thousands of orders simultaneously with zero delays and instant confirmation"
    },
    {
      icon: ChefHat,
      title: "Smart Kitchen Management",
      description: "AI-powered workflow optimization that reduces preparation time by 40%"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption protecting your business and customer data"
    },
    {
      icon: Target,
      title: "Advanced Analytics",
      description: "Deep insights into customer behavior, peak times, and revenue optimization"
    },
    {
      icon: Globe,
      title: "Multi-Location Support",
      description: "Manage multiple pizza locations from one centralized dashboard"
    },
    {
      icon: BarChart3,
      title: "Real-time Reporting",
      description: "Live performance metrics and automated reporting for business growth"
    }
  ];

  const testimonials = [
    {
      name: "Marco Rossi",
      business: "Mario's Pizzeria",
      quote: "Pieza transformed our business. We increased efficiency by 60% and customer satisfaction is at an all-time high.",
      image: "/images/avatar-1.jpg"
    },
    {
      name: "Sarah Chen",
      business: "Golden Crust Pizza",
      quote: "The analytics helped us identify our peak hours and optimize staffing. Revenue increased by 35% in just 3 months.",
      image: "/images/avatar-2.jpg"
    },
    {
      name: "Tony Benedetto",
      business: "Authentic Italian Pizza Co.",
      quote: "Best investment we've made. The kitchen management features alone saved us 2 hours daily.",
      image: "/images/avatar-3.jpg"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#F2F0E9] relative overflow-hidden">
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 5L55 25L75 25L59 40L66 60L50 45L34 60L41 40L25 25L45 25Z' fill='%232A2E1F'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-50 flex justify-between items-center p-6 lg:px-12"
      >
        <motion.div 
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <div className="bg-[#2A2E1F] p-3 rounded-2xl shadow-lg">
            <Pizza className="h-8 w-8 text-[#F2F0E9]" />
          </div>
          <h1 className="text-3xl font-black text-[#2A2E1F] tracking-tight ">
            Pieza
          </h1>
        </motion.div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-[#2A2E1F]/70 hover:text-[#2A2E1F] transition-colors font-medium">Features</a>
          <a href="#testimonials" className="text-[#2A2E1F]/70 hover:text-[#2A2E1F] transition-colors font-medium">Reviews</a>
          <a href="#pricing" className="text-[#2A2E1F]/70 hover:text-[#2A2E1F] transition-colors font-medium">Pricing</a>
          <Button
            onClick={() => router.push('/login')}
            className="bg-[#2A2E1F] text-[#F2F0E9] hover:bg-[#1a1e11] shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Sign In
          </Button>
        </div>
      </motion.nav>
       

      {/* Hero Section */}
      <div className="relative z-10   flex flex-col items-center justify-center min-h-[90vh] px-6 text-center">
         {/* LEFT SIDE DECORATIVE ELEMENTS - FIXED POSITION */}
        <div className="fixed left-0 bottom-0 transform -translate-y-1/2 hidden xl:flex flex-col space-y-12 pl-8 z-20">
          {/* Circular Text Badge */}
          <motion.div
            className="relative w-32 h-32"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute inset-0 border-2 border-[#2A2E1F]/20 rounded-full"></div>
            <div className="absolute inset-2 border border-[#2A2E1F]/10 rounded-full"></div>
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <defs>
                <path id="circle" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"/>
              </defs>
              <text className="text-[8px] font-bold fill-[#2A2E1F]">
                <textPath href="#circle">
                  • PREMIUM • QUALITY • TRUSTED • PROFESSIONAL • Delicious • Delightful
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <Trophy className="h-8 w-8 text-[#2A2E1F]" />
            </div>
          </motion.div>

       

          {/* Animated Lines */}
          <div className="space-y-2">
            <motion.div
              className="h-1 bg-[#2A2E1F]/20 rounded-full"
              animate={{ scaleX: [1, 1.5, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ width: '80px' }}
            />
            <motion.div
              className="h-1 bg-[#2A2E1F]/15 rounded-full"
              animate={{ scaleX: [1, 1.3, 1] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              style={{ width: '60px' }}
            />
            <motion.div
              className="h-1 bg-[#2A2E1F]/10 rounded-full"
              animate={{ scaleX: [1, 1.2, 1] }}
              transition={{ duration: 5, repeat: Infinity, delay: 2 }}
              style={{ width: '40px' }}
            />
          </div>
        </div>

        {/* RIGHT SIDE DECORATIVE ELEMENTS - FIXED POSITION */}
        <div className="fixed right-0 bottom-0 transform -translate-y-1/2 hidden xl:flex flex-col space-y-12 pr-8 items-end z-20">
          {/* Trust Badges */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="space-y-4"
          >
            <motion.div 
              className="bg-[#2A2E1F] text-white p-4 rounded-2xl shadow-lg"
              whileHover={{ scale: 1.05, x: -10 }}
            >
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6" />
                <div>
                  <div className="text-sm font-bold">SSL Secured</div>
                  <div className="text-xs opacity-80">Bank-grade security</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-[#2A2E1F]/10"
              whileHover={{ scale: 1.05, x: -10 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center space-x-3">
                <div className="bg-purple-500 p-2 rounded-xl">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#2A2E1F]">Top Rated</div>
                  <div className="text-xs text-[#2A2E1F]/70">Industry Leader</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Rotating Badge */}
          <motion.div
            className="relative w-24 h-24"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#2A2E1F] to-[#1a1e11] rounded-full flex items-center justify-center shadow-xl">
              <Flame className="h-8 w-8 text-[#F2F0E9]" />
            </div>
            <div className="absolute -inset-2 border-2 border-[#2A2E1F]/20 rounded-full"></div>
          </motion.div>

        
        </div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className=" relative lg:min-h-[80vh]"
        >
           <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-6xl lg:text-[190px] font-black z-100 "
        >
          <span className="text-[#2A2E1F] crazzy tracking-[0.5rem]">
            PIEZA
          </span>
         
        </motion.h1>
          {/* Main Hero Image - Replace with your stunning pizza image */}
          <div className="relative mb-20 -mt-30">
            <img 
              src="/pieza3.png" 
              alt="Delicious Pieza Pizza Management"
              className="w-[700px]   rounded-3xl  mx-auto z-1"
            />
            
            {/* Floating Elements */}
            <motion.div
              className="absolute -top-6 -right-6 bg-[#2A2E1F] p-4 rounded-2xl shadow-xl"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Star className="h-8 w-8 text-[#F2F0E9]" />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-[#2A2E1F]/10"
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChefHat className="h-8 w-8 text-[#2A2E1F]" />
            </motion.div>

          
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-5xl lg:text-8xl font-black mb-8 leading-tight tracking-tight"
        >
          <span className="text-[#2A2E1F]">
            The Future of
          </span>
          <br />
          <span className="text-[#2A2E1F]/80 relative">
            Pizza Excellence
            <motion.div
              className="absolute -bottom-3 left-0 right-0 h-2 bg-[#2A2E1F]/20 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 1.4 }}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl lg:text-2xl text-[#2A2E1F]/70 mb-12 max-w-4xl leading-relaxed font-medium"
        >
          Transform your pizza business with our intelligent management platform.
          <br className="hidden lg:block" />
          Track orders, optimize operations, and delight customers with{' '}
          <span className="text-[#2A2E1F] font-bold">next-generation technology</span>.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 mb-16"
        >
          <Button
            onClick={handleGetStarted}
            size="lg"
            className="bg-[#2A2E1F] text-[#F2F0E9] hover:bg-[#1a1e11] text-xl px-10 py-5 shadow-xl hover:shadow-2xl transition-all duration-300 group font-bold"
          >
            Start Your Journey
            <motion.div
              className="ml-3"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="h-6 w-6" />
            </motion.div>
          </Button>
          
          <Button
            onClick={() => setShowVideo(true)}
            variant="outline"
            size="lg"
            className="border-2 border-[#2A2E1F]/30 text-[#2A2E1F] hover:bg-[#2A2E1F]/5 text-xl px-10 py-5 shadow-lg hover:shadow-xl transition-all duration-300 font-bold"
          >
            <Play className="mr-3 h-6 w-6" />
            Watch Demo
          </Button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          id="stats"
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.1, type: "spring", stiffness: 300 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-[#2A2E1F]/10 text-center group hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              <stat.icon className="h-12 w-12 text-[#2A2E1F] mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-4xl font-black text-[#2A2E1F] mb-2">{stat.number}</div>
              <div className="text-[#2A2E1F]/70 text-sm font-semibold uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="features"
        className="py-24 px-6 lg:px-12 relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-black text-[#2A2E1F] mb-6 tracking-tight">
              Why Choose Pieza?
            </h2>
            <p className="text-xl text-[#2A2E1F]/70 max-w-3xl mx-auto leading-relaxed font-medium">
              Built for modern pizza businesses that demand excellence and efficiency
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-[#2A2E1F]/10 text-center group hover:bg-white/90 transition-all duration-500 shadow-lg hover:shadow-2xl"
              >
                <motion.div
                  className="bg-[#2A2E1F] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="h-10 w-10 text-[#F2F0E9]" />
                </motion.div>
                <h3 className="text-2xl font-bold text-[#2A2E1F] mb-4">{feature.title}</h3>
                <p className="text-[#2A2E1F]/70 leading-relaxed text-lg">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="testimonials"
        className="py-24 px-6 lg:px-12 relative z-10"
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-black text-[#2A2E1F] mb-16 tracking-tight"
          >
            What Our Customers Say
          </motion.h2>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-[#2A2E1F]/10 shadow-xl"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-20 h-20 rounded-full mb-6 border-4 border-[#2A2E1F]/10"
                  />
                  <blockquote className="text-2xl text-[#2A2E1F] mb-6 leading-relaxed font-medium">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  <div className="text-center">
                    <div className="font-bold text-[#2A2E1F] text-lg">{testimonials[currentTestimonial].name}</div>
                    <div className="text-[#2A2E1F]/70">{testimonials[currentTestimonial].business}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Testimonial Dots */}
            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-[#2A2E1F]' : 'bg-[#2A2E1F]/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-24 px-6 lg:px-12 relative z-10"
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-[#2A2E1F] rounded-3xl p-16 relative overflow-hidden shadow-2xl"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='2' fill='white'/%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px'
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-6xl font-black mb-6 text-[#F2F0E9] tracking-tight">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-[#F2F0E9]/80 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
                Join thousands of successful pizza businesses already using Pieza to boost efficiency, 
                increase revenue, and create exceptional customer experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleGetStarted}
                  size="lg"
                  className="bg-[#F2F0E9] text-[#2A2E1F] hover:bg-white text-xl px-12 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 font-bold"
                >
                  Start Free Trial
                  <Heart className="ml-3 h-6 w-6" />
                </Button>
                <Button
                  onClick={() => setShowVideo(true)}
                  variant="outline"
                  size="lg"
                  className="border-2 border-[#F2F0E9]/30 text-[#F2F0E9] hover:bg-[#F2F0E9]/10 text-xl px-12 py-6 font-bold"
                >
                  <Play className="mr-3 h-6 w-6" />
                  See It In Action
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-5xl w-full aspect-video relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-6 right-6 text-[#2A2E1F]/70 hover:text-[#2A2E1F] text-3xl font-bold transition-colors"
              >
                ×
              </button>
              {/* Replace with your video */}
              <div className="w-full h-full bg-gradient-to-br from-[#F2F0E9] to-[#e5e2d9] rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <video src='/pieza-video.mp4' autoPlay loop muted className="w-full h-full" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
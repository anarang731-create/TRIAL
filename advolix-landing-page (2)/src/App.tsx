import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Target, 
  Video, 
  BarChart3, 
  Zap, 
  Clock, 
  MessageCircle,
  XCircle,
  CheckCircle,
  ShieldCheck,
  Award,
  PlayCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/919354945463" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all hover:scale-110 flex items-center justify-center"
    aria-label="Chat on WhatsApp"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
  </a>
);

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 35,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 justify-center mt-6">
      {[
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds }
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="bg-surface text-primary font-display font-bold text-2xl md:text-4xl w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-lg border border-primary/20 neon-glow">
            {item.value.toString().padStart(2, '0')}
          </div>
          <span className="text-text-muted text-xs md:text-sm mt-2 uppercase tracking-wider">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default function App() {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-text font-sans selection:bg-primary/30 flex flex-col">
      
      {/* Header */}
      <header className="h-[80px] px-6 md:px-[40px] flex items-center justify-between border-b border-white/10 shrink-0">
        <a href="tel:+919354945463" className="text-[24px] font-[800] tracking-[-1px] text-primary hover:text-primary-dark transition-colors">ADVOLIX</a>
        <nav className="hidden md:flex items-center">
          <button onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })} className="text-text-muted ml-[30px] text-[14px] font-[500] hover:text-white transition-colors cursor-pointer">Case Studies</button>
          <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="text-text-muted ml-[30px] text-[14px] font-[500] hover:text-white transition-colors cursor-pointer">Services</button>
          <button onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })} className="text-text-muted ml-[30px] text-[14px] font-[500] hover:text-white transition-colors cursor-pointer">Process</button>
          <a href="tel:+919354945463" className="text-primary ml-[30px] text-[14px] font-[500] hover:text-primary-dark transition-colors">Call Advolix: +91 9354945463</a>
        </nav>
      </header>

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px] -z-10"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-primary text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                #1 Performance Marketing Agency
              </div>
              <h1 className="text-[72px] leading-[0.95] font-[800] tracking-[-2px] mb-5">
                Scale Your Business with <span className="text-primary">High-Converting Ads</span>
              </h1>
              <p className="text-[18px] text-text-muted leading-[1.6] mb-8 max-w-[500px] mx-auto">
                We help brands generate <strong className="text-white">quality leads & sales</strong> using data-driven marketing strategies.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-10">
                <a href="tel:+919354945463" className="w-full sm:w-auto px-8 py-4 bg-primary text-black font-[700] rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 text-[16px]">
                  Get Free Strategy Call <ArrowRight size={20} />
                </a>
                <button onClick={scrollToForm} className="w-full sm:w-auto px-8 py-4 glass-panel text-white font-[700] rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-[16px]">
                  Start Running Ads Today
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10 text-left max-w-3xl mx-auto">
                <div className="border-l-2 border-primary pl-[15px]">
                  <span className="block text-[24px] font-[700]">5X</span>
                  <span className="text-[12px] text-text-muted uppercase tracking-[1px]">Avg ROI</span>
                </div>
                <div className="border-l-2 border-primary pl-[15px]">
                  <span className="block text-[24px] font-[700]">10,000+</span>
                  <span className="text-[12px] text-text-muted uppercase tracking-[1px]">Leads Generated</span>
                </div>
                <div className="border-l-2 border-primary pl-[15px]">
                  <span className="block text-[24px] font-[700]">100+</span>
                  <span className="text-[12px] text-text-muted uppercase tracking-[1px]">Active Brands</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Problem -> Solution */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display">Struggling with ads that don't convert?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <XCircle className="text-red-500 shrink-0 mt-1" />
                  <p className="text-lg text-red-100">High ad spend, low results</p>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <XCircle className="text-red-500 shrink-0 mt-1" />
                  <p className="text-lg text-red-100">Poor quality leads that never close</p>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <XCircle className="text-red-500 shrink-0 mt-1" />
                  <p className="text-lg text-red-100">No clear strategy or tracking</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 md:p-12 rounded-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px]"></div>
              <h3 className="text-3xl font-bold font-display mb-4 text-gradient-primary">We Fix That.</h3>
              <p className="text-xl text-text-muted leading-relaxed">
                At Advolix, we create <strong className="text-white">performance-driven campaigns</strong> that turn clicks into customers. Stop guessing and start scaling with a proven system.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. What You Get */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">What You Get</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">Everything you need to dominate your market and acquire customers profitably.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "High-Converting Ad Campaigns", icon: <Target size={24} />, desc: "Laser-focused campaigns designed to convert." },
              { title: "Scroll-Stopping Creatives", icon: <Video size={24} />, desc: "Ad creatives that grab attention and drive action." },
              { title: "Advanced Targeting", icon: <Users size={24} />, desc: "Reaching your ideal customers at the right time." },
              { title: "Daily Optimization", icon: <Zap size={24} />, desc: "Continuous tweaking to maximize your ROI." },
              { title: "Detailed Reporting", icon: <BarChart3 size={24} />, desc: "Transparent metrics so you know exactly where your money goes." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-8 rounded-2xl hover:bg-surface-hover transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-text-muted">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Services */}
      <section id="services" className="py-24 bg-surface border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Our Services</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">Specialized solutions for aggressive growth.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-panel p-8 rounded-2xl border-l-4 border-l-primary">
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                <span className="text-primary">💡</span> Meta Ads (FB & IG)
              </h3>
              <p className="text-text-muted">Generate leads & sales with precision targeting on the world's largest social platforms.</p>
            </div>
            <div className="glass-panel p-8 rounded-2xl border-l-4 border-l-gold">
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                <span className="text-gold">🎥</span> Creative & Video
              </h3>
              <p className="text-text-muted">High-impact video ads and statics that stop the scroll and compel users to click.</p>
            </div>
            <div className="glass-panel p-8 rounded-2xl border-l-4 border-l-purple-500">
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                <span className="text-purple-500">📊</span> Ad Management
              </h3>
              <p className="text-text-muted">From initial setup to aggressive scaling — we handle the entire media buying process.</p>
            </div>
            <div className="glass-panel p-8 rounded-2xl border-l-4 border-l-green-500">
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                <span className="text-green-500">📈</span> Performance Marketing
              </h3>
              <p className="text-text-muted">Holistic, data-backed strategies focused purely on maximizing your Return on Investment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Results (Social Proof) */}
      <section id="case-studies" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/abstract/1920/1080')] opacity-5 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl md:text-7xl font-display font-bold text-gradient-primary mb-2">5X</div>
              <p className="text-xl font-medium text-text-muted uppercase tracking-wider">Average ROI</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-7xl font-display font-bold text-white mb-2">100+</div>
              <p className="text-xl font-medium text-text-muted uppercase tracking-wider">Campaigns Managed</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-7xl font-display font-bold text-gradient-gold mb-2">10k+</div>
              <p className="text-xl font-medium text-text-muted uppercase tracking-wider">Leads Generated</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="glass-panel p-8 md:p-12 rounded-3xl text-center relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-6xl text-primary opacity-50">"</div>
              <p className="text-2xl md:text-3xl font-display font-medium leading-relaxed mb-8">
                Advolix helped us scale our business with consistent, high-quality leads. Our cost per acquisition dropped by 40% in the first month!
              </p>
              <div className="flex items-center justify-center gap-4">
                <img src="https://picsum.photos/seed/ceo/100/100" alt="Client" className="w-16 h-16 rounded-full object-cover" referrerPolicy="no-referrer" />
                <div className="text-left">
                  <p className="font-bold text-lg">Vani Asri</p>
                  <p className="text-text-muted">CEO, TechFlow Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. How It Works */}
      <section id="process" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">How It Works</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">Three simple steps to predictable growth.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0"></div>
            
            {[
              { step: "1", title: "Book a Strategy Call", desc: "We analyze your current situation and map out a custom growth plan." },
              { step: "2", title: "We Create & Launch", desc: "Our team builds your campaigns, creatives, and tracking systems." },
              { step: "3", title: "You Get Leads & Sales", desc: "Watch your pipeline fill up as we optimize for maximum ROI." }
            ].map((item, i) => (
              <div key={i} className="relative text-center z-10">
                <div className="w-24 h-24 mx-auto bg-background border-2 border-primary rounded-full flex items-center justify-center text-3xl font-bold font-display text-primary mb-6 neon-glow">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why Choose Advolix */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-full bg-primary/5 absolute -top-10 -left-10 w-[120%] h-[120%] blur-3xl -z-10"></div>
              <img src="https://picsum.photos/seed/team/800/800" alt="Our Team" className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
              
              {/* Trust Badge */}
              <div className="absolute -bottom-6 -right-6 glass-panel p-6 rounded-2xl flex items-center gap-4 gold-glow">
                <ShieldCheck className="text-gold w-12 h-12" />
                <div>
                  <p className="font-bold text-xl">100% Verified</p>
                  <p className="text-sm text-text-muted">Proven ROI Track Record</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-8">Why Choose Advolix?</h2>
              <div className="space-y-6">
                {[
                  { title: "ROI-Focused Approach", desc: "We don't care about vanity metrics. We care about your bottom line." },
                  { title: "Creative + Data Strategy", desc: "The perfect blend of scroll-stopping art and rigorous science." },
                  { title: "Fast Scaling Methods", desc: "When we find a winner, we know exactly how to scale it aggressively." },
                  { title: "Dedicated Support", desc: "Direct access to the media buyers managing your account." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 bg-primary/20 p-2 rounded-full h-fit">
                      <CheckCircle className="text-primary w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-text-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Urgency Section */}
      <section className="py-20 bg-primary/10 border-y border-primary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/noise/1920/1080')] opacity-5 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 text-red-400 text-sm font-bold mb-6 uppercase tracking-wider">
            ⚠️ Limited Slots Available This Month
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">We only work with a limited number of clients to ensure best results.</h2>
          <p className="text-xl text-text-muted mb-8">Book your slot before it's gone.</p>
          
          <CountdownTimer />
        </div>
      </section>

      {/* 9 & 10. Final CTA & Lead Form */}
      <section id="lead-form" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-panel rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
              <div className="p-10 md:p-16 bg-surface flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Ready to Grow Your Business?</h2>
                <p className="text-xl text-text-muted mb-8">
                  Get high-quality leads & scale faster with Advolix. Fill out the form to get your free strategy consultation.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Award className="text-gold" /> <span className="font-medium">Free Campaign Audit</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="text-gold" /> <span className="font-medium">Custom Growth Strategy</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="text-gold" /> <span className="font-medium">Competitor Analysis</span>
                  </div>
                </div>
                
                <div className="mt-auto pt-8 border-t border-white/10">
                  <p className="text-sm text-text-muted flex items-center gap-2">
                    <ShieldCheck size={16} className="text-green-500" /> Your information is 100% secure.
                  </p>
                </div>
              </div>
              
              <div className="p-10 md:p-16 bg-surface relative rounded-[24px] border border-white/10">
                <div className="absolute -top-3 right-10 bg-primary text-black text-[10px] font-[800] px-3 py-1 rounded-full uppercase">
                  Limited Slots Available This Month
                </div>
                
                <form className="relative z-10 space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-[11px] font-[600] text-text-muted uppercase mb-1.5">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-[#1a1a1a] border border-[#333] rounded-[8px] px-3 py-3 text-white text-[14px] focus:outline-none focus:border-primary transition-colors"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-[11px] font-[600] text-text-muted uppercase mb-1.5">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full bg-[#1a1a1a] border border-[#333] rounded-[8px] px-3 py-3 text-white text-[14px] focus:outline-none focus:border-primary transition-colors"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-[11px] font-[600] text-text-muted uppercase mb-1.5">Business Type / Website</label>
                    <input 
                      type="text" 
                      className="w-full bg-[#1a1a1a] border border-[#333] rounded-[8px] px-3 py-3 text-white text-[14px] focus:outline-none focus:border-primary transition-colors"
                      placeholder="e.g. E-commerce, Real Estate"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-[11px] font-[600] text-text-muted uppercase mb-1.5">Monthly Ad Budget</label>
                    <select className="w-full bg-[#1a1a1a] border border-[#333] rounded-[8px] px-3 py-3 text-white text-[14px] focus:outline-none focus:border-primary transition-colors appearance-none" required defaultValue="">
                      <option value="" disabled>Select your budget</option>
                      <option value="under-50k">Under ₹50,000</option>
                      <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                      <option value="1l-5l">₹1,00,000 - ₹5,00,000</option>
                      <option value="5l-plus">₹5,00,000+</option>
                    </select>
                  </div>
                  
                  <button type="submit" className="w-full py-4 bg-primary text-black font-[700] text-[16px] rounded-[8px] hover:bg-primary-dark transition-colors mt-2">
                    Submit & Get Free Consultation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Contact Us */}
      <section id="contact" className="py-24 bg-background border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Contact Us</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">Get in touch with us directly.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass-panel p-8 rounded-2xl text-center flex flex-col items-center hover:bg-surface-hover transition-colors">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Phone size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Phone</h3>
              <a href="tel:+919354945463" className="text-text-muted hover:text-primary transition-colors text-lg">+91 9354945463</a>
            </div>
            <div className="glass-panel p-8 rounded-2xl text-center flex flex-col items-center hover:bg-surface-hover transition-colors">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Mail size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Email</h3>
              <a href="mailto:anarang731@gmail.com" className="text-text-muted hover:text-primary transition-colors text-lg">anarang731@gmail.com</a>
            </div>
            <div className="glass-panel p-8 rounded-2xl text-center flex flex-col items-center hover:bg-surface-hover transition-colors">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Address</h3>
              <p className="text-text-muted text-lg">Shahdara, Delhi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="h-auto md:h-[100px] py-6 md:py-0 px-6 md:px-[40px] border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shrink-0">
        <div className="flex flex-wrap justify-center gap-[24px]">
          <span className="text-[12px] text-text-muted flex items-center gap-[8px] before:content-['✓'] before:text-primary before:font-[900]">Meta Ads</span>
          <span className="text-[12px] text-text-muted flex items-center gap-[8px] before:content-['✓'] before:text-primary before:font-[900]">Creative Production</span>
          <span className="text-[12px] text-text-muted flex items-center gap-[8px] before:content-['✓'] before:text-primary before:font-[900]">Ad Management</span>
          <span className="text-[12px] text-text-muted flex items-center gap-[8px] before:content-['✓'] before:text-primary before:font-[900]">Performance Scaling</span>
        </div>
        <div className="flex gap-[20px] opacity-50">
          <span className="text-[11px] font-[600]">CERTIFIED PARTNER</span>
          <span className="text-[11px] font-[600]">TOP RATED AGENCY</span>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
}

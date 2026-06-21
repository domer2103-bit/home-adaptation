import { useState } from 'react';
import { Phone, Menu, X, Activity } from 'lucide-react';
import { ServiceId } from '../types';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string, params?: any) => void;
  allServices: { id: ServiceId; title: string }[];
}

export default function Navigation({ currentPage, onNavigate, allServices }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (page: string, params?: any) => {
    onNavigate(page, params);
    setIsOpen(false);
  };

  const menuItems = [
    { label: 'Home', page: 'home' },
    { label: 'Walk-in Showers', page: 'service-walk-in-showers' },
    { label: 'Stairlifts', page: 'service-stairlifts' },
    { label: 'Ramps', page: 'service-ramps' },
    { label: 'Areas We Cover', page: 'areas' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm" id="main-nav-header">
      {/* Top Trust Bar */}
      <div className="w-full bg-slate-900 text-slate-300 py-1.5 px-4 text-[10px] font-bold uppercase tracking-widest text-center sm:px-6">
        Serving Liverpool, Wirral, Sefton, Knowsley, and surrounding areas
      </div>

      <div className="max-w-7xl mx-auto px-4 h-20 sm:px-6 lg:px-8 flex justify-between items-center bg-white">
        {/* Branding */}
        <button
          onClick={() => handleLinkClick('home')}
          className="flex items-center space-x-2 text-left focus:outline-none"
          id="branding-logo-btn"
        >
          <div className="bg-brand-600 text-white p-2 rounded-xl shadow-sm">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xl font-black font-display text-slate-900 leading-none block uppercase tracking-tight">Merseyside</span>
            <span className="text-[11px] text-brand-600 font-bold uppercase tracking-widest block">Home Adaptations</span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 font-bold text-sm text-slate-600" id="desktop-nav-bar">
          {menuItems.map((item) => (
            <button
              key={item.page}
              onClick={() => handleLinkClick(item.page)}
              className={`hover:text-brand-600 transition-colors ${currentPage === item.page ? 'text-brand-600' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Button & Menu Toggle */}
        <div className="flex items-center space-x-4">
          <a
            href="tel:+447899030990"
            className="hidden md:flex items-center space-x-2 bg-emerald-50 text-emerald-800 px-5 py-2.5 rounded-full border border-emerald-100 hover:bg-emerald-100 transition-all font-black text-xs uppercase tracking-wider"
          >
            <Phone className="w-4 h-4 text-emerald-600" />
            <span>07899 030 990</span>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-900 focus:outline-none"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-8 space-y-6 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleLinkClick(item.page)}
                className={`text-left text-lg font-bold ${currentPage === item.page ? 'text-brand-600' : 'text-slate-800'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-6 border-t border-slate-100">
            <a
              href="tel:+447899030990"
              className="flex items-center justify-center space-x-2 bg-brand-600 text-white w-full py-4 rounded-xl font-bold text-sm shadow-lg shadow-brand-200"
            >
              <Phone className="w-4 h-4" />
              <span>Free Consultation: 07899 030 990</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

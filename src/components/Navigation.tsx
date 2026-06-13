import React, { useState } from 'react';
import { Phone, Menu, X, ChevronDown, ShieldCheck, HelpCircle, FileText, MapPin, Activity } from 'lucide-react';
import { ServiceId } from '../types';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string, params?: any) => void;
  allServices: { id: ServiceId; title: string }[];
  allCities: { id: string; name: string }[];
}

export default function Navigation({ currentPage, onNavigate, allServices, allCities }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [citiesDropdown, setCitiesDropdown] = useState(false);
  const [helpDropdown, setHelpDropdown] = useState(false);

  const handleLinkClick = (page: string, params?: any) => {
    onNavigate(page, params);
    setIsOpen(false);
    setServicesDropdown(false);
    setCitiesDropdown(false);
    setHelpDropdown(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm" id="main-nav-header">
      {/* Top Warning/Trust Bar */}
      <div className="w-full bg-slate-900 text-slate-100 py-2 px-4 text-xs font-semibold flex flex-wrap justify-between items-center sm:px-6">
        <div className="flex items-center space-x-2 text-slate-300">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>UK Government VAT Exemption: Save 20% on all qualified disability adaptations</span>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <span className="text-slate-400">Vetted & Checked Installers</span>
          <span className="text-emerald-400">★ ★ ★ ★ ★ TrustScore 4.9/5</span>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 h-18 sm:px-6 lg:px-8 flex justify-between items-center bg-white">
        {/* Branding */}
        <button
          onClick={() => handleLinkClick('home')}
          className="flex items-center space-x-2 text-left focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg p-1"
          id="branding-logo-btn"
        >
          <div className="bg-brand-600 text-white p-2 rounded-lg">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xl font-bold font-display text-slate-900 leading-none block">Home Adaptations</span>
            <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block">UK Independent Living</span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 font-medium text-slate-700" id="desktop-nav-bar">
          <button
            onClick={() => handleLinkClick('home')}
            className={`px-3 py-2 rounded-md hover:bg-slate-50 transition ${currentPage === 'home' ? 'text-brand-600 font-semibold' : ''}`}
          >
            Home
          </button>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onMouseEnter={() => { setServicesDropdown(true); setCitiesDropdown(false); setHelpDropdown(false); }}
              onClick={() => setServicesDropdown(!servicesDropdown)}
              className={`px-3 py-2 flex items-center space-x-1 rounded-md hover:bg-slate-50 transition ${currentPage === 'services' || currentPage.startsWith('service-') ? 'text-brand-600 font-semibold' : ''}`}
            >
              <span>Our Services</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {servicesDropdown && (
              <div 
                className="absolute left-0 mt-1 w-72 bg-white rounded-lg shadow-xl ring-1 ring-black/5 divide-y divide-slate-100 p-2 z-50 border border-slate-100"
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <button
                  onClick={() => handleLinkClick('services')}
                  className="w-full text-left px-4 py-2 text-sm font-semibold text-brand-600 hover:bg-slate-50 rounded-md block mb-1"
                >
                  Services Overview
                </button>
                <div className="grid grid-cols-1 gap-1 pt-1">
                  {allServices.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => handleLinkClick(`service-${service.id}`)}
                      className="w-full text-left px-4 py-2 text-xs font-medium text-slate-800 hover:bg-brand-50 hover:text-brand-800 rounded-md truncate transition"
                    >
                      {service.title}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Funding & Help Dropdown */}
          <div className="relative">
            <button
              onMouseEnter={() => { setHelpDropdown(true); setServicesDropdown(false); setCitiesDropdown(false); }}
              onClick={() => setHelpDropdown(!helpDropdown)}
              className={`px-3 py-2 flex items-center space-x-1 rounded-md hover:bg-slate-50 transition ${currentPage.startsWith('funding-') ? 'text-brand-600 font-semibold' : ''}`}
            >
              <span>Funding & Help</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {helpDropdown && (
              <div 
                className="absolute left-0 mt-1 w-64 bg-white rounded-lg shadow-xl ring-1 ring-black/5 p-2 z-50 border border-slate-100"
                onMouseLeave={() => setHelpDropdown(false)}
              >
                <button
                  onClick={() => handleLinkClick('funding-dfg')}
                  className="w-full text-left px-4 py-2.5 text-xs font-semibold text-slate-800 hover:bg-brand-50 hover:text-brand-800 rounded-md flex items-center space-x-2"
                >
                  <FileText className="w-4 h-4 text-brand-600" />
                  <div>
                    <p className="font-semibold block">Disabled Facilities Grant</p>
                    <p className="text-[10px] text-slate-500 font-normal">Apply for up to £30k funding</p>
                  </div>
                </button>
                <button
                  onClick={() => handleLinkClick('funding-council-adaptations')}
                  className="w-full text-left px-4 py-2.5 text-xs font-semibold text-slate-800 hover:bg-brand-50 hover:text-brand-800 rounded-md flex items-center space-x-2"
                >
                  <HelpCircle className="w-4 h-4 text-brand-600" />
                  <div>
                    <p className="font-semibold block">Minor Adaptations</p>
                    <p className="text-[10px] text-slate-500 font-normal">Free assistance under £1,000</p>
                  </div>
                </button>
                <button
                  onClick={() => handleLinkClick('funding-ot-assessment')}
                  className="w-full text-left px-4 py-2.5 text-xs font-semibold text-slate-800 hover:bg-brand-50 hover:text-brand-800 rounded-md flex items-center space-x-2"
                >
                  <Activity className="w-4 h-4 text-brand-600" />
                  <div>
                    <p className="font-semibold block">Free OT Assessment</p>
                    <p className="text-[10px] text-slate-500 font-normal">Clinical safety evaluation</p>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* Local Help Dropdown */}
          <div className="relative">
            <button
              onMouseEnter={() => { setCitiesDropdown(true); setServicesDropdown(false); setHelpDropdown(false); }}
              onClick={() => setCitiesDropdown(!citiesDropdown)}
              className={`px-3 py-2 flex items-center space-x-1 rounded-md hover:bg-slate-50 transition ${currentPage.startsWith('city-') ? 'text-brand-600 font-semibold' : ''}`}
            >
              <span>Local Support</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {citiesDropdown && (
              <div 
                className="absolute right-0 mt-1 w-80 bg-white rounded-lg shadow-xl ring-1 ring-black/5 divide-y divide-slate-100 p-2 z-50 border border-slate-100"
                onMouseLeave={() => setCitiesDropdown(false)}
              >
                <div className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Select Your UK City Areas
                </div>
                <div className="grid grid-cols-2 gap-1 pt-1 text-xs">
                  {allCities.map((city) => (
                    <button
                      key={city.id}
                      onClick={() => handleLinkClick(`city-${city.id}`)}
                      className="w-full text-left px-3 py-2 font-medium text-slate-800 hover:bg-brand-50 hover:text-brand-800 rounded-md truncate transition flex items-center space-x-1"
                    >
                      <MapPin className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                      <span>{city.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => handleLinkClick('contact')}
            className={`px-3 py-2 rounded-md hover:bg-slate-50 transition ${currentPage === 'contact' ? 'text-brand-600 font-semibold' : ''}`}
          >
            Contact & Callback
          </button>
        </nav>

        {/* Action Button & Menu Toggles */}
        <div className="flex items-center space-x-3">
          {/* Quick Click-to-Call Link */}
          <a
            href="tel:08000123456"
            className="flex items-center space-x-2 bg-emerald-50 text-emerald-800 px-4 py-2 border border-emerald-200 rounded-full hover:bg-emerald-100 transition-smooth font-bold text-sm tracking-wide shadow-sm"
            id="quick-call-link"
          >
            <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="hidden sm:inline">Free Advice Line:</span>
            <span>0800 012 3456</span>
          </a>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-md"
            aria-expanded={isOpen}
            id="mobile-menu-toggle-btn"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-slate-50 px-4 pt-2 pb-6 space-y-3 shadow-inner max-h-[85vh] overflow-y-auto" id="mobile-nav-panel">
          <div className="space-y-1">
            <button
              onClick={() => handleLinkClick('home')}
              className="w-full text-left px-4 py-3 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-200 block"
            >
              Home
            </button>
            <button
              onClick={() => handleLinkClick('services')}
              className="w-full text-left px-4 py-3 rounded-lg text-sm font-semibold text-brand-600 hover:bg-slate-200 block"
            >
              Services Overview
            </button>
          </div>

          {/* Mobile Service Sub-menu */}
          <div className="bg-white rounded-lg border border-slate-200 p-2">
            <p className="px-3 py-1 text-xs font-bold uppercase text-slate-400 tracking-wider">Services</p>
            <div className="grid grid-cols-2 gap-1 pt-1">
              {allServices.map((service) => (
                <button
                  key={service.id}
                  onClick={() => handleLinkClick(`service-${service.id}`)}
                  className="text-left px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-md truncate"
                >
                  {service.title.split(' (')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Funding Sub-menu */}
          <div className="bg-white rounded-lg border border-slate-200 p-2">
            <p className="px-3 py-1 text-xs font-bold uppercase text-slate-400 tracking-wider">Funding Guides</p>
            <div className="space-y-1 pt-1">
              <button
                onClick={() => handleLinkClick('funding-dfg')}
                className="w-full text-left px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-md block"
              >
                Disabled Facilities Grant (DFG) Guide
              </button>
              <button
                onClick={() => handleLinkClick('funding-council-adaptations')}
                className="w-full text-left px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-md block"
              >
                Council Minor Adaptations Guide
              </button>
              <button
                onClick={() => handleLinkClick('funding-ot-assessment')}
                className="w-full text-left px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-md block"
              >
                Occupational Therapist Assessment Step
              </button>
            </div>
          </div>

          {/* Mobile Local Sub-menu */}
          <div className="bg-white rounded-lg border border-slate-200 p-2">
            <p className="px-3 py-1 text-xs font-bold uppercase text-slate-400 tracking-wider">Local Support Hubs</p>
            <div className="grid grid-cols-2 gap-1 pt-1">
              {allCities.map((city) => (
                <button
                  key={city.id}
                  onClick={() => handleLinkClick(`city-${city.id}`)}
                  className="text-left px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-md truncate flex items-center space-x-1"
                >
                  <MapPin className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                  <span>{city.name}</span>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => handleLinkClick('contact')}
            className="w-full text-center bg-brand-600 text-white font-bold py-3.5 rounded-lg text-sm hover:bg-brand-700 transition block"
          >
            Request Free Survey Callback
          </button>
        </div>
      )}
    </header>
  );
}

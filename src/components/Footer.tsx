import React from 'react';
import { Phone, MapPin, ShieldCheck, Mail, Heart, Building2, HelpCircle } from 'lucide-react';
import { ServiceId } from '../types';

interface FooterProps {
  onNavigate: (page: string, params?: any) => void;
  allServices: { id: ServiceId; title: string }[];
  allCities: { id: string; name: string }[];
}

export default function Footer({ onNavigate, allServices, allCities }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t-4 border-brand-600" id="global-application-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About & Trust */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="bg-brand-600 text-white p-2 rounded-lg">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-lg font-bold font-display text-white leading-none block">Home Adaptations</span>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">UK Independent Living</span>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            The leading independent UK portal matching local residents, elderly families, and disabled citizens with approved, vetted local home improvement professionals.
          </p>
          <div className="bg-slate-800 p-4 rounded-xl border border-slate-700/50 space-y-2">
            <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Accredited Installer Standards</p>
            <div className="flex flex-wrap gap-2 text-[9px] font-bold text-slate-300">
              <span className="bg-slate-700 px-2 py-1 rounded">CHAS Vetted</span>
              <span className="bg-slate-700 px-2 py-1 rounded">SafeContractor Standards</span>
              <span className="bg-slate-700 px-2 py-1 rounded">NICEIC Electricals</span>
              <span className="bg-slate-700 px-2 py-1 rounded">Trustmark Compliant</span>
            </div>
          </div>
        </div>

        {/* Adaptations List */}
        <div className="space-y-4">
          <h4 className="text-white font-bold font-display text-sm uppercase tracking-wider">Adaptations We Group</h4>
          <ul className="grid grid-cols-1 gap-2 text-xs">
            {allServices.slice(0, 6).map((service) => (
              <li key={service.id}>
                <button
                  onClick={() => onNavigate(`service-${service.id}`)}
                  className="hover:text-white transition hover:underline text-left"
                >
                  {service.title.split(' (')[0]}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => onNavigate('services')}
                className="text-brand-400 hover:text-brand-300 transition font-bold"
              >
                View All 10 Services →
              </button>
            </li>
          </ul>
        </div>

        {/* Funding Categories */}
        <div className="space-y-4">
          <h4 className="text-white font-bold font-display text-sm uppercase tracking-wider">UK Funding Guides</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button
                onClick={() => onNavigate('funding-dfg')}
                className="hover:text-white transition hover:underline text-left block"
              >
                Disabled Facilities Grant (DFG)
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('funding-council-adaptations')}
                className="hover:text-white transition hover:underline text-left block"
              >
                Free Council Minor Adaptations
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('funding-ot-assessment')}
                className="hover:text-white transition hover:underline text-left block"
              >
                Booking an Occupational Therapist (OT)
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('contact')}
                className="hover:text-white transition hover:underline text-left block"
              >
                VAT Exemption 20% Discount Steps
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('articles')}
                className="hover:text-white text-md transition hover:underline text-left block font-bold text-brand-400"
              >
                Advice & Articles Hub (20 Guides)
              </button>
            </li>
          </ul>

          <div className="pt-3 border-t border-slate-800">
            <h5 className="text-white font-bold text-xs mb-1">General Queries:</h5>
            <a href="mailto:advice@homeadaptations.org.uk" className="text-xs text-brand-400 hover:underline flex items-center space-x-1">
              <Mail className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span>advice@homeadaptations.org.uk</span>
            </a>
          </div>
        </div>

        {/* Local Areas Coverage */}
        <div className="space-y-4">
          <h4 className="text-white font-bold font-display text-sm uppercase tracking-wider">Coverage UK Cities</h4>
          <p className="text-[10px] text-slate-400">Click to view local council advice, OT helper desks, and case studies:</p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {allCities.slice(0, 8).map((city) => (
              <button
                key={city.id}
                onClick={() => onNavigate(`city-${city.id}`)}
                className="hover:text-white text-left transition text-slate-400 hover:underline flex items-center space-x-1"
              >
                <MapPin className="w-3 h-3 text-brand-500" />
                <span>{city.name}</span>
              </button>
            ))}
          </div>
          <p className="text-[11px] text-slate-500 italic mt-2">Plus all associated UK towns and counties.</p>
        </div>
      </div>

      {/* Trust & Legal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-800 text-xs text-slate-500 space-y-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
          <p className="leading-relaxed max-w-2xl">
            Disclaimer: <strong>Home Adaptations UK</strong> is an independent advisory and lead generation platform. We do not make final funding decisions—these belong exclusively to your local UK authority. Private works are undertaken by independent contractors vetted for safety compliance.
          </p>
          <div className="flex items-center space-x-2 text-slate-400 font-bold shrink-0">
            <Building2 className="w-4 h-4 text-brand-500 shrink-0" />
            <span>ICO Data Registry No. Z4481309</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-4 border-t border-slate-800 text-[11px]">
          <p>© {currentYear} Home Adaptations UK. All rights reserved. Registered UK Advisory Support.</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <button onClick={() => onNavigate('home')} className="hover:underline">Privacy Policy</button>
            <span>|</span>
            <button onClick={() => onNavigate('home')} className="hover:underline">Terms of Service</button>
            <span>|</span>
            <button onClick={() => onNavigate('contact')} className="hover:underline">Contact Support</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React, { useState, useEffect } from 'react';
import {
  ChevronUpSquare,
  ShowerHead,
  Bath,
  Activity,
  Layers,
  Columns,
  Grid,
  Shuffle,
  ChevronsUpDown,
  Shield,
  Clock,
  Coins,
  FileText,
  UserCheck,
  MapPin,
  CheckCircle,
  Phone,
  ArrowRight,
  ShieldCheck,
  Award,
  HelpCircle,
  Sparkles,
  ChevronRight,
  Menu,
  Heart,
  Landmark,
  Building2,
  Calendar,
  Check,
  ShieldAlert,
  Mail
} from 'lucide-react';
import { ServiceId, Service, FundingGuide, CityData } from './types';
import { servicesData } from './data/services';
import { fundingGuidesData, generalFaqData } from './data/funding';
import { citiesData } from './data/cities';
import Navigation from './components/Navigation';
import CallbackForm from './components/CallbackForm';
import LeadCalculator from './components/LeadCalculator';
import Footer from './components/Footer';

// Dynamic Icon Resolver Helper
function getServiceIcon(iconName: string, className = "w-6 h-6 text-brand-600") {
  switch (iconName) {
    case 'ChevronUpSquare':
      return <ChevronUpSquare className={className} />;
    case 'ShowerHead':
      return <ShowerHead className={className} />;
    case 'Bath':
      return <Bath className={className} />;
    case 'Activity':
      return <Activity className={className} />;
    case 'Layers':
      return <Layers className={className} />;
    case 'Columns':
      return <Columns className={className} />;
    case 'Grid':
      return <Grid className={className} />;
    case 'Shuffle':
      return <Shuffle className={className} />;
    case 'ChevronsUpDown':
      return <ChevronsUpDown className={className} />;
    case 'Shield':
    default:
      return <Shield className={className} />;
  }
}

export default function App() {
  // Navigation State
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [currentPageParams, setCurrentPageParams] = useState<any>(null);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Handle document title & metadata injection dynamically for rich SEO feel
  useEffect(() => {
    let title = 'Home Adaptations Merseyside | Walk-in Showers, Stairlifts & Ramps';
    let metaDesc = 'Merseyside home adaptations for safer, easier living. We install walk-in showers, stairlifts, and access ramps across Liverpool, Wirral, Sefton, Knowsley and surrounding areas.';

    if (currentPage === 'services') {
      title = 'Our Services - Walk-in Showers, Stairlifts & Access Ramps';
    } else if (currentPage.startsWith('service-')) {
      const srvId = currentPage.replace('service-', '') as ServiceId;
      const srv = servicesData.find(s => s.id === srvId);
      if (srv) {
        title = `${srv.title} Merseyside | Specialist Installation & Grants`;
        metaDesc = srv.shortDesc;
      }
    } else if (currentPage === 'areas') {
      title = 'Service Areas | Liverpool, Wirral, Sefton & Merseyside Coverage';
      metaDesc = 'We provide home adaptations across all Merseyside boroughs including Liverpool, Wirral, Sefton, Knowsley, St Helens, and West Lancashire.';
    } else if (currentPage === 'contact') {
      title = 'Get a Free Quote | Merseyside Home Adaptations';
    }

    document.title = title;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', metaDesc);
  }, [currentPage]);

  const handleNavigate = (page: string, params?: any) => {
    setCurrentPage(page);
    if (params) {
      setCurrentPageParams(params);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-100 selection:text-brand-900" id="app-viewport-root">
      <Navigation
        currentPage={currentPage}
        onNavigate={handleNavigate}
        allServices={servicesData}
      />

      <main className="flex-1">
        {currentPage === 'home' && renderHome()}
        {currentPage.startsWith('service-') && renderServiceSubpage()}
        {currentPage === 'areas' && renderAreasPage()}
        {currentPage === 'contact' && renderContactPage()}
      </main>

      {/* Trustpilot & Accreditation Banner (Pre-footer) */}
      <section className="bg-slate-100 py-10 border-t border-slate-200" id="accreditation-trust-badges">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Partnered Vetted Installer Networks</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center opacity-75 grayscale hover:grayscale-0 transition-all">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/50 flex flex-col items-center">
              <span className="font-display font-black text-slate-800 text-lg">CHAS</span>
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wide">Accredited Safety</span>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/50 flex flex-col items-center">
              <span className="font-display font-black text-slate-800 text-lg">SafeContractor</span>
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wide">Approved Builder</span>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/50 flex flex-col items-center">
              <span className="font-display font-black text-slate-800 text-lg">NICEIC</span>
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wide">Competent Electricians</span>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200/50 flex flex-col items-center">
              <span className="font-display font-black text-slate-800 text-lg">TrustMark</span>
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wide">Government Standard</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer component */}
      <Footer
        onNavigate={handleNavigate}
        allServices={servicesData}
        allCities={citiesData}
      />

      {/* Sticky Mobile Click-to-Call Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 text-white p-3 z-40 flex items-center justify-between shadow-[0_-4px_10px_rgba(0,0,0,0.15)]">
        <div className="text-left pl-2">
          <p className="text-[10px] text-brand-400 font-bold uppercase tracking-wider">Independent Advice Line</p>
          <p className="text-sm font-extrabold text-white">+44 78 990 30 990</p>
        </div>
        <a
          href="tel:+447899030990"
          className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black py-2.5 px-4 rounded-full flex items-center space-x-1.5 shadow"
          id="sticky-mobile-call-link"
        >
          <Phone className="w-4 h-4 shrink-0" />
          <span>Tap to Call</span>
        </a>
      </div>
    </div>
  );

  // ==========================================
  // PAGE RENDERERS
  // ==========================================

  // 1. HOME PAGE
  function renderHome() {
    return (
      <div id="home-page-container">
        {/* Section 1: Hero section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-brand-900 text-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
          <div className="relative max-w-7xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight leading-tight max-w-4xl mx-auto">
              Merseyside Home Adaptations for Safer, Easier Living
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium">
              Walk-in showers, stairlifts, and access ramps fitted by local specialists.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <button
                onClick={() => handleNavigate('contact')}
                className="bg-brand-600 hover:bg-brand-700 text-white font-bold px-10 py-4 rounded-xl text-sm transition-all shadow-xl shadow-brand-900/20 active:scale-95"
              >
                Get a Free Quote
              </button>
              <a
                href="#eligibility"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold px-10 py-4 rounded-xl text-sm border border-white/20 transition-all active:scale-95 flex items-center justify-center"
              >
                Check My Eligibility
              </a>
            </div>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest pt-2">
              Serving Liverpool, Wirral, Sefton, Knowsley, and surrounding areas.
            </p>
          </div>
        </section>

        {/* Section 2: Service blocks (3 cards) */}
        <section className="py-24 bg-white" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {servicesData.map((srv) => (
                <div key={srv.id} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-brand-200 transition-all hover:shadow-2xl hover:shadow-slate-200/50 group">
                  <div className="bg-brand-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-100 group-hover:scale-110 transition-transform">
                    {getServiceIcon(srv.iconName, "w-7 h-7")}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3">{srv.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {srv.shortDesc}
                  </p>
                  <button
                    onClick={() => handleNavigate(`service-${srv.id}`)}
                    className="text-brand-600 font-bold text-sm flex items-center space-x-2 group-hover:space-x-3 transition-all"
                  >
                    <span>Learn more about {srv.id === 'walk-in-showers' ? 'walk-in showers' : srv.id === 'stairlifts' ? 'stairlifts' : 'ramps'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Why choose us */}
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-600/5 blur-3xl rounded-full" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-16">Why Choose Us?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                "Local Merseyside coverage across Liverpool and surrounding boroughs.",
                "Friendly advice and free home assessment.",
                "Fast turnaround where possible and professional installation.",
                "Adaptations tailored to your mobility needs and home layout."
              ].map((point, i) => (
                <div key={i} className="flex flex-col items-center space-y-4">
                  <div className="bg-brand-500/10 p-3 rounded-full">
                    <CheckCircle className="w-6 h-6 text-brand-400" />
                  </div>
                  <p className="text-slate-300 font-medium">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Eligibility Tool */}
        <section className="py-24 bg-slate-50" id="eligibility">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Check Your Funding Eligibility</h2>
              <p className="text-slate-600">Many Merseyside residents are entitled to local grants or VAT relief. Use our tool to find out what support you might be eligible for.</p>
            </div>
            <LeadCalculator
              onSelectedAdaptation={(id) => handleNavigate(`service-${id}`)}
              onRequestCallback={() => handleNavigate('contact')}
            />
          </div>
        </section>

        {/* Section 4: Process section (3 steps) */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-16">Our Simple Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              <div className="hidden md:block absolute top-8 left-[25%] right-[25%] h-0.5 bg-slate-100" />
              <div className="space-y-4 relative bg-white">
                <div className="w-16 h-16 bg-brand-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-black shadow-lg shadow-brand-100">1</div>
                <h3 className="text-lg font-bold text-slate-900">Tell us what you need</h3>
                <p className="text-slate-500 text-sm">Contact us for a friendly chat about your home adaptation requirements.</p>
              </div>
              <div className="space-y-4 relative bg-white">
                <div className="w-16 h-16 bg-brand-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-black shadow-lg shadow-brand-100">2</div>
                <h3 className="text-lg font-bold text-slate-900">We assess your home</h3>
                <p className="text-slate-500 text-sm">We visit your home to recommend the best options for your unique layout.</p>
              </div>
              <div className="space-y-4 relative bg-white">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-black shadow-lg shadow-emerald-100">3</div>
                <h3 className="text-lg font-bold text-slate-900">We fit the adaptation</h3>
                <p className="text-slate-500 text-sm">Our local specialists install your new adaptation and finish the job to the highest standard.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Local area section */}
        <section className="py-20 bg-slate-50 border-y border-slate-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Local Merseyside Experts</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We serve <span className="font-bold text-brand-600">Liverpool, Wirral, Sefton, Knowsley, St Helens, and West Lancashire</span>. Being local means we can respond quickly and provide tailored support for our community.
            </p>
            <button
              onClick={() => handleNavigate('areas')}
              className="mt-8 text-brand-600 font-bold underline decoration-2 underline-offset-4"
            >
              See all areas we cover
            </button>
          </div>
        </section>

        {/* Section 6: FAQ section */}
        <section className="py-24 bg-white" id="faqs">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-black text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {generalFaqData.map((faq, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:bg-slate-100 transition-colors">
                  <h3 className="text-base font-bold text-slate-900 mb-3">{faq.q}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  // AREAS WE COVER PAGE
  function renderAreasPage() {
    return (
      <div className="py-20 bg-white" id="areas-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-black text-slate-900 mb-4">Areas We Cover Across Merseyside</h1>
            <p className="text-slate-600 max-w-2xl mx-auto italic">
              "Friendly, reliable home adaptations from a local team you can trust."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {citiesData.map((city) => (
              <div key={city.id} className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <h3 className="text-xl font-bold text-brand-600 mb-4">{city.name}</h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">{city.localIntro}</p>
                <div className="space-y-2">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Postcodes & Local Areas:</p>
                  <div className="flex flex-wrap gap-2">
                    {city.areaCoverage.map((area, i) => (
                      <span key={i} className="bg-white px-3 py-1 rounded-full text-xs font-medium text-slate-700 border border-slate-200">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-brand-600 rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-black mb-6">Not sure if we cover your area?</h2>
            <p className="mb-8 opacity-90 max-w-xl mx-auto">We are expanding rapidly and can often help in the surrounding West Lancashire and Cheshire areas too.</p>
            <button
              onClick={() => handleNavigate('contact')}
              className="bg-white text-brand-600 font-bold px-10 py-4 rounded-xl text-sm transition-all shadow-xl active:scale-95"
            >
              Contact Us to Check
            </button>
          </div>
        </div>
      </div>
    );
  }


  // 2. SERVICES OVERVIEW PAGE


  // 3. INDIVIDUAL SERVICE PAGES WITH AUTOMATED FORMS
  function renderServiceSubpage() {
    const srvId = currentPage.replace('service-', '') as ServiceId;
    const srv = servicesData.find(s => s.id === srvId);

    if (!srv) {
      return (
        <div className="py-20 text-center text-slate-500" id="error-boundaries">
          <p>This home adaptation service content path could not be located.</p>
          <button onClick={() => handleNavigate('home')} className="mt-4 text-brand-600 font-bold underline">Return Home</button>
        </div>
      );
    }

    return (
      <div className="bg-white py-12 md:py-20" id={`service-subpage-${srv.id}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb path for SEO */}
          <nav className="text-xs font-semibold text-slate-500 mb-8 flex items-center space-x-1" aria-label="Breadcrumb">
            <button onClick={() => handleNavigate('home')} className="hover:text-brand-600">Home</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900 font-bold text-nowrap">{srv.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Detailed Content Columns */}
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-4">
                <span className="bg-brand-100 text-brand-800 px-3 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest inline-block">Vetted Home Adaptation Service</span>
                <h1 className="text-3xl font-black font-display text-slate-950 sm:text-4.5xl leading-tight">{srv.title}</h1>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  {srv.shortDesc}
                </p>
              </div>

              {/* Service description */}
              <div className="prose max-w-none text-xs sm:text-sm text-slate-600 space-y-4 leading-normal">
                <p>{srv.description}</p>
                <p className="bg-slate-50 p-4 rounded-xl border-l-4 border-emerald-500 text-slate-700 font-semibold mb-6">
                  Did you know? If you are chronically ill or managing physical disabilities, you qualify for <strong>complete VAT Exemption</strong>, saving 20% off your entire project costs automatically!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                {/* Benefits Block */}
                <div className="bg-emerald-50/50 border border-emerald-100 p-6 rounded-2xl">
                  <h3 className="text-sm font-bold text-emerald-900 uppercase tracking-wide mb-3 flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Clinical & Physical Benefits:</span>
                  </h3>
                  <ul className="space-y-3">
                    {srv.benefits.map((b, idx) => (
                      <li key={idx} className="flex items-start text-xs text-slate-700">
                        <span className="text-emerald-600 font-black mr-2 shrink-0">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features Block */}
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3 flex items-center space-x-2">
                    <Award className="w-5 h-5 text-brand-600 shrink-0" />
                    <span>Component Specifications:</span>
                  </h3>
                  <ul className="space-y-3">
                    {srv.keyFeatures.map((f, idx) => (
                      <li key={idx} className="flex items-start text-xs text-slate-700">
                        <span className="text-brand-500 font-black mr-2 shrink-0">•</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Costing Block */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Average UK Cost Range:</p>
                  <p className="text-2xl font-black text-emerald-400 mt-1">{srv.averageCostRange}</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Installation Timeline:</p>
                  <p className="text-base font-bold text-white mt-1">{srv.installDays}</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Funding eligibility:</p>
                  <p className="text-[11px] text-slate-300 mt-1">{srv.eligibilityInfo}</p>
                </div>
              </div>

              {/* Internal Linkages for SEO */}
              <div className="border-t border-slate-100 pt-8">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">Explore Related Adaptation guides:</h4>
                <div className="flex flex-wrap gap-2">
                  {servicesData.filter(s => s.id !== srv.id).slice(0, 4).map(s => (
                    <button
                      key={s.id}
                      onClick={() => handleNavigate(`service-${s.id}`)}
                      className="bg-slate-100 hover:bg-brand-50 hover:text-brand-800 border border-slate-200 text-slate-650 px-3 py-1 text-xs rounded-full transition-all"
                    >
                      {s.title.split(' (')[0]} →
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky Form Column */}
            <div className="lg:col-span-4 select-none">
              <div className="sticky top-24">
                <CallbackForm
                  initialServiceId={srv.id}
                  title={`Query a ${srv.title.split(' (')[0]} Quote`}
                  subtitle={`Request a free, no-obligation home feasibility assessment from an accredited surveyor in your postcode area.`}
                  allServices={servicesData}
                  onSubmitted={() => handleNavigate('contact', { autoSuccess: true })}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 4. FUNDING & HELP PAGES


  // 6. CONTACT PAGE
  function renderContactPage() {
    return (
      <div className="bg-white py-12 md:py-20" id="contact-page-layout">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="bg-brand-50 text-brand-800 border border-brand-200 px-3 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest inline-block mb-3">Get in Touch</span>
            <h1 className="text-3xl font-black font-display text-slate-900 tracking-tight sm:text-4.5xl leading-tight">We are Ready to Support Your Independence Journey</h1>
            <p className="text-sm text-slate-500 mt-2">Speak with our helpful UK senior living specialists today. Advice is completely free, secure, and under strict GDPR guidelines.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Details Column */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-display text-slate-900">National Support Details</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Whether you are a family member looking out for elderly parents, a certified therapist arranging private contractors, or a disabled veteran checking grant allocations, we coordinate clean solutions quickly.
                </p>
              </div>

              {/* Direct call banner */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 flex items-start space-x-4">
                <div className="bg-brand-600 p-3 rounded-lg text-white">
                  <Phone className="w-6 h-6 shrink-0" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-brand-400 tracking-wider">National Advice Line</span>
                  <a href="tel:+447899030990" className="text-2xl font-black hover:text-brand-300 block mt-1">+44 78 990 30 990</a>
                  <p className="text-xs text-slate-400 mt-1">Lines active: Monday to Friday 8:30am - 6:30pm | Saturday 9:00am - 12:30pm</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <span className="bg-brand-100 p-2 text-brand-600 rounded-lg inline-block mb-3"><Mail className="w-5 h-5 shrink-0" /></span>
                  <h4 className="text-xs font-bold text-slate-800">Email Advice Inquiries</h4>
                  <a href="mailto:advice@homeadaptations.org.uk" className="text-xs text-brand-600 hover:underline block mt-1">advice@homeadaptations.org.uk</a>
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <span className="bg-brand-100 p-2 text-brand-600 rounded-lg inline-block mb-3"><Clock className="w-5 h-5 shrink-0" /></span>
                  <h4 className="text-xs font-bold text-slate-800">Average Reply Speed</h4>
                  <p className="text-xs text-slate-600 mt-1">Written emails are evaluated within 2 business hours. Callbacks requests are evaluated inside 15-30 minutes.</p>
                </div>
              </div>

              {/* Vetted badge standards */}
              <div className="bg-slate-100/50 rounded-2xl p-6 border border-slate-200 space-y-3">
                <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-widest flex items-center space-x-1">
                  <Award className="w-4 h-4 text-brand-650" />
                  <span>Vetted Contractor Warranties:</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-650 leading-relaxed">
                  <li>• Every builder carries complete public liability policies of £5M+ representation.</li>
                  <li>• Stairlift engineers are officially factory-trained directly by primary producers (Stannah, Handicare, Otolift).</li>
                  <li>• Bath and shower contractors are fully safety certified conforming with Water Regulations Advisory Scheme standards (WRAS).</li>
                </ul>
              </div>
            </div>

            {/* High Conversion Form Column */}
            <div className="lg:col-span-6 bg-white select-none">
              <CallbackForm
                allServices={servicesData}
                title="Arrange Your Free Priority Callback Consultation"
                subtitle="Your information is protected under UK GDPR. Vetted advisers will call back to discuss local surveyor availability."
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

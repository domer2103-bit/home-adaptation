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
    let title = 'Home Adaptations UK - Vetted Wet Rooms, Stairlifts & DFG Grants';
    let metaDesc = 'Expert advice on Disabled Facilities Grants (DFG) and professional stairlift, wet room, wheelchair ramp, and bathroom adaptations across major UK cities.';

    if (currentPage === 'services') {
      title = 'Our Services - Bathroom & Home Mobility Adaptations';
    } else if (currentPage.startsWith('service-')) {
      const srvId = currentPage.replace('service-', '') as ServiceId;
      const srv = servicesData.find(s => s.id === srvId);
      if (srv) {
        title = `${srv.title} Installation Costs & Grants | Home Adaptations UK`;
        metaDesc = srv.shortDesc;
      }
    } else if (currentPage.startsWith('funding-')) {
      const fId = currentPage.replace('funding-', '');
      const guide = fundingGuidesData.find(g => g.id === fId);
      if (guide) {
        title = `${guide.title} UK Grant Guide | Home Adaptations`;
        metaDesc = guide.shortDesc;
      }
    } else if (currentPage.startsWith('city-')) {
      const cId = currentPage.replace('city-', '');
      const city = citiesData.find(c => c.id === cId);
      if (city) {
        title = `Expert Home Adaptations in ${city.name} | Wet Rooms & Stairlifts`;
        metaDesc = `Accredited stairlifts, wet rooms, and bathroom adjustments in ${city.name}, ${city.region}. Free ${city.councilName} OT helper guide.`;
      }
    } else if (currentPage === 'contact') {
      title = 'Request Free Advisory Callback - Contact Home Adaptations UK';
    }

    document.title = title;

    // Dynamically inject/update meta description
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
    <div className="min-h-screen flex flex-col font-sans" id="app-viewport-root">
      {/* Global High-contrast Navigation Header */}
      <Navigation
        currentPage={currentPage}
        onNavigate={handleNavigate}
        allServices={servicesData}
        allCities={citiesData}
      />

      {/* Main Page Area */}
      <main className="flex-1">
        {currentPage === 'home' && renderHome()}
        {currentPage === 'services' && renderServicesOverview()}
        {currentPage.startsWith('service-') && renderServiceSubpage()}
        {currentPage.startsWith('funding-') && renderFundingSubpage()}
        {currentPage.startsWith('city-') && renderCitySubpage()}
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
          <p className="text-sm font-extrabold text-white">0800 012 3456</p>
        </div>
        <a
          href="tel:08000123456"
          className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black py-2.5 px-4 rounded-full flex items-center space-x-1.5 shadow"
          id="sticky-mobile-call-link"
        >
          <Phone className="w-4 h-4 shrink-0" />
          <span>Tap to Call Free</span>
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
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white min-h-[550px] flex items-center py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.1),transparent_50%)]" />
          <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 px-3 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Eradicating Bathroom & Staircase Slip Hazards</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
                Maintain Your Independence at Home with Certified Adaptations
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                We simplify finding state-of-the-art stairlifts, flush wet rooms, worktop adjusters, and level entrance ramps. Check your eligibility for standard council funding grants up to <strong className="text-white">£30,000</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={() => handleNavigate('contact')}
                  className="bg-brand-600 hover:bg-brand-700 text-white font-bold px-8 py-4 rounded-xl text-sm transition-smooth shadow-md flex items-center justify-center space-x-2 cursor-pointer focus:ring-4 focus:ring-blue-100"
                >
                  <span>Request Free Home Survey</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="tel:08000123456"
                  className="bg-slate-800/80 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl text-sm border border-slate-700 transition duration-150 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Call free: 0800 012 3456</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-slate-800 grid grid-cols-3 gap-4 text-xs font-semibold text-slate-400">
                <div>
                  <p className="text-base font-black text-emerald-400">★ 4.9/5</p>
                  <p>Trustpilot Vetted</p>
                </div>
                <div>
                  <p className="text-base font-black text-blue-400">0% VAT</p>
                  <p>Disability Relief Check</p>
                </div>
                <div>
                  <p className="text-base font-black text-indigo-400">100% Free</p>
                  <p>Assessments & Advice</p>
                </div>
              </div>
            </div>

            {/* Right Callback Form Block */}
            <div className="lg:col-span-5 bg-white p-1 rounded-2xl shadow-2xl">
              <CallbackForm
                allServices={servicesData}
                onSubmitted={() => handleNavigate('contact', { autoSuccess: true })}
              />
            </div>
          </div>
        </section>

        {/* Brand Core Trust Bar */}
        <section className="bg-slate-900 border-y border-slate-800 text-slate-300 py-3 text-center text-xs font-bold leading-none select-none">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-y-2 items-center justify-center md:justify-around text-[11px] uppercase tracking-wider">
            <span className="flex items-center space-x-1.5"><ShieldCheck className="w-4 h-4 text-brand-500 shrink-0" /> <span>UK Nationwide Vetted Engineers</span></span>
            <span className="hidden md:inline text-slate-600">•</span>
            <span className="flex items-center space-x-1.5"><Clock className="w-4 h-4 text-brand-500 shrink-0" /> <span>Local Callback Within 15 Mins</span></span>
            <span className="hidden md:inline text-slate-600">•</span>
            <span className="flex items-center space-x-1.5"><Coins className="w-4 h-4 text-emerald-400 shrink-0" /> <span>DFG Council Grant Support Checks</span></span>
          </div>
        </section>

        {/* Interactive Eligibility & Cost Calculator (Drives massive user timing) */}
        <section className="py-16 md:py-24 bg-white" id="calculator-lead-funnel">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900 tracking-tight">Check Your Home Adaptation Grant Eligibility</h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-2">Use our structured questionnaire to review potential UK council funding allowances and VAT relief exemptions instantly.</p>
            </div>
            <LeadCalculator
              onSelectedAdaptation={(srvId) => handleNavigate(`service-${srvId}`)}
              onRequestCallback={() => handleNavigate('contact')}
            />
          </div>
        </section>

        {/* Services Showcase (Grid) */}
        <section className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-200" id="services-grid-showcase">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div className="text-left max-w-xl">
                <span className="text-xs font-extrabold uppercase text-brand-600 tracking-widest block mb-1">Safety-Assured Renovations</span>
                <h2 className="text-2xl md:text-3.5xl font-semibold font-display text-slate-900 tracking-tight">Our 10 Core Home Adaptations</h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-2">Engineered to standards set by the British Standard Code of Practice for Accessibility design (BS 8300).</p>
              </div>
              <button
                onClick={() => handleNavigate('services')}
                className="mt-4 md:mt-0 text-brand-600 hover:text-brand-700 font-bold text-xs uppercase tracking-wider flex items-center space-x-1 shrink-0"
              >
                <span>Compare All services details</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.slice(0, 6).map((srv) => (
                <div key={srv.id} className="bg-white border border-slate-200/80 rounded-2xl shadow-sm hover:shadow-md transition-smooth flex flex-col justify-between group">
                  <div className="p-6">
                    <div className="bg-brand-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-600 group-hover:text-white transition duration-250">
                      {getServiceIcon(srv.iconName, "w-6 h-6 text-brand-600 group-hover:text-white transition")}
                    </div>
                    <h3 className="text-lg font-bold font-display text-slate-900 mb-2">{srv.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">{srv.shortDesc}</p>

                    <div className="space-y-1.5 border-t border-slate-100 pt-3">
                      <div className="flex justify-between text-[11px] font-semibold text-slate-500">
                        <span>Approx. Timeline:</span>
                        <span className="text-slate-800">{srv.installDays}</span>
                      </div>
                      <div className="flex justify-between text-[11px] font-semibold text-slate-500">
                        <span>Typical Costing:</span>
                        <span className="text-emerald-700 font-bold">{srv.averageCostRange}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 p-4 bg-slate-50/50 rounded-b-2xl flex justify-between items-center">
                    <button
                      onClick={() => handleNavigate(`service-${srv.id}`)}
                      className="text-[11px] font-extrabold text-brand-600 hover:text-brand-800 tracking-wider uppercase block"
                    >
                      Full Costing Details
                    </button>
                    <button
                      onClick={() => handleNavigate('contact', { service: srv.id })}
                      className="text-[11px] font-bold text-slate-500 hover:text-slate-900 flex items-center space-x-0.5"
                    >
                      <span>Query Quote</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works (4 Clean Steps) */}
        <section className="py-16 md:py-24 bg-white" id="how-it-works-process">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-extrabold uppercase text-brand-600 tracking-widest block mb-1">Streamlined Customer Journey</span>
              <h2 className="text-2xl md:text-3.5xl font-bold font-display text-slate-900 tracking-tight">Your Path to Safe, Independent Living</h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-2">From original advisor callback to final council sign-off, we manage the technical stress for you.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-slate-150 -z-10" />

              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto text-brand-600 font-bold text-lg border border-brand-100 shadow-sm">1</div>
                <h3 className="text-sm font-bold text-slate-800">1. Free Advice Call</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Book a consultation callback. We examine clinical issues, explain councils budgets, and review immediate 20% VAT relief schemes.</p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto text-brand-600 font-bold text-lg border border-brand-100 shadow-sm">2</div>
                <h3 className="text-sm font-bold text-slate-800">2. Free Home Assessment</h3>
                <p className="text-xs text-slate-500 leading-relaxed">An approved, fully insured structural surveyor visits to evaluate stairs, bathrooms, doorway structures and confirm feasibility.</p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto text-brand-600 font-bold text-lg border border-brand-100 shadow-sm">3</div>
                <h3 className="text-sm font-bold text-slate-800">3. Grant Processing</h3>
                <p className="text-xs text-slate-500 leading-relaxed">We provide complete detailed quotes matching council templates, assisting you in submitting clear OT recommendations to land your grant.</p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600 font-bold text-lg border border-emerald-100 shadow-sm">4</div>
                <h3 className="text-sm font-bold text-slate-800">4. Clean Installation</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Our qualified local tradespeople install your wet-room, stairlift, or doorway frame. Backed by durable 3-year performance guarantees.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us & Funding Spotlight */}
        <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden" id="funding-spotlight-banner">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.08),transparent_40%)]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-extrabold uppercase text-brand-450 tracking-wider flex items-center space-x-1.5">
                <Heart className="w-4 h-4 text-rose-500" />
                <span>Caring for UK Communities</span>
              </span>
              <h2 className="text-2xl md:text-3.5xl font-black font-display tracking-tight leading-tight">
                Disabled Facilities Grants (DFG) Explained Simply
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Many elderly and chronic-ill residents feel intimidated trying to claim government grants. Our advisors hold years of expertise acting as helpful liaisons between local councils, social service teams, and client households.
              </p>

              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="bg-brand-500 text-white rounded-full p-1 mr-3 shrink-0"><Check className="w-3.5 h-3.5" /></span>
                  <div>
                    <h4 className="text-xs font-bold font-display text-white">English caps reach £30,000</h4>
                    <p className="text-[11px] text-slate-400">Can be fully matched against complete bathing and moving adjusters.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-brand-500 text-white rounded-full p-1 mr-3 shrink-0"><Check className="w-3.5 h-3.5" /></span>
                  <div>
                    <h4 className="text-xs font-bold font-display text-white">Doesn't impact standard state benefits</h4>
                    <p className="text-[11px] text-slate-400">Claims do not undermine PIP, pensions, attendance supports, or tax credits.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-emerald-500 text-white rounded-full p-1 mr-3 shrink-0"><Check className="w-3.5 h-3.5" /></span>
                  <div>
                    <h4 className="text-xs font-bold font-display text-white">Free council assessments for children</h4>
                    <p className="text-[11px] text-slate-400">Applications filed for minors under 19 are completely exempt from financial means-testing.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleNavigate('funding-dfg')}
                  className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-6 py-3 rounded-lg text-xs leading-none transition-smooth shadow cursor-pointer uppercase tracking-wider"
                >
                  Read Comprehensive Funding Guide
                </button>
              </div>
            </div>

            {/* Right Column Highlights Checkboard */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-800/60 p-5 rounded-2xl border border-slate-800">
                <span className="bg-blue-500/10 p-2 text-blue-400 rounded-lg inline-block mb-3"><Award className="w-5 h-5" /></span>
                <h3 className="text-sm font-bold text-white mb-2">3-Year Work Warranty</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed">Every wet-room plumbing joint, stairlift drive assembly, and structural ramp supports are covered by zero-deductible installation insurance.</p>
              </div>

              <div className="bg-slate-800/60 p-5 rounded-2xl border border-slate-800">
                <span className="bg-emerald-500/10 p-2 text-emerald-400 rounded-lg inline-block mb-3"><ShieldCheck className="w-5 h-5" /></span>
                <h3 className="text-sm font-bold text-white mb-2">VAT Exempt Support</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed">Saves you 20% on overall bills natively if living with chronic illnesses (dementia, arthritis, heart issues) or mobility limits.</p>
              </div>

              <div className="bg-slate-800/60 p-5 rounded-2xl border border-slate-800">
                <span className="bg-purple-500/10 p-2 text-purple-400 rounded-lg inline-block mb-3"><MapPin className="w-5 h-5" /></span>
                <h3 className="text-sm font-bold text-white mb-2">Local UK Hub Network</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed">Quick regional engineers based around your city, reducing travel charges and ensuring responsive emergency upkeep care.</p>
              </div>

              <div className="bg-slate-800/60 p-5 rounded-2xl border border-slate-800">
                <span className="bg-amber-500/10 p-2 text-amber-400 rounded-lg inline-block mb-3"><Clock className="w-5 h-5" /></span>
                <h4 className="text-sm font-bold text-white mb-2">Dignified Fitting Process</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">Vetted installers respect carpets, clean up debris, and carry mandatory CRB and DBS background clearance checks.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Coverage Section */}
        <section className="py-16 bg-slate-50 border-y border-slate-200" id="locality-directory">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl font-bold font-display text-slate-900 tracking-tight">Active Regional Advice Coverage</h2>
              <p className="text-xs text-slate-500 mt-2">Our certified partners coordinate directly with social work hubs, independent occupational therapists and county planners in these primary regions:</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {citiesData.map((city) => (
                <button
                  key={city.id}
                  onClick={() => handleNavigate(`city-${city.id}`)}
                  className="bg-white border border-slate-200 rounded-xl p-4 text-left hover:border-brand-600 hover:bg-brand-50/20 transition group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs text-slate-400 font-bold block">{city.region}</span>
                    <span className="text-sm font-extrabold text-slate-900 block mt-1 group-hover:text-brand-700">{city.name}</span>
                  </div>
                  <span className="text-[10px] text-brand-600 font-bold mt-2 hover:underline block">Local Desk Info →</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Real Testimonials */}
        <section className="py-16 md:py-24 bg-white" id="customer-reviews">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-xs font-extrabold text-brand-600 uppercase tracking-widest block mb-1">Authentic UK Feedback</p>
              <h2 className="text-2xl md:text-3.5xl font-bold font-display text-slate-900 tracking-tight">Trustpilot Quality Checked Stories</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Review 1 */}
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl relative">
                <div className="text-amber-500 text-sm font-bold mb-3">★ ★ ★ ★ ★</div>
                <blockquote className="text-xs text-slate-600 leading-relaxed italic mb-4">
                  "Absolutely stellar service from start to finish. Mum was struggling severely climbing her straight stairs in Altrincham. Our advisor helped coordinate an OT assessment report and mapped a beautiful straight stairlift that folding flat. Fitted in 4 hours on a Tuesday, completely changing Mum's confidence."
                </blockquote>
                <div className="flex items-center space-x-2">
                  <div className="bg-slate-200 w-8 h-8 rounded-full flex items-center justify-center font-bold text-slate-700 text-xs">SM</div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Sarah Mercer</h4>
                    <p className="text-[10px] text-slate-400 font-semibold uppercase">Altrincham, Manchester • Stairlift</p>
                  </div>
                </div>
              </div>

              {/* Review 2 */}
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl relative">
                <div className="text-amber-500 text-sm font-bold mb-3">★ ★ ★ ★ ★</div>
                <blockquote className="text-xs text-slate-600 leading-relaxed italic mb-4">
                  "I qualify for VAT exemption due to MS. The engineers designed a level entry shower screen with built-in grab rails in our Croydon family home. Clean, quick, completely non-slip floor. Plus helped us prepare the paperwork. 20% savings were instantly subtracted."
                </blockquote>
                <div className="flex items-center space-x-2">
                  <div className="bg-slate-200 w-8 h-8 rounded-full flex items-center justify-center font-bold text-slate-700 text-xs">AH</div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Arthur Hughes</h4>
                    <p className="text-[10px] text-slate-400 font-semibold uppercase">Croydon, London • Walk-in Shower</p>
                  </div>
                </div>
              </div>

              {/* Review 3 */}
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl relative">
                <div className="text-amber-500 text-sm font-bold mb-3">★ ★ ★ ★ ★</div>
                <blockquote className="text-xs text-slate-600 leading-relaxed italic mb-4">
                  "High-quality experience setting up modular ramping and door widening for our dad's walker entry in Solihull. Fast, galvanized steel structure drain rain nicely without pooling or sliding. Recommended for any disabled household arrangements."
                </blockquote>
                <div className="flex items-center space-x-2">
                  <div className="bg-slate-200 w-8 h-8 rounded-full flex items-center justify-center font-bold text-slate-700 text-xs">RE</div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Richard Evans</h4>
                    <p className="text-[10px] text-slate-400 font-semibold uppercase">Solihull, Birmingham • Ramping</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Concise FAQ Area in Home */}
        <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200" id="homepage-faq-accordions">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3.5xl font-semibold font-display text-slate-900 tracking-tight">Adaptation Funding FAQs</h2>
              <p className="text-xs text-slate-500 mt-2">Answers to key questions from UK households arranging safety modifications.</p>
            </div>

            <div className="space-y-4">
              {generalFaqData.slice(0, 4).map((faq, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                  <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-start">
                    <span className="text-brand-600 mr-2">Q:</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6 border-l border-brand-200">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <button
                onClick={() => handleNavigate('funding-dfg')}
                className="text-brand-600 hover:text-brand-800 text-xs font-bold underline"
              >
                View all funding and eligibility queries →
              </button>
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="bg-slate-950 py-16 text-center text-white relative overflow-hidden" id="final-lead-cta">
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-blue-950/20 to-transparent" />
          <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold font-display leading-tight">Ready to Secure Safe Independent Bathing & Living?</h2>
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              Our advice service is completely free, carries zero obligation, and provides direct access to accredited local installer schedules.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => handleNavigate('contact')}
                className="bg-brand-600 hover:bg-brand-700 text-white font-bold px-8 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-smooth cursor-pointer"
              >
                Configure Your Free Home Survey
              </button>
              <a
                href="tel:08000123456"
                className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-8 py-3.5 rounded-xl text-xs transition duration-150 border border-slate-700 flex items-center justify-center space-x-1"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Advice Helpline: 0800 012 3456</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // 2. SERVICES OVERVIEW PAGE
  function renderServicesOverview() {
    return (
      <div className="bg-white py-12 md:py-20" id="services-overview-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase text-brand-600 tracking-wider block mb-1">Mobility & Accessibility Solutions</span>
            <h1 className="text-3xl font-black font-display text-slate-900 tracking-tight sm:text-4xl">Our Complete Range of Home Adaptations</h1>
            <p className="text-sm text-slate-500 mt-2">Highly robust, clinical-grade improvements installed across the UK to help seniors and disabled citizens live comfortably.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.map((srv) => (
              <div
                key={srv.id}
                className="border border-slate-200 rounded-2xl p-6 md:p-8 hover:border-brand-600 transition duration-150 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-brand-50 p-3 rounded-lg text-brand-600 shrink-0">
                      {getServiceIcon(srv.iconName, "w-7 h-7")}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-display text-slate-900 leading-tight">{srv.title}</h3>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">Install Speed: {srv.installDays}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {srv.description}
                  </p>

                  <div className="mb-6 bg-slate-50 p-4 rounded-xl space-y-2 border border-slate-100">
                    <p className="text-xs font-bold text-slate-700">Immediate Benefits Checklist:</p>
                    <ul className="space-y-1.5">
                      {srv.benefits.map((b, i) => (
                        <li key={i} className="flex items-start text-xs text-slate-600">
                          <Check className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-slate-150 pt-5 flex flex-wrap justify-between items-center gap-4">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Approximate Cost Matrix:</p>
                    <p className="text-sm font-extrabold text-emerald-800">{srv.averageCostRange}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleNavigate(`service-${srv.id}`)}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-4 py-2 rounded-lg text-xs leading-none transition"
                    >
                      Detailed Guide
                    </button>
                    <button
                      onClick={() => handleNavigate('contact', { service: srv.id })}
                      className="bg-brand-600 hover:bg-brand-700 text-white font-bold px-4 py-2 rounded-lg text-xs leading-none transition shadow-sm"
                    >
                      Query Callback
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

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
            <button onClick={() => handleNavigate('services')} className="hover:text-brand-600">Services</button>
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
  function renderFundingSubpage() {
    const fId = currentPage.replace('funding-', '');
    const guide = fundingGuidesData.find(g => g.id === fId);

    if (!guide) {
      return (
        <div className="py-20 text-center text-slate-500">
          <p>The requested UK funding guide could not be located.</p>
          <button onClick={() => handleNavigate('home')} className="mt-4 text-brand-600 font-bold underline">Return Home</button>
        </div>
      );
    }

    return (
      <div className="bg-white py-12 md:py-20" id={`funding-page-${guide.id}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs font-semibold text-slate-500 mb-8 flex items-center space-x-1" aria-label="Breadcrumbs">
            <button onClick={() => handleNavigate('home')} className="hover:text-brand-600">Home</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900 font-bold">{guide.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-4">
                <span className="bg-emerald-50/80 text-emerald-800 border border-emerald-200 px-3 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest inline-block">UK Funding Guide Directory</span>
                <h1 className="text-3xl font-black font-display text-slate-950 sm:text-4.5xl leading-tight">{guide.title}</h1>
                <p className="text-slate-700 text-sm leading-relaxed font-semibold">
                  {guide.shortDesc}
                </p>
              </div>

              <div className="prose max-w-none text-xs sm:text-sm text-slate-600 space-y-4 leading-normal border-t border-slate-100 pt-6">
                <p>{guide.description}</p>
              </div>

              {/* Eligibility checklist */}
              <div className="bg-amber-50/50 border border-amber-200 rounded-2xl p-6 md:p-8">
                <h3 className="text-sm font-extrabold text-amber-950 uppercase tracking-widest mb-4 flex items-center space-x-2">
                  <ShieldAlert className="w-5 h-5 text-amber-600" />
                  <span>Funding Eligibility Criteria Checklist:</span>
                </h3>
                <ul className="space-y-3 text-xs text-slate-700 leading-normal">
                  {guide.eligibilityRules.map((rule, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-amber-600 text-lg mr-2 shrink-0 leading-none">✓</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Journey Steps */}
              <div className="space-y-4 pt-4">
                <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-widest flex items-center space-x-2">
                  <Landmark className="w-5 h-5 text-brand-600" />
                  <span>The Application Progression Steps:</span>
                </h3>
                <div className="space-y-4">
                  {guide.applicationSteps.map((step, idx) => (
                    <div key={idx} className="flex items-start bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <span className="w-6 h-6 rounded-full bg-brand-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mr-4 mt-0.5">
                        {idx + 1}
                      </span>
                      <div>
                        <p className="text-xs text-slate-700 font-semibold leading-relaxed">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Frequently Asked Qs in guide */}
              <div className="space-y-6 pt-8 border-t border-slate-150">
                <h3 className="text-lg font-bold font-display text-slate-900">Guide Q&As</h3>
                <div className="space-y-4">
                  {guide.frequentlyAsked.map((faq, idx) => (
                    <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                      <h4 className="text-sm font-bold text-slate-900 mb-2">{faq.q}</h4>
                      <p className="text-xs text-slate-600 leading-normal">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form column */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                <CallbackForm
                  allServices={servicesData}
                  onSubmitted={() => handleNavigate('contact', { autoSuccess: true })}
                />
                
                {/* Independent Therapist link block */}
                <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-400">Avoid Long Council Wait Times</h4>
                  <p className="text-[11px] text-slate-350 leading-relaxed">
                    Local councils can occasionally carry 3 to 9 month waiting lists simply to assign an Occupational Therapist to visit. We can advise on how to hire a fast-track Clinical Independent OT whose assessment reports are fully recognized for DFG processing.
                  </p>
                  <button 
                    onClick={() => handleNavigate('contact')}
                    className="text-xs text-emerald-400 font-bold hover:underline"
                  >
                    Discuss fast-track OTs →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 5. LOCAL LANDING PAGE TEMPLATE WITH CITY DETAILS
  function renderCitySubpage() {
    const cId = currentPage.replace('city-', '');
    const city = citiesData.find(c => c.id === cId);

    if (!city) {
      return (
        <div className="py-20 text-center text-slate-500">
          <p>The selected UK local support directory could not be located.</p>
          <button onClick={() => handleNavigate('home')} className="mt-4 text-brand-600 font-bold underline">Return Home</button>
        </div>
      );
    }

    return (
      <div className="bg-white py-12 md:py-20" id={`local-city-landing-${city.id}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs font-semibold text-slate-500 mb-8 flex items-center space-x-1" aria-label="Breadcrumb">
            <button onClick={() => handleNavigate('home')} className="hover:text-brand-600">Home</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900 font-bold">Local Support for {city.name}</span>
          </nav>

          {/* Heading with localized H1 & map badges */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 text-white rounded-3xl p-6 md:p-12 mb-12 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -z-10" />
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center space-x-1.5 bg-brand-500/15 text-brand-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                <MapPin className="w-3.5 h-3.5" />
                <span>Geographical Coverage Desk for {city.region}</span>
              </div>
              <h1 className="text-3xl font-black font-display text-white tracking-tight sm:text-4.5xl leading-tight">
                Vetted Home Adaptations in {city.name} - Senior wet-rooms, stairlifts & ramps
              </h1>
              <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                {city.localIntro}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-10">
              
              {/* Local Trust & Council advice team details */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 space-y-4">
                <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-widest flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-brand-600" />
                  <span>Local Council Social Care Direct Line - Helpdesk:</span>
                </h3>
                <p className="text-xs text-slate-650 leading-relaxed">
                  If you reside under the <strong>{city.name}</strong> catchment, your adaptation funding allocations and OT assessments are supervised by standard social workers. You can call their care desk directly to submit a referral:
                </p>

                <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold block uppercase">Social Services Referrals Office</span>
                    <strong className="text-sm text-slate-800 font-display block">{city.councilName} Adaptations Team</strong>
                  </div>
                  <a
                    href={`tel:${city.councilOtPhone.replace(/\s+/g, '')}`}
                    className="bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold py-2.5 px-5 rounded-lg text-center flex items-center justify-center space-x-1.5 shrink-0"
                  >
                    <Phone className="w-3.5 h-3.5 shrink-0" />
                    <span>DIAL: {city.councilOtPhone}</span>
                  </a>
                </div>
              </div>

              {/* Local Case Study Section (Solves thin/duplicate content) */}
              <div className="bg-emerald-50/40 border border-emerald-150 rounded-2xl p-6 md:p-8 space-y-4">
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wide inline-block">Local Project Snapshot</span>
                <h3 className="text-lg font-bold font-display text-emerald-950">{city.caseStudyTitle}</h3>
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  "{city.caseStudyDesc}"
                </p>
                <div className="flex items-center space-x-2 text-[11px] text-slate-500 font-semibold uppercase">
                  <span>★ Vetted Quality Checks Certified</span>
                  <span>•</span>
                  <span>Complies with UK Building Directives</span>
                </div>
              </div>

              {/* Specific covered areas checklist */}
              <div className="space-y-4">
                <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-widest">Postcodes & Towns Vetted Near {city.name}:</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our regional engineering teams complete clean daily travels to these surrounding sub-districts and boroughs around the West/East/South ranges:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-slate-55 p-4 rounded-xl border border-slate-200">
                  {city.areaCoverage.map((area, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-slate-700 font-medium">
                      <span className="text-brand-500 shrink-0">•</span>
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service List tailored internally */}
              <div className="space-y-6 pt-6 border-t border-slate-150">
                <h3 className="text-lg font-bold font-display text-slate-900">Adaptations Offered in {city.name}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {servicesData.slice(0, 4).map(s => (
                    <div key={s.id} className="border border-slate-200 rounded-xl p-4 hover:border-brand-600 transition-all flex flex-col justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{s.title.split(' (')[0]}</h4>
                        <p className="text-xs text-slate-500 mt-1 line-clamp-2">{s.shortDesc}</p>
                      </div>
                      <button
                        onClick={() => handleNavigate(`service-${s.id}`)}
                        className="text-[10px] text-brand-600 font-extrabold uppercase tracking-wider mt-3 text-left"
                      >
                        Costs & Lead guides →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Callback Form Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 select-none">
                <CallbackForm
                  title={`Request Callback in ${city.name}`}
                  subtitle={`Arrange a swift free home assessment with our representative visiting the wider ${city.region} district.`}
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
                  <span className="text-[10px] uppercase font-bold text-brand-400 tracking-wider">Freephone National Advice</span>
                  <a href="tel:08000123456" className="text-2xl font-black hover:text-brand-300 block mt-1">0800 012 3456</a>
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

import React, { useState } from 'react';
import { ArrowLeft, Clock, BookMarked, HelpCircle, ChevronDown, ChevronUp, AlertCircle, ArrowRight, Phone, ShieldCheck } from 'lucide-react';
import { articlesData, Article } from '../data/articles';
import { servicesData } from '../data/services';
import CallbackForm from './CallbackForm';

interface ArticleDetailProps {
  articleId: string;
  onNavigate: (page: string, params?: any) => void;
}

export default function ArticleDetail({ articleId, onNavigate }: ArticleDetailProps) {
  const article = articlesData.find(a => a.id === articleId);

  // FAQ open/close accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  if (!article) {
    return (
      <div className="max-w-xl mx-auto py-20 px-4 text-center space-y-4" id="article-not-found-layout">
        <AlertCircle className="w-12 h-12 text-rose-500 mx-auto" />
        <h2 className="text-xl font-bold text-slate-900">Guide article not found</h2>
        <p className="text-sm text-slate-500">The requested article profile might have been moved or updated. Visit our center catalogue to find more articles.</p>
        <button
          onClick={() => onNavigate('articles')}
          className="bg-brand-600 hover:bg-brand-700 text-white font-bold py-2.5 px-6 rounded-lg text-xs tracking-wider uppercase"
        >
          Return to Advice Hub
        </button>
      </div>
    );
  }

  // Find related service if available
  const relatedService = article.relatedServiceId 
    ? servicesData.find(s => s.id === article.relatedServiceId)
    : null;

  return (
    <div className="bg-white py-8 md:py-16" id={`article-content-${article.id}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation action */}
        <button
          onClick={() => onNavigate('articles')}
          className="inline-flex items-center space-x-1 text-slate-500 hover:text-brand-600 font-bold text-xs uppercase tracking-wider mb-8 cursor-pointer focus:outline-none"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Advice Hub</span>
        </button>

        {/* Article Anatomy Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Article Content Panel */}
          <article className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-brand-50 text-brand-800 border border-brand-200 px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide">
                  {article.category}
                </span>
                <span className="text-slate-400 text-xs font-semibold flex items-center space-x-1">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span>{article.readTime}</span>
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-3.5xl font-black font-display text-slate-900 tracking-tight leading-tight">
                {article.title}
              </h1>
              <p className="text-sm text-slate-500 leading-relaxed italic border-l-2 border-slate-250 pl-4 py-1">
                {article.shortDesc}
              </p>
            </div>

            {/* Central Key Takeaways Block */}
            <div className="bg-emerald-50/60 border border-emerald-150 rounded-2xl p-6 space-y-2">
              <h4 className="text-xs font-extrabold uppercase text-emerald-800 tracking-widest flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Primary Recommendation Overview</span>
              </h4>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
                {article.keyTakeaway}
              </p>
            </div>

            {/* Dynamic Article Sections Generator */}
            <div className="space-y-8 divide-y divide-slate-100">
              {article.sections.map((section, sIdx) => (
                <div key={sIdx} className={`${sIdx > 0 ? 'pt-8' : ''} space-y-4`}>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900">
                    {section.heading}
                  </h3>
                  <div className="space-y-4">
                    {section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>

                  {section.bullets && (
                    <ul className="grid grid-cols-1 gap-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
                      {section.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="text-xs text-slate-700 font-medium flex items-start">
                          <span className="text-brand-600 font-black mr-2 select-none">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* FAQ Accordion block */}
            {article.faq && article.faq.length > 0 && (
              <div className="pt-10 border-t border-slate-150 space-y-4" id="article-faq-accordion">
                <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900 flex items-center space-x-2">
                  <HelpCircle className="w-5 h-5 text-brand-600 shrink-0" />
                  <span>Frequently Asked Questions</span>
                </h3>
                <div className="space-y-3">
                  {article.faq.map((item, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-150">
                        <button
                          onClick={() => toggleFaq(idx)}
                          className="w-full text-left px-5 py-4 font-bold font-display text-xs sm:text-sm hover:bg-slate-50 text-slate-800 flex justify-between items-center transition"
                        >
                          <span>{item.q}</span>
                          {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100/60 bg-slate-50/50">
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Related Service suggestion footer banner */}
            {relatedService && (
              <div className="bg-brand-50 border border-brand-150 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="space-y-1 text-center sm:text-left">
                  <span className="text-[10px] font-extrabold uppercase text-brand-700 tracking-wider block">Accredited Installation Solutions</span>
                  <h4 className="text-sm font-bold text-slate-900">Need specific costings for {relatedService.title}?</h4>
                  <p className="text-xs text-slate-500">We assist in planning, surveying, and processing council DFG funding template packages.</p>
                </div>
                <button
                  onClick={() => onNavigate(`service-${relatedService.id}`)}
                  className="bg-brand-600 hover:bg-brand-700 text-white font-bold py-2.5 px-5 rounded-lg text-xs leading-none uppercase tracking-wider whitespace-nowrap inline-flex items-center space-x-1.5"
                >
                  <span>View Service Info</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

          </article>

          {/* Right Sidebar Form section */}
          <aside className="lg:col-span-4 sticky top-24 select-none">
            <CallbackForm
              title="Speak with an Advisor"
              subtitle={`Ask questions regarding: "${article.title}" and query standard council DFG support checks.`}
              allServices={servicesData}
              onSubmitted={() => onNavigate('contact', { autoSuccess: true })}
            />

            {/* Helpline quick-link */}
            <div className="bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 mt-6 shadow-sm text-center space-y-3">
              <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider block">Have urgent clinical questions?</span>
              <p className="text-xs text-slate-300">Free independent advice for UK homeowner households & caring relatives.</p>
              <a 
                href="tel:08000123456" 
                className="inline-flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white w-full py-3 rounded-lg border border-slate-700 transition"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold">Call Free: 0800 012 3456</span>
              </a>
            </div>
          </aside>

        </div>

      </div>
    </div>
  );
}

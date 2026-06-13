import React, { useState, useMemo } from 'react';
import { Search, BookOpen, Clock, ArrowRight, BookMarked, Sparkles, Filter, ChevronRight } from 'lucide-react';
import { Article } from '../data/articles';

interface ArticlesHubProps {
  articles: Article[];
  onNavigate: (page: string, params?: any) => void;
}

const CATEGORIES = ['All', 'Costs', 'Funding', 'Bathroom', 'Mobility', 'Dementia & Stroke', 'Assessments'] as const;

export default function ArticlesHub({ articles, onNavigate }: ArticlesHubProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Filter logic based on search and category choice
  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
      const matchesSearch = searchQuery === '' || 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [articles, searchQuery, selectedCategory]);

  return (
    <div className="bg-slate-50 py-12 md:py-20" id="articles-hub-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hub Header & Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 text-brand-700 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <BookMarked className="w-3.5 h-3.5" />
            <span>Independent UK Living Information Center</span>
          </div>
          <h1 className="text-3xl font-black font-display text-slate-900 tracking-tight sm:text-4.5xl leading-tight">
            Independent Living Advice & Guides
          </h1>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Expert education covering Disabled Facilities Grants, equipment costs, home safety checks, and step-free layout adaptations vetted by professional occupational therapists.
          </p>
        </div>

        {/* Dynamic Search & Categorization controls */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80 mb-10 max-w-4xl mx-auto space-y-6">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search guides (e.g., 'wet room cost', 'grant help', 'dementia')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
              id="article-search-input"
            />
          </div>

          <div className="space-y-2">
            <span className="text-[11px] font-extrabold uppercase text-slate-405 tracking-widest flex items-center space-x-1.5">
              <Filter className="w-3.5 h-3.5 text-brand-600" />
              <span>Filter by Topic Range:</span>
            </span>
            <div className="flex flex-wrap gap-2 pt-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition ${
                    selectedCategory === cat
                      ? 'bg-brand-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-655 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {cat === 'All' ? 'All Guides' : cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Diagnostic Results counter */}
        <div className="max-w-7xl mx-auto mb-6 flex justify-between items-center text-xs text-slate-500 font-semibold">
          <span>{filteredArticles.length} guides found matching filters</span>
          {searchQuery && (
            <button 
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="text-brand-600 hover:underline block"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Renders dynamic articles in grid layout */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => {
              // Custom colors based on categories
              let theme = 'bg-blue-50 text-blue-800 border-blue-100';
              if (article.category === 'Costs') theme = 'bg-amber-50 text-amber-800 border-amber-100';
              if (article.category === 'Funding') theme = 'bg-emerald-50 text-emerald-800 border-emerald-100';
              if (article.category === 'Dementia & Stroke') theme = 'bg-rose-50 text-rose-800 border-rose-100';
              if (article.category === 'Bathroom') theme = 'bg-purple-50 text-purple-805 border-purple-100';
              if (article.category === 'Mobility') theme = 'bg-slate-100 text-slate-800 border-slate-200';

              return (
                <div 
                  key={article.id} 
                  className="bg-white rounded-2xl border border-slate-200 hover:border-brand-300 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group overflow-hidden"
                  id={`article-card-${article.id}`}
                >
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase border ${theme}`}>
                        {article.category}
                      </span>
                      <span className="text-slate-400 text-[11px] font-medium flex items-center space-x-1">
                        <Clock className="w-3.5 h-3.5 shrink-0" />
                        <span>{article.readTime}</span>
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-bold font-display text-slate-900 group-hover:text-brand-600 transition duration-150 leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-xs text-slate-550 leading-relaxed line-clamp-4">
                        {article.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 border-t border-slate-100 flex justify-between items-center">
                    <button
                      onClick={() => onNavigate(`article-${article.id}`)}
                      className="text-xs font-bold text-brand-600 hover:text-brand-800 tracking-wider uppercase flex items-center space-x-1"
                    >
                      <span>Read Full Guide</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <BookOpen className="w-4 h-4 text-slate-300" />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center max-w-xl mx-auto space-y-4">
            <span className="p-3 bg-slate-100 text-slate-400 rounded-full inline-block">
              <Search className="w-8 h-8 mx-auto" />
            </span>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-slate-800">No matching article ideas found</h3>
              <p className="text-xs text-slate-500">Try checking your spelling, clear previous filters, or enter standard terms like "wet room" or "grants".</p>
            </div>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="bg-brand-600 hover:bg-brand-700 text-white font-bold py-2 px-5 rounded-lg text-xs"
            >
              Reset Search Filter
            </button>
          </div>
        )}

        {/* Helpful Grant Sticky Banner */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 to-blue-950 rounded-2xl p-8 text-white relative overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl" />
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center space-x-1 bg-blue-500/20 text-blue-300 px-2.5 py-0.5 rounded-full text-[10px] font-bold">
                <Sparkles className="w-3 h-3 text-brand-400" />
                <span>Eligibility Diagnostic Finder</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-display text-white">Not sure which adaptation is eligible for council funding?</h3>
              <p className="text-xs text-slate-355 leading-relaxed">
                Take our 100% free eligibility check. Review standard DFG grant rules of up to <strong className="text-white">£30,000</strong> for domestic installation projects dynamically.
              </p>
            </div>
            <button
              onClick={() => onNavigate('home')}
              className="bg-brand-600 hover:bg-brand-500 text-white font-bold px-6 py-3 rounded-lg text-xs uppercase tracking-wider whitespace-nowrap align-self-start md:align-self-center shrink-0 shadow"
            >
              Verify Eligibility Free
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { HelpCircle, ChevronRight, ChevronLeft, ShieldAlert, Award, Landmark, UserCheck } from 'lucide-react';

interface LeadCalculatorProps {
  onSelectedAdaptation: (serviceId: string) => void;
  onRequestCallback: () => void;
}

export default function LeadCalculator({ onSelectedAdaptation, onRequestCallback }: LeadCalculatorProps) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    need: '',
    ownership: '',
    benefitsOrSavings: ''
  });

  const [calcResult, setCalcResult] = useState<any | null>(null);

  const physicalOptions = [
    { id: 'stairs', label: 'Struggling to climb stairs or change building levels', srv: 'stairlifts' },
    { id: 'bathing', label: 'Difficulty stepping into standard bathtubs or high shower trays', srv: 'walk-in-showers' },
    { id: 'steps', label: 'Negotiating high doorways or raised entry patio thresholds', srv: 'ramps' }
  ];

  const ownershipOptions = [
    { id: 'owner', label: 'I own my home (Solely or with a mortgage)' },
    { id: 'council', label: 'I am a Council / Housing Association tenant' },
    { id: 'private', label: 'I am a Private tenant renting from a landlord' }
  ];

  const financialOptions = [
    { id: 'benefits', label: 'I receive income-based benefits (e.g. Pension Guarantee, Universal Credit, ESA)' },
    { id: 'low-savings', label: 'I have under £6,000 in personal savings' },
    { id: 'mid-savings', label: 'I have savings between £6,000 and £16,000' },
    { id: 'high-savings', label: 'I have savings exceeding £16,000' }
  ];

  const handleSelect = (field: string, val: string) => {
    setAnswers(prev => ({ ...prev, [field]: val }));
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(prev => prev + 1);
    } else {
      calculateEligibility();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
    }
  };

  const calculateEligibility = () => {
    let grantPotential = 'Moderate';
    let summaryText = '';
    let recommendations = [];
    let estimatedCostSavings = 'Up to 100% Fully Funded';

    const srvMatch = physicalOptions.find(o => o.id === answers.need)?.srv || 'stairlifts';

    // DFG logic
    if (answers.benefitsOrSavings === 'benefits' || answers.benefitsOrSavings === 'low-savings') {
      grantPotential = 'High';
      estimatedCostSavings = '100% Fully Funded Grants';
      summaryText = 'You are highly likely to qualify for a fully funded Disabled Facilities Grant (DFG) or the Council Minor Adaptations scheme. This means the installation could cost you absolutely nothing.';
      recommendations = [
        'Secure a free council Occupational Therapist (OT) home visit to ratify adaptation definitions.',
        'Request certified quotes from approved providers like ourselves to package with your application.',
        'Apply for up to £30,000 funding support with your borough housing team.'
      ];
    } else if (answers.benefitsOrSavings === 'mid-savings') {
      grantPotential = 'Moderate';
      estimatedCostSavings = 'Partially Funded / Subsidised';
      summaryText = 'You have a healthy chance of receiving significant grant support under local council standards. The council will calculate a progressive contribution based on your household earnings and savings.';
      recommendations = [
        'Proceed with an OT evaluation to confirm the safety need is "necessary and appropriate".',
        'Secure our VAT Exemption Declaration to immediately scrap 20% off any private components.',
        'Contact our team to establish low-cost financing and grant-matching services.'
      ];
    } else {
      grantPotential = 'Self-Funded with 0% VAT';
      estimatedCostSavings = 'Save 20% instantly via VAT Relief';
      summaryText = 'Because savings exceed £16,000, standard adult DFG means-testing indicates you will likely need to self-fund major portions. However, you are almost certainly entitled to complete VAT Exemption, scraping 20% off all materials and labor.';
      recommendations = [
        'Avoid lengthy council queues (often 6+ months) and proceed with private adaptation in 7-14 days.',
        'Fill in our straightforward One-Page Chronically Ill VAT self-declaration form to instantly erase 20% tax.',
        'Arrange a swift, no-obligation private structural surveyor assessment within 48 hours.'
      ];
    }

    setCalcResult({
      grantPotential,
      estimatedCostSavings,
      summaryText,
      recommendations,
      targetSrv: srvMatch
    });
  };

  const resetCalculator = () => {
    setStep(1);
    setAnswers({ need: '', ownership: '', benefitsOrSavings: '' });
    setCalcResult(null);
  };

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto shadow-sm" id="dfg-lead-calculator">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-brand-600 text-white p-2.5 rounded-xl">
          <Landmark className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold font-display text-slate-900 leading-tight">Adaptation Funding & DFG Eligibility Tool</h3>
          <p className="text-xs text-slate-500 font-semibold tracking-wide uppercase mt-0.5">Check council grants & VAT relief in 60 seconds</p>
        </div>
      </div>

      {calcResult === null ? (
        <div>
          {/* Progress Indicators */}
          <div className="flex items-center justify-between mb-8">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex-1 flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-display ${step === num ? 'bg-brand-600 text-white ring-4 ring-blue-100' : step > num ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-500'}`}>
                  {num}
                </div>
                <div className="ml-2 hidden sm:block">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Step 0{num}</span>
                  <span className="text-xs font-semibold text-slate-700 block text-nowrap">
                    {num === 1 ? 'Primary Need' : num === 2 ? 'Ownership' : 'Financial Eligibility'}
                  </span>
                </div>
                {num < 3 && <div className={`flex-1 h-0.5 mx-4 ${step > num ? 'bg-emerald-300' : 'bg-slate-200'}`} />}
              </div>
            ))}
          </div>

          {/* Step Contents */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 min-h-[220px] flex flex-col justify-between mb-6">
            {step === 1 && (
              <div id="step-1-content">
                <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-3 flex items-center space-x-1">
                  <span>Step 1: What is the main safety or movement support required?</span>
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {physicalOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt.id}
                      onClick={() => handleSelect('need', opt.id)}
                      className={`w-full text-left p-4 rounded-lg border text-xs font-semibold transition-all flex items-center justify-between group ${answers.need === opt.id ? 'border-brand-600 bg-brand-50/50 text-brand-900 ring-1 ring-brand-500' : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'}`}
                    >
                      <span>{opt.label}</span>
                      <ChevronRight className={`w-4 h-4 shrink-0 transition ${answers.need === opt.id ? 'text-brand-600 transform translate-x-1' : 'text-slate-400 group-hover:text-slate-600'}`} />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div id="step-2-content">
                <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-3">
                  Step 2: What is the housing tenure or property ownership status?
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {ownershipOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt.id}
                      onClick={() => handleSelect('ownership', opt.id)}
                      className={`w-full text-left p-4 rounded-lg border text-xs font-semibold transition-all flex items-center justify-between group ${answers.ownership === opt.id ? 'border-brand-600 bg-brand-50/50 text-brand-900 ring-1 ring-brand-500' : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'}`}
                    >
                      <span>{opt.label}</span>
                      <ChevronRight className={`w-4 h-4 shrink-0 transition ${answers.ownership === opt.id ? 'text-brand-600 transform translate-x-1' : 'text-slate-400 group-hover:text-slate-600'}`} />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div id="step-3-content">
                <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-3">
                  Step 3: What is the financial scenario or combined household assets?
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {financialOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt.id}
                      onClick={() => handleSelect('benefitsOrSavings', opt.id)}
                      className={`w-full text-left p-4 rounded-lg border text-xs font-semibold transition-all flex items-center justify-between group ${answers.benefitsOrSavings === opt.id ? 'border-brand-600 bg-brand-50/50 text-brand-900 ring-1 ring-brand-500' : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'}`}
                    >
                      <span>{opt.label}</span>
                      <ChevronRight className={`w-4 h-4 shrink-0 transition ${answers.benefitsOrSavings === opt.id ? 'text-brand-600 transform translate-x-1' : 'text-slate-400 group-hover:text-slate-600'}`} />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step Controls */}
            <div className="flex border-t border-slate-100 pt-4 justify-between items-center mt-6">
              <button
                type="button"
                onClick={handleBack}
                disabled={step === 1}
                className="flex items-center space-x-1 text-xs font-bold text-slate-500 hover:text-slate-800 disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev Step</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={(step === 1 && !answers.need) || (step === 2 && !answers.ownership) || (step === 3 && !answers.benefitsOrSavings)}
                className="bg-brand-600 hover:bg-brand-700 text-white font-bold py-2.5 px-5 rounded-lg text-xs transition-smooth flex items-center space-x-1 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
              >
                <span>{step === 3 ? 'Calculate Results' : 'Next Step'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Results Card */
        <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8" id="dfg-calculator-result">
          <div className="text-center mb-6">
            <span className={`inline-flex items-center px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 ${calcResult.grantPotential === 'High' ? 'bg-emerald-100 text-emerald-800' : calcResult.grantPotential === 'Moderate' ? 'bg-blue-100 text-blue-800' : 'bg-slate-100 text-slate-800'}`}>
              Grant Probability: {calcResult.grantPotential}
            </span>
            <h4 className="text-3xl font-black font-display text-slate-900">{calcResult.estimatedCostSavings}</h4>
          </div>

          <p className="text-sm text-slate-700 leading-relaxed mb-6 bg-slate-50 p-4 rounded-lg border border-slate-100">
            {calcResult.summaryText}
          </p>

          <div className="space-y-4 mb-8">
            <h5 className="text-xs font-bold text-slate-700 uppercase tracking-widest flex items-center space-x-1">
              <Award className="w-4 h-4 text-brand-600" />
              <span>Recommended Next Steps:</span>
            </h5>
            <ol className="space-y-3">
              {calcResult.recommendations.map((rec: string, idx: number) => (
                <li key={idx} className="flex items-start text-xs text-slate-600 leading-normal">
                  <span className="w-5 h-5 rounded-full bg-brand-50 text-brand-700 font-bold flex items-center justify-center shrink-0 mr-3 mt-0.5 text-[10px]">
                    {idx + 1}
                  </span>
                  <span>{rec}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => onSelectedAdaptation(calcResult.targetSrv)}
              className="w-full bg-slate-900 hover:bg-black text-white font-bold py-3 px-4 rounded-lg text-xs transition duration-150 shadow text-center cursor-pointer"
            >
              Learn more about this adaptation
            </button>
            <button
              onClick={onRequestCallback}
              className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 px-4 rounded-lg text-xs transition duration-150 shadow-md text-center cursor-pointer"
            >
              Request Free Funding Callback
            </button>
          </div>

          <div className="text-center mt-5 border-t border-slate-100 pt-4">
            <button
              onClick={resetCalculator}
              className="text-xs text-slate-400 hover:text-slate-600 underline font-medium"
            >
              Start Over Check with different metrics
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

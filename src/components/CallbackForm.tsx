import React, { useState } from 'react';
import { Phone, CheckCircle, Clock, ShieldCheck, HelpCircle } from 'lucide-react';
import { ServiceId } from '../types';

interface CallbackFormProps {
  initialServiceId?: ServiceId | 'general';
  onSubmitted?: (leadData: any) => void;
  title?: string;
  subtitle?: string;
  allServices: { id: ServiceId; title: string }[];
}

export default function CallbackForm({
  initialServiceId = 'general',
  onSubmitted,
  title = "Arrange Your Free Specialist Consultation",
  subtitle = "Speak with a friendly independent living expert who can help you secure funding and map your home adaptations.",
  allServices
}: CallbackFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    postcode: '',
    serviceChosen: initialServiceId,
    fundingSource: 'unsure',
    notes: '',
    acceptedTerms: true
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const validatePostcode = (pc: string) => {
    // UK postcode regex
    const pcRegex = /^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))\s?[0-9][A-Za-z]{2})$/;
    return pcRegex.test(pc.trim().replace(/\s+/g, '').toUpperCase());
  };

  const validatePhone = (num: string) => {
    // UK phone numbers
    const phoneRegex = /^(?:(?:\+44\s?|0)7\d{3}\s?\d{6})|(?:(?:\+44\s?|0)[12358]\d{2}\s?\d{3,4}\s?\d{3,4})$/;
    return phoneRegex.test(num.trim().replace(/[\s()-]+/g, ''));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
    if (errors[name]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name so our advisors can address you correctly.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your direct contact phone number.';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid UK telephone number (landline or mobile).';
    }

    if (!formData.postcode.trim()) {
      newErrors.postcode = 'Postcode is essential to direct your query to our closest technician.';
    } else if (!validatePostcode(formData.postcode)) {
      newErrors.postcode = 'Please enter a valid UK postcode (e.g. M1 1AE or SW1A 1AA).';
    }

    if (!formData.acceptedTerms) {
      newErrors.acceptedTerms = 'To proceed, please consent to our advisors getting in touch with you.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    // Simulate submission delay
    setTimeout(() => {
      setLoading(false);
      setSubmissionSuccess(true);
      if (onSubmitted) {
        onSubmitted(formData);
      }
    }, 1200);
  };

  if (submissionSuccess) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center max-w-xl mx-auto shadow-md" id="callback-success-container">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-10 h-10 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-bold font-display text-emerald-900 mb-2">Thank You, Callback Request Confirmed!</h3>
        <p className="text-slate-700 text-sm mb-4 leading-relaxed">
          Our Senior Living Specialist has received your request and is matching your requirements for <strong className="text-slate-900 capitalize">{formData.serviceChosen.replace('-', ' ')}</strong> against direct funding grants and partner schedules in <strong className="text-slate-900 uppercase">{formData.postcode}</strong>.
        </p>

        <div className="bg-white rounded-lg p-4 border border-emerald-100 text-left space-y-3 shadow-inner my-5">
          <div className="flex items-start space-x-3 text-xs">
            <Clock className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
            <div>
              <p className="font-bold text-slate-800">What happens next?</p>
              <p className="text-slate-600">We will phone you on <strong className="text-slate-900">{formData.phone}</strong> within 15 to 30 minutes for a quick friendly chat to confirm details.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 text-xs border-t border-slate-100 pt-3">
            <ShieldCheck className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
            <div>
              <p className="font-bold text-slate-800">Preparation helper:</p>
              <p className="text-slate-600">Have any information on whether you currently receive pensions or state benefits handy, as they may instantly trigger a free local grant assessment!</p>
            </div>
          </div>
        </div>

        <button 
          onClick={() => {
            setSubmissionSuccess(false);
            setFormData(prev => ({...prev, fullName: '', phone: '', postcode: '', notes: ''}));
          }} 
          className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 underline focus:ring-2 focus:ring-emerald-600 p-1"
        >
          Submit another request or modify details
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden" id="callback-form-main">
      {/* Header Banner */}
      <div className="bg-slate-900 p-6 text-white text-center">
        <h3 className="text-xl font-bold font-display leading-tight">{title}</h3>
        <p className="text-xs text-slate-300 mt-2 leading-relaxed max-w-md mx-auto">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-5" aria-label="UK Callback Lead Request Form">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
            Your Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="e.g. Robert Smith"
            className={`w-full text-sm px-4 py-2.5 rounded-lg border bg-slate-50 text-slate-950 focus:bg-white focus:ring-2 focus:ring-brand-500 transition-all ${errors.fullName ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-300'}`}
          />
          {errors.fullName && <p className="text-xs text-rose-600 font-medium mt-1">{errors.fullName}</p>}
        </div>

        {/* Contact Phone & Postcode Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
              Contact Phone <span className="text-rose-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="e.g. 07123 456789"
              className={`w-full text-sm px-4 py-2.5 rounded-lg border bg-slate-50 text-slate-950 focus:bg-white focus:ring-2 focus:ring-brand-500 transition-all ${errors.phone ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-300'}`}
            />
            {errors.phone && <p className="text-xs text-rose-600 font-medium mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="postcode" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
              UK Postcode <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="postcode"
              name="postcode"
              value={formData.postcode}
              onChange={handleInputChange}
              placeholder="e.g. M1 1AE"
              className={`w-full text-sm px-4 py-2.5 rounded-lg border bg-slate-50 text-slate-950 focus:bg-white focus:ring-2 focus:ring-brand-500 transition-all uppercase ${errors.postcode ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-300'}`}
            />
            {errors.postcode && <p className="text-xs text-rose-600 font-medium mt-1">{errors.postcode}</p>}
          </div>
        </div>

        {/* Dynamic Service Choice Dropdown */}
        <div>
          <label htmlFor="serviceChosen" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
            Required Adaptation Service
          </label>
          <select
            id="serviceChosen"
            name="serviceChosen"
            value={formData.serviceChosen}
            onChange={handleInputChange}
            className="w-full text-sm px-4 py-2.5 rounded-lg border border-slate-300 bg-slate-50 text-slate-950 focus:bg-white focus:ring-2 focus:ring-brand-500 transition-all font-medium"
          >
            <option value="general">Request General Consultation / Multi-adaptations</option>
            {allServices.map(srv => (
              <option key={srv.id} value={srv.id}>{srv.title}</option>
            ))}
          </select>
        </div>

        {/* Funding Interest */}
        <div>
          <label htmlFor="fundingSource" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
            Likely Funding Scenario
          </label>
          <select
            id="fundingSource"
            name="fundingSource"
            value={formData.fundingSource}
            onChange={handleInputChange}
            className="w-full text-sm px-4 py-2.5 rounded-lg border border-slate-300 bg-slate-50 text-slate-950 focus:bg-white focus:ring-2 focus:ring-brand-500 transition-all font-medium"
          >
            <option value="unsure">Unsure - Please help me check eligibility</option>
            <option value="dfg">Applying for the Disabled Facilities Grant (DFG)</option>
            <option value="council">Council Minor Adaptation Services (works under £1k)</option>
            <option value="private-vat">Private Funding with Chronically Ill 0% VAT exemption</option>
            <option value="self-funded">Private / Self-funded standard</option>
          </select>
        </div>

        {/* Additional Notes */}
        <div>
          <label htmlFor="notes" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
            Tell us about your home situation (Optional)
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={2}
            value={formData.notes}
            onChange={handleInputChange}
            placeholder="e.g. Staircase curved at bottom, or bather struggles with deep bath. Please phone after 2pm."
            className="w-full text-sm px-4 py-2 rounded-lg border border-slate-300 bg-slate-50 text-slate-950 focus:bg-white focus:ring-2 focus:ring-brand-500 transition-all resize-none"
          />
        </div>

        {/* Consent Checkbox */}
        <div className="flex items-start">
          <input
            type="checkbox"
            id="acceptedTerms"
            name="acceptedTerms"
            checked={formData.acceptedTerms}
            onChange={handleInputChange}
            className="h-4 w-4 mt-0.5 text-brand-600 focus:ring-brand-500 border-slate-300 rounded"
          />
          <label htmlFor="acceptedTerms" className="ml-2 text-xs text-slate-600 leading-normal">
            Yes, I consent to a friendly Home Adaptation advice specialist telephoning me to discuss my accessibility assessment. My data is handled securely under strict UK GDPR principles.
          </label>
        </div>
        {errors.acceptedTerms && <p className="text-xs text-rose-600 font-medium">{errors.acceptedTerms}</p>}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-smooth shadow-md flex items-center justify-center space-x-2 cursor-pointer focus:ring-4 focus:ring-blue-100 disabled:opacity-60"
        >
          {loading ? (
            <span className="flex items-center space-x-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              <span>Evaluating UK Region eligibility...</span>
            </span>
          ) : (
            <>
              <Phone className="w-5 h-5 shrink-0" />
              <span>Request Free Advisor Callback</span>
            </>
          )}
        </button>

        {/* Trust Badges */}
        <div className="border-t border-slate-100 pt-3 flex items-center justify-center space-x-4 text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
          <span className="flex items-center space-x-1">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-500" />
            <span>GDPR Secure</span>
          </span>
          <span>•</span>
          <span>No Obligation Advice</span>
          <span>•</span>
          <span>VAT Exemption Check</span>
        </div>
      </form>
    </div>
  );
}

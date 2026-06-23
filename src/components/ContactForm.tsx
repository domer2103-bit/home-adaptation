import React, { useState } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';

interface ContactFormProps {
    initialServiceId?: string;
}

export default function ContactForm({ initialServiceId = '' }: ContactFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        postcode: '',
        service: initialServiceId,
        message: ''
    });

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = 'Full name is required';

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^(?:(?:\+44\s?|0)7\d{3}\s?\d{6})|(?:(?:\+44\s?|0)[12358]\d{2}\s?\d{3,4}\s?\d{3,4})$/.test(formData.phone.replace(/[\s-]/g, ''))) {
            newErrors.phone = 'Please enter a valid UK phone number';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email address is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.postcode.trim()) newErrors.postcode = 'Postcode is required';
        if (!formData.service) newErrors.service = 'Please select a service';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setStatus('submitting');

        try {
            // FormSubmit.co simple AJAX configuration
            const response = await fetch('https://formsubmit.co/ajax/aiskoolhub@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: `New Website Enquiry: ${formData.service} (${formData.postcode})`,
                    "Full Name": formData.name,
                    "Phone Number": formData.phone,
                    "Email Address": formData.email,
                    "Postcode": formData.postcode,
                    "Service Needed": formData.service,
                    "Message": formData.message || 'No additional message provided.'
                })
            });

            if (response.ok) {
                setStatus('success');
            } else {
                setStatus('idle');
                alert("Sorry, there was an issue sending your request. Please try again.");
            }
        } catch (error) {
            setStatus('idle');
            alert("Network error. Please check your connection and try again.");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    if (status === 'success') {
        return (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center shadow-sm">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-2">Thank you!</h3>
                <p className="text-emerald-800">
                    Thank you, we’ve received your enquiry and will contact you soon.
                </p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden">
            <div className="bg-slate-900 p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Request a Free Quote</h3>
                <p className="text-sm text-slate-300">Tell us about your home adaptation needs and we’ll get back to you as soon as possible.</p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5" noValidate>
                {/* Full Name & Phone Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-1.5">
                            Full name <span className="text-rose-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g. Jane Doe"
                            className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-slate-900 focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none transition-all ${errors.name ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-200'}`}
                            disabled={status === 'submitting'}
                        />
                        {errors.name && <p className="text-xs text-rose-500 mt-1.5 font-medium">{errors.name}</p>}
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-1.5">
                            Phone number <span className="text-rose-500">*</span>
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="e.g. 07123 456789"
                            className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-slate-900 focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none transition-all ${errors.phone ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-200'}`}
                            disabled={status === 'submitting'}
                        />
                        {errors.phone && <p className="text-xs text-rose-500 mt-1.5 font-medium">{errors.phone}</p>}
                    </div>
                </div>

                {/* Email & Postcode Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-1.5">
                            Email address <span className="text-rose-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="e.g. jane@example.com"
                            className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-slate-900 focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none transition-all ${errors.email ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-200'}`}
                            disabled={status === 'submitting'}
                        />
                        {errors.email && <p className="text-xs text-rose-500 mt-1.5 font-medium">{errors.email}</p>}
                    </div>

                    <div>
                        <label htmlFor="postcode" className="block text-sm font-bold text-slate-700 mb-1.5">
                            Postcode <span className="text-rose-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="postcode"
                            name="postcode"
                            value={formData.postcode}
                            onChange={handleChange}
                            placeholder="e.g. L1 0AA"
                            className={`w-full px-4 py-3 rounded-xl border uppercase bg-slate-50 text-slate-900 focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none transition-all ${errors.postcode ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-200'}`}
                            disabled={status === 'submitting'}
                        />
                        {errors.postcode && <p className="text-xs text-rose-500 mt-1.5 font-medium">{errors.postcode}</p>}
                    </div>
                </div>

                {/* Service Needed Dropdown */}
                <div>
                    <label htmlFor="service" className="block text-sm font-bold text-slate-700 mb-1.5">
                        Service needed <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                        <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-xl border appearance-none bg-slate-50 text-slate-900 focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none transition-all ${errors.service ? 'border-rose-400 focus:ring-rose-400' : 'border-slate-200'}`}
                            disabled={status === 'submitting'}
                        >
                            <option value="" disabled>Select an option...</option>
                            <option value="Walk-in shower">Walk-in shower</option>
                            <option value="Stairlift">Stairlift</option>
                            <option value="Ramp">Ramp</option>
                            <option value="Other">Other</option>
                        </select>
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                    {errors.service && <p className="text-xs text-rose-500 mt-1.5 font-medium">{errors.service}</p>}
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-1.5">
                        Message <span className="text-slate-400 font-normal text-xs">(optional)</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us a bit more about what you need..."
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none transition-all resize-y"
                        disabled={status === 'submitting'}
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg shadow-brand-600/20 active:scale-[0.98] flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {status === 'submitting' ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin mr-2" />
                            Sending Request...
                        </>
                    ) : (
                        'Request a Free Quote'
                    )}
                </button>
            </form>
        </div>
    );
}

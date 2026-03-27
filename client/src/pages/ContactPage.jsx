import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-[#121212] text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-4 italic tracking-tight">Get <span className='text-[#FF9F1C]'>in</span> Touch</h1>
                    <p className="text-gray-400 text-lg">Have questions about your booking? We're here to help.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-[#1C1C1C] p-8 rounded-2xl border border-[#2A2A2A] shadow-2xl">
                        <form className="space-y-6">
                            <div>
                                <label className="block font-medium mb-2 text-gray-300">Full Name *</label>
                                <input
                                    type="text"
                                    className="w-full bg-[#121212] border border-[#2A2A2A] rounded-xl px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF9F1C]/50 transition placeholder:text-gray-600"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className='w-full flex flex-col md:flex-row gap-4'>
                                <div className='flex-1'>
                                    <label className="block font-medium mb-2 text-gray-300">Email Address *</label>
                                    <input
                                        type="email"
                                        className="w-full bg-[#121212] border border-[#2A2A2A] rounded-xl px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF9F1C]/50 transition placeholder:text-gray-600"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div className='flex-1'>
                                    <label className="block font-medium mb-2 text-gray-300">Phone Number *</label>
                                    <input
                                        type="text"
                                        className="w-full bg-[#121212] border border-[#2A2A2A] rounded-xl px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF9F1C]/50 transition placeholder:text-gray-600"
                                        placeholder="+880 xxxxxxxxxx"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block font-medium mb-2 text-gray-300">Message *</label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-[#121212] border border-[#2A2A2A] rounded-xl px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF9F1C]/50 transition placeholder:text-gray-600"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                            <button className="w-full bg-[#FF9F1C] hover:bg-[#e68e19] text-black font-bold py-3.5 rounded-xl transition duration-300 cursor-pointer shadow-lg shadow-orange-900/10">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info & Details */}
                    <div className="space-y-8">
                        <div className="flex items-start space-x-5">
                            <div className="bg-[#FF9F1C]/10 p-4 rounded-xl border border-[#FF9F1C]/20">
                                <Phone className="text-[#FF9F1C]" size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-100">Phone Support</h3>
                                <p className="text-gray-400">+880 1736088083</p>
                                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Mon-Sun, 9am - 11pm</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-5">
                            <div className="bg-[#FF9F1C]/10 p-4 rounded-xl border border-[#FF9F1C]/20">
                                <Mail className="text-[#FF9F1C]" size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-100">Email Us</h3>
                                <p className="text-gray-400">support@movietickets.com</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-5">
                            <div className="bg-[#FF9F1C]/10 p-4 rounded-xl border border-[#FF9F1C]/20">
                                <MapPin className="text-[#FF9F1C]" size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-100">Main Office</h3>
                                <p className="text-gray-400 leading-relaxed">123 Cinema Lane, Hollywood, CA 90210</p>
                            </div>
                        </div>

                        {/* Quick FAQ Box - Matches CineMax style */}
                        <div className="mt-12 p-8 bg-[#1C1C1C] border border-[#2A2A2A] rounded-2xl relative overflow-hidden group">
                            <div className='absolute top-0 right-0 w-32 h-32 bg-[#FF9F1C]/5 rounded-full -mr-16 -mt-16 blur-3xl'></div>
                            <h4 className="text-lg font-bold mb-3 text-white">Need a fast answer?</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">Check our FAQ for questions about refunds, cancellations, and digital ticket entry.</p>
                            <button className="mt-5 text-[#FF9F1C] text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all cursor-pointer">
                                View Help Center <span>→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;

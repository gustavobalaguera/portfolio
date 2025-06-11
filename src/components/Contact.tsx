import React, { useState } from 'react';
import { Mail, Linkedin, Github, Phone, MapPin, Send, ExternalLink, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message
          }
        ]);

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      
      // Fallback to mailto
      const mailtoLink = `mailto:gustavobalaguera214@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.open(mailtoLink, '_blank');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-900 to-secondary-950"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 animate-slide-top">
            <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-8 animate-scale-in animate-delay-200"></div>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto animate-fade-in-up animate-delay-300">
            I'm actively seeking internships and opportunities in cybersecurity. 
            Let's connect to discuss how I can contribute to your organization's security goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-left">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-secondary-200 mb-8 leading-relaxed text-lg">
                Whether you're looking for a cybersecurity intern, want to discuss a project, 
                or simply connect with a fellow security enthusiast, I'd love to hear from you. 
                I'm particularly interested in opportunities involving cloud security, 
                penetration testing, and secure application development.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <a
                href="mailto:gustavobalaguera214@gmail.com"
                className="group flex items-center p-6 bg-secondary-800/30 backdrop-blur-sm border border-secondary-700/50 rounded-2xl hover:bg-secondary-800/50 hover:border-primary-500/30 transition-all duration-300"
              >
                <div className="bg-primary-500/10 p-4 rounded-xl mr-6 group-hover:bg-primary-500/20 transition-colors duration-300">
                  <Mail className="h-6 w-6 text-primary-400" />
                </div>
                <div className="flex-grow">
                  <p className="font-semibold text-white text-lg">Email</p>
                  <p className="text-secondary-300">gustavobalaguera214@gmail.com</p>
                </div>
                <ExternalLink className="h-5 w-5 text-secondary-400 group-hover:text-primary-400 transition-colors duration-300" />
              </a>

              <a
                href="https://linkedin.com/in/gbalaguera"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center p-6 bg-secondary-800/30 backdrop-blur-sm border border-secondary-700/50 rounded-2xl hover:bg-secondary-800/50 hover:border-primary-500/30 transition-all duration-300"
              >
                <div className="bg-primary-500/10 p-4 rounded-xl mr-6 group-hover:bg-primary-500/20 transition-colors duration-300">
                  <Linkedin className="h-6 w-6 text-primary-400" />
                </div>
                <div className="flex-grow">
                  <p className="font-semibold text-white text-lg">LinkedIn</p>
                  <p className="text-secondary-300">Connect professionally</p>
                </div>
                <ExternalLink className="h-5 w-5 text-secondary-400 group-hover:text-primary-400 transition-colors duration-300" />
              </a>

              <a
                href="https://github.com/gustavobalaguera"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center p-6 bg-secondary-800/30 backdrop-blur-sm border border-secondary-700/50 rounded-2xl hover:bg-secondary-800/50 hover:border-primary-500/30 transition-all duration-300"
              >
                <div className="bg-secondary-600/20 p-4 rounded-xl mr-6 group-hover:bg-secondary-600/30 transition-colors duration-300">
                  <Github className="h-6 w-6 text-secondary-300" />
                </div>
                <div className="flex-grow">
                  <p className="font-semibold text-white text-lg">GitHub</p>
                  <p className="text-secondary-300">View my code and projects</p>
                </div>
                <ExternalLink className="h-5 w-5 text-secondary-400 group-hover:text-primary-400 transition-colors duration-300" />
              </a>
            </div>

            {/* Current Status */}
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-3">Current Status</h4>
                <p className="text-sm opacity-90 mb-4">
                  <strong>Full-Time Student Open To Work</strong> - Actively seeking cybersecurity internships 
                  and entry-level positions for Summer 2025 and beyond.
                </p>
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Stevens Institute of Technology - Hoboken, NJ</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-right">
            <div className="bg-secondary-800/30 backdrop-blur-sm border border-secondary-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <p className="text-green-300">Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3">
                  <AlertCircle className="h-5 w-5 text-red-400" />
                  <p className="text-red-300">There was an error sending your message. Please try the email link above.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-3">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-secondary-700/50 border border-secondary-600/50 rounded-xl text-white placeholder-secondary-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-3">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-secondary-700/50 border border-secondary-600/50 rounded-xl text-white placeholder-secondary-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-3">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary-700/50 border border-secondary-600/50 rounded-xl text-white placeholder-secondary-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Internship Opportunity / Project Discussion / etc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary-700/50 border border-secondary-600/50 rounded-xl text-white placeholder-secondary-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-vertical transition-all duration-300"
                    placeholder="Tell me about the opportunity, project, or how we can work together..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-4 px-6 rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 flex items-center justify-center gap-3 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              <p className="text-xs text-secondary-400 mt-6 text-center">
                This form is powered by Supabase. You can also email me directly at{' '}
                <a href="mailto:gustavobalaguera214@gmail.com" className="text-primary-400 hover:underline">
                  gustavobalaguera214@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
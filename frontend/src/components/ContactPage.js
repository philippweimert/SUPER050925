import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Building2, Users } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Hauptsitz",
      details: ["ACENCIA GmbH", "Hackenheim, Deutschland"],
      link: null
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-Mail",
      details: ["info@acencia.de"],
      link: "mailto:info@acencia.de"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefon",
      details: ["+49 (0) 6701 123456"],
      link: "tel:+4967011234567"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Geschäftszeiten",
      details: ["Mo - Fr: 9:00 - 18:00", "Sa: 10:00 - 14:00"],
      link: null
    }
  ];

  const quickActions = [
    {
      title: "Beratungstermin buchen",
      description: "Vereinbaren Sie einen kostenlosen Beratungstermin",
      action: () => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank'),
      buttonText: "Termin buchen"
    },
    {
      title: "Demo anfordern",
      description: "Sehen Sie unsere Plattform in Aktion",
      action: () => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank'),
      buttonText: "Demo anfordern"
    }
  ];

  return (
    <div className="min-h-screen bg-acencia">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-acencia py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6 leading-tight tracking-tight font-heading">
              Kontakt zu <span className="text-acencia-orange">ACENCIA</span>
            </h1>
            <p className="text-xl text-acencia-blue max-w-3xl mx-auto leading-relaxed">
              Haben Sie Fragen zu unseren Lösungen? Wir sind für Sie da und beraten Sie gerne persönlich.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-acencia py-16">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:bg-gray-50 transition-colors duration-150">
                <div className="w-14 h-14 bg-gradient-to-br from-acencia-orange/10 to-acencia-orange/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-acencia-orange">
                    {info.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 font-heading">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <div key={idx}>
                      {info.link ? (
                        <a href={info.link} className="text-acencia-orange hover:text-acencia-orange/80 transition-colors duration-150">
                          {detail}
                        </a>
                      ) : (
                        <p className="text-gray-600 text-sm">{detail}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-heading">
                Nachricht senden
              </h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <p className="text-green-800">Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-acencia-orange focus:border-acencia-orange transition-colors duration-200"
                      placeholder="Ihr vollständiger Name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-acencia-orange focus:border-acencia-orange transition-colors duration-200"
                      placeholder="ihre@email.de"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Unternehmen
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-acencia-orange focus:border-acencia-orange transition-colors duration-200"
                      placeholder="Ihr Unternehmen"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-acencia-orange focus:border-acencia-orange transition-colors duration-200"
                      placeholder="+49 (0) 123 456789"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-acencia-orange focus:border-acencia-orange transition-colors duration-200 resize-none"
                    placeholder="Wie können wir Ihnen helfen?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-acencia-orange hover:bg-acencia-orange/90 disabled:bg-acencia-orange/50 text-white px-6 py-4 rounded-lg font-medium text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Wird gesendet...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Nachricht senden</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Quick Actions */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-6 font-heading">
                  Schnelle Aktionen
                </h2>
                <div className="space-y-6">
                  {quickActions.map((action, index) => (
                    <div key={index} className="bg-white rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">
                        {action.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {action.description}
                      </p>
                      <button
                        onClick={action.action}
                        className="bg-acencia-orange hover:bg-acencia-orange/90 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                      >
                        {action.buttonText}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                  Warum ACENCIA kontaktieren?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-acencia-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Kostenlose Erstberatung</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-acencia-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">30+ Jahre Branchenerfahrung</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-acencia-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Individuelle Lösungen</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-acencia-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Persönlicher Ansprechpartner</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
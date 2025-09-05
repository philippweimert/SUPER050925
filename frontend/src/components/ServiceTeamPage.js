import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Users, Mail, Phone, Award, Heart, Star, ArrowRight, CheckCircle, MessageCircle, Clock } from "lucide-react";

const ServiceTeamPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: "Uwe Weimert",
      position: "Geschäftsführer",
      specialization: "Strategische Beratung & Unternehmensführung",
      experience: "30+ Jahre",
      description: "Als Gründer und Geschäftsführer leitet Uwe Weimert ACENCIA mit über 30 Jahren Erfahrung in der betrieblichen Vorsorge.",
      expertise: ["Strategische Unternehmensberatung", "Betriebliche Altersvorsorge", "Digitale Transformation", "Compliance & Regulierung"]
    },
    {
      name: "Dr. Sarah Müller",
      position: "Leiterin Kundenberatung",
      specialization: "bAV-Beratung & Konzeptentwicklung",
      experience: "15+ Jahre",
      description: "Dr. Müller ist unsere Expertin für maßgeschneiderte bAV-Lösungen und berät Unternehmen jeder Größenordnung.",
      expertise: ["Pensionsrechtliche Beratung", "Tarifverhandlungen", "Steueroptimierung", "Internationale Verträge"]
    },
    {
      name: "Marcus Klein",
      position: "Head of Technology",
      specialization: "Digitale Plattformentwicklung",
      experience: "12+ Jahre",
      description: "Marcus Klein verantwortet die technische Entwicklung unserer digitalen Lösungen und Plattformen.",
      expertise: ["Softwarearchitektur", "API-Entwicklung", "Datensicherheit", "Cloud-Infrastructure"]
    },
    {
      name: "Lisa Schmidt",
      position: "Senior bKV-Beraterin",
      specialization: "Betriebliche Krankenversicherung",
      experience: "10+ Jahre",
      description: "Lisa Schmidt ist unsere Spezialistin für betriebliche Krankenversicherung und Gesundheitsmanagement.",
      expertise: ["Gesundheitsmanagement", "Versicherungsrecht", "Tarifvergleiche", "Präventionskonzepte"]
    },
    {
      name: "Thomas Weber",
      position: "Customer Success Manager",
      specialization: "Kundenbetreuung & Support",
      experience: "8+ Jahre",
      description: "Thomas Weber sorgt dafür, dass unsere Kunden optimal von unseren Lösungen profitieren.",
      expertise: ["Onboarding-Prozesse", "Schulungen & Training", "Process Optimization", "Change Management"]
    },
    {
      name: "Anna Richter",
      position: "Compliance & Legal",
      specialization: "Rechtliche Beratung & Compliance",
      experience: "12+ Jahre",
      description: "Anna Richter stellt sicher, dass alle unsere Lösungen den aktuellen rechtlichen Anforderungen entsprechen.",
      expertise: ["Arbeitsrecht", "Versicherungsrecht", "DSGVO-Compliance", "Regulatorische Beratung"]
    }
  ];

  const serviceValues = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Persönliche Betreuung",
      description: "Jeder Kunde hat einen festen Ansprechpartner, der seine Bedürfnisse kennt."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Schnelle Reaktionszeiten",
      description: "Wir antworten binnen 24 Stunden auf alle Anfragen und Serviceanliegen."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Expertenwissen",
      description: "Unser Team verfügt über jahrzehntelange Erfahrung in der betrieblichen Vorsorge."
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Proaktive Kommunikation",
      description: "Wir informieren Sie proaktiv über wichtige Änderungen und Neuigkeiten."
    }
  ];

  const supportChannels = [
    {
      title: "Persönliche Beratung",
      description: "Vereinbaren Sie einen Termin für eine persönliche Beratung vor Ort oder online.",
      action: () => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank'),
      buttonText: "Termin buchen",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Telefon-Support",
      description: "Erreichen Sie uns während der Geschäftszeiten direkt telefonisch.",
      action: () => window.location.href = 'tel:+4967011234567',
      buttonText: "Anrufen",
      icon: <Phone className="w-6 h-6" />
    },
    {
      title: "E-Mail Support",
      description: "Senden Sie uns Ihre Fragen per E-Mail - wir antworten binnen 24 Stunden.",
      action: () => window.location.href = 'mailto:support@acencia.de',
      buttonText: "E-Mail senden",
      icon: <Mail className="w-6 h-6" />
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
              Unser <span className="text-acencia-orange">Service-Team</span>
            </h1>
            <p className="text-xl text-acencia-blue max-w-3xl mx-auto leading-relaxed">
              Lernen Sie die Experten kennen, die hinter ACENCIA stehen und täglich für Ihren Erfolg arbeiten.
            </p>
          </div>
        </div>
      </section>

      {/* Service Values */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight font-heading">
              Was uns auszeichnet
            </h2>
            <p className="text-lg text-acencia-blue max-w-2xl mx-auto leading-relaxed">
              Unsere Service-Philosophie basiert auf diesen Grundwerten
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceValues.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:bg-gray-50 transition-colors duration-150">
                <div className="w-14 h-14 bg-gradient-to-br from-acencia-orange/10 to-acencia-orange/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-acencia-orange">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight font-heading">
              Unsere Experten
            </h2>
            <p className="text-lg text-acencia-blue max-w-2xl mx-auto leading-relaxed">
              Ein starkes Team mit langjähriger Erfahrung und fundiertem Fachwissen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg p-8 hover:bg-gray-50 transition-colors duration-150">
                {/* Avatar Placeholder */}
                <div className="w-20 h-20 bg-gradient-to-br from-acencia-orange/10 to-acencia-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-acencia-orange" />
                </div>
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 font-heading">
                    {member.name}
                  </h3>
                  <p className="text-acencia-orange font-medium mb-1">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                    {member.specialization}
                  </p>
                  <div className="inline-flex items-center space-x-1 text-sm text-gray-500">
                    <Star className="w-4 h-4 text-acencia-orange" />
                    <span>{member.experience}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {member.description}
                </p>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm font-heading">
                    Expertise:
                  </h4>
                  <div className="space-y-2">
                    {member.expertise.map((skill, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-acencia-orange flex-shrink-0" />
                        <span className="text-gray-600 text-xs">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Channels */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight font-heading">
              So erreichen Sie uns
            </h2>
            <p className="text-lg text-acencia-blue max-w-2xl mx-auto leading-relaxed">
              Wählen Sie den Kontaktweg, der am besten zu Ihrem Anliegen passt
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white rounded-lg p-8 text-center hover:bg-gray-50 transition-colors duration-150">
                <div className="w-16 h-16 bg-gradient-to-br from-acencia-orange/10 to-acencia-orange/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <div className="text-acencia-orange">
                    {channel.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                  {channel.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {channel.description}
                </p>
                
                <button
                  onClick={channel.action}
                  className="w-full bg-acencia-orange hover:bg-acencia-orange/90 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  {channel.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-semibold text-gray-900 mb-6 font-heading">
                  Unsere Geschäftszeiten
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-900">Montag - Freitag</span>
                    <span className="text-gray-600">9:00 - 18:00 Uhr</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-900">Samstag</span>
                    <span className="text-gray-600">10:00 - 14:00 Uhr</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-gray-900">Sonntag</span>
                    <span className="text-gray-500">Geschlossen</span>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-acencia-orange/5 rounded-lg border border-acencia-orange/20">
                  <h3 className="font-semibold text-gray-900 mb-2 font-heading">
                    Notfall-Support
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Für dringende Anliegen außerhalb der Geschäftszeiten erreichen Sie unseren Notfall-Support unter:
                  </p>
                  <p className="text-acencia-orange font-medium mt-2">
                    +49 (0) 6701 987654
                  </p>
                </div>
              </div>

              <div className="text-center">
                <Clock className="w-24 h-24 text-acencia-orange mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                  Flexible Terminvereinbarung
                </h3>
                <p className="text-gray-600 mb-6">
                  Gerne vereinbaren wir auch Termine außerhalb unserer regulären Geschäftszeiten, wenn es Ihr Zeitplan erfordert.
                </p>
                <button
                  onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
                  className="bg-acencia-orange hover:bg-acencia-orange/90 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200 flex items-center justify-center space-x-2 mx-auto"
                >
                  <span>Individuellen Termin buchen</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 font-heading">
              Lassen Sie uns ins Gespräch kommen
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Unser Service-Team freut sich darauf, Sie kennenzulernen und gemeinsam die beste Lösung für Ihr Unternehmen zu finden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-acencia-orange hover:bg-acencia-orange/90 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
              >
                <span>Beratungstermin buchen</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                to="/kontakt"
                className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Kontakt aufnehmen</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceTeamPage;
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Users, Award, Lightbulb, Shield, ArrowRight, MapPin, Phone, Mail, Calendar } from "lucide-react";

const AboutPage = () => {
  const values = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Partnerschaft",
      description: "Echter Partner unserer Kunden mit langfristiger Begleitung."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Expertise", 
      description: "Über 30 Jahre Erfahrung in der betrieblichen Altersvorsorge."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "Digitalisierung und Automatisierung für maximale Effizienz."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sicherheit",
      description: "Rechtssichere und compliance-konforme Abwicklung als Standard."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Apple-like */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight tracking-tight">
              Über <span className="text-orange-600">ACENCIA</span>
            </h1>
            <p className="text-xl text-gray-600 mb-4 leading-relaxed">
              Ihr Partner für digitale betriebliche Altersvorsorge
            </p>
            <p className="text-base text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Seit über 30 Jahren begleiten wir Unternehmen und deren Mitarbeiter bei der Gestaltung 
              und Verwaltung der betrieblichen Altersvorsorge. Mit Innovation und Expertise machen wir bAV einfach.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <Lightbulb className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-3xl font-semibold text-gray-900 tracking-tight">
                Unsere Mission
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Wir digitalisieren und automatisieren die betriebliche Altersvorsorge, um HR-Teams zu entlasten 
                  und Unternehmen dabei zu helfen, ihren Mitarbeitern attraktive Zusatzleistungen zu bieten.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Unser Ziel ist es, die Komplexität der bAV zu reduzieren und durch intelligente Technologie 
                  eine reibungslose, rechtssichere Abwicklung zu gewährleisten.
                </p>
              </div>
              <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Warum ACENCIA?</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>30+ Jahre Branchenerfahrung</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>100% digitale Lösungen</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>DSGVO-konforme Abwicklung</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Persönliche Betreuung</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
              Unsere Werte
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Diese Grundsätze leiten unser tägliches Handeln und prägen unsere Zusammenarbeit mit Kunden und Partnern.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-all duration-150"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <div className="text-orange-600">
                      {value.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Company Details */}
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 tracking-tight">
                  Unternehmen
                </h3>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Gründung</h4>
                  <p className="text-sm">Seit über 30 Jahren am Markt etabliert</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Geschäftsführung</h4>
                  <p className="text-sm">Uwe Weimert</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Spezialisierung</h4>
                  <p className="text-sm">Betriebliche Altersvorsorge, Digitalisierung, HR-Technologie</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Rechtsform</h4>
                  <p className="text-sm">GmbH, registriert beim Amtsgericht Mainz</p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 tracking-tight">
                  Kontakt
                </h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Adresse</h4>
                    <p className="text-gray-700 text-sm">
                      ACENCIA GmbH<br />
                      Fasanenweg 5<br />
                      55546 Hackenheim
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Telefon</h4>
                    <a href="tel:+4967038061180" className="text-orange-600 hover:text-orange-700 text-sm transition-colors duration-150">
                      +49 (0) 6703 80611-80
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">E-Mail</h4>
                    <a href="mailto:info@acencia.de" className="text-orange-600 hover:text-orange-700 text-sm transition-colors duration-150">
                      info@acencia.de
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-orange-50 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg p-8 border border-orange-200 text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-orange-600" />
            </div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
              Bereit für eine Zusammenarbeit?
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihre betriebliche Altersvorsorge digitalisieren und Ihr HR-Team entlasten. 
              Vereinbaren Sie noch heute einen unverbindlichen Beratungstermin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-150 flex items-center justify-center space-x-2"
                onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
              >
                <span>Beratungstermin vereinbaren</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button 
                className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors duration-150"
                onClick={() => window.location.href = '/kontakt'}
              >
                Kontakt aufnehmen
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
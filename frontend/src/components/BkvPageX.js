import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Heart, Euro, Users, Shield, CheckCircle, ArrowRight, Building2, Activity, TrendingUp, Clock } from "lucide-react";

const BkvPageX = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Mitarbeitergesundheit",
      description: "Fördern Sie die Gesundheit und das Wohlbefinden Ihrer Mitarbeiter durch erweiterte medizinische Leistungen."
    },
    {
      icon: <Euro className="w-6 h-6" />,
      title: "Steuerliche Vorteile",  
      description: "Nutzen Sie steuerliche Gestaltungsmöglichkeiten und reduzieren Sie Ihre Lohnnebenkosten."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Attraktiver Arbeitgeber",
      description: "Positionieren Sie sich als attraktiver Arbeitgeber und stärken Sie die Mitarbeiterbindung."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Rechtssicherheit",
      description: "Profitieren Sie von rechtssicherer Umsetzung und professioneller Verwaltung."
    }
  ];

  const services = [
    {
      title: "Private Krankenversicherung",
      features: [
        "Chefarztbehandlung im Krankenhaus",
        "Einzelzimmer oder Zweibettzimmer", 
        "Freie Krankenhauswahl",
        "Erweiterte Diagnostik"
      ]
    },
    {
      title: "Zahnzusatzversicherung",
      features: [
        "Zahnersatz bis zu 100%",
        "Professionelle Zahnreinigung",
        "Kieferorthopädie für Erwachsene",
        "Implantate und Inlays"
      ]
    },
    {
      title: "Zusatzleistungen",
      features: [
        "Auslandsreisekrankenversicherung",
        "Krankentagegeld",
        "Vorsorgeuntersuchungen",
        "Alternative Heilmethoden"
      ]
    }
  ];

  const implementationSteps = [
    {
      step: "1",
      title: "Bedarfsanalyse",
      description: "Gemeinsame Analyse Ihrer Anforderungen und Ziele für die betriebliche Krankenversicherung."
    },
    {
      step: "2",
      title: "Konzeptentwicklung", 
      description: "Entwicklung eines maßgeschneiderten bKV-Konzepts für Ihr Unternehmen."
    },
    {
      step: "3",
      title: "Umsetzung",
      description: "Professionelle Implementierung und Integration in Ihre bestehenden HR-Prozesse."
    },
    {
      step: "4",
      title: "Betreuung",
      description: "Kontinuierliche Betreuung und Optimierung Ihrer bKV-Lösung."
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
              bKV für <span className="text-acencia-orange">Unternehmen</span>
            </h1>
            <p className="text-xl text-acencia-blue max-w-3xl mx-auto leading-relaxed mb-8">
              Stärken Sie die Gesundheit Ihrer Mitarbeiter und positionieren Sie sich als attraktiver Arbeitgeber mit unserer betrieblichen Krankenversicherung.
            </p>
            <button 
              className="bg-acencia-orange hover:bg-acencia-orange/90 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-acencia-orange focus:ring-offset-2 focus:ring-offset-acencia flex items-center justify-center space-x-2 mx-auto"
              onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
            >
              <span>Kostenlose Beratung vereinbaren</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight font-heading">
              Vorteile für Ihr Unternehmen
            </h2>
            <p className="text-lg text-acencia-blue max-w-2xl mx-auto leading-relaxed">
              Investieren Sie in die Gesundheit Ihrer Mitarbeiter und profitieren Sie vielfach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:bg-gray-50 transition-colors duration-150">
                <div className="w-14 h-14 bg-gradient-to-br from-acencia-orange/10 to-acencia-orange/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-acencia-orange">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight font-heading">
              Unsere bKV-Leistungen
            </h2>
            <p className="text-lg text-acencia-blue max-w-2xl mx-auto leading-relaxed">
              Umfassende Gesundheitsvorsorge für Ihre Mitarbeiter
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-8 hover:bg-gray-50 transition-colors duration-150">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 font-heading">
                  {service.title}
                </h3>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-acencia-orange flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight font-heading">
              Unser Vorgehen
            </h2>
            <p className="text-lg text-acencia-blue max-w-2xl mx-auto leading-relaxed">
              Von der ersten Beratung bis zur erfolgreichen Umsetzung
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementationSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:bg-gray-50 transition-colors duration-150">
                <div className="w-16 h-16 bg-acencia-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 font-heading">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 font-heading">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg p-12 text-center">
            <Activity className="w-20 h-20 text-acencia-orange mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 font-heading">
              Digitale bKV-Lösung in Entwicklung
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Wir arbeiten intensiv an unserer digitalen Plattform für die betriebliche Krankenversicherung. Lassen Sie sich kostenfrei beraten und erfahren Sie als Erster von unserem Launch.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Building2 className="w-12 h-12 text-acencia-orange mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-1 font-heading">Für Unternehmen</h4>
                <p className="text-sm text-gray-600">Vollautomatisierte Verwaltung</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-acencia-orange mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-1 font-heading">Für Mitarbeiter</h4>
                <p className="text-sm text-gray-600">Einfache Antragsstellung</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-acencia-orange mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-1 font-heading">Rechtssicher</h4>
                <p className="text-sm text-gray-600">Automatische Compliance</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-acencia-orange hover:bg-acencia-orange/90 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
              >
                <span>Vormerken lassen</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                to="/kontakt"
                className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Mehr erfahren</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BkvPageX;
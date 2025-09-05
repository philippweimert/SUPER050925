import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Building2, Users, Shield, TrendingUp, CheckCircle, ArrowRight, Lightbulb, Clock, Euro, Calculator } from "lucide-react";

const DieBavPageX = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: <Euro className="w-6 h-6" />,
      title: "Steuerliche Vorteile",
      description: "Reduzieren Sie Ihre Lohnnebenkosten und profitieren Sie von Steuervorteilen für Ihr Unternehmen."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Mitarbeiterbindung",
      description: "Stärken Sie die Bindung wertvoller Fachkräfte durch attraktive Zusatzleistungen."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Rechtssicherheit",
      description: "Erfüllen Sie alle gesetzlichen Vorgaben automatisch und bleiben Sie rechtssicher."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Zeitersparnis",
      description: "Sparen Sie bis zu 80% der Verwaltungszeit durch vollautomatisierte Prozesse."
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Analyse & Beratung",
      description: "Wir analysieren Ihre aktuelle Situation und beraten Sie zu den besten Lösungen."
    },
    {
      step: "2", 
      title: "Implementierung",
      description: "Nahtlose Integration in Ihre bestehenden HR-Systeme ohne Unterbrechung."
    },
    {
      step: "3",
      title: "Vollautomatische Verwaltung",
      description: "Alle Prozesse laufen vollautomatisch - Sie müssen sich um nichts kümmern."
    }
  ];

  const features = [
    "Automatisierte Beitragsverwaltung",
    "Integrierte Mitarbeiterkommunikation", 
    "Compliance-Management",
    "Reporting & Analytics",
    "API-Integration",
    "24/7 Support"
  ];

  return (
    <div className="min-h-screen bg-acencia">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-acencia py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6 leading-tight tracking-tight font-heading">
              bAV für <span className="text-acencia-orange">Unternehmen</span>
            </h1>
            <p className="text-xl text-acencia-blue max-w-3xl mx-auto leading-relaxed mb-8">
              Entlasten Sie Ihr HR-Team, reduzieren Sie Kosten und stärken Sie die Mitarbeiterbindung mit unserer digitalen bAV-Lösung.
            </p>
            <button 
              className="bg-acencia-orange hover:bg-acencia-orange/90 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-acencia-orange focus:ring-offset-2 focus:ring-offset-acencia flex items-center justify-center space-x-2 mx-auto"
              onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
            >
              <span>Kostenlose Beratung buchen</span>
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
              Profitieren Sie von den zahlreichen Vorteilen einer professionell verwalteten bAV
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

      {/* Process Section */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight font-heading">
              So einfach geht's
            </h2>
            <p className="text-lg text-acencia-blue max-w-2xl mx-auto leading-relaxed">
              In nur drei Schritten zu Ihrer professionellen bAV-Lösung
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg p-8 text-center hover:bg-gray-50 transition-colors duration-150">
                <div className="w-16 h-16 bg-acencia-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 font-heading">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight font-heading">
                Alles aus einer Hand
              </h2>
              <p className="text-lg text-acencia-blue mb-8 leading-relaxed">
                Unsere Plattform bietet Ihnen alle Funktionen, die Sie für eine erfolgreiche bAV-Verwaltung benötigen.
              </p>
              
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-acencia-orange flex-shrink-0" />
                    <span className="text-white text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8">
              <div className="text-center">
                <Calculator className="w-16 h-16 text-acencia-orange mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                  Kostenrechner
                </h3>
                <p className="text-gray-600 mb-6">
                  Berechnen Sie Ihre möglichen Einsparungen mit unserer bAV-Lösung.
                </p>
                <button 
                  className="w-full bg-acencia-orange hover:bg-acencia-orange/90 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                  onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
                >
                  Jetzt Beratung vereinbaren
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
              Bereit für die digitale bAV-Zukunft?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihre bAV-Herausforderungen lösen und Ihr Unternehmen für die Zukunft aufstellen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-acencia-orange hover:bg-acencia-orange/90 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
              >
                <span>Kostenlose Demo buchen</span>
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

export default DieBavPageX;
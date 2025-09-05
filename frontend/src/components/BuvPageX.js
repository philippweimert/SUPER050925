import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Shield, Building2, Users, AlertTriangle, CheckCircle, ArrowRight, Activity, TrendingUp, Heart, Clock } from "lucide-react";

const BuvPageX = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Erweiterte Absicherung",
      description: "Umfassender Schutz über die gesetzliche Unfallversicherung hinaus für Ihre Mitarbeiter."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Mitarbeiterfürsorge",  
      description: "Zeigen Sie Verantwortung und Fürsorge für das Wohlergehen Ihrer Mitarbeiter."
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Unternehmensschutz",
      description: "Reduzieren Sie finanzielle Risiken und Haftungsansprüche für Ihr Unternehmen."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Attraktiver Arbeitgeber",
      description: "Positionieren Sie sich als verantwortungsvoller und fürsorglicher Arbeitgeber."
    }
  ];

  const coverageDetails = [
    {
      title: "24-Stunden-Schutz",
      description: "Rund um die Uhr abgesichert",
      features: [
        "Arbeitszeit und Freizeit",
        "Berufliche Tätigkeiten", 
        "Wegeunfälle",
        "Reisen und Urlaub"
      ]
    },
    {
      title: "Erweiterte Leistungen",
      description: "Mehr als die gesetzliche Unfallversicherung",
      features: [
        "Höhere Invaliditätssummen",
        "Erweiterte Rehabilitationsleistungen",
        "Bergungskosten",
        "Kosmetische Operationen"
      ]
    },
    {
      title: "Schnelle Hilfe",
      description: "Sofortige Unterstützung im Schadensfall", 
      features: [
        "24h-Notfallhotline",
        "Schnelle Schadensregulierung",
        "Direktabrechnung mit Ärzten",
        "Persönliche Betreuung"
      ]
    }
  ];

  const implementationProcess = [
    {
      step: "1",
      title: "Risikoanalyse",
      description: "Bewertung der spezifischen Unfallrisiken in Ihrem Unternehmen und Ihrer Branche."
    },
    {
      step: "2",
      title: "Bedarfsermittlung", 
      description: "Gemeinsame Festlegung des optimalen Versicherungsschutzes für Ihre Mitarbeiter."
    },
    {
      step: "3",
      title: "Konzeptentwicklung",
      description: "Entwicklung einer maßgeschneiderten bUV-Lösung für Ihr Unternehmen."
    },
    {
      step: "4",
      title: "Implementierung",
      description: "Professionelle Umsetzung und Integration in Ihre bestehenden Prozesse."
    }
  ];

  const riskFactors = [
    "Arbeitsplatzspezifische Gefahren",
    "Wegeunfälle zur und von der Arbeit",
    "Geschäftsreisen und Außentermine", 
    "Betriebssport und Events",
    "Freizeitunfälle der Mitarbeiter",
    "Berufskrankheiten und Langzeitschäden"
  ];

  return (
    <div className="min-h-screen bg-acencia">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-acencia py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6 leading-tight tracking-tight font-heading">
              bUV für <span className="text-acencia-orange">Unternehmen</span>
            </h1>
            <p className="text-xl text-acencia-blue max-w-3xl mx-auto leading-relaxed mb-8">
              Erweitern Sie den Unfallschutz Ihrer Mitarbeiter und minimieren Sie gleichzeitig die Risiken für Ihr Unternehmen mit unserer betrieblichen Unfallversicherung.
            </p>
            <button 
              className="bg-acencia-orange hover:bg-acencia-orange/90 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-acencia-orange focus:ring-offset-2 focus:ring-offset-acencia flex items-center justify-center space-x-2 mx-auto"
              onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
            >
              <span>Kostenlose Risikoanalyse</span>
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
              Investieren Sie in die Sicherheit Ihrer Mitarbeiter und profitieren Sie vielfach
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

      {/* Coverage Details */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight font-heading">
              Unsere bUV-Leistungen
            </h2>
            <p className="text-lg text-acencia-blue max-w-2xl mx-auto leading-relaxed">
              Umfassender Unfallschutz, der über das gesetzliche Minimum hinausgeht
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coverageDetails.map((coverage, index) => (
              <div key={index} className="bg-white rounded-lg p-8 hover:bg-gray-50 transition-colors duration-150">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                  {coverage.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {coverage.description}
                </p>
                
                <ul className="space-y-3">
                  {coverage.features.map((feature, featureIndex) => (
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

      {/* Risk Assessment */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight font-heading">
                Unfallrisiken im Unternehmen
              </h2>
              <p className="text-lg text-acencia-blue mb-8 leading-relaxed">
                Viele Unfallrisiken gehen über die gesetzliche Unfallversicherung hinaus. Schützen Sie Ihre Mitarbeiter umfassend.
              </p>
              
              <ul className="space-y-4">
                {riskFactors.map((risk, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-acencia-orange flex-shrink-0 mt-0.5" />
                    <span className="text-white text-base">{risk}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8">
              <div className="text-center mb-6">
                <TrendingUp className="w-16 h-16 text-acencia-orange mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                  Unfallstatistiken Deutschland
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Arbeitsunfälle/Jahr</span>
                  <span className="font-bold text-red-600">871.000</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Wegeunfälle/Jahr</span>
                  <span className="font-bold text-orange-600">186.000</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                  <span className="text-gray-700 font-medium">Berufskrankheiten/Jahr</span>
                  <span className="font-bold text-yellow-600">73.000</span>
                </div>
              </div>
              
              <p className="text-xs text-gray-500 mt-4 text-center">
                Quelle: Deutsche Gesetzliche Unfallversicherung (DGUV) 2023
              </p>
            </div>
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
              Systematische Herangehensweise für optimalen Unfallschutz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementationProcess.map((step, index) => (
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
              Digitale bUV-Lösung in Entwicklung
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Wir arbeiten an unserer digitalen Plattform für die betriebliche Unfallversicherung. Lassen Sie sich kostenfrei beraten und erfahren Sie als Erster von unserem Launch.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Shield className="w-12 h-12 text-acencia-orange mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-1 font-heading">Vollautomatisch</h4>
                <p className="text-sm text-gray-600">Digitale Schadensabwicklung</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-acencia-orange mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-1 font-heading">Mitarbeiterportal</h4>
                <p className="text-sm text-gray-600">Einfache Schadensmeldung</p>
              </div>
              <div className="text-center">
                <Building2 className="w-12 h-12 text-acencia-orange mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-1 font-heading">HR-Integration</h4>
                <p className="text-sm text-gray-600">Nahtlose Systemanbindung</p>
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

export default BuvPageX;
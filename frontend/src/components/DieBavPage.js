import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Shield, Users, TrendingUp, ArrowRight, Building2, AlertTriangle, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";

const DieBavPage = () => {
  const [isChallengesExpanded, setIsChallengesExpanded] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check if URL has hash for challenges section
    if (window.location.hash === '#herausforderungen') {
      setTimeout(() => {
        setIsChallengesExpanded(true);
        // Scroll to challenges section after a short delay
        setTimeout(() => {
          const challengesElement = document.getElementById('herausforderungen');
          if (challengesElement) {
            challengesElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }, 500);
    }
  }, []);

  const challenges = [
    {
      title: "Komplexe Verwaltung",
      description: "bAV-Verwaltung ist administrativ sehr komplex und fehleranfällig"
    },
    {
      title: "Zeitaufwand", 
      description: "Manuelle Prozesse binden wertvolle HR-Ressourcen"
    },
    {
      title: "Rechtsunsicherheit",
      description: "Ständige Gesetzesänderungen erfordern permanente Überwachung"
    },
    {
      title: "Systembrüche",
      description: "Fehlende Integration führt zu Medienbrüchen und Doppelerfassung"
    }
  ];

  const solutions = [
    {
      title: "Digitale Automatisierung",
      description: "Vollautomatisierte Abwicklung eliminiert Fehlerquellen"
    },
    {
      title: "HR-Entlastung",
      description: "Bis zu 80% Zeitersparnis durch intelligente Automatisierung" 
    },
    {
      title: "Compliance-Sicherheit",
      description: "Immer aktuell und rechtssicher durch permanente Updates"
    },
    {
      title: "Nahtlose Integration", 
      description: "Durchgängiger Datenfluss in bestehende HR-Systeme"
    }
  ];

  const moreInfoBoxes = [
    {
      title: "Für Unternehmen",
      description: "Alles Wichtige über Pflichten, Herausforderungen, Chancen und Vorteile der bAV für Arbeitgeber.",
      icon: <Building2 className="w-6 h-6" />,
      link: "/die-bav/x"
    },
    {
      title: "Für Arbeitnehmer", 
      description: "Erfahren Sie, wie Sie von steuerlichen Vorteilen profitieren und Ihre Altersvorsorge optimieren.",
      icon: <Users className="w-6 h-6" />,
      link: "/die-bav/y"
    },
    {
      title: "Aktuelles",
      description: "Bleiben Sie informiert über die neuesten Entwicklungen, Gesetze und Trends in der bAV.",
      icon: <TrendingUp className="w-6 h-6" />,
      link: "/die-bav/aktuelles"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Apple-like Container with precise spacing */}
      <div className="pt-20">
        {/* Hero Section - Following exact typography guidelines */}
        <section className="bg-white py-18">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <div className="text-center">
              <h1 className="text-[56px] leading-[1.1] lg:text-[56px] font-semibold text-gray-900 mb-6 tracking-tight">
                die <span className="text-orange-600">bAV</span>
              </h1>
              <p className="text-base leading-[1.6] text-gray-600 max-w-[60ch] mx-auto mb-4">
                Umfassende Informationen zur betrieblichen Altersvorsorge
              </p>
              <p className="text-sm leading-[1.4] text-gray-500 max-w-[65ch] mx-auto">
                Informationen aus dem Geschäftsbetrieb des Versicherungsmaklers gemäß §93 HGB, keine Rechtsberatung, keine Steuerberatung
              </p>
            </div>
          </div>
        </section>

        {/* Definition Section - Following exact spacing guidelines */}
        <section className="bg-gray-50 py-18">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <div className="bg-white rounded-lg p-10 border border-gray-200">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-[40px] leading-[1.15] lg:text-[40px] font-semibold text-gray-900 tracking-tight">
                  Was ist betriebliche Altersvorsorge?
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <p className="text-base leading-[1.6] text-gray-700 max-w-[60ch]">
                    Die betriebliche Altersvorsorge (bAV) ist eine Form der privaten Altersvorsorge, die über den Arbeitgeber organisiert wird. 
                    Sie ergänzt die gesetzliche Rente und bietet Arbeitnehmern die Möglichkeit, zusätzliche Rentenansprüche aufzubauen.
                  </p>
                </div>
                <div>
                  <p className="text-base leading-[1.6] text-gray-700 max-w-[60ch]">
                    Seit 2002 haben alle Arbeitnehmer einen Rechtsanspruch auf betriebliche Altersvorsorge durch Entgeltumwandlung. 
                    Dabei wird ein Teil des Bruttogehalts für die Altersvorsorge verwendet, wodurch sich die Steuer- und Sozialabgabenlast reduziert.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges Section - Following exact guidelines */}
        <section className="bg-white py-18">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <div id="herausforderungen" className="mb-8">
              <div 
                className="cursor-pointer bg-white border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-all duration-150"
                onClick={() => setIsChallengesExpanded(!isChallengesExpanded)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-red-50 rounded-lg flex items-center justify-center">
                      <AlertTriangle className="w-7 h-7 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-[28px] leading-[1.2] lg:text-[28px] font-semibold text-gray-900 mb-2 tracking-tight max-w-[60ch]">
                        bAV-Verwaltung ist komplex, zeitaufwendig und fehleranfällig
                      </h3>
                      <p className="text-base leading-[1.6] text-gray-600 max-w-[65ch]">
                        Klicken Sie hier, um die Herausforderungen und unsere Lösungen zu sehen
                      </p>
                    </div>
                  </div>
                  <div className="text-gray-400">
                    {isChallengesExpanded ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </div>
                </div>
              </div>

              {/* Expandable Content */}
              <div className={`transition-all duration-200 overflow-hidden ${
                isChallengesExpanded ? 'max-h-[2000px] opacity-100 mt-8' : 'max-h-0 opacity-0'
              }`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Challenges */}
                  <div className="bg-white rounded-lg p-8 border border-gray-200">
                    <h4 className="text-[28px] leading-[1.2] font-semibold text-gray-900 mb-6 flex items-center">
                      <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
                      Herausforderungen
                    </h4>
                    <ul className="space-y-4">
                      {challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h5 className="text-base font-medium text-gray-900 mb-1">{challenge.title}</h5>
                            <p className="text-sm leading-[1.4] text-gray-600 max-w-[60ch]">{challenge.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions */}
                  <div className="bg-white rounded-lg p-8 border border-gray-200">
                    <h4 className="text-[28px] leading-[1.2] font-semibold text-gray-900 mb-6 flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                      Unsere Lösungen
                    </h4>
                    <ul className="space-y-4">
                      {solutions.map((solution, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <h5 className="text-base font-medium text-gray-900 mb-1">{solution.title}</h5>
                            <p className="text-sm leading-[1.4] text-gray-600 max-w-[60ch]">{solution.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* More Info Section - Same background as specified */}
        <section className="bg-gray-50 py-18">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <h2 className="text-[40px] leading-[1.15] lg:text-[40px] font-semibold text-gray-900 mb-6 tracking-tight">
                Mehr erfahren
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {moreInfoBoxes.map((box, index) => (
                <Link 
                  key={index}
                  to={box.link}
                  className="group block"
                >
                  <div className="bg-white rounded-lg p-8 border border-gray-200 hover:border-gray-300 transition-all duration-150 h-full">
                    <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-all duration-150">
                      <div className="text-orange-600 group-hover:text-orange-700 transition-colors duration-150">
                        {box.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-[28px] leading-[1.2] font-semibold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-150">
                      {box.title}
                    </h3>
                    
                    <p className="text-base leading-[1.6] text-gray-600 mb-6 max-w-[60ch]">
                      {box.description}
                    </p>
                    
                    <div className="flex items-center text-orange-600 group-hover:text-orange-700 transition-colors duration-150">
                      <span className="text-sm font-medium">Mehr erfahren</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-150" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  );
};

export default DieBavPage;
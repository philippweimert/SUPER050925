import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Shield, Users, TrendingUp, ArrowRight, Building2, AlertTriangle, CheckCircle, ChevronDown, ChevronUp, Play } from "lucide-react";

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
      
      {/* Hero Section - Same structure as homepage */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column - 7/12 */}
            <div className="lg:col-span-7">
              <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight tracking-tight">
                die <span className="text-orange-600">bAV</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Umfassende Informationen zur betrieblichen Altersvorsorge
              </p>

              <p className="text-sm text-gray-500 mb-8">
                Informationen aus dem Geschäftsbetrieb des Versicherungsmaklers gemäß §93 HGB, keine Rechtsberatung, keine Steuerberatung
              </p>
            </div>

            {/* Right Column - 5/12 */}
            <div className="lg:col-span-5">
              {/* Video Placeholder */}
              <div className="bg-gray-100 rounded-lg p-8 mb-8 text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-gray-500" />
                </div>
                <p className="text-gray-600 text-sm">Video Platzhalter</p>
              </div>

              {/* Solutions Cards */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Unsere Lösungen</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors duration-150">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">bAV</p>
                        <p className="text-xs text-gray-500">Betriebliche Altersvorsorge</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors duration-150">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">bKV</p>
                        <p className="text-xs text-gray-500">Betriebliche Krankenversicherung</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors duration-150">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">bUV</p>
                        <p className="text-xs text-gray-500">Betriebliche Unfallversicherung</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Onboarding Card */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-6">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-green-800 font-medium text-sm">0,00 € Onboarding</span>
                </div>
                <p className="text-green-700 text-sm">Bis zum 01.01.2027</p>
                <Button className="w-full mt-4 bg-white border border-green-300 text-green-800 hover:bg-green-50 text-sm py-2">
                  KOSTENFREI
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Definition Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-3xl font-semibold text-gray-900 tracking-tight">
                Was ist betriebliche Altersvorsorge?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 leading-relaxed">
                  Die betriebliche Altersvorsorge (bAV) ist eine Form der privaten Altersvorsorge, die über den Arbeitgeber organisiert wird. 
                  Sie ergänzt die gesetzliche Rente und bietet Arbeitnehmern die Möglichkeit, zusätzliche Rentenansprüche aufzubauen.
                </p>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  Seit 2002 haben alle Arbeitnehmer einen Rechtsanspruch auf betriebliche Altersvorsorge durch Entgeltumwandlung. 
                  Dabei wird ein Teil des Bruttogehalts für die Altersvorsorge verwendet, wodurch sich die Steuer- und Sozialabgabenlast reduziert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div id="herausforderungen">
            <div 
              className="cursor-pointer bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-all duration-150"
              onClick={() => setIsChallengesExpanded(!isChallengesExpanded)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      bAV-Verwaltung ist komplex, zeitaufwendig und fehleranfällig
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Klicken Sie hier, um die Herausforderungen und unsere Lösungen zu sehen
                    </p>
                  </div>
                </div>
                <div className="text-gray-400">
                  {isChallengesExpanded ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </div>
            </div>

            {/* Expandable Content */}
            <div className={`transition-all duration-200 overflow-hidden ${
              isChallengesExpanded ? 'max-h-[2000px] opacity-100 mt-6' : 'max-h-0 opacity-0'
            }`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Challenges */}
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                    Herausforderungen
                  </h4>
                  <ul className="space-y-3">
                    {challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h5 className="text-sm font-medium text-gray-900 mb-1">{challenge.title}</h5>
                          <p className="text-sm text-gray-600">{challenge.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    Unsere Lösungen
                  </h4>
                  <ul className="space-y-3">
                    {solutions.map((solution, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h5 className="text-sm font-medium text-gray-900 mb-1">{solution.title}</h5>
                          <p className="text-sm text-gray-600">{solution.description}</p>
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

      {/* More Info Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
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
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-all duration-150 h-full">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-all duration-150">
                    <div className="text-orange-600 group-hover:text-orange-700 transition-colors duration-150">
                      {box.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-150">
                    {box.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    {box.description}
                  </p>
                  
                  <div className="flex items-center text-orange-600 group-hover:text-orange-700 transition-colors duration-150">
                    <span className="text-sm font-medium">Mehr erfahren</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform duration-150" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default DieBavPage;
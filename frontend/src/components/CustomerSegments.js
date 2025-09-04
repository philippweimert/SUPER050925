import React from "react";
import { Rocket, Building, Building2, Users, ArrowRight, Sparkles } from "lucide-react";

const CustomerSegments = () => {
  const segments = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Start-up",
      subtitle: "5-50 Mitarbeiter",
      description: "Flexible und skalierbare bAV-Lösungen für junge Unternehmen mit schnellem Wachstum"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Mittelstand",
      subtitle: "50-1000 Mitarbeiter",
      description: "Bewährte Konzepte für etablierte mittelständische Betriebe mit komplexeren Anforderungen"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Konzern",
      subtitle: "1000+ Mitarbeiter",
      description: "Komplexe Enterprise-Lösungen für große Unternehmensstrukturen mit höchsten Anforderungen"
    }
  ];

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Professional Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
            Für jede Unternehmensgröße
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Maßgeschneiderte bAV-Lösungen, die mit Ihrem Unternehmen wachsen
          </p>
        </div>

        {/* Professional Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {segments.map((segment, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <div className="text-orange-600">
                  {segment.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {segment.title}
                </h3>
                <p className="text-sm text-gray-500 font-medium mb-3">
                  {segment.subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {segment.description}
                </p>
              </div>

              {/* Professional CTA */}
              <button 
                className="w-full bg-gray-50 hover:bg-gray-100 text-gray-900 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
                onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
              >
                <span>Beratung vereinbaren</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Enhanced bottom section */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-acencia via-acencia-light to-acencia rounded-3xl p-12 max-w-5xl mx-auto shadow-2xl relative overflow-hidden border border-white/10">
            {/* Geometrische Hintergrundmuster - hell auf dunklem Hintergrund */}
            <div className="absolute inset-0 opacity-[0.08]">
              <svg className="absolute top-10 right-0 w-64 h-64 animate-pulse" viewBox="0 0 400 400" style={{animationDuration: '6s'}}>
                <polygon points="200,60 300,120 300,180 200,240 100,180 100,120" 
                         fill="none" stroke="white" strokeWidth="2"/>
              </svg>
              <svg className="absolute bottom-10 left-0 w-48 h-48 animate-bounce" viewBox="0 0 400 400" style={{animationDuration: '4s'}}>
                <polygon points="200,80 280,140 280,200 200,260 120,200 120,140" 
                         fill="none" stroke="#e3ebf2" strokeWidth="1"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight">
                Unsicher, welche Lösung für Sie die richtige ist?
              </h3>
              <p className="text-slate-300 mb-8 max-w-3xl mx-auto text-base leading-relaxed">
                Lassen Sie uns gemeinsam die optimale bAV-Lösung für Ihr Unternehmen finden. 
                In einem kostenlosen Beratungsgespräch analysieren wir Ihre Anforderungen.
              </p>
              <div className="flex justify-center">
                <button 
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-lg group"
                  onClick={() => window.location.href = '/kontakt'}
                >
                  <span>Sprechen Sie uns an!</span>
                  <Sparkles className="w-5 h-5 ml-2 inline group-hover:animate-spin" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSegments;
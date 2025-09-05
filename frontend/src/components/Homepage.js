import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import CustomerSegments from "./CustomerSegments";
import GoogleReviews from "./GoogleReviews";
import Footer from "./Footer";
import { Award, Users, TrendingUp, ArrowRight, Sparkles, CheckCircle, Trophy, Zap, Building, Shield } from "lucide-react";

const Homepage = () => {
  const expertiseAreas = [
    {
      title: "bAV",
      subtitle: "Betriebliche Altersvorsorge",
      description: "Komplexe bAV-Herausforderungen einfach gelöst - mit über 30 Jahren Expertise",
      link: "/die-bav",
      color: "from-slate-600 to-slate-700",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "bKV", 
      subtitle: "Betriebliche Krankenversicherung",
      description: "Gesundheitsvorsorge als Mitarbeiterbenefit - professionell implementiert",
      link: "/bkv",
      color: "from-blue-600 to-blue-700", 
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "bUV",
      subtitle: "Betriebliche Unfallversicherung", 
      description: "Umfassender Schutz für Ihre Mitarbeitenden - über das Gesetz hinaus",
      link: "/buv",
      color: "from-indigo-600 to-indigo-700",
      icon: <Award className="w-8 h-8" />
    }
  ];

  const benefits = [
    {
      text: "Über 30 Jahre Erfahrung",
      icon: <Trophy className="w-4 h-4" />
    },
    {
      text: "DSGVO konform & Rechtssicher",
      icon: <Shield className="w-4 h-4" />
    },
    {
      text: "Individuelle Lösungen für jede Unternehmensgröße",
      icon: <Building className="w-4 h-4" />
    }
  ];

  return (
    <div className="min-h-screen bg-acencia">
      <Header />
      
      {/* Professional Hero Section */}
      <div className="bg-acencia">
        <section className="max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Content - Hero Text */}
              <div className="lg:col-span-7">
                {/* Main Headline - Corporate Dark Style */}
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-6 leading-tight tracking-tight font-heading">
                  Digital. Einfach.{" "}
                  <span className="text-acencia-orange">Modern.</span>
                </h1>

                {/* Subtitle - Professional */}
                <p className="text-xl text-acencia-blue mb-8 max-w-2xl leading-relaxed">
                  Automatisieren Sie Ihre betriebliche Altersvorsorge komplett
                </p>

                {/* Clean Benefits List */}
                <div className="space-y-4 mb-10">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index} 
                      className="flex items-center space-x-3"
                    >
                      <div className="w-6 h-6 bg-acencia-orange/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="text-acencia-orange">
                          {benefit.icon}
                        </div>
                      </div>
                      <span className="text-white font-medium">
                        {benefit.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Professional CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
                    className="bg-acencia-orange hover:bg-acencia-orange/90 text-white px-6 py-3 rounded-lg font-medium text-base transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-acencia-orange focus:ring-offset-2 focus:ring-offset-acencia flex items-center justify-center space-x-2"
                  >
                    <span>Jetzt kostenfrei starten</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  
                  <Link 
                    to="/die-bav?autoplay=true"
                    className="border border-acencia-blue hover:border-white text-acencia-blue hover:text-white px-6 py-3 rounded-lg font-medium text-base transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    <span>Video ansehen</span>
                  </Link>
                </div>
              </div>

              {/* Right Content - Professional Layout */}
              <div className="lg:col-span-5 space-y-8">
                
                {/* Video Placeholder Space */}
                <div className="bg-white/10 border border-acencia-blue/30 rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center text-acencia-blue">
                    <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm">Video Platzhalter</span>
                  </div>
                </div>
                
                {/* Solutions Cards - Professional White Cards */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 font-heading">Unsere Lösungen</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {expertiseAreas.map((area, index) => (
                      <Link 
                        key={index}
                        to={area.link}
                        className="group bg-white border border-gray-100 rounded-lg p-4 hover:bg-gray-50 hover:shadow-sm transition-all duration-200"
                      >
                        <div className="text-center">
                          <h4 className="text-sm font-medium text-gray-900 mb-1 font-heading">
                            {area.title}
                          </h4>
                          <p className="text-xs text-gray-600">
                            {area.subtitle}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Professional Onboarding Card - White Card */}
                <div className="bg-white border border-gray-100 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      
                      <div>
                        <h3 className="text-base font-semibold text-gray-900 font-heading">
                          <span className="text-green-600">0,00 €</span> Onboarding
                        </h3>
                        <p className="text-sm text-gray-600">
                          Bis zum <span className="font-medium">01.01.2027</span>
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                        Kostenfrei
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Unsere Kunden vertrauen uns Sektion */}
        <CustomerSegments />
        
        {/* Google Bewertungen Section */}
        <GoogleReviews />
        
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
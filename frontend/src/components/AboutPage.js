import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Users, Target, Award, TrendingUp, ArrowRight, CheckCircle, Heart, Shield, Building2 } from "lucide-react";

const AboutPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Fokussiert",
      description: "Wir konzentrieren uns auf das, was wir am besten können: betriebliche Vorsorge digital und einfach zu machen."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Vertrauensvoll",
      description: "Über 30 Jahre Erfahrung und höchste Sicherheitsstandards bilden das Fundament unserer Arbeit."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Persönlich",
      description: "Hinter der Technologie stehen Menschen, die sich um Ihre Anliegen kümmern."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Innovativ",
      description: "Wir entwickeln kontinuierlich neue Lösungen für die Herausforderungen von morgen."
    }
  ];

  const milestones = [
    {
      year: "1990",
      title: "Gründung",
      description: "Start als Beratungsunternehmen für betriebliche Altersvorsorge"
    },
    {
      year: "2005", 
      title: "Digitalisierung",
      description: "Erste digitale Verwaltungstools für die bAV-Administration"
    },
    {
      year: "2015",
      title: "Expansion",
      description: "Erweiterung um bKV und bUV sowie bundesweite Präsenz"
    },
    {
      year: "2020",
      title: "All-in-One Platform",
      description: "Launch der vollintegrierten digitalen Plattform"
    },
    {
      year: "2025",
      title: "KI-Innovation",
      description: "Integration von KI für noch smartere Automatisierung"
    }
  ];

  const stats = [
    { number: "30+", label: "Jahre Erfahrung" },
    { number: "500+", label: "Zufriedene Unternehmen" },
    { number: "50.000+", label: "Betreute Mitarbeiter" },
    { number: "99.9%", label: "Verfügbarkeit" }
  ];

  return (
    <div className="min-h-screen bg-acencia">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-acencia py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6 leading-tight tracking-tight font-heading">
              Über <span className="text-acencia-orange">ACENCIA</span>
            </h1>
            <p className="text-xl text-acencia-blue max-w-3xl mx-auto leading-relaxed mb-8">
              Seit über 30 Jahren gestalten wir die Zukunft der betrieblichen Vorsorge. Mit Leidenschaft, Expertise und modernster Technologie.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-acencia-orange mb-2 font-heading">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-acencia-blue">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight font-heading">
                Unsere Mission
              </h2>
              <p className="text-lg text-acencia-blue mb-6 leading-relaxed">
                Wir machen betriebliche Vorsorge einfach, digital und menschlich. Unser Ziel ist es, Unternehmen und ihre Mitarbeiter mit innovativen Lösungen zu unterstützen, die komplexe Prozesse vereinfachen und echten Mehrwert schaffen.
              </p>
              <p className="text-lg text-acencia-blue mb-8 leading-relaxed">
                Dabei verbinden wir jahrzehntelange Expertise mit modernster Technologie und behalten immer den Menschen im Mittelpunkt unseres Handelns.
              </p>
              
              <button 
                className="bg-acencia-orange hover:bg-acencia-orange/90 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200 flex items-center space-x-2"
                onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
              >
                <span>Lernen Sie uns kennen</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-white rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 font-heading">
                Warum ACENCIA?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-acencia-orange flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">30+ Jahre Branchenerfahrung</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-acencia-orange flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">100% DSGVO-konforme Lösungen</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-acencia-orange flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Vollautomatisierte Prozesse</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-acencia-orange flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Persönlicher Kundenservice</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-acencia-orange flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Kontinuierliche Innovation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight font-heading">
              Unsere Werte
            </h2>
            <p className="text-lg text-acencia-blue max-w-2xl mx-auto leading-relaxed">
              Diese Prinzipien leiten uns in allem, was wir tun
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
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

      {/* Timeline Section */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight font-heading">
              Unsere Geschichte
            </h2>
            <p className="text-lg text-acencia-blue max-w-2xl mx-auto leading-relaxed">
              Von den Anfängen bis zur digitalen Zukunft
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-acencia-blue/30 hidden md:block"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="text-2xl font-bold text-acencia-orange mb-2 font-heading">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 font-heading">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="w-4 h-4 bg-acencia-orange rounded-full border-4 border-acencia flex-shrink-0 z-10 my-4 md:my-0"></div>
                  
                  {/* Spacer */}
                  <div className="w-full md:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight font-heading">
              Unser Team
            </h2>
            <p className="text-lg text-acencia-blue max-w-2xl mx-auto leading-relaxed mb-8">
              Erfahrene Experten mit Leidenschaft für betriebliche Vorsorge
            </p>
            
            <Link
              to="/ueber-uns/service-team"
              className="inline-flex items-center space-x-2 bg-acencia-orange hover:bg-acencia-orange/90 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200"
            >
              <span>Unser Service-Team kennenlernen</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 font-heading">
              Lassen Sie uns gemeinsam starten
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Erfahren Sie, wie ACENCIA auch Ihr Unternehmen bei der betrieblichen Vorsorge unterstützen kann.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-acencia-orange hover:bg-acencia-orange/90 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
              >
                <span>Kostenlose Beratung</span>
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

export default AboutPage;
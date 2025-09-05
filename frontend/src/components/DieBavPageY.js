import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { User, Euro, TrendingUp, Shield, Calculator, ArrowRight, CheckCircle, PiggyBank, FileText, Heart } from "lucide-react";

const DieBavPageY = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: <Euro className="w-6 h-6" />,
      title: "Steuervorteile",
      description: "Sparen Sie Steuern und Sozialabgaben durch Entgeltumwandlung."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Rendite",
      description: "Profitieren Sie von attraktiven Renditen bei der Altersvorsorge."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sicherheit",
      description: "Ihre Beiträge sind durch gesetzliche Regelungen geschützt."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Flexibilität",
      description: "Passen Sie Ihre Beiträge an Ihre Lebenssituation an."
    }
  ];

  const calculationExamples = [
    {
      title: "Single, Steuerklasse I",
      grossSalary: "3.500 €",
      bavContribution: "200 €", 
      taxSaving: "86 €",
      netCost: "114 €",
      color: "blue"
    },
    {
      title: "Verheiratet, Steuerklasse III",
      grossSalary: "4.500 €",
      bavContribution: "300 €",
      taxSaving: "142 €", 
      netCost: "158 €",
      color: "green"
    },
    {
      title: "Familie, Steuerklasse IV",
      grossSalary: "5.200 €",
      bavContribution: "400 €",
      taxSaving: "184 €",
      netCost: "216 €", 
      color: "purple"
    }
  ];

  const steps = [
    {
      step: "1",
      title: "Informieren",
      description: "Erfahren Sie mehr über die Vorteile der betrieblichen Altersvorsorge."
    },
    {
      step: "2",
      title: "Berechnen", 
      description: "Lassen Sie sich Ihre individuellen Vorteile berechnen."
    },
    {
      step: "3",
      title: "Starten",
      description: "Beginnen Sie mit Ihrer betrieblichen Altersvorsorge."
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
              bAV für <span className="text-acencia-orange">Arbeitnehmer</span>
            </h1>
            <p className="text-xl text-acencia-blue max-w-3xl mx-auto leading-relaxed mb-8">
              Sichern Sie sich Steuervorteile und bauen Sie gleichzeitig Ihre Altersvorsorge auf - mit der betrieblichen Altersvorsorge.
            </p>
            <button 
              className="bg-acencia-orange hover:bg-acencia-orange/90 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-acencia-orange focus:ring-offset-2 focus:ring-offset-acencia flex items-center justify-center space-x-2 mx-auto"
              onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
            >
              <span>Kostenlosen Beratungstermin buchen</span>
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
              Ihre Vorteile auf einen Blick
            </h2>
            <p className="text-lg text-acencia-blue max-w-2xl mx-auto leading-relaxed">
              Entdecken Sie, wie Sie mit der betrieblichen Altersvorsorge profitieren können
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

      {/* Calculation Examples */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight font-heading">
              Berechnungsbeispiele
            </h2>
            <p className="text-lg text-acencia-blue max-w-2xl mx-auto leading-relaxed">
              Sehen Sie, wie viel Sie sparen können - abhängig von Ihrer Situation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {calculationExamples.map((example, index) => (
              <div key={index} className="bg-white rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center font-heading">
                  {example.title}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-600">Bruttogehalt</span>
                    <span className="font-semibold text-gray-900">{example.grossSalary}</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-600">bAV-Beitrag</span>
                    <span className="font-semibold text-gray-900">{example.bavContribution}</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-green-600">Steuerersparnis</span>
                    <span className="font-semibold text-green-600">{example.taxSaving}</span>
                  </div>
                  
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-gray-900 font-medium">Netto-Kosten</span>
                    <span className="font-bold text-lg text-acencia-orange">{example.netCost}</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gray-50 rounded-lg text-center">
                  <p className="text-sm text-gray-600">
                    Sie sparen <span className="font-semibold text-green-600">{example.taxSaving}</span> monatlich!
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight font-heading">
              So funktioniert's
            </h2>
            <p className="text-lg text-acencia-blue max-w-2xl mx-auto leading-relaxed">
              In nur wenigen Schritten zu Ihrer betrieblichen Altersvorsorge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
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

      {/* FAQ Preview */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight font-heading">
                Häufige Fragen
              </h2>
              <p className="text-lg text-acencia-blue mb-8 leading-relaxed">
                Die wichtigsten Antworten zur betrieblichen Altersvorsorge für Arbeitnehmer.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-acencia-orange flex-shrink-0 mt-0.5" />
                  <span className="text-white text-base">Wie hoch sind die Steuervorteile?</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-acencia-orange flex-shrink-0 mt-0.5" />
                  <span className="text-white text-base">Kann ich den Beitrag ändern?</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-acencia-orange flex-shrink-0 mt-0.5" />
                  <span className="text-white text-base">Was passiert bei Jobwechsel?</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-acencia-orange flex-shrink-0 mt-0.5" />
                  <span className="text-white text-base">Wie sicher ist meine bAV?</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8">
              <div className="text-center">
                <Calculator className="w-16 h-16 text-acencia-orange mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                  Persönliche Beratung
                </h3>
                <p className="text-gray-600 mb-6">
                  Lassen Sie sich individuell beraten und finden Sie die optimale bAV-Lösung für Ihre Situation.
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
              Starten Sie noch heute!
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Nutzen Sie die Vorteile der betrieblichen Altersvorsorge und sichern Sie sich Steuervorteile schon ab diesem Monat.
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
                <span>Fragen stellen</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DieBavPageY;
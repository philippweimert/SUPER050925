import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Building2, Mail, Phone, FileText, Shield, User } from "lucide-react";

const ImprintPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "Angaben gemäß § 5 TMG",
      icon: <Building2 className="w-6 h-6" />,
      content: [
        "ACENCIA GmbH",
        "Musterstraße 123", 
        "55232 Hackenheim",
        "Deutschland"
      ]
    },
    {
      title: "Kontakt",
      icon: <Phone className="w-6 h-6" />,
      content: [
        "Telefon: +49 (0) 6701 123456",
        "E-Mail: info@acencia.de"
      ]
    },
    {
      title: "Registereintrag",
      icon: <FileText className="w-6 h-6" />,
      content: [
        "Eintragung im Handelsregister",
        "Registergericht: Amtsgericht Mainz",
        "Registernummer: HRB 12345"
      ]
    },
    {
      title: "Umsatzsteuer-ID",
      icon: <Shield className="w-6 h-6" />,
      content: [
        "Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:",
        "DE123456789"
      ]
    },
    {
      title: "Geschäftsführung",
      icon: <User className="w-6 h-6" />,
      content: [
        "Uwe Weimert"
      ]
    },
    {
      title: "Aufsichtsbehörde",
      icon: <Shield className="w-6 h-6" />,
      content: [
        "Bundesanstalt für Finanzdienstleistungsaufsicht (BaFin)",
        "Graurheindorfer Str. 108",
        "53117 Bonn"
      ]
    }
  ];

  const legalSections = [
    {
      title: "Haftungsausschluss",
      content: [
        {
          subtitle: "Haftung für Inhalte",
          text: "Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen."
        },
        {
          subtitle: "Haftung für Links",
          text: "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich."
        }
      ]
    },
    {
      title: "Urheberrecht",
      content: [
        {
          subtitle: "Urheberrechte",
          text: "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers."
        }
      ]
    },
    {
      title: "Datenschutz",
      content: [
        {
          subtitle: "Datenschutzerklärung",
          text: "Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. Detaillierte Informationen finden Sie in unserer Datenschutzerklärung."
        }
      ]
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
              <span className="text-acencia-orange">Impressum</span>
            </h1>
            <p className="text-xl text-acencia-blue max-w-3xl mx-auto leading-relaxed">
              Rechtliche Angaben und Informationen zur ACENCIA GmbH
            </p>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-lg p-6 hover:bg-gray-50 transition-colors duration-150">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-acencia-orange/10 to-acencia-orange/20 rounded-lg flex items-center justify-center">
                    <div className="text-acencia-orange">
                      {section.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 font-heading">
                    {section.title}
                  </h3>
                </div>
                <div className="space-y-2">
                  {section.content.map((item, idx) => (
                    <p key={idx} className="text-gray-600 text-sm leading-relaxed">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Information */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight font-heading">
              Rechtliche Hinweise
            </h2>
          </div>

          <div className="space-y-12">
            {legalSections.map((section, index) => (
              <div key={index} className="bg-white rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 font-heading">
                  {section.title}
                </h3>
                <div className="space-y-6">
                  {section.content.map((item, idx) => (
                    <div key={idx}>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 font-heading">
                        {item.subtitle}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Dispute Resolution */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 font-heading">
              Online-Streitbeilegung
            </h3>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr/" className="text-acencia-orange hover:text-acencia-orange/80 ml-1" target="_blank" rel="noopener noreferrer">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="text-gray-600 leading-relaxed">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Legal Matters */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg p-12 text-center">
            <Mail className="w-16 h-16 text-acencia-orange mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
              Rechtliche Anfragen
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Für rechtliche Anfragen und Hinweise kontaktieren Sie uns bitte direkt.
            </p>
            <a
              href="mailto:legal@acencia.de"
              className="inline-flex items-center space-x-2 bg-acencia-orange hover:bg-acencia-orange/90 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
              <span>legal@acencia.de</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ImprintPage;
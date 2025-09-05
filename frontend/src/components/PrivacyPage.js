import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Shield, Eye, Lock, Users, FileText, AlertTriangle, CheckCircle, Mail } from "lucide-react";

const PrivacyPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const principles = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Datenschutz by Design",
      description: "Datenschutz ist von Anfang an in unsere Systeme und Prozesse integriert."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Minimale Datenerhebung",
      description: "Wir erheben nur die Daten, die für unsere Dienstleistung absolut notwendig sind."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Transparenz",
      description: "Sie wissen jederzeit, welche Daten wir von Ihnen haben und wie wir sie verwenden."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Ihre Rechte",
      description: "Sie haben jederzeit die Kontrolle über Ihre persönlichen Daten."
    }
  ];

  const dataTypes = [
    {
      category: "Kontaktdaten",
      examples: ["Name", "E-Mail-Adresse", "Telefonnummer", "Postanschrift"],
      purpose: "Kommunikation und Vertragsabwicklung",
      retention: "Bis zur Löschung des Kundenkontos + gesetzliche Aufbewahrungsfristen"
    },
    {
      category: "Unternehmensdaten", 
      examples: ["Firmenname", "Branche", "Mitarbeiterzahl", "Registernummer"],
      purpose: "Anpassung unserer Dienstleistungen an Ihre Bedürfnisse",
      retention: "Während der Geschäftsbeziehung + gesetzliche Aufbewahrungsfristen"
    },
    {
      category: "Nutzungsdaten",
      examples: ["Login-Zeiten", "Funktionsnutzung", "Systeminteraktionen"],
      purpose: "Verbesserung unserer Plattform und Support",
      retention: "12 Monate, danach anonymisiert"
    },
    {
      category: "Technische Daten",
      examples: ["IP-Adresse", "Browser-Information", "Geräte-ID"],
      purpose: "Technische Bereitstellung und Sicherheit",
      retention: "90 Tage, danach anonymisiert"
    }
  ];

  const rights = [
    {
      title: "Auskunftsrecht (Art. 15 DSGVO)",
      description: "Sie haben das Recht zu erfahren, welche Daten wir über Sie gespeichert haben."
    },
    {
      title: "Berichtigungsrecht (Art. 16 DSGVO)", 
      description: "Unrichtige Daten können Sie jederzeit korrigieren lassen."
    },
    {
      title: "Löschungsrecht (Art. 17 DSGVO)",
      description: "Sie können die Löschung Ihrer Daten verlangen, sofern keine gesetzlichen Aufbewahrungspflichten bestehen."
    },
    {
      title: "Widerspruchsrecht (Art. 21 DSGVO)",
      description: "Sie können der Verarbeitung Ihrer Daten jederzeit widersprechen."
    },
    {
      title: "Datenübertragbarkeit (Art. 20 DSGVO)",
      description: "Sie können Ihre Daten in einem strukturierten Format erhalten."
    },
    {
      title: "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
      description: "Sie können die Verarbeitung Ihrer Daten unter bestimmten Umständen einschränken lassen."
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
              <span className="text-acencia-orange">Datenschutz</span>
            </h1>
            <p className="text-xl text-acencia-blue max-w-3xl mx-auto leading-relaxed">
              Ihre Privatsphäre und der Schutz Ihrer Daten haben für uns höchste Priorität. Hier erfahren Sie, wie wir Ihre Daten verarbeiten und schützen.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight font-heading">
              Unsere Datenschutz-Prinzipien
            </h2>
            <p className="text-lg text-acencia-blue max-w-2xl mx-auto leading-relaxed">
              Diese Grundsätze leiten uns im Umgang mit Ihren Daten
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:bg-gray-50 transition-colors duration-150">
                <div className="w-14 h-14 bg-gradient-to-br from-acencia-orange/10 to-acencia-orange/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-acencia-orange">
                    {principle.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">
                  {principle.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Controller */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-heading">
              1. Verantwortliche Stelle
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 font-heading">
                  Datenschutzverantwortlicher
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>ACENCIA GmbH</p>
                  <p>Musterstraße 123</p>
                  <p>55232 Hackenheim</p>
                  <p>Deutschland</p>
                  <p>E-Mail: datenschutz@acencia.de</p>
                  <p>Telefon: +49 (0) 6701 123456</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 font-heading">
                  Datenschutzbeauftragter
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>Externe Datenschutzbeauftragte</p>
                  <p>DataPrivacy Solutions GmbH</p>
                  <p>E-Mail: dsb-acencia@dataprivacy.de</p>
                  <p>Telefon: +49 (0) 6701 987654</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Types */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight font-heading">
              Welche Daten verarbeiten wir?
            </h2>
            <p className="text-lg text-acencia-blue max-w-2xl mx-auto leading-relaxed">
              Übersicht über die Kategorien der von uns verarbeiteten Daten
            </p>
          </div>

          <div className="space-y-6">
            {dataTypes.map((dataType, index) => (
              <div key={index} className="bg-white rounded-lg p-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">
                      {dataType.category}
                    </h3>
                    <ul className="space-y-1">
                      {dataType.examples.map((example, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-acencia-orange flex-shrink-0" />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-gray-900 mb-2">Zweck der Verarbeitung:</h4>
                    <p className="text-gray-600 text-sm">{dataType.purpose}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Speicherdauer:</h4>
                    <p className="text-gray-600 text-sm">{dataType.retention}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Basis */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-heading">
              2. Rechtsgrundlagen der Verarbeitung
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 font-heading flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-acencia-orange" />
                  <span>Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO)</span>
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Verarbeitung zur Erfüllung eines Vertrags oder zur Durchführung vorvertraglicher Maßnahmen.
                </p>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Erbringung unserer Dienstleistungen</li>
                  <li>• Kundenbetreuung und Support</li>
                  <li>• Rechnungsstellung</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 font-heading flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-acencia-orange" />
                  <span>Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO)</span>
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Verarbeitung zur Wahrung berechtigter Interessen, sofern nicht die Interessen der betroffenen Person überwiegen.
                </p>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Verbesserung unserer Dienstleistungen</li>
                  <li>• IT-Sicherheit und Systemstabilität</li>
                  <li>• Betrugsbekämpfung</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight font-heading">
              Ihre Rechte
            </h2>
            <p className="text-lg text-acencia-blue max-w-2xl mx-auto leading-relaxed">
              Als betroffene Person haben Sie umfassende Rechte bezüglich Ihrer Daten
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rights.map((right, index) => (
              <div key={index} className="bg-white rounded-lg p-6 hover:bg-gray-50 transition-colors duration-150">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 font-heading">
                  {right.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {right.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-heading">
              3. Datensicherheit
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 font-heading">
                  Technische Maßnahmen
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-acencia-orange flex-shrink-0" />
                    <span>SSL/TLS-Verschlüsselung für alle Datenübertragungen</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-acencia-orange flex-shrink-0" />
                    <span>Datenverschlüsselung in der Datenbank</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-acencia-orange flex-shrink-0" />
                    <span>Regelmäßige Sicherheitsupdates</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-acencia-orange flex-shrink-0" />
                    <span>Firewall und Intrusion Detection</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 font-heading">
                  Organisatorische Maßnahmen
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-acencia-orange flex-shrink-0" />
                    <span>Zugriffsbeschränkungen und Berechtigungskonzepte</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-acencia-orange flex-shrink-0" />
                    <span>Regelmäßige Mitarbeiterschulungen</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-acencia-orange flex-shrink-0" />
                    <span>Vertraulichkeitsverpflichtungen</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-acencia-orange flex-shrink-0" />
                    <span>Datenschutz-Folgenabschätzungen</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Privacy */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg p-12 text-center">
            <Shield className="w-16 h-16 text-acencia-orange mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
              Fragen zum Datenschutz?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Kontaktieren Sie unseren Datenschutzbeauftragten für alle datenschutzrechtlichen Anliegen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:datenschutz@acencia.de"
                className="inline-flex items-center space-x-2 bg-acencia-orange hover:bg-acencia-orange/90 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                <span>datenschutz@acencia.de</span>
              </a>
              <a
                href="mailto:dsb-acencia@dataprivacy.de"
                className="inline-flex items-center space-x-2 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200"
              >
                <Shield className="w-5 h-5" />
                <span>Datenschutzbeauftragter</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
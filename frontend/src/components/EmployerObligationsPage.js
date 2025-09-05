import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { AlertTriangle, FileText, CheckCircle, ArrowRight, Shield, Users, Building2, Clock, Euro, Scale } from "lucide-react";

const EmployerObligationsPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const obligations = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Informationspflicht",
      subtitle: "§ 1a BetrAVG",
      description: "Arbeitgeber müssen ihre Mitarbeiter über die Möglichkeiten der betrieblichen Altersvorsorge informieren.",
      details: [
        "Schriftliche Information bei Einstellung",
        "Information über steuerliche Förderung",
        "Hinweis auf Entgeltumwandlung",
        "Jährliche Wiederholung der Information"
      ],
      deadline: "Bei Einstellung und jährlich",
      penalty: "Bis zu 25.000 € Bußgeld"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Angebotspflicht",
      subtitle: "§ 1a BetrAVG",
      description: "Arbeitgeber müssen eine betriebliche Altersvorsorge anbieten, wenn der Arbeitnehmer dies wünscht.",
      details: [
        "Angebot einer Direktversicherung",
        "Pensionskasse oder Pensionsfonds",
        "Mindestens ein Durchführungsweg",
        "Zuschuss bei Neuverträgen ab 2019"
      ],
      deadline: "Nach Mitarbeiteranfrage",
      penalty: "Rechtliche Konsequenzen"
    },
    {
      icon: <Euro className="w-6 h-6" />,
      title: "Zuschuss zur Entgeltumwandlung",
      subtitle: "§ 1a Abs. 1a BetrAVG",
      description: "Arbeitgeber müssen 15% Zuschuss zahlen, wenn sie durch die Entgeltumwandlung Sozialversicherung sparen.",
      details: [
        "15% des umgewandelten Entgelts",
        "Mindestens gesparte Sozialversicherung",
        "Für Neuverträge ab 2019 sofort",
        "Für Altverträge ab 2022"
      ],
      deadline: "Sofort bei Neuverträgen",
      penalty: "Nachzahlungspflicht"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Portabilitätsrechte",
      subtitle: "§ 4 BetrAVG",
      description: "Sicherstellung der Übertragbarkeit von Betriebsrenten bei Jobwechsel.",
      details: [
        "Unverfallbare Anwartschaften",
        "Übertragung zum neuen Arbeitgeber",
        "Private Weiterführung möglich",
        "Information über Optionen"
      ],
      deadline: "Bei Beendigung des Arbeitsverhältnisses",
      penalty: "Schadensersatzansprüche"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Dokumentationspflichten",
      subtitle: "§ 4a BetrAVG",
      description: "Umfassende Dokumentation aller bAV-bezogenen Vorgänge und Entscheidungen.",
      details: [
        "Versorgungsordnungen aktuell halten",
        "Individualvereinbarungen dokumentieren",
        "Aufbewahrung 30 Jahre",
        "Nachweispflicht gegenüber Behörden"
      ],
      deadline: "Fortlaufend",
      penalty: "Beweisprobleme bei Streitigkeiten"
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Gleichbehandlungsgrundsatz",
      subtitle: "§ 1b BetrAVG",
      description: "Gleichbehandlung aller Arbeitnehmer bei betrieblichen Versorgungszusagen.",
      details: [
        "Keine willkürliche Ungleichbehandlung",
        "Sachliche Differenzierung erlaubt",
        "Gleiches Recht auf Entgeltumwandlung",
        "Transparente Kriterien"
      ],
      deadline: "Fortlaufend",
      penalty: "Nachzahlungs- und Schadensersatzansprüche"
    }
  ];

  const riskAreas = [
    {
      title: "Unzureichende Aufklärung",
      risk: "Hoch",
      description: "Mangelhafte Information der Mitarbeiter über bAV-Möglichkeiten",
      consequences: ["Bußgelder bis 25.000 €", "Nachzahlungspflichten", "Reputationsschäden"]
    },
    {
      title: "Fehlender Zuschuss",
      risk: "Sehr Hoch", 
      description: "Nicht gezahlte 15% Zuschüsse zur Entgeltumwandlung",
      consequences: ["Nachzahlung mit Zinsen", "Rechtliche Auseinandersetzungen", "Hohe Nachzahlungssummen"]
    },
    {
      title: "Veraltete Versorgungsordnungen",
      risk: "Mittel",
      description: "Nicht aktuelle Regelungen zu bAV in Arbeitsverträgen",
      consequences: ["Rechtsunsicherheit", "Ungewollte Verpflichtungen", "Compliance-Probleme"]
    },
    {
      title: "Ungleichbehandlung",
      risk: "Hoch",
      description: "Diskriminierende Behandlung bei bAV-Angeboten",
      consequences: ["Schadensersatzansprüche", "Arbeitsgerichtliche Verfahren", "Nachzahlungen"]
    }
  ];

  const solutions = [
    {
      title: "Automatisierte Compliance",
      description: "Unsere Plattform stellt sicher, dass alle gesetzlichen Anforderungen automatisch erfüllt werden.",
      features: ["Automatische Mitarbeiterinformation", "Fristenverwaltung", "Dokumentenerstellung", "Compliance-Monitoring"]
    },
    {
      title: "Rechtssichere Prozesse",
      description: "Alle Prozesse sind rechtlich geprüft und werden kontinuierlich an neue Gesetzgebung angepasst.",
      features: ["Aktuelle Gesetzestexte", "Automatische Updates", "Juristische Prüfung", "Behördenkonforme Dokumentation"]
    },
    {
      title: "Vollständige Dokumentation",
      description: "Lückenlose Dokumentation aller bAV-relevanten Vorgänge für Compliance und Nachweis.",
      features: ["30-Jahre Archivierung", "Revisionssichere Speicherung", "Schnelle Auffindbarkeit", "Export-Funktionen"]
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
              Gesetzliche <span className="text-acencia-orange">Pflichten</span>
            </h1>
            <p className="text-xl text-acencia-blue max-w-3xl mx-auto leading-relaxed">
              Alle wichtigen Arbeitgeberpflichten im Bereich der betrieblichen Altersvorsorge auf einen Blick.
            </p>
          </div>

          {/* Alert Box */}
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-red-300 mb-2 font-heading">
                  Wichtiger Hinweis
                </h3>
                <p className="text-red-200 text-sm">
                  Die Nichteinhaltung gesetzlicher Pflichten kann zu erheblichen Bußgeldern und Nachzahlungsverpflichtungen führen. 
                  Lassen Sie sich professionell beraten, um Risiken zu vermeiden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Obligations */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight font-heading">
              Ihre Pflichten als Arbeitgeber
            </h2>
            <p className="text-lg text-acencia-blue max-w-2xl mx-auto leading-relaxed">
              Diese gesetzlichen Verpflichtungen müssen Sie bei der betrieblichen Altersvorsorge beachten
            </p>
          </div>

          <div className="space-y-8">
            {obligations.map((obligation, index) => (
              <div key={index} className="bg-white rounded-lg p-8 hover:bg-gray-50 transition-colors duration-150">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Main Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-acencia-orange/10 to-acencia-orange/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="text-acencia-orange">
                          {obligation.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1 font-heading">
                          {obligation.title}
                        </h3>
                        <p className="text-acencia-orange text-sm font-medium mb-2">
                          {obligation.subtitle}
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          {obligation.description}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 font-heading">
                        Details:
                      </h4>
                      <ul className="space-y-2">
                        {obligation.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="w-4 h-4 text-acencia-orange flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline & Penalty */}
                  <div className="space-y-6">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="w-4 h-4 text-blue-600" />
                        <h4 className="font-semibold text-blue-900 text-sm font-heading">
                          Frist
                        </h4>
                      </div>
                      <p className="text-blue-800 text-sm">
                        {obligation.deadline}
                      </p>
                    </div>

                    <div className="bg-red-50 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                        <h4 className="font-semibold text-red-900 text-sm font-heading">
                          Bei Nichtbeachtung
                        </h4>
                      </div>
                      <p className="text-red-800 text-sm">
                        {obligation.penalty}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Areas */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight font-heading">
              Häufige Risikobereiche
            </h2>
            <p className="text-lg text-acencia-blue max-w-2xl mx-auto leading-relaxed">
              Diese Bereiche führen erfahrungsgemäß häufig zu Compliance-Problemen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {riskAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 font-heading">
                    {area.title}
                  </h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    area.risk === 'Sehr Hoch' ? 'bg-red-100 text-red-800' :
                    area.risk === 'Hoch' ? 'bg-orange-100 text-orange-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    Risiko: {area.risk}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {area.description}
                </p>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm font-heading">
                    Mögliche Konsequenzen:
                  </h4>
                  <ul className="space-y-1">
                    {area.consequences.map((consequence, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <AlertTriangle className="w-3 h-3 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-xs">{consequence}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACENCIA Solutions */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight font-heading">
              Wie ACENCIA Sie unterstützt
            </h2>
            <p className="text-lg text-acencia-blue max-w-2xl mx-auto leading-relaxed">
              Unsere Lösung stellt sicher, dass Sie alle gesetzlichen Anforderungen erfüllen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-lg p-8 hover:bg-gray-50 transition-colors duration-150">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                
                <ul className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-acencia-orange flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg p-12 text-center">
            <Shield className="w-16 h-16 text-acencia-orange mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 font-heading">
              Compliance-Check gefällig?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns prüfen, ob Ihr Unternehmen alle gesetzlichen Pflichten im Bereich der betrieblichen Altersvorsorge erfüllt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-acencia-orange hover:bg-acencia-orange/90 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
              >
                <span>Kostenloser Compliance-Check</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                to="/kontakt"
                className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Beratung anfragen</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EmployerObligationsPage;
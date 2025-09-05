import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Search, Filter, Calendar, User, ArrowRight, Tag, Clock, TrendingUp } from "lucide-react";

const AktuellesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: 'all', name: 'Alle Kategorien', count: 24 },
    { id: 'gesetze', name: 'Gesetzesänderungen', count: 8 },
    { id: 'steuer', name: 'Steuerrecht', count: 6 },
    { id: 'praxis', name: 'Praxistipps', count: 5 },
    { id: 'trends', name: 'Trends', count: 3 },
    { id: 'digital', name: 'Digitalisierung', count: 2 }
  ];

  const years = [
    { id: 'all', name: 'Alle Jahre' },
    { id: '2025', name: '2025' },
    { id: '2024', name: '2024' },
    { id: '2023', name: '2023' }
  ];

  const articles = [
    {
      id: 1,
      title: "Neues Betriebsrentenstärkungsgesetz II: Was ändert sich 2025?",
      excerpt: "Die wichtigsten Änderungen für Arbeitgeber und Arbeitnehmer im Überblick. Neue Freibeträge und erweiterte Fördermöglichkeiten.",
      category: "gesetze",
      date: "2025-01-15",
      author: "Dr. Sarah Müller",
      readTime: "5 Min.",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 2,
      title: "Steuerliche Behandlung von bAV-Zuschüssen in der Praxis",
      excerpt: "Praktische Hinweise zur korrekten steuerlichen Behandlung von Arbeitgeberzuschüssen zur betrieblichen Altersvorsorge.",
      category: "steuer",
      date: "2025-01-10",
      author: "Marcus Klein",
      readTime: "4 Min.",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 3,
      title: "Digitale Transformation in der bAV: Trends 2025",
      excerpt: "Wie die Digitalisierung die betriebliche Altersvorsorge revolutioniert und welche Chancen sich für Unternehmen ergeben.",
      category: "digital",
      date: "2025-01-08",
      author: "Thomas Weber",
      readTime: "6 Min.",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 4,
      title: "Compliance-Checkliste: Arbeitgeberpflichten bei der bAV",
      excerpt: "Alle wichtigen Pflichten für Arbeitgeber im Bereich der betrieblichen Altersvorsorge - einfach und verständlich erklärt.",
      category: "praxis",
      date: "2025-01-05",
      author: "Anna Richter",
      readTime: "7 Min.",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 5,
      title: "bKV und bUV: Neue Möglichkeiten für Arbeitgeber",
      excerpt: "Die betriebliche Kranken- und Unfallversicherung gewinnt an Bedeutung. Was Arbeitgeber wissen sollten.",
      category: "trends",
      date: "2025-01-03",
      author: "Lisa Schmidt",
      readTime: "5 Min.",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 6,
      title: "ESG-Kriterien in der betrieblichen Altersvorsorge",
      excerpt: "Nachhaltigkeit wird auch in der bAV immer wichtiger. Welche ESG-Kriterien Arbeitgeber beachten sollten.",
      category: "trends",
      date: "2024-12-28",
      author: "Dr. Sarah Müller",
      readTime: "4 Min.",
      image: "/api/placeholder/400/250",
      featured: false
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesYear = selectedYear === 'all' || article.date.startsWith(selectedYear);
    
    return matchesSearch && matchesCategory && matchesYear;
  });

  const featuredArticle = articles.find(article => article.featured);
  const otherArticles = filteredArticles.filter(article => !article.featured);

  const getCategoryName = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : categoryId;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-acencia">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-acencia py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6 leading-tight tracking-tight font-heading">
              <span className="text-acencia-orange">Aktuelles</span> zur bAV
            </h1>
            <p className="text-xl text-acencia-blue max-w-3xl mx-auto leading-relaxed">
              Bleiben Sie auf dem Laufenden über die neuesten Entwicklungen, Gesetzesänderungen und Trends in der betrieblichen Altersvorsorge.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="bg-acencia py-8">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Artikel durchsuchen..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-acencia-orange focus:border-acencia-orange transition-colors duration-200"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-acencia-orange focus:border-acencia-orange transition-colors duration-200 appearance-none bg-white"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Year Filter */}
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-acencia-orange focus:border-acencia-orange transition-colors duration-200 appearance-none bg-white"
                >
                  {years.map(year => (
                    <option key={year.id} value={year.id}>
                      {year.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="bg-acencia py-16">
          <div className="max-w-[1200px] mx-auto px-6 md:px-8">
            <div className="bg-white rounded-lg overflow-hidden hover:shadow-sm transition-shadow duration-150">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="bg-gray-100 min-h-[300px] flex items-center justify-center">
                  <TrendingUp className="w-24 h-24 text-gray-400" />
                </div>
                
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="bg-acencia-orange text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                      Featured
                    </span>
                    <span className="bg-acencia-orange/10 text-acencia-orange px-3 py-1 rounded-full text-xs font-medium">
                      {getCategoryName(featuredArticle.category)}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4 leading-tight font-heading">
                    {featuredArticle.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{featuredArticle.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(featuredArticle.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredArticle.readTime}</span>
                      </div>
                    </div>
                    
                    <button className="text-acencia-orange hover:text-acencia-orange/80 font-medium flex items-center space-x-1 transition-colors duration-150">
                      <span>Weiterlesen</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          {otherArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherArticles.map((article) => (
                <article key={article.id} className="bg-white rounded-lg overflow-hidden hover:bg-gray-50 hover:shadow-sm transition-all duration-150 group">
                  <div className="bg-gray-100 h-48 flex items-center justify-center">
                    <div className="text-gray-400">
                      {article.category === 'gesetze' && <Tag className="w-12 h-12" />}
                      {article.category === 'steuer' && <Calculator className="w-12 h-12" />}
                      {article.category === 'praxis' && <CheckCircle className="w-12 h-12" />}
                      {article.category === 'trends' && <TrendingUp className="w-12 h-12" />}
                      {article.category === 'digital' && <Monitor className="w-12 h-12" />}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="bg-acencia-orange/10 text-acencia-orange px-2 py-1 rounded text-xs font-medium">
                        {getCategoryName(article.category)}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight group-hover:text-acencia-orange transition-colors duration-150 font-heading">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <User className="w-3 h-3" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(article.date)}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2 font-heading">
                Keine Artikel gefunden
              </h3>
              <p className="text-acencia-blue">
                Versuchen Sie es mit anderen Suchbegriffen oder Filtern.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg p-12 text-center">
            <div className="w-16 h-16 bg-acencia-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-acencia-orange" />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 font-heading">
              Immer auf dem Laufenden bleiben
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Verpassen Sie keine wichtigen Neuigkeiten zur betrieblichen Altersvorsorge. Unser Newsletter informiert Sie über alle relevanten Entwicklungen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-acencia-orange focus:border-acencia-orange transition-colors duration-200"
              />
              <button className="bg-acencia-orange hover:bg-acencia-orange/90 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap">
                Newsletter abonnieren
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Kostenlos und jederzeit abbestellbar. Ihre Daten sind bei uns sicher.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AktuellesPage;
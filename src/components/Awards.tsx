import { Trophy, Star, Award, Users, GraduationCap, DollarSign } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      title: "Hispanic Scholarship Fund Scholar 2024",
      description: "Top 10% of 100,000+ applicants",
      icon: Trophy,
      gradient: "from-yellow-400 to-orange-500",
      year: "2024",
      category: "Academic Excellence"
    },
    {
      title: "Dean's List Fall 2023",
      description: "GPA > 3.5 at Stevens Institute of Technology",
      icon: GraduationCap,
      gradient: "from-primary-500 to-primary-600",
      year: "2023",
      category: "Academic Achievement"
    },
    {
      title: "SANS Scholarship - SEC 401",
      description: "Security Essentials Bootcamp ($9,000 value)",
      icon: DollarSign,
      gradient: "from-green-500 to-teal-600",
      year: "2023",
      category: "Professional Development"
    },
    {
      title: "National Cyber Scholar 2023 & 2022",
      description: "Top 2% in CyberStart America competitions",
      icon: Star,
      gradient: "from-red-500 to-pink-600",
      year: "2022-2023",
      category: "Cybersecurity Excellence"
    },
    {
      title: "SANS Foundations Scholarship",
      description: "SANS Foundations certification ($3,000 value)",
      icon: Award,
      gradient: "from-primary-600 to-secondary-600",
      year: "2022",
      category: "Professional Development"
    },
    {
      title: "National Hispanic Recognition",
      description: "College Board recognition program",
      icon: Users,
      gradient: "from-purple-500 to-indigo-600",
      year: "2022",
      category: "Academic Recognition"
    },
    {
      title: "NYSFBC Marching Band Champions",
      description: "Percussion section leader, state championship",
      icon: Trophy,
      gradient: "from-orange-500 to-red-500",
      year: "2021-2022",
      category: "Leadership & Arts"
    }
  ];

  return (
    <section id="awards" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-950 to-secondary-900"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 animate-slide-top">
            <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
              Awards & Recognition
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-8 animate-scale-in animate-delay-200"></div>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto animate-fade-in-up animate-delay-300">
            Recognized for academic excellence, cybersecurity expertise, and leadership 
            across multiple domains and competitions.
          </p>
        </div>

        {/* Featured Achievement */}
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-12 mb-16 text-white text-center relative overflow-hidden animate-scale-in animate-delay-400">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Trophy className="h-10 w-10" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Top 2% Nationally</h3>
            <p className="text-xl opacity-90 mb-6">CyberStart America Cybersecurity Competition</p>
            <p className="text-sm opacity-75 max-w-2xl mx-auto leading-relaxed">
              Achieved exceptional performance among thousands of participants in the nation's 
              premier cybersecurity scholarship and competition program, demonstrating advanced 
              skills in multiple cybersecurity domains.
            </p>
          </div>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div key={index} className={`group animate-slide-bottom animate-delay-${(index + 5) * 100}`}>
              <div className="bg-secondary-800/30 backdrop-blur-sm border border-secondary-700/50 rounded-2xl overflow-hidden hover:bg-secondary-800/50 hover:border-primary-500/30 transition-all duration-500 h-full">
                <div className={`bg-gradient-to-r ${award.gradient} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl">
                        <award.icon className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        {award.year}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold leading-tight">{award.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary-500/10 border border-primary-500/20 text-primary-300 rounded-full text-xs font-medium">
                      {award.category}
                    </span>
                  </div>
                  <p className="text-secondary-200 leading-relaxed">{award.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Summary */}
        <div className="mt-20 bg-secondary-800/30 backdrop-blur-sm border border-secondary-700/50 rounded-2xl p-12 animate-slide-bottom animate-delay-1200">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
              Recognition Impact
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                value: "$12,000+",
                description: "Total scholarship value earned through academic and cybersecurity excellence"
              },
              {
                icon: Star,
                value: "Top 2%",
                description: "National ranking in cybersecurity competitions among thousands of participants"
              },
              {
                icon: Trophy,
                value: "7 Awards",
                description: "Recognition across academic, professional, and leadership domains"
              }
            ].map((stat, index) => (
              <div key={index} className={`text-center group animate-rotate-in animate-delay-${(index + 13) * 100}`}>
                <div className="bg-primary-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500/20 transition-colors duration-300">
                  <stat.icon className="h-8 w-8 text-primary-400" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-3">{stat.value}</h4>
                <p className="text-secondary-300 leading-relaxed">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
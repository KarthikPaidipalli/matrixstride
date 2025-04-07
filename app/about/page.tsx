export default function About() {
    const cardsArray= [
        {
          title: "Innovation",
          desc: "We challenge conventional thinking to develop breakthrough solutions that create competitive advantage.",
          icon: (
            <svg className="w-10 h-10 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          )
        },
        {
          title: "Collaboration",
          desc: "We believe the best solutions emerge from teamwork, both within our organization and with our clients.",
          icon: (
            <svg className="w-10 h-10 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          )
        },
        {
          title: "Excellence",
          desc: "We pursue the highest standards in everything we do, delivering quality without compromise.",
          icon: (
            <svg className="w-10 h-10 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          )
        }
      ]
    return (
      <div className="relative bg-white overflow-hidden mt-10">
        {/* Top Section: Who We Are */}
        <div className="px-6 md:px-20 py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <h1 className="text-4xl font-bold text-gray-900">Who We Are</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are Solution Engineering – a team of engineers, strategists, and innovators committed to helping businesses scale through digital transformation. With deep industry knowledge and a passion for solving complex challenges, we empower our clients to achieve more through technology.
            </p>
          </div>
        </div>
  
        {/* Our Mission */}
        <div className="px-6 md:px-20 py-16">
          <div className="max-w-5xl mx-auto md:flex items-center gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://img.freepik.com/premium-vector/creative-illustration-mission-yellow-word-typography-with-line-icons-tag-cloud_117177-639.jpg?w=1800"
                alt="Our mission"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To deliver scalable, agile, and future-proof engineering solutions that transform the way our clients operate. We combine design thinking, engineering excellence, and deep domain knowledge to build digital experiences that matter.
              </p>
            </div>
          </div>
        </div>
  
        {/* Core Values Section */}
        <div className="bg-blue-50 px-6 md:px-20 py-16">
          <div className="max-w-5xl mx-auto text-center space-y-10">
            <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {cardsArray.map((value, idx) => (
                <div key={idx} className="cursor-pointer bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                  {value.icon}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-700">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* Impact & Achievements Section - The Final Powerful Div */}
        <div className="px-6 md:px-20 py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Impact in Numbers</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { number: "50+", label: "Successful Projects" },
                { number: "100%", label: "Client Satisfaction" },
                { number: "15+", label: "Industries Served" }
              ].map((stat, index) => (
                <div key={index} className="space-y-3">
                  <div className="text-4xl md:text-5xl font-bold">{stat.number}</div>
                  <div className="text-xl">{stat.label}</div>
                </div>
              ))}
            </div>
  
            <div className="pt-8 border-t border-blue-400">
              <h3 className="text-2xl font-semibold mb-6">Why Choose Us?</h3>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="text-blue-300 text-2xl">✓</div>
                    <div>
                      <h4 className="font-semibold text-lg">Proven Expertise</h4>
                      <p>Our team brings decades of combined experience solving complex engineering challenges across industries.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-blue-300 text-2xl">✓</div>
                    <div>
                      <h4 className="font-semibold text-lg">Future-Ready Solutions</h4>
                      <p>We build with tomorrow in mind, ensuring your technology stack evolves with your business needs.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="text-blue-300 text-2xl">✓</div>
                    <div>
                      <h4 className="font-semibold text-lg">Client-Centric Approach</h4>
                      <p>We become an extension of your team, aligning our success with your business outcomes.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-blue-300 text-2xl">✓</div>
                    <div>
                      <h4 className="font-semibold text-lg">Agile Delivery</h4>
                      <p>Our iterative process ensures we deliver value quickly while maintaining flexibility for changing requirements.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
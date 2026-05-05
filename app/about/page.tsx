import Link from "next/link";



export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 font-sans">
      {/* Hero Section */}
     {/*  <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">About</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">XX Shop</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
              We're on a mission to provide quality products with exceptional service, making online shopping effortless and enjoyable.
            </p>
          </div>
        </div>
      </section> */}

      {/* Our Story Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">Crafted with care since 2024</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-4 mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              XX Shop started as a small passion project between friends who wanted to bring quality, affordable products to people everywhere. What began as a weekend idea quickly grew into a trusted online store serving thousands of happy customers.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We believe that shopping should be simple, secure, and enjoyable. That's why we hand-pick every product, negotiate the best prices, and provide fast, reliable shipping so you can focus on what matters most.
            </p>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://imgs.search.brave.com/vsoOUUzrNJ8c9B7xLdd4p_PWXmPZI7o9PClw6Zp9zsg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE2LzQ1LzE3LzY3/LzM2MF9GXzE2NDUx/NzY3MThfVG1MOUk2/QnJPMTlwNGxZcmc0/R0kxZzVXaTRoNU1j/S2guanBn" 
                alt="Team working together" 
                className="w-full h-80 object-cover opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">100% Satisfaction</p>
                  <p className="text-xs text-gray-500">Thousands of happy customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">What drives us</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌟",
                title: "Quality First",
                description: "We never compromise on quality. Every product is vetted to meet our high standards before it reaches you."
              },
              {
                icon: "⚡",
                title: "Fast & Reliable",
                description: "Quick processing and reliable shipping partners ensure your order arrives when you need it."
              },
              {
                icon: "💚",
                title: "Customer Obsession",
                description: "Your happiness is our priority. We're here to help with easy returns and responsive support."
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section (Optional) */}
      {/* <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">The Team</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">Behind the brand</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mt-4"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4">A small, passionate group dedicated to your shopping experience.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Alex Morgan", role: "Founder & CEO", img: "https://randomuser.me/api/portraits/men/32.jpg" },
            { name: "Jamie Lee", role: "Head of Product", img: "https://randomuser.me/api/portraits/women/68.jpg" },
            { name: "Taylor Chen", role: "Customer Success", img: "https://randomuser.me/api/portraits/men/75.jpg" },
            { name: "Jordan Smith", role: "Logistics Lead", img: "https://randomuser.me/api/portraits/women/90.jpg" }
          ].map((member, idx) => (
            <div key={idx} className="text-center group">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 shadow-md group-hover:scale-105 transition-transform duration-300">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{member.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* CTA / Newsletter Section (Optional) */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 md:p-12 text-center shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Mail Us</h3>
          <p className="text-gray-300 mb-6 max-w-md mx-auto">Get exclusive offers, behind-the-scenes updates, and early access to new arrivals.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="text" 
              placeholder="Your message" 
              className="flex-1 px-5 py-3 rounded-xl bg-white/10 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Link href="mailto:richardkodah2003@gmail.com"className="px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors" >
              Send 
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
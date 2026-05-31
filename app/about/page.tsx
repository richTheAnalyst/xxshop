import Link from "next/link";



export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-gray-600 dark:from-gray-950 dark:to-gray-900 font-sans">

      {/* Our Story Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">KNOW US</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">WHY AND HOW WE OPERATE</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-4 mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              SunnyLink Rentals is a rental company aimed at renting 
              premium event aparatus at a fordable prices for any type
              of accasions.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              At SunnyLink we believe everyone should be able to make thier
              events inspiring and remarkable without having to break thier wallet.
              Low prices, quality products, make memories!!!!!!.
            </p>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/images/img-1.png" 
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
      <section className="bg-gray-50 dark:bg-gray-900 py-16 md:py-20 rounded-md">
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
              <div key={idx} className="bg-gray-300 dark:bg-gray-800 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA / Newsletter Section (Optional) */}
      <div className="max-w-6xl mx-auto px-6 pb-20 mt-10">
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
import Image from 'next/image';

export const metadata = {
  title: 'About Us | Cubie Group\'s',
  description: 'Learn more about our mission, vision, and the team behind Cubie Group\'s',
};

export default function AboutPage() {
  return (
    <main className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero section */}
      <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl transition-colors duration-300">
              <span className="block">About</span>
              <span className="block text-blue-600 dark:text-blue-400 transition-colors duration-300">Our Story</span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-xl text-gray-500 dark:text-gray-300 sm:max-w-3xl transition-colors duration-300">
              We are passionate about sharing knowledge and insights on technology, design, 
              and development to help you stay ahead in the digital world.
            </p>
          </div>
        </div>
        <div className="absolute inset-y-0 right-1/2 transform translate-x-1/2 h-full w-48 bg-gradient-to-r from-transparent to-blue-50 dark:to-gray-800 sm:h-3/4 sm:w-72 sm:left-auto sm:right-0 sm:translate-x-0 transition-colors duration-300" aria-hidden="true"></div>
      </div>

      {/* Our mission section */}
      <div className="bg-white dark:bg-gray-900 py-16 sm:py-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl transition-colors duration-300">
                Our Mission
              </h2>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-300 transition-colors duration-300">
                Cubie Group's was founded with a simple but powerful mission: to create a platform where knowledge can be shared freely and accessibly, helping individuals and organizations navigate the ever-evolving digital landscape.
              </p>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-300 transition-colors duration-300">
                We believe that quality content should be available to everyone, regardless of their technical background or expertise level. Our articles range from beginner-friendly guides to in-depth technical analyses, ensuring there's something valuable for readers at all stages of their journey.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="relative aspect-w-4 aspect-h-3 rounded-lg shadow-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                  alt="Team collaboration" 
                  width={800} 
                  height={600} 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team section */}
      <div className="bg-gray-50 dark:bg-gray-900 py-16 sm:py-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl transition-colors duration-300">
              Meet Our Team
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 mx-auto transition-colors duration-300">
              Our diverse team of writers, developers, and designers are passionate about sharing knowledge.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Team member 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden transition-colors duration-300">
              <div className="relative h-60 w-full">
                <Image 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="Team member" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">Sarah Johnson</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1 transition-colors duration-300">Editor in Chief</p>
                <p className="text-gray-500 dark:text-gray-300 mt-3 transition-colors duration-300">With over 15 years of experience in tech publishing, Sarah leads our content strategy.</p>
                <div className="mt-4 flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 transition-colors duration-300">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 transition-colors duration-300">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Team member 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden transition-colors duration-300">
              <div className="relative h-60 w-full">
                <Image 
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Team member"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">Michael Chen</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1 transition-colors duration-300">Lead Developer</p>
                <p className="text-gray-500 dark:text-gray-300 mt-3 transition-colors duration-300">With over 10 years of experience in software development, Michael leads our tech team.</p>
                <div className="mt-4 flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 transition-colors duration-300">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 transition-colors duration-300">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Team member 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden transition-colors duration-300">
              <div className="relative h-60 w-full">
                <Image 
                  src="https://randomuser.me/api/portraits/women/11.jpg"
                  alt="Team member"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">Jessica Lee</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3 transition-colors duration-300">UI/UX Designer</p>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Jessica crafts our visual identity and ensures our articles are presented in the most user-friendly and accessible way possible.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values section */}
      <div className="bg-white dark:bg-gray-900 py-16 sm:py-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white sm:text-4xl transition-colors duration-300">
            Our Values
          </h2>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Value 1 */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 transition-colors duration-300">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 dark:bg-blue-500 text-white mb-5 transition-colors duration-300">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Trust</h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">We're committed to providing accurate, well-researched content that you can trust and apply with confidence.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 transition-colors duration-300">
                <div className="text-blue-500 dark:text-blue-400 mb-4 transition-colors duration-300">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Innovation</h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">We stay at the cutting edge of technology to bring you the latest advancements and techniques that matter.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 transition-colors duration-300">
                <div className="text-blue-500 dark:text-blue-400 mb-4 transition-colors duration-300">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Community</h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">We believe in fostering a supportive community where knowledge is shared freely and everyone can learn and grow.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Counties We Serve section */}
      <section className="py-12 md:py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
              Counties We Serve
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              We're proud to be expanding our presence across these counties
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* County Card 1 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden transition-colors duration-300">
              <div className="relative h-48 w-full bg-blue-600 dark:bg-blue-700 transition-colors duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="h-24 w-24 text-white opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">King County</h3>
                <p className="mt-3 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  Our founding location and primary hub, with a rapidly growing readership and several community events each month.
                </p>
                <div className="mt-4">
                  <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300">Established</span>
                </div>
              </div>
            </div>
            
            {/* County Card 2 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden transition-colors duration-300">
              <div className="relative h-48 w-full bg-purple-600 dark:bg-purple-700 transition-colors duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="h-24 w-24 text-white opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">Pierce County</h3>
                <p className="mt-3 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  A thriving tech ecosystem with partnerships with local universities and tech startups to bring specialized content.
                </p>
                <div className="mt-4">
                  <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300">Growing</span>
                </div>
              </div>
            </div>
            
            {/* County Card 3 */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden transition-colors duration-300">
              <div className="relative h-48 w-full bg-yellow-500 dark:bg-yellow-600 transition-colors duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="h-24 w-24 text-white opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">Snohomish County</h3>
                <p className="mt-3 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  Our newest focus area with exciting plans for development and community outreach programs launching soon.
                </p>
                <div className="mt-4">
                  <span className="inline-block bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300">Developing</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
              Interested in bringing our platform to your county? We're always looking to expand our reach.  
            </p>
            <a href="/contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-300">
              Contact Us About Your County
              <svg className="ml-2 -mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
    </section>
    </main>
  );
}

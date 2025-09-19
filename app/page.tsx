import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <div className="flex justify-center mb-8">
          <img 
            src="/images/profile.jpg" 
            alt="Professor Caleb Cohoe" 
            className="w-56 h-56 rounded-full object-cover shadow-xl border-4 border-white ring-4 ring-blue-100"
          />
        </div>
        <h1 className="text-6xl font-bold text-gray-900 mb-6 tracking-tight">Caleb Cohoe</h1>
        <h2 className="text-3xl text-gray-600 mb-8 font-light">
          Professor of Philosophy & Department Chair
        </h2>
        <div className="text-xl text-gray-700 space-y-2">
          <p>
            <a href="http://msudenver.edu/philosophy" className="text-blue-700 hover:text-blue-900 underline font-medium">
              Philosophy Department
            </a>
          </p>
          <p>
            <a href="http://www.msudenver.edu/" className="text-blue-700 hover:text-blue-900 underline font-medium">
              Metropolitan State University of Denver
            </a>
          </p>
        </div>
      </section>

      {/* Main Bio */}
      <section className="mb-20">
        <div className="prose prose-xl prose-gray max-w-none">
          <p className="text-2xl leading-relaxed text-gray-700 mb-12 font-light">
            I am Professor of Philosophy and Chair of the Philosophy Department at Metropolitan State University of Denver. 
            In 2012, I received my doctorate in Philosophy from Princeton University, where I was part of the Program in Classical Philosophy.
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-10 rounded-2xl mb-16 border border-blue-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Research Interests</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-xl text-gray-700">Ancient Greek and Roman philosophy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-xl text-gray-700">Medieval philosophy</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-xl text-gray-700">Philosophy of religion</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-xl text-gray-700">Philosophy as a way of life movement</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-gray-700 mb-8">
            I am also a leader in the philosophy as a way of life movement, an initiative to study and teach visions 
            of the good life in a holistic and engaged way. I served as one of the Lead Faculty Advisors for the 
            <a href="https://philife.nd.edu" className="text-blue-700 hover:text-blue-900 underline mx-1 font-medium">
              Philosophy as a Way of Life Project
            </a>, sponsored by Notre Dame and the Andrew Mellon Foundation. Those in the movement seek to show 
            students and the public how the practice of philosophy contributes to human life.
          </p>
        </div>
      </section>

      {/* Quick Links to Other Sections */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Research Areas</h3>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Exploring the nature of human and divine in Aristotle, and Augustine&apos;s relationship to ancient philosophy.
          </p>
          <Link href="/research" className="inline-flex items-center text-blue-700 hover:text-blue-900 font-semibold text-lg">
            Learn more about my research 
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200 hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Teaching Philosophy</h3>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Philosophy as a way of life, ancient texts, and engaging students with practical wisdom.
          </p>
          <Link href="/teaching" className="inline-flex items-center text-green-700 hover:text-green-900 font-semibold text-lg">
            View teaching approach 
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Education */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 p-10 rounded-2xl border border-gray-200">
        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Education</h3>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h4 className="text-2xl font-bold text-gray-800 mb-3">Ph.D. in Philosophy, 2012</h4>
            <p className="text-xl text-gray-700">
              <a href="http://philosophy.princeton.edu/" className="text-blue-700 hover:text-blue-900 underline font-medium">
                Princeton University
              </a>
              <span className="mx-3 text-gray-400">•</span>
              <a href="https://philosophy.princeton.edu/graduate/special-programs" className="text-blue-700 hover:text-blue-900 underline font-medium">
                Program in Classical Philosophy
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
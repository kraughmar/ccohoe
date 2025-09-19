import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="flex justify-center mb-8">
          <img 
            src="/images/profile.jpg" 
            alt="Professor Caleb Cohoe" 
            className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-slate-200"
          />
        </div>
        <h1 className="text-5xl font-bold text-slate-900 mb-4">Caleb Cohoe</h1>
        <h2 className="text-2xl text-slate-600 mb-6 font-light">
          Professor of Philosophy & Department Chair
        </h2>
        <div className="text-lg text-slate-700">
          <p className="mb-2">
            <a href="http://msudenver.edu/philosophy" className="text-blue-700 hover:text-blue-900 underline">
              Philosophy Department
            </a>
          </p>
          <p>
            <a href="http://www.msudenver.edu/" className="text-blue-700 hover:text-blue-900 underline">
              Metropolitan State University of Denver
            </a>
          </p>
        </div>
      </section>

      {/* Main Bio */}
      <section className="prose prose-lg prose-slate max-w-none mb-16">
        <p className="text-xl leading-relaxed text-slate-700 mb-8">
          I am Professor of Philosophy and Chair of the Philosophy Department at Metropolitan State University of Denver. 
          In 2012, I received my doctorate in Philosophy from Princeton University, where I was part of the Program in Classical Philosophy.
        </p>
        
        <div className="bg-slate-50 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">Research Interests</h3>
          <ul className="text-lg text-slate-700 space-y-2">
            <li>Ancient Greek and Roman philosophy</li>
            <li>Medieval philosophy</li>
            <li>Philosophy of religion</li>
            <li>Philosophy as a way of life movement</li>
          </ul>
        </div>

        <p className="text-lg leading-relaxed text-slate-700 mb-6">
          I am also a leader in the philosophy as a way of life movement, an initiative to study and teach visions 
          of the good life in a holistic and engaged way. I served as one of the Lead Faculty Advisors for the 
          <a href="https://philife.nd.edu" className="text-blue-700 hover:text-blue-900 underline mx-1">
            Philosophy as a Way of Life Project
          </a>, sponsored by Notre Dame and the Andrew Mellon Foundation. Those in the movement seek to show 
          students and the public how the practice of philosophy contributes to human life.
        </p>
      </section>

      {/* Quick Links to Other Sections */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-slate-900 mb-3">Research Areas</h3>
          <p className="text-slate-700 mb-4">
            Exploring the nature of human and divine in Aristotle, and Augustine&apos;s relationship to ancient philosophy.
          </p>
          <Link href="/research" className="text-blue-700 hover:text-blue-900 font-medium">
            Learn more about my research →
          </Link>
        </div>
        
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-slate-900 mb-3">Teaching Philosophy</h3>
          <p className="text-slate-700 mb-4">
            Philosophy as a way of life, ancient texts, and engaging students with practical wisdom.
          </p>
          <Link href="/teaching" className="text-blue-700 hover:text-blue-900 font-medium">
            View teaching approach →
          </Link>
        </div>
      </section>

      {/* Education */}
      <section className="bg-slate-50 p-8 rounded-lg">
        <h3 className="text-2xl font-semibold text-slate-900 mb-6">Education</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold text-slate-800">Ph.D. in Philosophy, 2012</h4>
            <p className="text-slate-700">
              <a href="http://philosophy.princeton.edu/" className="text-blue-700 hover:text-blue-900 underline">
                Princeton University
              </a>
              <span className="mx-2">•</span>
              <a href="https://philosophy.princeton.edu/graduate/special-programs" className="text-blue-700 hover:text-blue-900 underline">
                Program in Classical Philosophy
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
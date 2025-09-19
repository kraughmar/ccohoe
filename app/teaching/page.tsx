export default function Teaching() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Teaching</h1>
      
      <div className="prose prose-lg prose-slate max-w-none">
        <p className="text-xl text-slate-700 mb-12">
          My approach to teaching philosophy centers on the conviction that philosophy should transform 
          how we live, not merely how we think.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-slate-900 mb-6">Philosophy as a Way of Life</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            <div className="md:col-span-2">
              <div className="bg-amber-50 p-8 rounded-lg">
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  I am a leader in the philosophy as a way of life movement, an initiative to study and teach 
                  visions of the good life in a holistic and engaged way.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  I served as one of the Lead Faculty Advisors for the 
                  <a href="https://philife.nd.edu" className="text-blue-700 hover:text-blue-900 underline mx-1">
                    Philosophy as a Way of Life Project
                  </a>, sponsored by 
                  <a href="https://philosophy.nd.edu/" className="text-blue-700 hover:text-blue-900 underline mx-1">
                    Notre Dame
                  </a> and the 
                  <a href="https://mellon.org/" className="text-blue-700 hover:text-blue-900 underline mx-1">
                    Andrew Mellon Foundation
                  </a>.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image 
                src="/images/teaching/classroom.jpg" 
                alt="Philosophy classroom discussion" 
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            Those in the movement seek to show students and the public how the practice of philosophy 
            contributes to human life. Rather than treating philosophy as purely academic, we explore 
            how ancient and medieval thinkers understood philosophy as a transformative practice.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-slate-900 mb-6">Teaching Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Engaged Learning</h3>
              <p className="text-slate-700">
                Students encounter philosophical texts not as historical artifacts, but as living 
                voices offering wisdom for contemporary life.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Practical Wisdom</h3>
              <p className="text-slate-700">
                Ancient concepts like eudaimonia and virtue are explored for their relevance 
                to questions students face about meaning and flourishing.
              </p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Historical Context</h3>
              <p className="text-slate-700">
                Understanding how philosophical ideas emerged from specific historical contexts 
                while addressing universal human concerns.
              </p>
            </div>
            
            <div className="bg-rose-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Critical Thinking</h3>
              <p className="text-slate-700">
                Developing rigorous analytical skills alongside appreciation for how philosophy 
                can guide personal and communal life.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-slate-900 mb-6">Course Areas</h2>
          <div className="bg-slate-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Ancient Philosophy</h3>
                <ul className="text-slate-700 space-y-1 text-sm">
                  <li>Pre-Socratic thought</li>
                  <li>Plato and the Academy</li>
                  <li>Aristotelian philosophy</li>
                  <li>Hellenistic schools</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Medieval Philosophy</h3>
                <ul className="text-slate-700 space-y-1 text-sm">
                  <li>Augustine and Christian philosophy</li>
                  <li>Islamic philosophical tradition</li>
                  <li>Scholastic philosophy</li>
                  <li>Philosophy and theology</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Philosophy of Religion</h3>
                <ul className="text-slate-700 space-y-1 text-sm">
                  <li>Arguments for God&apos;s existence</li>
                  <li>Divine attributes</li>
                  <li>Religious experience</li>
                  <li>Faith and reason</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Ethics & Practical Philosophy</h3>
                <ul className="text-slate-700 space-y-1 text-sm">
                  <li>Virtue ethics</li>
                  <li>Philosophy as therapy</li>
                  <li>The good life</li>
                  <li>Practical wisdom</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
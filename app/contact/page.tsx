export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Contact</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Office Information</h2>
          <div className="space-y-4 text-lg text-slate-700">
            <div>
              <h3 className="font-semibold text-slate-800">Position</h3>
              <p>Professor of Philosophy & Department Chair</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-slate-800">Department</h3>
              <p>
                <a href="http://msudenver.edu/philosophy" className="text-blue-700 hover:text-blue-900 underline">
                  Philosophy Department
                </a>
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-slate-800">Institution</h3>
              <p>
                <a href="http://www.msudenver.edu/" className="text-blue-700 hover:text-blue-900 underline">
                  Metropolitan State University of Denver
                </a>
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Get in Touch</h2>
          <div className="bg-slate-50 p-6 rounded-lg">
            <p className="text-slate-700 mb-4">
              I welcome inquiries from students, colleagues, and anyone interested in philosophy 
              as a way of life, ancient philosophy, or medieval thought.
            </p>
            <p className="text-slate-700 text-sm">
              Please contact me through the Philosophy Department at MSU Denver for the most 
              current office hours and contact information.
            </p>
          </div>
        </div>
      </div>
      
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-slate-900 mb-6">Academic Affiliations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <h3 className="font-semibold text-slate-800 mb-2">Alumni</h3>
            <p className="text-slate-700">
              <a href="http://philosophy.princeton.edu/" className="text-blue-700 hover:text-blue-900 underline">
                Princeton University Philosophy
              </a>
            </p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <h3 className="font-semibold text-slate-800 mb-2">Lead Faculty Advisor</h3>
            <p className="text-slate-700">
              <a href="https://philife.nd.edu" className="text-blue-700 hover:text-blue-900 underline">
                Philosophy as a Way of Life Project
              </a>
            </p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <h3 className="font-semibold text-slate-800 mb-2">Professional</h3>
            <p className="text-slate-700">American Philosophical Association</p>
          </div>
        </div>
      </section>
    </div>
  )
}
export default function Publications() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Publications</h1>
      
      <div className="prose prose-lg prose-slate max-w-none">
        <p className="text-xl text-slate-700 mb-12">
          My scholarly work appears in academic journals and edited volumes, focusing on ancient philosophy, 
          medieval thought, and philosophy of religion.
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Journal Articles</h2>
          <div className="space-y-8">
            <div className="bg-slate-50 p-6 rounded-lg">
              <p className="text-slate-700 italic mb-2">Recent and forthcoming articles on Aristotelian metaphysics and Augustine's philosophical theology.</p>
              <p className="text-sm text-slate-600">Publication details will be updated as articles appear in print.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Book Chapters</h2>
          <div className="space-y-8">
            <div className="bg-slate-50 p-6 rounded-lg">
              <p className="text-slate-700 italic mb-2">Contributions to edited volumes on philosophy as a way of life and medieval philosophical commentary.</p>
              <p className="text-sm text-slate-600">Publication details will be updated as volumes appear.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Conference Presentations</h2>
          <div className="bg-blue-50 p-8 rounded-lg">
            <p className="text-lg text-slate-700 mb-4">
              Regular presenter at major conferences including:
            </p>
            <ul className="text-slate-700 space-y-2">
              <li>American Philosophical Association meetings</li>
              <li>Society for Ancient Greek Philosophy</li>
              <li>International Society for Medieval Philosophy</li>
              <li>American Academy of Religion</li>
              <li>Philosophy as a Way of Life conferences</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Current Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Book Manuscript</h3>
              <p className="text-slate-700 text-sm">
                Completing a monograph on Augustine's transformation of ancient philosophical ideals 
                of human flourishing.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Article Series</h3>
              <p className="text-slate-700 text-sm">
                Developing articles on Aristotelian theories of divine contemplation and 
                their reception in medieval Islamic philosophy.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
export default function Research() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Research</h1>
      
      <div className="prose prose-lg prose-slate max-w-none">
        <p className="text-xl text-slate-700 mb-12">
          I have two main areas of research, examining fundamental questions about the relationship 
          between human and divine nature in ancient and medieval philosophy.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-slate-900 mb-6">Aristotle: Human Nature and Divine Activity</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            <div className="md:col-span-2">
              <div className="bg-blue-50 p-8 rounded-lg">
                <p className="text-lg text-slate-700 leading-relaxed">
                  In my first research area, I challenge the currently predominant naturalist readings of Aristotle. 
                  While Aristotle acknowledges that human life is similar in many respects to that of other biological creatures, 
                  I argue that Aristotle thinks exercising understanding is a way of becoming immortal and sharing in 
                  timeless and ongoing divine activity.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img 
                src="/images/research/aristotle.jpg" 
                alt="Ancient Greek philosophical texts" 
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">
            This work explores how Aristotelian philosophy offers a distinctive account of human flourishing 
            that transcends purely biological or naturalistic interpretations, showing how intellectual activity 
            connects humans to divine reality.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-slate-900 mb-6">Augustine: Philosophy and Religious Life</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            <div className="flex items-center justify-center">
              <img 
                src="/images/research/augustine.jpg" 
                alt="Medieval manuscripts and Augustine texts" 
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="md:col-span-2">
              <div className="bg-green-50 p-8 rounded-lg">
                <p className="text-lg text-slate-700 leading-relaxed">
                  In my second research area, I use Augustine's engagement with philosophy to explore the intersections 
                  and tensions between philosophical and religious ways of life. Augustine adopts many key commitments 
                  of Greco-Roman philosophy, including eudaimonism and the conviction that a true philosophy must issue in a way of life.
                </p>
              </div>
            </div>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            At the same time, he offers a distinctive reconfiguration of Stoic and Platonic conceptions of the 
            intellectual and moral virtues in light of his Christian view of reality and his belief that true 
            virtues and true happiness cannot be fully attained in our current lives.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            I argue that Augustine continues the tradition of philosophy as a way of life, using his views on 
            the city of God and the resurrection of the body to offer a resolution of Stoic and Peripatetic 
            puzzles about the conditions for happiness and the possibility of achieving it.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-slate-900 mb-6">Medieval Philosophy & Philosophy of Religion</h2>
          <div className="bg-slate-50 p-8 rounded-lg">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Medieval Commentary Traditions</h3>
                <p className="text-slate-700 leading-relaxed">
                  I am interested in the medieval traditions of commentary and engagement with Aristotle in both 
                  the Islamic world and Latin west, focusing on issues of causation and cognition.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Contemporary Philosophy of Religion</h3>
                <p className="text-slate-700 leading-relaxed">
                  In the philosophy of religion, I apply insights from ancient and medieval thinkers to a number of topics including:
                </p>
                <ul className="list-disc pl-6 mt-3 text-slate-700 space-y-1">
                  <li>Theories of personal identity and survival</li>
                  <li>The relationship between divine and human agency</li>
                  <li>Divine simplicity</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
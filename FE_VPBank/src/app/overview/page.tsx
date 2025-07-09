import { CheckCircle } from 'lucide-react';

export default function OverviewPage() {
  return (
    <main className="text-white">
      <section id="overview" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-shadow-md">
            The Problem & Our Solution
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-300 text-shadow">
            Bridging the gap for the new economy's workforce.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
          <div className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-vpbank-red/80 mb-4">The Challenge</h3>
            <p className="text-gray-300 mb-4">The traditional credit system wasn't built for the gig economy. Millions of freelancers are financially invisible and excluded due to outdated risk models.</p>
            <ul className="space-y-2">
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-vpbank-red/80 mr-2 mt-1 flex-shrink-0" /><span>High rejection rates for freelancers.</span></li>
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-vpbank-red/80 mr-2 mt-1 flex-shrink-0" /><span>Inability to analyze unstructured data.</span></li>
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-vpbank-red/80 mr-2 mt-1 flex-shrink-0" /><span>Reliance on predatory lending.</span></li>
            </ul>
          </div>

          <div className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-vpbank-green mb-4">The GigaScore Solution</h3>
            <p className="text-gray-300 mb-4">We turn unstructured data into actionable credit insight. Our AI platform provides a holistic, fair, and accurate credit picture for all.</p>
            <ul className="space-y-2">
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-vpbank-green mr-2 mt-1 flex-shrink-0" /><span>Increased access to formal credit.</span></li>
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-vpbank-green mr-2 mt-1 flex-shrink-0" /><span>Smarter lending decisions for banks.</span></li>
              <li className="flex items-start"><CheckCircle className="h-5 w-5 text-vpbank-green mr-2 mt-1 flex-shrink-0" /><span>Fostering growth in the gig economy.</span></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
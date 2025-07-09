import { FileText, BrainCircuit, ShieldCheck } from 'lucide-react';

const featuresList = [
  { icon: <FileText className="h-8 w-8" />, title: "Unstructured Data Analysis", description: "Our AI reads and understands PDF contracts, invoices, and bank statements to build a holistic profile." },
  { icon: <BrainCircuit className="h-8 w-8" />, title: "Predictive AI-Powered Scoring", description: "We analyze cash flow volatility and income trends, not just averages, for a truly fair assessment." },
  { icon: <ShieldCheck className="h-8 w-8" />, title: "Explainable & Bank-Ready", description: "Every score comes with a clear explanation, empowering banks to make confident, low-risk decisions." }
];

export default function FeaturesPage() {
  return (
    <main className="text-white">
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-shadow-md">
            Why GigaScore is a Game-Changer
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-300 text-shadow">
            We go beyond the numbers to understand the true potential of freelancers.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {featuresList.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center p-8 border rounded-xl bg-black/20 backdrop-blur-lg border-white/10 shadow-lg transition-transform hover:-translate-y-2">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-vpbank-green/20 text-vpbank-green">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
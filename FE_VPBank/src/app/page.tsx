'use client';

import Link from 'next/link';
import { FileText, BrainCircuit, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Unstructured Data Analysis",
    description: "Our AI reads and understands PDF contracts, invoices, and bank statements to build a holistic profile."
  },
  {
    icon: <BrainCircuit className="h-6 w-6" />,
    title: "Predictive AI-Powered Scoring",
    description: "We analyze cash flow volatility and income trends, not just averages, for a truly fair assessment."
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Explainable & Bank-Ready",
    description: "Every score comes with a clear explanation, empowering banks to make confident, low-risk decisions."
  }
];

export default function Home() {
  return (
    <>
      <section className="bg-transparent text-white pt-12">
        <div className="container mx-auto flex flex-col items-center px-4 py-24 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl text-shadow-lg">
            Smarter Credit Scoring for the Gig Economy
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-200 text-shadow">
            Our AI-powered platform analyzes your complete financial picture—not just a credit score—to provide fairer, faster loan approvals.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/submit"
              className="rounded-md bg-vpbank-green px-8 py-3 text-base font-medium text-white shadow-lg transition-transform hover:scale-105"
            >
              Submit Prototype
            </Link>
            <Link
              href="#features"
              className="rounded-md border border-white/50 bg-white/10 backdrop-blur-sm px-8 py-3 text-base font-medium text-white transition-colors hover:bg-white/20"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
      <section id="features" className="bg-transparent py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white text-shadow-md">
              Why GigaScore is a Game-Changer
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-300 text-shadow">
              We go beyond the numbers to understand the true potential of freelancers.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} 
                   className="flex flex-col items-center text-center p-8 border rounded-xl 
                              bg-black/20 backdrop-blur-lg border-white/10 
                              shadow-lg transition-transform hover:-translate-y-2">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-vpbank-green/20 text-vpbank-green">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-transparent py-20">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden text-center p-12 
                        bg-black/20 backdrop-blur-xl border border-white/10 
                        rounded-2xl shadow-2xl">
            <div className="absolute -top-1/2 -left-1/2 w-96 h-96 bg-vpbank-green/20 rounded-full filter blur-3xl opacity-50"></div>
            <div className="absolute -bottom-1/2 -right-1/2 w-96 h-96 bg-vpbank-light-teal/20 rounded-full filter blur-3xl opacity-50"></div>
            
            <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white text-shadow-lg">Ready to Build a Fairer Financial Future?</h2>
                <p className="mt-2 text-gray-300 text-shadow">
                    Let's innovate together.
                </p>
                <div className="mt-8">
                    <Link
                    href="/submit"
                    className="rounded-md bg-vpbank-green px-8 py-3 text-base font-medium text-white shadow-lg transition-transform hover:scale-105"
                    >
                    Go to Submission
                    </Link>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
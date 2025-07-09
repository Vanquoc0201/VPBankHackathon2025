'use client';

import { useState } from 'react';
import { Database, BrainCircuit, Zap, CheckCircle } from 'lucide-react';

const solutionTabs = [
  { name: "Pipeline 1: Data Enrichment", icon: <Database className="h-5 w-5 mr-2" />, content: ["Event-driven architecture using S3, Step Functions, and Lambda.", "Parallel processing for structured (CSV) and unstructured (PDF) data.", "Amazon Textract for OCR and Bedrock for AI-powered feature extraction.", "Consolidates into a versioned, compliant Feature Store."] },
  { name: "Pipeline 2: MLOps Training", icon: <BrainCircuit className="h-5 w-5 mr-2" />, content: ["Robust MLOps with Amazon SageMaker ecosystem.", "Ensemble modeling (XGBoost, TabNet) with automated hyperparameter tuning.", "Conditional model registration based on performance (AUC >= 0.85).", "Full model lineage and explainability (SHAP) for governance."] },
  { name: "Pipeline 3: Real-time Inference", icon: <Zap className="h-5 w-5 mr-2" />, content: ["Scalable serverless API using API Gateway and SageMaker Endpoints.", "Sub-100ms response time for real-time scoring.", "On-the-fly feature extraction for new data.", "Generates natural language explanations for each score using Bedrock."] }
];

export default function SolutionPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="text-white">
      <section id="solution" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-shadow-md">
            Technical Deep Dive
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-300 text-shadow">
            Our automated three-pipeline architecture on AWS.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-black/20 backdrop-blur-lg border border-white/10 rounded-xl shadow-lg p-2">
          <div className="flex flex-col md:flex-row border-b border-white/10">
            {solutionTabs.map((tab, index) => (
              <button key={tab.name} onClick={() => setActiveTab(index)} className={`flex-1 flex items-center justify-center p-4 font-medium transition-colors ${activeTab === index ? 'text-vpbank-green border-b-2 border-vpbank-green' : 'text-gray-300 hover:bg-white/5'}`}>{tab.icon}{tab.name}</button>
            ))}
          </div>
          <div className="p-8 min-h-[250px]">
            <ul className="space-y-4">
              {solutionTabs[activeTab].content.map((point, index) => (
                <li key={index} className="flex items-start"><CheckCircle className="h-5 w-5 text-vpbank-green mr-3 mt-1 flex-shrink-0" /><span>{point}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
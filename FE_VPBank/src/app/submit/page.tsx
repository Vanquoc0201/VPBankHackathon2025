'use client';

import { useState } from 'react';
import { UploadCloud, FileText, LoaderCircle, BarChart, CheckCircle, AlertTriangle } from 'lucide-react';
function FileInput({ file, setFile, title, acceptedTypes }: { file: File | null, setFile: (f: File | null) => void, title: string, acceptedTypes: string }) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-300 mb-2">{title}</label>
      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10 bg-black/20 backdrop-blur-md">
        <div className="text-center">
          <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
          {file ? (
            <p className="mt-4 font-semibold text-vpbank-green">{file.name}</p>
          ) : (
            <div className="mt-4 flex text-sm leading-6 text-gray-400">
              <label
                htmlFor={title}
                className="relative cursor-pointer rounded-md font-semibold text-vpbank-green focus-within:outline-none focus-within:ring-2 focus-within:ring-vpbank-green focus-within:ring-offset-2 focus-within:ring-offset-gray-900 hover:text-vpbank-green/80"
              >
                <span>Upload a file</span>
                <input id={title} name={title} type="file" className="sr-only" onChange={handleFileChange} accept={acceptedTypes} />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
          )}
          <p className="text-xs leading-5 text-gray-500">{acceptedTypes}</p>
        </div>
      </div>
    </div>
  );
}
export default function SubmitPage() {
  const [transactionFile, setTransactionFile] = useState<File | null>(null);
  const [contractFile, setContractFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<any | null>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!transactionFile || !contractFile) {
      alert("Please upload both files.");
      return;
    }
    setIsLoading(true);
    setResults(null);

    // Mô phỏng độ trễ mạng trong 3 giây
    setTimeout(() => {
      // Dữ liệu giả lập trả về từ backend
      const fakeApiResponse = {
        score: 785,
        riskCategory: "Low Risk",
        explanation: "The applicant demonstrates strong financial health with a stable, high-value 12-month contract, consistent monthly income, and a low debt-to-income ratio. The contract's long duration and reputable client significantly mitigate risk, outweighing minor income fluctuations.",
        riskFactors: [
          { factor: 'Contract Duration', value: 12, status: 'Positive' },
          { factor: 'Income Trend', value: 8, status: 'Positive' },
          { factor: 'Transaction History', value: 7, status: 'Positive' },
          { factor: 'Debt-to-Income Ratio', value: -2, status: 'Negative' },
          { factor: 'Late Payments', value: 0, status: 'Positive' }
        ]
      };
      setResults(fakeApiResponse);
      setIsLoading(false);
    }, 3000);
  };

  return (
    <main className="text-white min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-shadow-md">
            Get Your AI-Powered Credit Score
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-300 text-shadow">
            Upload your financial documents to see our AI in action.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="p-8 bg-black/20 backdrop-blur-lg border border-white/10 rounded-xl shadow-2xl space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FileInput file={transactionFile} setFile={setTransactionFile} title="Transaction History" acceptedTypes="CSV, Excel" />
              <FileInput file={contractFile} setFile={setContractFile} title="Work Contract / Invoice" acceptedTypes="PDF" />
            </div>
            <button
              type="submit"
              disabled={isLoading || !transactionFile || !contractFile}
              className="w-full flex items-center justify-center h-12 px-6 font-semibold rounded-md bg-vpbank-green text-white transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed hover:bg-vpbank-green/90"
            >
              {isLoading ? <><LoaderCircle className="animate-spin mr-2" /> Processing...</> : 'Analyze & Get Score'}
            </button>
          </form>
          {results && (
            <div className="mt-12 p-8 bg-black/30 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl animate-fade-in">
              <h2 className="text-3xl font-bold text-center mb-8">Assessment Result</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1 flex flex-col items-center justify-center text-center p-6 bg-white/5 rounded-lg">
                  <p className="text-sm text-gray-400">CREDIT SCORE</p>
                  <p className="text-7xl font-bold text-vpbank-green my-2">{results.score}</p>
                  <p className={`font-semibold px-3 py-1 rounded-full text-sm ${results.riskCategory === 'Low Risk' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>{results.riskCategory}</p>
                </div>
                <div className="md:col-span-2 p-6 bg-white/5 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Natural Language Explanation</h3>
                  <p className="text-gray-300 mb-6">{results.explanation}</p>
                  
                  <h3 className="font-semibold text-lg mb-3">Key Risk Factors</h3>
                  <ul className="space-y-2">
                    {results.riskFactors.map((rf: any) => (
                      <li key={rf.factor} className="flex justify-between items-center text-sm">
                        <span className="flex items-center">
                          {rf.status === 'Positive' 
                            ? <CheckCircle className="h-4 w-4 mr-2 text-green-500"/> 
                            : <AlertTriangle className="h-4 w-4 mr-2 text-red-500"/>}
                          {rf.factor}
                        </span>
                        <span className={`font-bold ${rf.status === 'Positive' ? 'text-green-400' : 'text-red-400'}`}>
                          {rf.status === 'Positive' ? `+${rf.value}` : rf.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
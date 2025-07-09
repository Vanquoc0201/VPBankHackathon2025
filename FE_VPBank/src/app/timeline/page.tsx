import { Milestone } from 'lucide-react';

const timelineEvents = [
  { date: "Day 1", title: "Ideation & Architecture", description: "Defined the core problem, designed the 3-pipeline AWS architecture." },
  { date: "Day 1-2", title: "Backend & MLOps", description: "Set up SageMaker pipelines, data enrichment scripts, and model training jobs." },
  { date: "Day 2", title: "Frontend Development", titleColor: "text-vpbank-green", description: "Built the responsive user interface with Next.js and Tailwind CSS." },
  { date: "Day 3", title: "Integration & Pitching", description: "Connected frontend to backend APIs and prepared the final presentation." }
];

export default function TimelinePage() {
  return (
    <main className="text-white min-h-screen">
      <section id="timeline" className="container mx-auto px-4 py-20">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-shadow-md">
            Hackathon Journey
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-300 text-shadow">
            Our progress from concept to prototype in 3 days.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-0.5 bg-white/20" aria-hidden="true"></div>
          
          <div className="relative flex flex-col gap-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`flex w-full items-center ${
                  index % 2 !== 0 ? 'flex-row-reverse' : ''
                }`}
              >
                <div className="w-1/2 px-6">
                  <div
                    className={`relative p-6 bg-black/40 backdrop-blur-lg border border-white/10 rounded-xl shadow-lg
                               transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl
                               ${index % 2 === 0 ? 'text-right' : 'text-left'}`} 
                  >
                    <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-inherit border-inherit border-t-0 border-r-0 transform rotate-45 
                                    ${index % 2 === 0 ? '-right-[9px]' : '-left-[9px] rotate-180'}`}></div>

                    <p className="text-sm text-gray-400">{event.date}</p>
                    <h3 className={`text-xl font-bold mt-1 ${event.titleColor || 'text-white'}`}>{event.title}</h3>
                    <p className="text-gray-300 mt-2">{event.description}</p>
                  </div>
                </div>
                <div className="w-1/2 px-6"></div>
                <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-vpbank-dark-teal border-2 border-vpbank-green flex items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-vpbank-green opacity-75"></span>
                  <Milestone className="relative h-5 w-5 text-vpbank-green" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
import { Github, Linkedin } from 'lucide-react';

const teamMembers = [
    { name: "Nguyễn Văn A", role: "AI & Backend Lead", avatar: "https://i.pravatar.cc/150?u=a", github: "https://github.com/", linkedin: "https://linkedin.com/" },
    { name: "Trần Thị B", role: "Frontend & UI/UX", avatar: "https://i.pravatar.cc/150?u=b", github: "https://github.com/", linkedin: "https://linkedin.com/" },
    { name: "Lê Văn C", role: "Data & MLOps Engineer", avatar: "https://i.pravatar.cc/150?u=c", github: "https://github.com/", linkedin: "https://linkedin.com/" },
];

export default function MentorsPage() {
  return (
    <main className="text-white">
      <section id="mentors" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-shadow-md">
            Meet the Innovators
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-300 text-shadow">
            The team behind the GigaScore project.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center p-8 bg-black/20 backdrop-blur-lg border border-white/10 rounded-xl shadow-lg transition-transform hover:-translate-y-2">
              <img src={member.avatar} alt={member.name} className="w-24 h-24 rounded-full mb-4 border-2 border-vpbank-green/50"/>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-vpbank-green/80">{member.role}</p>
              <div className="flex gap-4 mt-4">
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white"><Github /></a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white"><Linkedin /></a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
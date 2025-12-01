import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  skills: string[];
  image: string;
  link: string;
}

export const ProjectCard = ({ title, description, skills, image, link }: ProjectCardProps) => {
  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      <div className="grid md:grid-cols-2 gap-8 p-8">
        
        {/* Content */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{title}</h3>
            <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-indigo-700 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
          
          <Link href={link} className="inline-flex items-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors group-hover:shadow-lg">
            자세히 보기
            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        
        {/* Image */}
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
          <div className="flex items-center justify-center h-full text-gray-500">
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
        
      </div>
    </div>
  );
};
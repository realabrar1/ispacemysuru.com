import { ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface CourseCardProps {
  title: string;
  image: string;
  description: string;
  duration: string;
  features: string[];
}

export default function CourseCard({ title, image, description, duration, features }: CourseCardProps) {
  const teamMembers = [
    { name: 'Syed', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e' },
    { name: 'Shoaib', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e' },
    { name: 'Abrar', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d' },
    { name: 'John', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef' },
    { name: 'Mike', image: 'https://images.unsplash.com/photo-1463453091185-61582044d556' },
    { name: 'Alex', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e' },
    { name: 'David', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d' },
    { name: 'Sarah', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' },
    { name: 'Emma', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80' },
    { name: 'Chris', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e' }
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 5; // Number of visible items at once

  useEffect(() => {
    if (title === 'AutoCAD / ZW') {
      const timer = setInterval(() => {
        setStartIndex((prevIndex) => 
          prevIndex + 1 >= teamMembers.length ? 0 : prevIndex + 1
        );
      }, 2000);

      return () => clearInterval(timer);
    }
  }, [title]);

  const visibleMembers = teamMembers.slice(startIndex).concat(teamMembers.slice(0, startIndex));

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-blue-600 font-semibold mb-4">Duration: {duration}</p>
        <ul className="list-disc list-inside mb-4 text-gray-600">
          {features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
        
        {title === 'AutoCAD / ZW' && (
          <div className="mt-6 mb-6">
            <div className="relative flex items-center">
              <Link 
                to="/about" 
                className="absolute left-0 z-10 bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition-colors -ml-4"
              >
                <ChevronLeft className="h-6 w-6" />
              </Link>
              
              <div className="flex justify-center space-x-4 overflow-hidden mx-8">
                {visibleMembers.slice(0, visibleCount).map((member, index) => (
                  <div key={index} className="flex flex-col items-center transform transition-all duration-500">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-blue-500 mb-2">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{member.name}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/about" 
                className="absolute right-0 z-10 bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition-colors -mr-4"
              >
                <ChevronRight className="h-6 w-6" />
              </Link>
            </div>
          </div>
        )}

        <button
          onClick={() => {
            const coursesSection = document.getElementById('courses');
            if (coursesSection) {
              coursesSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="inline-flex items-center text-blue-600 hover:text-blue-700"
        >
          Learn more <ArrowRight className="h-4 w-4 ml-1" />
        </button>
      </div>
    </div>
  );
}

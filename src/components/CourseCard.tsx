import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  title: string;
  image: string;
  description: string;
  duration: string;
  features: string[];
}

export default function CourseCard({ title, image, description, duration, features }: CourseCardProps) {
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
        <Link
          to="/courses"
          className="inline-flex items-center text-blue-600 hover:text-blue-700"
        >
          Learn more <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </div>
  );
}
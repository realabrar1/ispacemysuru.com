import { useParams, useNavigate } from 'react-router-dom';
import { courseDetails } from '../data/courseDetails';

export default function CourseDetails() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = courseDetails[courseId as string];

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-8">The course you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="mb-12">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-[400px] object-cover rounded-xl mb-8"
        />
        <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
        <p className="text-xl text-gray-600 mb-4">{course.fullDescription}</p>
        <div className="flex items-center space-x-4 mb-8">
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
            Duration: {course.duration}
          </span>
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
            Price: {course.price}
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
          <div className="space-y-6">
            {course.curriculum.map((week, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-4">{week.week}</h3>
                <ul className="list-disc list-inside space-y-2">
                  {week.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="text-gray-600">{topic}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Prerequisites</h2>
            <ul className="list-disc list-inside space-y-2">
              {course.prerequisites.map((prerequisite, index) => (
                <li key={index} className="text-gray-600">{prerequisite}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Learning Outcomes</h2>
            <ul className="list-disc list-inside space-y-2">
              {course.learningOutcomes.map((outcome, index) => (
                <li key={index} className="text-gray-600">{outcome}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            } else {
              navigate('/#contact');
            }
          }}
          className="bg-blue-600 text-white px-12 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-colors transform hover:scale-105 duration-200"
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
}

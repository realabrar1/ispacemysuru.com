import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'AutoCAD',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);  // For popup confirmation

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Google Form URL
    const googleFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSelSA3aaZOj2Y754SDqvR6oUy7LUoRdYDdeuZJZVXTMmB1udA/formResponse';

    // Prepare the form data
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('entry.370493836', formData.name);  // Google Form's 'name' field
    formDataToSubmit.append('entry.373186431', formData.phone); // Google Form's 'phone' field
    formDataToSubmit.append('entry.1554576967', formData.email); // Google Form's 'email' field
    formDataToSubmit.append('entry.2093691889', formData.course); // Google Form's 'course' field

    // Submit the form data using fetch (AJAX)
    fetch(googleFormURL, {
      method: 'POST',
      mode: 'no-cors',  // no-cors is required to prevent CORS issues
      body: formDataToSubmit
    })
    .then(() => {
      // On successful submission, show the confirmation popup
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000); // Hide popup after 3 seconds

      // Reset the form
      setFormData({
        name: '',
        phone: '',
        email: '',
        course: 'AutoCAD',
      });
    })
    .catch((error) => {
      console.error('Error submitting the form', error);
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

        {isSubmitted && (
          <div className="bg-green-100 text-green-700 p-4 rounded-md mb-4">
            Your message has been successfully submitted!
          </div>
        )}

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="course" className="block text-sm font-medium text-gray-700">
                Select Course
              </label>
              <select
                id="course"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
              >
                <option value="AutoCAD">AutoCAD / ZW</option>
                <option value="SketchUp">SketchUp</option>
                <option value="Photoshop">Photoshop</option>
                <option value="Revit">Revit</option>
                <option value="Lumion">Lumion</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

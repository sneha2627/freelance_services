const STUDENT_NAME = "Your Name Here" // Replace with your actual name
const STUDENT_NUMBER = "12345678" // Replace with your actual student number

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">About</h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold mb-2">{STUDENT_NAME}</h2>
            <p className="text-gray-600 dark:text-gray-400">Student Number: {STUDENT_NUMBER}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">How to Use This Website</h3>
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">
                Video placeholder - Record your demonstration here
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">Project Description</h3>
            <p className="text-gray-700 dark:text-gray-300">
              This Next.js application generates HTML5 + JavaScript code for creating 
              tabbed interfaces that can be deployed on MOODLE LMS. The generated code 
              uses inline CSS and vanilla JavaScript for maximum compatibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
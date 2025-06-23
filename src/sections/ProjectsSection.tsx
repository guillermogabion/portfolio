import React from 'react';

function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20 w-full min-h-screen flex flex-col justify-center items-center px-4">
      <div className="max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="space-y-6">
          <li className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="text-xl font-bold">Project One</h3>
            <p className="text-gray-700">A web platform that helps users manage tasks with real-time collaboration features.</p>
          </li>
          <li className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="text-xl font-bold">Project Two</h3>
            <p className="text-gray-700">An e-commerce backend system with secure payment integration and user analytics.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ProjectsSection;

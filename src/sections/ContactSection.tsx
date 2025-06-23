import React from 'react';

function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 w-full min-h-screen flex flex-col justify-center items-center px-4">
      <div className="max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-700 mb-2">You can reach me via email at <a className="text-blue-600 underline" href="mailto:john@example.com">john@example.com</a>.</p>
        <p className="text-gray-700">Or find me on <a className="text-blue-600 underline" href="https://linkedin.com" target="_blank">LinkedIn</a> and <a className="text-blue-600 underline" href="https://github.com" target="_blank">GitHub</a>.</p>
      </div>
    </section>
  );
}

export default ContactSection;

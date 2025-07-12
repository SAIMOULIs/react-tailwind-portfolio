import React from "react";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 p-6 font-sans">
      <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 space-y-6">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-blue-600">Sai Chandra Mouli Bonu</h1>
          <p className="mt-2 text-lg">Aspiring Software Engineer | Web Developer | Problem Solver</p>
          <div className="mt-4 space-x-4">
            <a href="mailto:saichandramoulibonu@gmail.com" className="text-blue-500 underline">Email</a>
            <a href="https://www.linkedin.com/in/saichandhramouli-b-5877a9272" className="text-blue-500 underline">LinkedIn</a>
          </div>
        </header>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Skills</h2>
          <ul className="grid grid-cols-2 gap-2 list-disc list-inside">
            <li>C, C++, Python, Java</li>
            <li>HTML, CSS, JavaScript, Django</li>
            <li>MySQL</li>
            <li>Git, GitHub</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Projects</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold">Catch the Insect Game</h3>
              <p>A browser-based game featuring moving insects, animations, score tracking, and responsive design.</p>
              <p className="text-sm text-gray-600">Tech Stack: HTML, CSS, JavaScript</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Mini Facebook</h3>
              <p>A full-stack social media app with user authentication, friend requests, and a live feed.</p>
              <p className="text-sm text-gray-600">Tech Stack: Django, Python, HTML, CSS</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Education</h2>
          <ul className="list-disc list-inside">
            <li>B.Tech CSE, Lendi Institute of Engineering & Technology (2022–2026) — CGPA: 8.2</li>
            <li>APEX Junior College (2020–2022) — 89.9%</li>
            <li>AP Residential School (2020) — GPA: 10</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Internships & Certifications</h2>
          <ul className="list-disc list-inside">
            <li>Process Mining (Celonis)</li>
            <li>Intelligent Automation (Blue Prism)</li>
            <li>Networking Cloud (Juniper)</li>
            <li>Cyber Security (Palo Alto)</li>
            <li>Cloud (AWS)</li>
            <li>Cloud Computing</li>
            <li>Human-Computer Interaction</li>
            <li>Privacy and Security in Online Social Media</li>
            <li>Introduction to IoT</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Achievements</h2>
          <ul className="list-disc list-inside">
            <li>HackerRank: Python (Basic), Java (Basic), Problem Solving (Basic)</li>
            <li>CodeChef: Participated in 7 contests, solved 208 problems, Highest Rating: 982</li>
          </ul>
        </section>

        <footer className="text-center pt-6 border-t">
          <p>&copy; 2025 Sai Chandra Mouli Bonu. All rights reserved.</p>
        </footer>
      </section>
    </main>
  );
}

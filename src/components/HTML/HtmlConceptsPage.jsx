import { useState } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const HtmlConceptsPage = () => {
  const [selectedConcept, setSelectedConcept] = useState('Basic');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Add state to toggle sidebar for mobile

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar Toggle Button for Mobile */}
      <button
        className="md:hidden p-4 bg-gray-800 text-white"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? 'Close Menu' : 'Open Menu'}
      </button>

      {/* Sidebar */}
      <div className={`md:w-64 w-full bg-gray-800 text-white p-4 md:block ${isSidebarOpen ? 'block' : 'hidden'}`}>
        <Sidebar selectedConcept={selectedConcept} setSelectedConcept={setSelectedConcept} />
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-8">
        <MainContent selectedConcept={selectedConcept} />
      </div>
    </div>
  );
};

export default HtmlConceptsPage;

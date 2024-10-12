const Sidebar = ({ selectedConcept, setSelectedConcept }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">React.js Concepts</h2>
      <ul className="space-y-4">
        <li
          className={`hover:text-yellow-300 cursor-pointer ${selectedConcept === 'Basic' ? 'text-yellow-300' : ''
            }`}
          onClick={() => setSelectedConcept('Basic')}
        >
          Basic Concepts
        </li>
        <li
          className={`hover:text-yellow-300 cursor-pointer ${selectedConcept === 'Intermediate' ? 'text-yellow-300' : ''
            }`}
          onClick={() => setSelectedConcept('Intermediate')}
        >
          Intermediate Concepts
        </li>
        <li
          className={`hover:text-yellow-300 cursor-pointer ${selectedConcept === 'Advanced' ? 'text-yellow-300' : ''
            }`}
          onClick={() => setSelectedConcept('Advanced')}
        >
          Advanced Concepts
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

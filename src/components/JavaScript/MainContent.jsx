/* eslint-disable react/prop-types */
const MainContent = ({ selectedConcept }) => {
  const renderContent = () => {
    switch (selectedConcept) {
      case 'Basic':
        return (
          <div>
            <h1 className="text-3xl font-bold mb-4">Basic JavaScript Concepts</h1>
            <p className="text-lg">
              Basic JavaScript concepts include variables, data types, operators, and control structures.
            </p>
            <ul className="list-disc pl-8 mt-4">
              <li>Variables: var, let, const</li>
              <li>Data Types: Number, String, Boolean, Array, Object</li>
              <li>Operators: Arithmetic, Assignment, Comparison, Logical</li>
              <li>Control Structures: if-else, switch, loops (for, while)</li>
            </ul>
          </div>
        );
      case 'Intermediate':
        return (
          <div>
            <h1 className="text-3xl font-bold mb-4">Intermediate JavaScript Concepts</h1>
            <p className="text-lg">
              Intermediate concepts cover functions, objects, and asynchronous JavaScript.
            </p>
            <ul className="list-disc pl-8 mt-4">
              <li>Functions: Function expressions, Arrow functions, Callbacks</li>
              <li>Objects and Prototypes</li>
              <li>Asynchronous JavaScript: Promises, async/await, fetch API</li>
            </ul>
          </div>
        );
      case 'Advanced':
        return (
          <div>
            <h1 className="text-3xl font-bold mb-4">Advanced JavaScript Concepts</h1>
            <p className="text-lg">
              Advanced topics include closures, the event loop, and advanced patterns.
            </p>
            <ul className="list-disc pl-8 mt-4">
              <li>Closures and Scope</li>
              <li>The Event Loop: How JavaScript handles concurrency</li>
              <li>Module Patterns and ES6+ features (like spread/rest operator, destructuring)</li>
            </ul>
          </div>
        );
      default:
        return <p className="text-lg">Select a concept from the sidebar to begin learning!</p>;
    }
  };

  return <div className="flex-1 bg-gray-100 p-8">{renderContent()}</div>;
};

export default MainContent;

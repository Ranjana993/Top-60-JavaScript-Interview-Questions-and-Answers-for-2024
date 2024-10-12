const MainContent = ({ selectedConcept }) => {
  const renderContent = () => {
    switch (selectedConcept) {
      case 'Basic':
        return (
          <div>
            <h1 className="text-3xl font-bold mb-4">Basic React.js Concepts</h1>
            <p className="text-lg">
              Basic React concepts include JSX, components, props, and state management.
            </p>
            <ul className="list-disc pl-8 mt-4">
              <li>JSX: JavaScript XML for building UI</li>
              <li>Components: Functional vs Class components</li>
              <li>Props: Passing data to components</li>
              <li>State: Managing local component state</li>
            </ul>
          </div>
        );
      case 'Intermediate':
        return (
          <div>
            <h1 className="text-3xl font-bold mb-4">Intermediate React.js Concepts</h1>
            <p className="text-lg">
              Intermediate React concepts involve hooks, forms, and side effects.
            </p>
            <ul className="list-disc pl-8 mt-4">
              <li>Hooks: useState, useEffect, useContext</li>
              <li>Handling Forms and Inputs</li>
              <li>Side Effects: Data fetching with useEffect</li>
            </ul>
          </div>
        );
      case 'Advanced':
        return (
          <div>
            <h1 className="text-3xl font-bold mb-4">Advanced React.js Concepts</h1>
            <p className="text-lg">
              Advanced topics include Context API, custom hooks, and performance optimization.
            </p>
            <ul className="list-disc pl-8 mt-4">
              <li>Context API: Global state management</li>
              <li>Custom Hooks: Creating reusable logic</li>
              <li>React Performance Optimization: Memoization, Lazy Loading</li>
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

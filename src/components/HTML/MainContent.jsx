/* eslint-disable react/prop-types */
const MainContent = ({ selectedConcept }) => {
  const renderContent = () => {
    switch (selectedConcept) {
      case 'Basic':
        return (
          <div>
            <h1 className="text-3xl font-bold mb-4">Basic HTML Concepts</h1>
            <p className="text-lg">
              Basic HTML concepts include elements, attributes, tags, and structure of an HTML document.
            </p>
            <ul className="list-disc pl-8 mt-4">
              <li>HTML Elements: &lt;div&gt;, &lt;p&gt;, &lt;h1&gt;-&lt;h6&gt;, &lt;a&gt;, etc.</li>
              <li>Attributes: id, class, href, src, alt, etc.</li>
              <li>Document structure: &lt;html&gt;, &lt;head&gt;, &lt;body&gt;</li>
            </ul>
          </div>
        );
      case 'Intermediate':
        return (
          <div>
            <h1 className="text-3xl font-bold mb-4">Intermediate HTML Concepts</h1>
            <p className="text-lg">
              Intermediate HTML concepts focus on forms, media elements, and layout techniques.
            </p>
            <ul className="list-disc pl-8 mt-4">
              <li>Forms: &lt;form&gt;, &lt;input&gt;, &lt;textarea&gt;, &lt;button&gt;</li>
              <li>Media: &lt;img&gt;, &lt;audio&gt;, &lt;video&gt;</li>
              <li>Semantic HTML: &lt;header&gt;, &lt;footer&gt;, &lt;nav&gt;, &lt;article&gt;, &lt;section&gt;</li>
            </ul>
          </div>
        );
      case 'Advanced':
        return (
          <div>
            <h1 className="text-3xl font-bold mb-4">Advanced HTML Concepts</h1>
            <p className="text-lg">
              Advanced HTML includes accessibility, SEO optimization, and integration with JavaScript frameworks.
            </p>
            <ul className="list-disc pl-8 mt-4">
              <li>Accessibility: aria-label, role, alt attributes, etc.</li>
              <li>SEO: meta tags, structured data, performance optimizations</li>
              <li>Integrating HTML with modern frameworks like React, Vue, etc.</li>
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

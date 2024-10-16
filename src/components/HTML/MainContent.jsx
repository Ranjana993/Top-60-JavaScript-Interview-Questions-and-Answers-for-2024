/* eslint-disable react/prop-types */
const MainContent = ({ selectedConcept }) => {
  const renderContent = () => {
    switch (selectedConcept) {
      case 'Basic':
        return (
          <div>
            <h1 className="text-3xl font-bold mb-4">Basic HTML Concepts</h1>
            <p className="text-lg">
              Once upon a time, in a world where the internet was just beginning to flourish, a wise inventor named Tim Berners-Lee wanted to create a way for people to easily share information across computers. He imagined a system that could display text, images, and links that anyone could access, regardless of their device. So, he created HTML (HyperText Markup Language), a language that would become the foundation of the web.
              <br />
              HTML worked like magic for the early web explorers. Instead of complex coding, it used simple tags like <code>&lt;p&gt;</code> for paragraphs, <code>&lt;h1&gt;</code> for headings, and <code>&lt;a&gt;</code> for links, making it easy for people to structure their content. With HTML, users could build pages that were readable by both humans and machines. Images could be added with <code>&lt;img /&gt;</code>, and lists could be created with <code>&lt;ul&gt;</code> and <code>&lt;li&gt;</code>.
              <br />
              HTML wasn’t just about structure—it gave power to connect pages with hyperlinks (<code>&lt;a&gt;</code>), allowing users to jump from one document to another effortlessly. Over time, it evolved, gaining new capabilities to include videos, audio, forms, and interactive elements.
              <br />
              Just like that, HTML became the backbone of the digital age. It provided the tools for people to craft websites, share stories, and connect globally. Even today, though the web has grown more complex, HTML remains a timeless language that brings order and structure to the vast digital landscape.
            </p>

            <h2 className="text-2xl font-bold mt-12">Setting up a Basic HTML File</h2>
            <p className="text-lg">
              Here&apos;s an example of a basic HTML file structure:
            </p>

            <pre className="bg-gray-800 text-white p-4 rounded">
              <code>
                {`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Webpage</title>
  </head>
  <body>
    <h1>Welcome to My Website</h1>
    <p>This is a paragraph of text.</p>
  </body>
</html>`}
              </code>
            </pre>

            <p className="text-lg mt-4">
              - <code>&lt;!DOCTYPE html&gt;</code> defines the document type and version of HTML.<br />
              - <code>&lt;html&gt;</code> is the root element of an HTML page.<br />
              - <code>&lt;head&gt;</code> contains metadata and links to stylesheets or scripts.<br />
              - <code>&lt;body&gt;</code> contains the visible content of the webpage.
            </p>

            <h2 className="text-2xl font-bold mt-12">Basic HTML Tags</h2>
            <p className="text-lg">
              Text elements:
            </p>
            <ul className="list-disc pl-8">
              <li><code>&lt;p&gt;</code> for paragraphs.</li>
              <li><code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> for headings, where <code>&lt;h1&gt;</code> is the largest and <code>&lt;h6&gt;</code> the smallest.</li>
              <li><code>&lt;strong&gt;</code> for bold text and <code>&lt;em&gt;</code> for italic text.</li>
            </ul>
            <p className="text-lg mt-4">
              Example:
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              <code>
                {`<h1>This is a Heading</h1>
<p>This is a paragraph.</p>`}
              </code>
            </pre>

            <h2 className="text-2xl font-bold mt-12">Lists:</h2>
            <p className="text-lg">
              Use <code>&lt;ul&gt;</code> for unordered lists (bullets), and <code>&lt;ol&gt;</code> for ordered lists (numbers). Inside these, each item is wrapped with <code>&lt;li&gt;</code>.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              <code>
                {`<ul>
  <li>First item</li>
  <li>Second item</li>
</ul>`}
              </code>
            </pre>

            <h2 className="text-2xl font-bold mt-12">Links:</h2>
            <p className="text-lg">
              Use the <code>&lt;a&gt;</code> tag to create hyperlinks.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              <code>
                {`<a href="https://www.example.com">Visit Example</a>`}
              </code>
            </pre>

            <h2 className="text-2xl font-bold mt-12">Images:</h2>
            <p className="text-lg">
              The <code>&lt;img&gt;</code> tag adds images to a webpage.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded">
              <code>
                {`<img src="image.jpg" alt="A description of the image" />`}
              </code>
            </pre>

            <h2 className="text-2xl font-bold mt-12">Document Structure</h2>
            <p className="text-lg">
              The document is enclosed within the <code>&lt;html&gt;</code> tag. The <code>&lt;head&gt;</code> tag holds metadata (such as the title and stylesheets), and the <code>&lt;body&gt;</code> tag contains the visible content of the page.
            </p>
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
              <li>Forms: <code>&lt;form&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>, <code>&lt;button&gt;</code></li>
              <li>Media: <code>&lt;img&gt;</code>, <code>&lt;audio&gt;</code>, <code>&lt;video&gt;</code></li>
              <li>Semantic HTML: <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code></li>
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
              <li>Accessibility: <code>aria-label</code>, <code>role</code>, <code>alt</code> attributes, etc.</li>
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

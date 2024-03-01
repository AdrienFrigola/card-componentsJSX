// Import the Card component from the file 'card.jsx'
import Card from './card.jsx';

// Define a functional component called App
function App() {
  return (
    // Return JSX code representing the App component
    <>
      {/* Render four instances of the Card component */}
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </>
  );
}

// Export the App component as the default export
export default App;

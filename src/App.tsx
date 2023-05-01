import renderPage from "./dynamicRendering/render";
import mockResponse from "./dynamicRendering/mock";

function App() {
  return (
    <>
      <div>
          {renderPage(mockResponse)}
      </div>
    </>
  );
}

export default App;

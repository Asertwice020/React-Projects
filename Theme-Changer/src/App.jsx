import { useState } from "react";
import './app.css' // 😵😵YOU CAN USE HERE, TAILWIND CSS CLASSES ALSO BUT NEXT TIME YOU EVER VISTI THIS SO ADD THOSE CLASSES AND REMOVE THE "app.css" FILE COMPLETELY.✅✅

function App() {
  const colorNames = [
    "red",
    "green",
    "blue",
    "pink",
    "yellow",
    "crimson",
    "purple",
    "cyan",
    "lime",
    "lightseagreen",
    "hotpink",
  ];

  const [theme, setTheme] = useState("olive");

  return (
    <>
      <main id="body" style={{ backgroundColor: theme }}>
        <div id="container">

          {colorNames.map((color) => (
            <button
              key={color} // Don't forget to add a unique key when rendering an array of elements
              className="btn"
              onClick={() => {
                setTheme(color);
              }}
              style={{ backgroundColor: color }}
            >
              {color}
            </button>
          ))}

        </div>
      </main>
    </>
  );
}

export default App;

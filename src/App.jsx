import Background from "./Background";
import V1Home from "./Components/v1/Home";
import V2Home from "./Components/v2/Home";
import { useState } from "react";

function App() {
  const [isV1, setIsV1] = useState(false);

  return (
    <>
      {isV1 ? (
        <V1Home />
      ) : (
        <div className="   ">
          <Background />
          <div className="mx-auto min-h-screen max-w-screen-2xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
            <V2Home />
          </div>
        </div>
      )}
    </>
  );
}

export default App;

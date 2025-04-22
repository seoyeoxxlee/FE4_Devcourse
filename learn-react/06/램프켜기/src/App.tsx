import { useState } from "react";

import on from "./assets/images/b_on.png";
import off from "./assets/images/b_off.png";

export default function App() {
  const [isOn, setIsOn] = useState(false);

  const toggleBulb = () => {
    setIsOn((bulb) => !bulb);
  };

  const bulbSrc = isOn ? on : off;

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <img
        src={bulbSrc}
        alt="bulb"
        className="cursor-pointer"
        onClick={toggleBulb}
      />
    </div>
  );
}


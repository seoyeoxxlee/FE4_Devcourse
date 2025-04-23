import { useReducer } from "react";

const themes = [
  { name: "Light", bg: "bg-gray-100", text: "text-gray-800" },
  { name: "Dark", bg: "bg-gray-800", text: "text-white" },
  { name: "Blue", bg: "bg-blue-500", text: "text-white" },
  { name: "Green", bg: "bg-green-500", text: "text-white" },
];

type MessageAction = {
  type: "POST_MESSAGE";
  payload: string;
};

function messageReducer(state: string, action: MessageAction) {
  switch (action.type) {
    case "POST_MESSAGE":
      return action.payload;
    default:
      return state;
  }
}

type ThemeAction = {
  type: "CHANGE_THEME";
  payload: number;
}

function themeReducer(state: number, action: ThemeAction): number {
  switch (action.type) {
    case "CHANGE_THEME":
      return action.payload;
    default:
      return state;
  }
}

export default function ThemeSwitcher() {
  const [message, messageDispatch] = useReducer(messageReducer, "Hello, World!");
  const [themeIndex, themeDispatch] = useReducer(themeReducer, 0);
  // 선택된 테마 객체 themeIndex-> themeReducer로 변경됨
  const currentTheme = themes[themeIndex];

  const themeSwitchHandler = () => {
    const nextIndex = (themeIndex + 1) % themes.length;
    themeDispatch({type: "CHANGE_THEME", payload: nextIndex});
  };

  return (
    <div
      className={`${currentTheme.bg} ${currentTheme.text} p-4 rounded-lg transition-colors duration-200`}
    >
      <div className="space-y-4">
        <input
          type="text"
          className="w-full px-3 py-2 rounded border text-gray-800 bg-white"
          placeholder="Enter your message"
          onChange={(e) => messageDispatch({type: "POST_MESSAGE", payload: e.target.value})}
        />

        <div className="text-center text-xl font-semibold">{message}</div>

        <button 
          className="w-full px-4 py-2 bg-white text-gray-800 rounded hover:bg-gray-100 transition-colors"
          onClick={themeSwitchHandler}  
        >
          Switch Theme
        </button>
      </div>
    </div>
  );
}

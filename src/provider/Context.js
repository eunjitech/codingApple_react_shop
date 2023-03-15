import React, { createContext, useState } from "react";

const CountContext = createContext({
  haha: "x",
  setHaha: () => {},
});

const ContextProvider = ({ children }) => {
  const [haha, setHaha] = useState("haha");

  return (
    <CountContext.Provider value={{ haha, setHaha }}>
      {children}
    </CountContext.Provider>
  );
};

export { CountContext, ContextProvider };

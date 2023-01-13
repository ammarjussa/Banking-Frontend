import React, { useContext, createContext, useState } from "react";

export const DetailContext = createContext(null);

export const DetailProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({});

  return (
    <DetailContext.Provider
      value={{
        userDetails,
        setUserDetails,
      }}
    >
      {children}
    </DetailContext.Provider>
  );
};

export function useDetails() {
  const context = useContext(DetailContext);
  if (context === undefined) {
    throw new Error("Error with the context");
  }
  return context;
}

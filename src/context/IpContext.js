import { createContext, useContext, useState } from "react";

const IpContextA = createContext();

export default function IpContextAProvider({ children }) {
  const [ipSearchResult, setIpSearchResult] = useState({});

  return (
    <IpContextA.Provider value={{ ipSearchResult, setIpSearchResult }}>
      {children}
    </IpContextA.Provider>
  );
}

export function useIp() {
  const context = useContext(IpContextA);
  const { ipSearchResult, setIpSearchResult } = context;
  return { ipSearchResult, setIpSearchResult };
}

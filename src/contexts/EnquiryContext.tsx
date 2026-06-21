import { createContext, useContext, useState, ReactNode } from "react";

interface EnquiryContextType {
  isOpen: boolean;
  openEnquiry: () => void;
  closeEnquiry: () => void;
}

const EnquiryContext = createContext<EnquiryContextType | undefined>(undefined);

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <EnquiryContext.Provider
      value={{
        isOpen,
        openEnquiry: () => setIsOpen(true),
        closeEnquiry: () => setIsOpen(false),
      }}
    >
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) throw new Error("useEnquiry must be used within EnquiryProvider");
  return ctx;
}

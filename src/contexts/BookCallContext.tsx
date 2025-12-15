import { createContext, useContext, useState, ReactNode } from "react";
import { BookCallModal } from "@/components/BookCallModal";

interface BookCallContextType {
  openBookCall: () => void;
  closeBookCall: () => void;
  isOpen: boolean;
}

const BookCallContext = createContext<BookCallContextType | undefined>(undefined);

export function BookCallProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openBookCall = () => setIsOpen(true);
  const closeBookCall = () => setIsOpen(false);

  return (
    <BookCallContext.Provider value={{ openBookCall, closeBookCall, isOpen }}>
      {children}
      <BookCallModal isOpen={isOpen} onClose={closeBookCall} />
    </BookCallContext.Provider>
  );
}

export function useBookCall() {
  const context = useContext(BookCallContext);
  if (context === undefined) {
    throw new Error("useBookCall must be used within a BookCallProvider");
  }
  return context;
}

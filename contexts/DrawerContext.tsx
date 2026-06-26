'use client';
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

type DrawerContextType = {
  open: boolean;
  toggle: () => void;
};

const DrawerContext = createContext<DrawerContextType | null>(null);

export function DrawerProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <DrawerContext.Provider
      value={{
        open: isOpen,
        toggle: () => setIsOpen((prev) => !prev),
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
}

export function useDrawer() {
  const ctx = useContext(DrawerContext);
  if (!ctx) throw new Error('useDrawer must be used inside DrawerProvider');
  return ctx;
}

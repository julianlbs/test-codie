import React from "react";

export function useClientSide() {
  const runOnClient = (func: () => void) => {
    if (typeof window !== 'undefined') {
      if (window.document.readyState === 'loading') {
        window.addEventListener('load', func);
      } else {
        func();
      }
    }
  };

  React.useEffect(() => {
    return () => {
      window.removeEventListener('load', () => {});
    };
  }, []);

  return { runOnClient };
}
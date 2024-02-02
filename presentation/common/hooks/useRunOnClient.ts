import React from "react";

export function useClientSide() {
  const [funcCache, setFuncCache] = React.useState<() => void>(() => {});

  const runOnClient = (func: () => void) => {
    if (typeof window !== 'undefined') {
      if (window.document.readyState === 'loading') {
        setFuncCache(func);
        window.addEventListener('load', func);
      } else {
        func();
      }
    }
  };

  React.useEffect(() => {
    return () => {
      window.removeEventListener('load', funcCache);
    };
  }, [funcCache]);

  return { runOnClient };
}
import { useEffect } from 'react';

/**
 * Custom hook to listen for the Escape key and trigger a callback (e.g. closing a modal).
 */
export function useEscapeKey(callback: () => void, isActive: boolean = true): void {
  useEffect(() => {
    if (!isActive) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        callback();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [callback, isActive]);
}


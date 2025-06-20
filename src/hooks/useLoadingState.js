import { useState, useEffect } from 'react';

function useLoadingState(duration = 2500) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return isLoading;
}

export default useLoadingState;
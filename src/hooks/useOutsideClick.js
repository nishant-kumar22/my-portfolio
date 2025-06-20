import { useEffect } from 'react';

function useOutsideClick(ref, callback, isActive = true) {
  useEffect(() => {
    if (!isActive) return;

    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref, callback, isActive]);
}

export default useOutsideClick;
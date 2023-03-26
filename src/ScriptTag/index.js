import { useEffect } from 'react';

const useScriptTag = url => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;
    script.crossOrigin="anonymous";
    
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

export default useScriptTag;
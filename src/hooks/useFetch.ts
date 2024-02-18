import { useEffect, useState } from "react";

const useFetch = <T>(
  apiFunction: () => Promise<T>,
  options?: { onSuccess: (value: T) => void },
) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    apiFunction().then((value) => {
      setData(value);
      options?.onSuccess(value);
      setLoading(false);
    });
  }, []);

  return {
    isLoading,
    data,
  };
};

export default useFetch;

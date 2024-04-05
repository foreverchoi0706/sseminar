import { useEffect, useState } from "react";

const useFetch = <T, U = unknown>(
  fetchFunction: () => Promise<T>,
  options?: {
    disabled?: boolean;
    onSuccess?: (value: T) => void;
    onError?: (reason: U) => void;
  }
) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setLoading] = useState<boolean>(
    options?.disabled ? false : true
  );

  useEffect(() => {
    if (options?.disabled) return;
    fetchFunction()
      .then((value) => {
        setData(value);
        if (options?.onSuccess) options.onSuccess(value);
      })
      .catch((reason: U) => {
        if (options?.onError) options.onError(reason);
      })
      .finally(() => setLoading(false));
  }, [options?.disabled]);

  return {
    isLoading,
    data,
  };
};

export default useFetch;

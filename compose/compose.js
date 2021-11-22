const compose = (...fn) => {
  return (value) => {
    return fn.reduceRight((prev, func) => {
      return func(prev);
    }, value);
  };
};
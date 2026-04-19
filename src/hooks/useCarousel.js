import { useState } from "react";

export const useCarousel = (length) => {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < length - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return { index, next, prev };
};
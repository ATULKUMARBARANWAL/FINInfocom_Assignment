import ProductCard from "./ProductCard";
import { useCarousel } from "../../hooks/useCarousel";

export default function Carousel({ items }) {
  const { index, next, prev } = useCarousel(items.length);

  return (
    <div className="carousel-wrapper">
      <button className="arrow left" onClick={prev}>‹</button>

      <div className="carousel">
        <div
          className="track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item, i) => (
            <div className="slide" key={i}>
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      </div>

      <button className="arrow right" onClick={next}>›</button>
    </div>
  );
}
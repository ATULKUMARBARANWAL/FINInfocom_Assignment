import { useContent } from "../../hooks/useContent";
import { fetchFeaturesContent } from "../../services/api";
import Carousel from "../ui/Carousel";
import Skeleton from "../ui/Skeleton";

export default function FeaturesSection() {
  const { data, loading } = useContent(fetchFeaturesContent);

  if (loading) return <Skeleton type="features" />;

  return (
    <section className="features">
  <div className="container">
    <h2>
      {data.title} <span className="accent">{data.titleAccent}</span>
    </h2>
    <p>{data.subtitle}</p>

    <Carousel items={data.products} />
  </div>
</section>
  );
}
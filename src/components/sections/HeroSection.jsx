import { useContent } from "../../hooks/useContent";
import { fetchHeroContent } from "../../services/api";
import Skeleton from "../ui/Skeleton";

export default function HeroSection() {
  const { data, loading, error, retry } = useContent(fetchHeroContent);

  if (loading) return <Skeleton type="hero" />;
  if (error) return <button onClick={retry}>Retry</button>;

  return (
    <section className="hero">
      {/* floating shapes */}
      <div className="shape shape-blue"></div>
      <div className="shape shape-orange"></div>

      <div className="container hero-inner">
        <h1>
          {data.headlinePrefix}{" "}
          <span className="gradient">{data.headlineGradient}</span>
        </h1>

        <p className="hero-sub">{data.subheadline}</p>

        <button className="btn-gradient">{data.cta}</button>
      </div>
    </section>
  );
}
export default function ProductCard({ item }) {
  return (
    <div className="card">
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
    </div>
  );
}
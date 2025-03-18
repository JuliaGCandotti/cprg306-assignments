export default function Item({ name, quantity, category, onSelect }) {
  return (
    <section onClick={() => onSelect(name)} className="cursor-pointer">
      <h2>{name}</h2>
      <p>{quantity}</p>
      <p>{category}</p>
    </section>
  );
}

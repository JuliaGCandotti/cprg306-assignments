export default function Item({name, quantity, category}) {
    return (
        <section>
            <h2>{name}</h2>
            <p>{quantity}</p>
            <p>{category}</p>
        </section>
    )
}
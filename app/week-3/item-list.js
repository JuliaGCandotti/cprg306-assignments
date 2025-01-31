import Item from "./item";

export default function ItemList() {
    
const item1 = {
  name: "milk, 4 L 🥛",
  quantity: 1,
  category: "dairy",
};
 
const item2 = {
  name: "bread 🍞",
  quantity: 2,
  category: "bakery",
};
 
const item3 = {
  name: "eggs, dozen 🥚",
  quantity: 2,
  category: "dairy",
};
 
const item4 = {
  name: "bananas 🍌",
  quantity: 6,
  category: "produce",
};
 
const item5 = {
  name: "broccoli 🥦",
  quantity: 3,
  category: "produce",
};
 
const item6 = {
  name: "chicken breasts, 1 kg 🍗",
  quantity: 1,
  category: "meat",
};
 
const item7 = {
  name: "pasta sauce 🍝",
  quantity: 3,
  category: "canned goods",
};
 
const item8 = {
  name: "spaghetti, 454 g 🍝",
  quantity: 2,
  category: "dry goods",
};
 
const item9 = {
  name: "toilet paper, 12 pack 🧻",
  quantity: 1,
  category: "household",
};
 
const item10 = {
  name: "paper towels, 6 pack",
  quantity: 1,
  category: "household",
};
 
const item11 = {
  name: "dish soap 🍽️",
  quantity: 1,
  category: "household",
};
 
const item12 = {
  name: "hand soap 🧼",
  quantity: 4,
  category: "household",
};

return (
    <section className="m-2 p-2">
        <ul>
        <li className="p-2">
            <p className="font-bold text-2xl text-blue-700">{item1.name}</p> 
            <p>Quantity available: {item1.quantity} in {item1.category}</p>
        </li>

        <li className="p-2">
            <h2 className="font-bold text-2xl text-blue-700">{item2.name}</h2> 
            <p>Quantity available: {item2.quantity} in {item2.category}</p>
        </li>

        <li className="p-2">
            <h2 className="font-bold text-2xl text-blue-700">{item3.name}</h2> 
            <p>Quantity available: {item3.quantity} in {item3.category}</p>
        </li>

        <li className="p-2">
            <h2 className="font-bold text-2xl text-blue-700">{item4.name}</h2> 
            <p>Quantity available: {item4.quantity} in {item4.category}</p>
        </li>

        <li className="p-2">
            <h2 className="font-bold text-2xl text-blue-700">{item5.name}</h2> 
            <p>Quantity available: {item5.quantity} in {item5.category}</p>
        </li>

        <li className="p-2">
            <h2 className="font-bold text-2xl text-blue-700">{item6.name}</h2> 
            <p>Quantity available: {item6.quantity} in {item6.category}</p>
        </li>

        <li className="p-2">
            <h2 className="font-bold text-2xl text-blue-700">{item7.name}</h2> 
            <p>Quantity available: {item7.quantity} in {item7.category}</p>
        </li>

        <li className="p-2">
            <h2 className="font-bold text-2xl text-blue-700">{item8.name}</h2> 
            <p>Quantity available: {item8.quantity} in {item8.category}</p>
        </li>

        <li className="p-2">
            <h2 className="font-bold text-2xl text-blue-700">{item9.name}</h2> 
            <p>Quantity available: {item9.quantity} in {item9.category}</p>
        </li>

        <li className="p-2">
            <h2 className="font-bold text-2xl text-blue-700">{item10.name}</h2> 
            <p>Quantity available: {item10.quantity} in {item10.category}</p>
        </li>

        <li className="p-2">
            <h2 className="font-bold text-2xl text-blue-700">{item11.name}</h2> 
            <p>Quantity available: {item11.quantity} in {item11.category}</p>
        </li>

        <li className="p-2">
            <h2 className="font-bold text-2xl text-blue-700">{item12.name}</h2> 
            <p>Quantity available: {item12.quantity} in {item12.category}</p>
        </li>
        </ul>
    </section>

);
}
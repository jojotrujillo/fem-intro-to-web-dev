import { createRoot } from "react-dom/client";
import Pizza from "./Pizza.jsx";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's Pizza - Order Now</h1>
      <Pizza
        name={"The Pepperoni Pizza"}
        description={"Mozzarella Cheese, Pepperoni"}
        image={"public/pizzas/pepperoni.webp"}
      />
      <Pizza
        name={"The Hawaiian Pizza"}
        description={"Sliced Ham, Pineapple, Mozzarella Cheese"}
        image={"public/pizzas/hawaiian.webp"}
      />
      <Pizza
        name={"The Big Meat Pizza"}
        description={"Bacon, Pepperoni, Italian Sausage, Chorizo Sausage"}
        image={"public/pizzas/big_meat.webp"}
      />
      <Pizza
        name={"The Americano Pizza"}
        description={"French fries and hot dogs"}
      />
      <Pizza
        name={"The Canadian Bacon Pizza"}
        description={"Canadian Bacon, yo"}
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

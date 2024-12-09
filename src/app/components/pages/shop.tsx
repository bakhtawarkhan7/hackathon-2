import React from "react";

const products = [
  { id: 1, name: "Fresh Lime", price: "$38.00 $45.00", image: "/FreshLime.jpg" },
  { id: 2, name: "Chocolate Muffin", price: "$28.00", image: "/ChocolateMuffin.jpg" },
  { id: 3, name: "Burger", price: "$21.00", image: "/Burger.jpg" },
  { id: 4, name: "Country Burger", price: "$45.00", image: "/countryburger.jpg" },
  { id: 5, name: "Drink", price: "$23.00", image: "/drink.jpg" },
  { id: 6, name: "Pizza", price: "$43.00", image: "/pizza.jpg" },
  { id: 7, name: "Cheese Butter", price: "$10.00", image: "/cheesebutter.jpg" },
  { id: 8, name: "Sandwiches", price: "$25.00", image: "/sandwiches.jpg" },
  { id: 9, name: "Chicken chup", price: "$12.00", image: "/chickenchup.jpg" },
  { id: 10, name: "Country Burger", price: "$45.00", image: "/countryburger.jpg" },
  { id: 11, name: "Drink", price: "$23.00", image: "/drink.jpg" },
  { id: 12, name: "Pizza", price: "$43.00", image: "/pizza.jpg" },
  { id: 13, name: "Cheese Butter", price: "$10.00", image: "/cheesebutter.jpg" },
  { id: 14, name: "Sandwiches", price: "$25.00", image: "/sandwiches.jpg" },
  { id: 15, name: "Chicken chup", price: "$12.00", image: "/chickenchup.jpg" },
];

const Shop = () => {
  return (
    <div>
      {/* Background Section */}
      <div
        className="bg-cover bg-center text-white text-center py-12"
        style={{ 
          backgroundImage: `url('/background.jpg')`
          
         }}
        
      >
        <h2 className="text-4xl font-bold">Our Shop</h2>
      </div>

      {/* Main Content */}
      <div className="bg-gray-100 p-6">
        <div className="container mx-auto grid grid-cols-12 gap-4">
          {/* Product Grid */}
          <section className="col-span-9 grid grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-md hover:shadow-lg p-4 rounded"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-t"
                />
                <h3 className="text-lg font-bold mt-2">{product.name}</h3>
                <p className="text-gray-500">{product.price}</p>
              </div>
            ))}
          </section>

          {/* Sidebar */}
          <aside className="col-span-3 bg-white p-4 shadow">
            <h3 className="text-lg font-bold mb-2">Category</h3>
            <ul className="space-y-2">
              <li>
                <input type="checkbox" className="mr-2" /> Sandwiches
              </li>
              <li>
                <input type="checkbox" className="mr-2" /> Burger
              </li>
              <li>
                <input type="checkbox" className="mr-2" /> Chicken Chup
              </li>
              <li>
                <input type="checkbox" className="mr-2" /> Drink
              </li>
              <li>
                <input type="checkbox" className="mr-2" /> Pizza
              </li>
              <li>
                <input type="checkbox" className="mr-2" /> Thai
              </li>
              <li>
                <input type="checkbox" className="mr-2" /> Non-Veg
              </li>
              <li>
                <input type="checkbox" className="mr-2" /> Uncategorized
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Shop;





import React from "react";

const recipes = [
  {
    title: "Italian-style tomato salad",
    time: "14 minutes",
    img: "https://imgur.com/5FZVEkR.png",
  },
  {
    title: "Spaghetti with vegetables and shrimp",
    time: "15 minutes",
    img: "https://imgur.com/hGJ9mHZ.png",
  },
  {
    title: "Lotus delight salad",
    time: "20 minutes",
    img: "https://imgur.com/8TuGQbJ.png",
  },
  {
    title: "Snack cakes",
    time: "21 minutes",
    img: "https://imgur.com/oUynhAo.png",
  },
];

const videoRecipes = [
  {
    title: "Salad with cabbage and shrimp",
    time: "32 minutes",
    img: "https://imgur.com/ktR80ZM.png",
  },
  {
    title: "Salad of cove beans, shrimp and potatoes",
    time: "20 minutes",
    img: "https://imgur.com/mt0LMYx.png",
  },
  {
    title: "Sunny-side up fried egg",
    time: "15 minutes",
    img: "https://imgur.com/mcwa3kS.png",
  },
  {
    title: "Lotus delight salad",
    time: "20 minutes",
    img: "https://imgur.com/NmT0F2z.png",
  },
];

const editorsPick = [
  {
    title: "Stuffed sticky rice ball",
    time: "34 minutes",
    author: "Jennifer King",
    desc: "Stuffed sticky rice balls: A delightful Asian treat with chewy, glutinous rice and a flavorful surprise filling...",
    img: "https://imgur.com/tNVaQav.png",
  },
  {
    title: "Strawberry smoothie",
    time: "40 minutes",
    author: "Matthew Martinez",
    desc: "Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend offers...",
    img: "https://imgur.com/XyVc7Zm.png",
  },
  {
    title: "Latte Art",
    time: "19 minutes",
    author: "Sarah Hill",
    desc: "Latte art is the skillful craft of creating captivating designs on the surface of a latte...",
    img: "https://imgur.com/TSYkPYT.png",
  },
  {
    title: "Butter fried noodles",
    time: "16 minutes",
    author: "Julia Lopez",
    desc: "Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal...",
    img: "https://imgur.com/ZoNGlP0.png",
  },
];

const App = () => {
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 shadow-md">
        <div className="flex items-center gap-2">
          <img src="https://imgur.com/aUvkt1L.png" alt="logo" className="w-6 h-6" />
          <span className="text-pink-500 font-bold text-lg">Cheffify</span>
          <input
            type="text"
            placeholder="What would you like to cook?"
            className="ml-4 px-3 py-1 bg-gray-100 rounded-full text-sm w-72"
          />
        </div>
        <nav className="flex items-center gap-6 text-sm text-gray-700">
          <a href="#">What to cook</a>
          <a href="#">Recipes</a>
          <a href="#">Ingredients</a>
          <a href="#">Occasions</a>
          <a href="#">About Us</a>
          <button className="px-3 py-1 rounded-full border text-pink-500 border-pink-300">Login</button>
          <button className="px-3 py-1 rounded-full bg-pink-500 text-white">Subscribe</button>
        </nav>
      </header>

      {/* Recipe of the Day */}
      <section className="relative my-10">
        <img src="https://imgur.com/jnRVE5Y.png" alt="Recipe of the day" className="w-full h-auto object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md text-center">
            <div className="bg-yellow-400 text-white font-semibold px-4 py-1 rounded-full text-xs inline-block mb-2">
              Recipe of the day
            </div>
            <h3 className="text-lg font-bold text-pink-600">Salad Caprese</h3>
            <p className="text-sm text-gray-600 mt-2">
              Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil, and balsamic vinegar create a refreshing dish for lunch or appetizer.
            </p>
            <div className="mt-4 text-sm text-gray-500">Salad Caprese</div>
            <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-full text-sm">View now →</button>
          </div>
        </div>
      </section>

      {/* Summer Recipes */}
      <section className="text-center my-10">
        <h2 className="text-2xl font-bold text-pink-600">This Summer Recipes</h2>
        <p className="text-gray-500 mb-6">We have all your Independence Day sweets covered.</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-6">
          {recipes.map((r, idx) => (
            <div key={idx} className="border rounded-xl overflow-hidden shadow-sm">
              <img src={r.img} alt="dish" className="w-full h-40 object-cover" />
              <div className="p-3">
                <h3 className="font-semibold text-sm">{r.title}</h3>
                <span className="text-pink-500 text-xs">{r.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recipes With Videos */}
      {/* <section className="text-center my-10">
        <h2 className="text-2xl font-bold text-pink-600">Recipes With Videos</h2>
        <p className="text-gray-500 mb-6">Cooking Up Culinary Creations with Step-by-Step Videos</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-6">
          {videoRecipes.map((r, idx) => (
            <div key={idx} className="border rounded-xl overflow-hidden shadow-sm">
              <img src={r.img} alt="dish" className="w-full h-40 object-cover" />
              <div className="p-3">
                <h3 className="font-semibold text-sm">{r.title}</h3>
                <span className="text-pink-500 text-xs">{r.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Editor's Pick */}
      {/* <section className="text-center my-10">
        <h2 className="text-2xl font-bold text-pink-600">Editor's pick</h2>
        <p className="text-gray-500 mb-6">Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
          {editorsPick.map((item, index) => (
            <div key={index} className="flex border rounded-xl p-4 gap-4 items-start">
              <img src={item.img} alt="recipe" className="w-32 h-32 rounded-xl object-cover" />
              <div className="text-left">
                <h3 className="font-bold text-sm">{item.title}</h3>
                <p className="text-xs text-gray-500 mb-1">{item.time}</p>
                <p className="text-xs font-semibold text-gray-700 mb-1">{item.author}</p>
                <p className="text-xs text-gray-500 line-clamp-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h4 className="font-bold mb-2">About Us</h4>
            <p className="text-sm mb-2">Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
            <div className="flex items-center gap-2">
              <input type="email" placeholder="Enter your email" className="px-2 py-1 rounded text-black w-2/3" />
              <button className="bg-pink-500 text-white px-3 py-1 rounded">Send</button>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-2">Learn More</h4>
            <ul className="text-sm space-y-1">
              <li>Our Cooks</li>
              <li>See Our Features</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Shop</h4>
            <ul className="text-sm space-y-1">
              <li>Gift Subscription</li>
              <li>Send Us Feedback</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Recipes</h4>
            <ul className="text-sm space-y-1">
              <li>What to Cook This Week</li>
              <li>Pasta</li>
              <li>Dinner</li>
              <li>Healthy</li>
              <li>Vegetarian</li>
              <li>Vegan</li>
              <li>Christmas</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t pt-4 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <img src="https://imgur.com/aUvkt1L.png" alt="logo" className="w-5 h-5" />
            <span className="font-bold">Cheffify</span>
            <span className="text-gray-400">2023 Cheffify Company</span>
          </div>
          <div className="text-gray-400">Terms of Service | Privacy Policy</div>
        </div>
      </footer> */}
    </div>
  );
};

export default App;

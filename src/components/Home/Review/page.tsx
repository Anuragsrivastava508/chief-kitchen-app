
"use client";

const reviews = [
  {
    name: "Raj Verma",
    city: "Delhi",
    seed: "Raj",
    text: "Chef's Kitchen ne mere cooking ko next level pe le aaya! Recipes bahut easy hai.",
    stars: 5,
  },
  {
    name: "Anjali Mehta",
    city: "Mumbai",
    seed: "Anjali",
    text: "Step-by-step instructions se main ab confidently cook karti hoon. Maza aa gaya!",
    stars: 4,
  },
  {
    name: "Kiran Yadav",
    city: "Lucknow",
    seed: "Kiran",
    text: "Bahut hi badiya app hai. Traditional recipes ke liye perfect.",
    stars: 5,
  },
  {
    name: "Neha Chauhan",
    city: "Jaipur",
    seed: "Neha",
    text: "Ingredient list, tips, sab kuch ek jagah! Cooking ab fun ho gaya.",
    stars: 5,
  },
  {
    name: "Aman Thakur",
    city: "Indore",
    seed: "Aman",
    text: "Friends ke saath recipes share karna ab easy ho gaya!",
    stars: 4,
  },
  {
    name: "Priya Rathi",
    city: "Hyderabad",
    seed: "Priya",
    text: "Video tutorials + quick recipes = ❤️. Must have app for every kitchen!",
    stars: 5,
  },
];

const Review = () => {
  return (
    <section className="mt-20 px-4 sm:px-6">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-14 text-center text-black tracking-wide">
        Heard from the Happy Ones
      </h2>

      <div className="relative max-w-7xl mx-auto">
        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-4">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-black p-6 rounded-xl text-white hover:scale-105 transition duration-300 shadow-lg border border-gray-700"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${r.seed}`}
                  className="w-12 h-12 rounded-full"
                  alt={r.name}
                />
                <div>
                  <h4 className="font-semibold">{r.name}</h4>
                  <p className="text-sm text-gray-300">{r.city}</p>
                </div>
              </div>

              <p className="text-gray-200 mb-2 italic">"{r.text}"</p>

              <div className="text-yellow-400">
                {"⭐".repeat(r.stars)}
                {"☆".repeat(5 - r.stars)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;

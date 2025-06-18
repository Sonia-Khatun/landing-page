import { useRef } from "react";

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    price: "$1,199",
    img: "https://images.unsplash.com/photo-1569863629718-20f8b6c62460?q=80&w=465&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "iPad 10th Generation (Wi-Fi, 64GB)",
    price: "$449",
    img: "https://images.unsplash.com/photo-1464380573004-8ca85a08751a?q=80&w=870&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "iPhone 14",
    price: "$799",
    img: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?q=80&w=387&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "iPhone 13 Mini",
    price: "$599",
    img: "https://images.unsplash.com/photo-1557680784-6db47c6f56ab?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  
];

const BestSellers = () => {
  const scrollRef = useRef();

  const slide = (dir) => {
    scrollRef.current.scrollBy({
      left: dir === "right" ? 320 : -320,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#FFFDEF] py-10 w-full">
      <div className="flex justify-between items-center px-6 mb-6">
        <h2 className="text-xl md:text-2xl font-bold">Best Selling Products</h2>
        <div className="flex gap-2">
          <button
            onClick={() => slide("left")}
            className="w-9 h-9 bg-gray-500 text-white rounded-full hover:bg-gray-600 active:scale-95 transition"
          >
            ◀
          </button>
          <button
            onClick={() => slide("right")}
            className="w-9 h-9 bg-gray-500 text-white rounded-full hover:bg-gray-600 active:scale-95 transition"
          >
            ▶
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-6"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="snap-start min-w-[305px] max-w-[305px] h-[400px] bg-white rounded-xl shadow-md relative flex-shrink-0"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-64 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="font-semibold text-base">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.price}</p>
              <button
                onClick={() => alert(`${product.name} added to cart!`)}
                className="w-full mt-3 bg-gray-600 text-white text-sm py-2 rounded-md shadow hover:bg-gray-500 active:scale-95 transition"
              >
                🛒 Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;

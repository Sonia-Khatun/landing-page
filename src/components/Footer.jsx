const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
       
        <div>
          <h2 className="text-xl font-bold mb-4">Our Store</h2>
          <p className="text-sm text-gray-400">
            Discover premium tech and accessories, designed to inspire your everyday life.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Products</a></li>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded bg-gray-800 border border-gray-700 text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-900 hover:bg-blue-900 transition px-4 py-2 rounded text-sm font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Our Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

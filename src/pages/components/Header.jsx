import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-pastel-blue text-white text-xl font-bold p-4 rounded-md flex justify-between items-center">
      <Link to="/" className="text-pastel-cream">Cafe 22</Link>
      <nav>
        <Link to="/orderslist" className="px-3 py-1 bg-pastel-green text-black rounded mx-2">
          Đơn hàng
        </Link>
        <Link to="/admin" className="px-3 py-1 bg-pastel-pink text-black rounded">
          Admin
        </Link>
      </nav>
    </header>
  );
}

export default Header;

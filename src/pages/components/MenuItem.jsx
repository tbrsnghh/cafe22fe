function MenuItem({ item, quantity, updateQuantity }) {
  return (
    <div className="p-4 bg-pastel-pink shadow-lg rounded-xl flex items-center">
      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4 rounded-lg" />
      <div className="flex-1">
        <h2 className="font-semibold text-pastel-blue">{item.name}</h2>
        <p className="text-sm text-pastel-green2">{item.price.toLocaleString()}K</p>
      </div>
      <div className="flex items-center space-x-2">
        <button onClick={() => updateQuantity(item.id, -1)} className="px-3 py-1 bg-pastel-cream rounded-lg">-</button>
        <span className="font-semibold">{quantity}</span>
        <button onClick={() => updateQuantity(item.id, 1)} className="px-3 py-1 bg-pastel-cream rounded-lg">+</button>
      </div>
    </div>
  );
}

export default MenuItem;

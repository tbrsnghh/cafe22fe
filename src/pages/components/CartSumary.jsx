function CartSummary({ orders }) {
  const totalItems = Object.values(orders).reduce((a, b) => a + b, 0);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-pastel-blue text-pastel-cream p-4 flex justify-between">
      <span>Tổng số món: {totalItems}</span>
      <button className="px-4 py-2 bg-pastel-pink text-pastel-blue rounded">Đặt hàng</button>
    </div>
  );
}

export default CartSummary;

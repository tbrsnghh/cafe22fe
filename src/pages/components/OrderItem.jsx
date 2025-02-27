function OrderItem({ order, onUpdateStatus }) {
  return (
    <div className="bg-white p-4 rounded-md shadow-md mb-4 border border-gray-300">
      {/* Trạng thái đơn hàng */}
      <div
        className={`px-3 py-1 rounded-md w-fit font-bold text-black ${
          order.status === "done"
            ? "bg-pastel-blue"
            : order.status === "processing"
            ? "bg-pastel-pink"
            : "bg-pastel-green"
        }`}
      >
        {order.status === "done"
          ? "Đã hoàn thành"
          : order.status === "processing"
          ? "Đang xử lý"
          : "Mới"}
      </div>

      {/* Thông tin đơn hàng */}
      <p className="text-gray-600 mt-2">{order.date}</p>
      <p className="font-bold">Số lượng sản phẩm: {order.totalItems}</p>
      {order.items.map((item, index) => (
        <div key={index} className="text-gray-700">
          {item.name} {item.quantity} x {item.price}đ
        </div>
      ))}
      <p className="font-bold mt-2">Tổng cộng: {order.totalPrice}đ</p>

      {/* Hiển thị nút hành động */}
      {order.status === "new" && (
        <button
          className="mt-3 bg-pastel-green text-black px-3 py-1 rounded-md"
          onClick={() => onUpdateStatus(order.id, "processing")}
        >
          Bắt đầu làm
        </button>
      )}

      {order.status === "processing" && (
        <button
          className="mt-3 bg-pastel-green2 text-white px-3 py-1 rounded-md"
          onClick={() => onUpdateStatus(order.id, "done")}
        >
          Hoàn thành
        </button>
      )}
    </div>
  );
}

export default OrderItem;

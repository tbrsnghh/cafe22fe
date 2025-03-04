import { useEffect, useState } from "react";
import OrderItem from "./components/OrderItem";
import Header from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getOrders, updateStatusOrder } from "../redux/orderSlice";

function Orders() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [filter, setFilter] = useState("new");
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);
  useEffect(() => {
    const input = prompt("Xin nhập mã nhân viên để xem đơn hàng");
    if (input === "ghjk") {
      setIsAuthorized(true);
    } else {
      alert("Mã nhân viên không đúng, vui lòng thử lại");
      window.location.href = "/";
    }
  }, []);
  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  const handleUpdateStatus = (id, newStatus) => {
    if (newStatus === "done") {
      const confirmDone = confirm("Bạn có chắc chắn muốn hoàn thành đơn hàng này không?");
      if (!confirmDone) return; // Nếu cancel, không làm gì cả
    }

    dispatch(updateStatusOrder({ id, status: newStatus })).then(() => {
      dispatch(getOrders());
    });
  };

  const filteredOrders = orders.filter((order) => order.status === filter);

  return (
    <div className="p-4 bg-pastel-cream min-h-screen">
      <Header />
      <h1 className="text-xl font-bold mb-4">Đơn hàng</h1>
      <div className="flex border-b">
        {["new", "processing", "done"].map((status) => (
          <button
            key={status}
            className={`flex-1 py-2 text-center border-r ${
              filter === status ? "bg-gray-300" : ""
            }`}
            onClick={() => setFilter(status)}
          >
            {status === "new" ? "Mới" : status === "processing" ? "Đang xử lý" : "Đã xong"}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <OrderItem key={order.id} order={order} onUpdateStatus={handleUpdateStatus} />
          ))
        ) : (
          <p className="text-center text-gray-500 mt-4">Không có đơn hàng nào</p>
        )}
      </div>
    </div>
  );
}

export default Orders;

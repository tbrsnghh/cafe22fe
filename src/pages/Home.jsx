

  import { useState } from "react";
  import MenuItem from "./components/MenuItem";
  import CustomerInfo from "./components/CustomerInfo";
  import CartSummary from "./components/CartSumary";
  import Header from "./components/Header";
  import { useDispatch, useSelector } from "react-redux";
  import { createOrder } from "../redux/orderSlice";
  
  export default function Home() {
  const menu = [
    { id: 1, name: "Cà phê đen", price: 13,quantity: 0,  image: "https://dinhthaocoffee.com/wp-content/uploads/2017/09/cf-da.jpg"},
    { id: 2, name: "Cà phê sữa", price: 15, quantity: 0, image: "https://maisonmarou.com/wp-content/uploads/2023/09/caphe-sua.jpg" },
    { id: 3, name: "Bạc xỉu", price: 18, quantity: 0, image: "https://lypham.vn/wp-content/uploads/2024/09/cach-lam-bac-xiu-da.jpg" },
    { id: 4, name: "Caramel Latte Coffee", price: 18, quantity: 0, image: "https://www.forkinthekitchen.com/wp-content/uploads/2022/06/220518.homemade.caramel.latte-6630.jpg" },
    { id: 5, name: "Matcha Latte M", price: 20, quantity: 0, image: "https://product.hstatic.net/200000505067/product/ice_matcha_latte__1__95821b5afce243c0bbd41ff67e61c987.png" },
    { id: 6, name: "Matcha Latte L", price: 23, quantity: 0, image: "https://product.hstatic.net/200000505067/product/ice_matcha_latte__1__95821b5afce243c0bbd41ff67e61c987.png" },
    { id: 7, name: "Caramel Matcha Latte M", price: 22, quantity: 0, image: "https://www.jadeleafmatcha.com/cdn/shop/articles/Caramel_Apple_Crisp_Matcha_Latte.png?v=1695830378" },
    { id: 8, name: "Caramel Matcha Latte L", price: 25, quantity: 0, image: "https://www.jadeleafmatcha.com/cdn/shop/articles/Caramel_Apple_Crisp_Matcha_Latte.png?v=1695830378" },
    { id: 9, name: "Trà sữa Thái xanh M", price: 15, quantity: 0, image: "https://danhtra.com/wp-content/uploads/2020/11/Tra-thai-xanh-08111.jpg" },
    { id: 10, name: "Trà sữa Thái đỏ M", price: 15, quantity: 0, image: "https://vn-test-11.slatic.net/p/c9671e989367da04ac50113966d36711.jpg" },
    { id: 11, name: "Cacao Latte M", price: 20, quantity: 0, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtLO9gVGoJp2V0accC4H6pAkaJLT77QPsMNQ&s" },
    { id: 12, name: "Cacao Latte L", price: 23, quantity: 0, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtLO9gVGoJp2V0accC4H6pAkaJLT77QPsMNQ&s" },
    { id: 13, name: "Cacao Nóng", price: 15, quantity: 0, image: "https://cacaomi.com/wp-content/uploads/2019/04/cacao-nong.jpg" },
    { id: 14, name: "sample", price: 0, quantity: 0, image: "//" },
    { id: 15, name: "sample", price: 0, quantity: 0, image: "//" },
  ];
    
    const orders = useSelector((state) => state.order.orders);
    const dispatch = useDispatch();
  
    const [items, setItems] = useState(menu);
    const [customer, setCustomer] = useState({ name: "", phone: "" });
  
    const updateQuantity = (id, amount) => {
      setItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + amount) } : item
        )
      );
    };
  
    const submitOrder = () => {
      const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
      const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
      if (totalItems === 0) return alert("Vui lòng chọn món trước khi đặt hàng!");
      //if (!customer.name || !customer.phone) return alert("Vui lòng nhập thông tin khách hàng!");
      
      const newOrder = {
        date: Date.now(),
        totalItems,
        items: items.filter((item) => item.quantity > 0).map((item) => ({ id: item.id, name: item.name, price: item.price, quantity: item.quantity })),
        totalPrice,
        status: "new",
        customerName: customer.name,
        phone: customer.phone,
      };
      const confirmOrder = confirm("Xác nhận đặt hàng?");
      if (confirmOrder) {
        dispatch(createOrder(newOrder));
        alert("Đặt hàng thành công!😘");
      };
      //dispatch(createOrder(newOrder));
      
      setItems(menu);
      setCustomer({ name: "", phone: "" });
    };
  
    return (
      <div className="min-h-screen p-4 bg-pastel-cream">
        <Header />
        <div className="mt-4 space-y-4">
          {items.map((item) => (
            <MenuItem key={item.id} item={item} quantity={item.quantity} updateQuantity={updateQuantity} />
          ))}
        </div>
        <CustomerInfo customer={customer} setCustomer={setCustomer} />
        <CartSummary orders={items} customer={customer} submitOrder={submitOrder}/>
      </div>
    );
  }
  
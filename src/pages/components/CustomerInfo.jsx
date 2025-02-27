function CustomerInfo({ customer, setCustomer }) {
  return (
    <div className="p-4 bg-pastel-pink shadow-lg fixed bottom-18 left-0">
      <h2 className="text-lg font-bold text-pastel-blue mb-2">Thông tin khách hàng</h2>
      <input
        type="text"
        placeholder="Họ và tên"
        className="w-full p-2 mb-2 border rounded-lg bg-pastel-cream"
        value={customer.name}
        onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
      />
      <input
        type="tel"
        placeholder="Số điện thoại"
        className="w-full p-2 border rounded-lg bg-pastel-cream"
        value={customer.phone}
        onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
      />
    </div>
  );
}

export default CustomerInfo;

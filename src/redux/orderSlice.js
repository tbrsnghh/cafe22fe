import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// const base = "http://localhost:3000";
const base = "";
export const getOrders = createAsyncThunk("order/getOrders", async () => {
  const response = await fetch(`${base}/orders`);
  return response.json();
});
export const createOrder = createAsyncThunk("order/createOrder", async (order) => {
  const response = await fetch(`${base}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });
  return response.json();
});
export const updateStatusOrder = createAsyncThunk("order/updateStatusOrder", async ({ id, status }) => {
  const response = await fetch(`${base}/orders/${id}/status`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),
  });
  return response.json();
});
const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
  },
  reducers: {
    addOrder: (state, action) => {
      state.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.fulfilled, (state, action) => {
        state.orders = action.payload;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        //state.orders.push(action.payload);
      })
      .addCase(updateStatusOrder.fulfilled, (state, action) => {
        // state.orders = state.orders.map((order) =>
        //   order.id === action.payload.id ? action.payload : order
        // );
      });
  }
});

export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;

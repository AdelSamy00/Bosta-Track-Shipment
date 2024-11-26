import { createSlice } from '@reduxjs/toolkit';
import { Shipment } from '../models/ShipmentDataModel';
const initialState = {
  data: (JSON.parse(localStorage?.getItem('shipment') as string) as Shipment) ?? {},
};

export const ShipmentSlice = createSlice({
  name: 'shipment',
  initialState,
  reducers: {
    setShipment: (state, action) => {
      state.data = action.payload;
      localStorage.setItem('shipment', JSON.stringify(action.payload));
    },
    getShipment: () => {
      return JSON.parse(localStorage?.getItem('shipment') as string) ?? [];
    },
  },
});

export const { setShipment ,getShipment} = ShipmentSlice.actions;

export default ShipmentSlice.reducer;
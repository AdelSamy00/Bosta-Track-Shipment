import { configureStore } from '@reduxjs/toolkit';
import  ShipmentReducer  from './ShipmentSlice.ts';

const store = configureStore({
  reducer: {
    shipmentData: ShipmentReducer,
  },
});
const { dispatch } = store;
export { store, dispatch };

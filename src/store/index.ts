import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

//引入经combineReducers生成的reducer，且在configureStore的第二个参数中把state的初始值弄成对象，以子级reducer的名字作为键名，存放初始值。
const store = configureStore({
  reducer
});

export default store;
import { combineReducers } from 'redux';
import currentMenuKey from './currentMenuKey';

// 通过combineReducers合并reducer，之后无论有多少个类型的reducer，都可以通过该函数合并成一个reducer然后传入到createStore中
export default combineReducers({
  currentMenuKey
});
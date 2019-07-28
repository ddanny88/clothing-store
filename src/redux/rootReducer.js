import { combineReducers } from 'redux';
import userReducer from './userReducer/userReducer';
import cartReducer from './CartReducer/cartReducer';
import directoryReducer from './DirectoryReducer/directory.reducer';
import shopReducer from './ShopReducer/shopReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

// Root reducer which combines all reducers into one object.
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);


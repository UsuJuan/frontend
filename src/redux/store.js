import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { PedidosReducer } from '../redux/reducers/pedidosReducer'
import { PreciosReducer } from '../redux/reducers/preciosReducer'
import { ProductosReducer } from '../redux/reducers/productosReducer'


const reducers = combineReducers({
	pedidos: PedidosReducer,
	precios: PreciosReducer,
	productos: ProductosReducer
})

const composeEnhancers =
  	typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    	? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        	// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      	})
    	: compose;

const enhancer = composeEnhancers(
  	applyMiddleware(thunk)
)

export const store = createStore(reducers, enhancer)

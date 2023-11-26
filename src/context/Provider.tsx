import React, {useReducer, useContext} from 'react';
import Context from './Context';

const Provider = ({children, data}) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_PRODUCT':
        return {data: action.payload};

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, data);

  return (
    <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>
  );
};

const useData = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
};

export {Provider, useData};

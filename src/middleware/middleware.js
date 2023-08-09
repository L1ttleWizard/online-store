// src/middleware/localStorage.js
const localStorageMiddleware = store => next => action => {
    const result = next(action);
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
    console.log(localStorage);
    return result;
    
  };
  
  export default localStorageMiddleware;
  
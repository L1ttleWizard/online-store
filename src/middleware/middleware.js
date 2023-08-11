// src/middleware/localStorage.js
const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  console.log(result);
  if (action.type === "cart/reset") {
    localStorage.removeItem("reduxState");
  
    
    
  } else {
    localStorage.setItem("reduxState", JSON.stringify(store.getState()));
  }
  console.log(localStorage);
  console.log(action);
  return result;
};

export default localStorageMiddleware;

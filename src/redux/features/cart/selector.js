import { cartActions } from ".";
import { MoreProductsConfig } from "../../../../public/Data/configs";
const selectCartModule = (state) => state.cart;

export const selectProductAmount = (state, id) => selectCartModule(state)[id] || false;

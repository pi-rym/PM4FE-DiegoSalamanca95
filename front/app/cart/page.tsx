import CartComponent from "@/ui/pages/CartComponent/CartComponent";
import WithAuth from "@/ui/WithAuth/WithAuth";

const Cart = () => {
  return( 
    <WithAuth>
      <CartComponent />
    </WithAuth>)
};

export default Cart;

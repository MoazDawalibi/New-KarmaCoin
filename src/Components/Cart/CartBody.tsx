import { useFormikContext } from 'formik';
import { useCartData } from '../../Redux/DispatchData';
import CartItem from './CartItem'
import CheckoutForm from './CheckoutForm';
import CartEmpty from './CartEmpty';


const CartBody = ({ data, cart, setViewPage }: any) => {
  
  
// if (data === undefined) {
//   return <CartEmpty/>
// }

  return (
    <div className="CartBody">
        {data === undefined ? (
          <CartEmpty/>
        ) : (
                <>
                
          <div className='left' >
          {data?.map((item: any, index: number) => (
            <>
              <div className="CartBody_Left" key={index}>
                  <CartItem item={item} />
              </div>
            </>
          ))}
       </div>
       
       <div className="CartBody_Right">
          <CheckoutForm sub_total={cart?.sub_total} setViewPage={setViewPage} delivery_fees={cart?.delivery_fees} />
        </div>
                </>
        )
        
        }
    </div>
  );
};
export default CartBody




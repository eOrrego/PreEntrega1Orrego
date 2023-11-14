import { BsCart3 } from 'react-icons/Bs';
import Badge from 'react-bootstrap/Badge';

const CartWidget = ({ items }) => {
    return (
        <>
            <i className='fs-2 ms-2 mb-2'>
                <BsCart3 />
            </i>
            <span>
                <Badge pill bg="success">
                    {items}
                </Badge>
            </span>
        </>
    );
};

export default CartWidget;
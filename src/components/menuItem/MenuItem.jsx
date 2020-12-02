import { useDispatch } from 'react-redux';
import { CLASS_NAMES } from '../../constants';
import { addItemBasket } from '../../store/actions';
import Icon from '../icon/Icon';
import './menuItem.scss';

const MenuItem = ({
    id,
    ruiid,
    name,
    photoUrl,
    price,
    kitchenType
}) => {
    const dispatch = useDispatch()

    const onAddItemBasketClick = () => {
        dispatch(addItemBasket({ id, name, photoUrl, price, ruiid }))
    }

    return (
        <div className='menuItem'>
            <img src={photoUrl} alt="img"/>
            <h2>{name}</h2>
            <p>Price {price}</p>
            <p>Kiitchen {kitchenType}</p>
            <div className='basket' onClick={onAddItemBasketClick}>
                <Icon type={CLASS_NAMES.shoppingCart}/>
            </div>
        </div>
    )
}

export default MenuItem
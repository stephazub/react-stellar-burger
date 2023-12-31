import styles from './BurgerConstructorItem.module.css';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDrag, useDrop } from 'react-dnd';
import { moveIngredient } from '../../services/action/burgerConstructor'
import { PropTypes } from 'prop-types';
import { ingredientType } from '../../utils/prop-types';

export function BurgerConstructorItem({ element, index, id, deleteElement }) {

    const ref = useRef(null)
    const dispatch = useDispatch()

    const moveItem = (start, end) => {
        dispatch(moveIngredient(start, end))
    }

    const [, drop] = useDrop({
        accept: 'item',

        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index
    
            if (dragIndex === hoverIndex) {
                return
            }
        
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            
            const clientOffset = monitor.getClientOffset()
            
            const hoverClientY = clientOffset.y - hoverBoundingRect.top

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            moveItem(dragIndex, hoverIndex)
            item.index = hoverIndex
        },
    })
    const [, drag] = useDrag({
        type: 'item',
        item: () => {
            return { id, index }
        },
    })
    drag(drop(ref))

    return (
        <li className={`${styles.item} mb-4`} key={element.id} ref={ref} >
            <DragIcon type="primary" />
            <ConstructorElement
                handleClose={() => deleteElement(element)}
                text={element.name}
                price={element.price}
                thumbnail={element.image}
            />
        </li>
    )
}

BurgerConstructorItem.propTypes = {
    element: ingredientType.isRequired,
    deleteElement: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
}
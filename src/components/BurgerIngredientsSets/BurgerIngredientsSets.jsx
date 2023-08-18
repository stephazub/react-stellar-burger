import styles from './BurgerIngredientsSets.module.css';
import BurgerIngredientsSet from '../BurgerIngredientsSet/BurgerIngredientsSet';
import { useDispatch, useSelector } from 'react-redux';
import { useRef, useEffect } from 'react';
import { setActiveTab } from '../../services/action/burgerIngredientsTab';

export default function BurgerIngredientsSets() {
    const dispatch = useDispatch()
    const tab = useSelector(state => state.ingredientsTab.tab)

    const bunRef = useRef();
    const sauceRef = useRef();
    const mainRef = useRef();
    const tabRef = useRef();

    useEffect(() => {
        if (tab === 'bun') {
            bunRef.current.scrollIntoView({ behavior: 'smooth' })
        }
        if (tab === 'sauce') {
            sauceRef.current.scrollIntoView({ behavior: 'smooth' })
        }
        if (tab === 'main') {
            mainRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [tab]);

    useEffect(() => {
        const sets = [bunRef.current, sauceRef.current, mainRef.current]
        
        const observer = new IntersectionObserver((sets) => {
            sets.forEach((set) => {
                if (set.target === bunRef.current) {
                    dispatch(setActiveTab('bun'))
                }
                if (set.target === sauceRef.current) {
                    dispatch(setActiveTab('sauce'))
                }
                if (set.target === mainRef.current) {
                    dispatch(setActiveTab('main'))
                }
            })

        },
            {
                root: tabRef.current,
                rootMargin: '0px',
                threshold: 1
            })
            sets.forEach((set) => observer.observe(set))

    }, [dispatch])

    return (
        <div className={`${styles.scroll} mt-10 pr-2`} ref={tabRef}>
            <div>
                <h2 className="text text_type_main-medium  mb-6" ref={bunRef}>Булки</h2>
                <ul className={`${styles.ingredients} pl-4`} >
                    <BurgerIngredientsSet type='bun'/>
                </ul>
            </div>
            <div>
                <h2 className="text text_type_main-medium mt-10 mb-6" ref={sauceRef}>Соусы</h2>
                <ul className={`${styles.ingredients} pl-4`} >
                    <BurgerIngredientsSet type='sauce' />
                </ul>
            </div>
            <div>
                <h2 className="text text_type_main-medium mt-10 mb-6" ref={mainRef}>Начинки</h2>
                <ul className={`${styles.ingredients} pl-4`} >
                    <BurgerIngredientsSet type='main' />
                </ul>
            </div>
        </div>
    )
}
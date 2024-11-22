import React, { useState } from 'react'
import styles from "./header.module.scss"
import Radiobutton from '../radiobutton/Radiobutton';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

interface IHeaderProps { }

const Header: React.FC<IHeaderProps> = () => {
    const dispatch = useAppDispatch()
    const { weather } = useAppSelector(state => state.weather)
    const [search, setSearch] = useState<string>("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
    }

    return (
        <div className={styles.main}>
            <div className={styles.center}>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={search} onChange={handleChange} />
                    <button type='submit'>
                        Search City
                    </button>
                </form>
            </div>
            <div className={styles.right}>
                <Radiobutton />
            </div>
        </div>
    )
}

export default Header
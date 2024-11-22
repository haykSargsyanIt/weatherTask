import React, { useState } from 'react'
import styles from "./radionbutton.module.scss"

interface IRadiobutton {
}

const Radiobutton: React.FC<IRadiobutton> = ({}) => {
    const [selectedOption, setSelectedOption] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(e.target.value)
    }    


    return (
        <div className={styles.radio}>
            <label >
                <input
                    type="radio"
                    value="C"
                    checked={selectedOption === "C"}
                    onChange={handleChange} />
                &deg;C
            </label>
            <label >
                <input
                    type="radio"
                    value="F"
                    checked={selectedOption === "F"}
                    onChange={handleChange} />
                &deg;F
            </label>
        </div>
    )
}

export default Radiobutton
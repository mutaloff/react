import React from "react"
import styles from './FormControl.module.css'

const InputForm = ({meta, input, element, ...props}) => {
    const hasError = meta.error && meta.modified
    return(
        <div>
            {element === 'textarea' && 
                <textarea {...input} {...props} className={`${styles.txtArea} ${hasError && styles.error}`}/>}
            {element === 'input' && 
                <input {...input} {...props}/>}
            <div className={styles.errorText}>
                { <span>{hasError && meta.error}</span>}
            </div>
        </div>
    )
}



export const TextArea = (props) => <InputForm {...props} element={'textarea'}/>
export const Input = (props) => <InputForm {...props} element={'input'}/>

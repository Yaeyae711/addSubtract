import React from 'react';
import styles from "./add.module.css"

const Addition = ({add}) => {
    return (
        <div>
            <button className={styles.addColor} onClick={add} >Add</button>
    
        </div>
    );
}

export default Addition;

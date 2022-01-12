import React, {memo, useRef} from 'react';
import styles from './search_header.module.css'

const SearchHeader = memo(({searchVideo}) => {
    
    const searchInput = useRef();
    const onSearch = () => {
        searchVideo(searchInput.current.value)
        // searchInput.current.value = ''
    }

    const onKeyevent = (e) => {
        if(e.key === 'Enter') {
            onSearch()
        }
    }
    
    return (
    <header className={styles.header}>
        <div className={styles.logo} >
            <img className={styles.img} src="/images/logo.png" alt="logo" />
            <h1>Youtube</h1>
        </div>
        <input className={styles.input} ref={searchInput} type="search" placeholder="Search.." onKeyPress={onKeyevent} />
        <button className={styles.button} type="submit" onClick={onSearch} >
            <img className={styles.buttonImg} src="/images/search.png" alt="search"/>
        </button>
    </header>
)})

export default SearchHeader;
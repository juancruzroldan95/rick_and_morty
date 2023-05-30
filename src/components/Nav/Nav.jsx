import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import styles from '../Nav/Nav.module.css'

const Nav = (props) => {
  return (
    <div className={styles.nav}>
      <SearchBar onSearch={props.onSearch}/>
    </div>
  )
}

export default Nav
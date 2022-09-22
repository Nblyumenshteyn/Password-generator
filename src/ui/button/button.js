import React from 'react'
import cx from 'clsx'

import styles from './button.module.css'

function Button ({ type, onClick, children, className }) {
  return (
    <button type={ type } className={ cx(styles['button'], className) } onClick={ onClick }>
      { children }
    </button>
  )
}

export { Button }

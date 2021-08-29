import React from 'react'
import styles from './styles/review.module.css'
import Progress from 'react-progressbar';

const Review = () => {
    return (
        <div className={styles.review_cont}>
            <div className={styles.review}>
                <div className={styles.left}>
                    <div className={styles.first}>
                        <h1>3.7</h1>
                        <div>
                            <h3>Good</h3>
                            <small>{Math.floor((Math.random() * 300) + 99)} reviews</small>
                        </div>
                    </div>
                    <div className={styles.second}>
                        <div>
                            <small>5 - Excellent</small>
                            <small style={{ fontWeight: 'bold' }}>{Math.floor((Math.random() * 30) + 99)}</small>
                        </div>
                        <Progress complete={70} color="blue" />
                    </div>
                    <div className={styles.third}></div>
                </div>
                <div className={styles.right}></div>
            </div>
        </div>
    )
}

export default Review
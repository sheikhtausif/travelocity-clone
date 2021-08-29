import React from 'react'
import styles from './styles/review.module.css'
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

const Review = () => {

    // let review = Math.floor((Math.random() * 300) + 299)

    return (
        <div className={styles.review_cont}>
            <div className={styles.review}>
                <div className={styles.left}>
                    <div className={styles.first}>
                        <h1>3.7</h1>
                        <div>
                            <h3>Good</h3>
                            <small>{Math.floor((Math.random() * 300) + 299)} reviews</small>
                        </div>
                    </div>
                    <div className={styles.second}>
                        <div className={styles.count_review}>
                            <div>
                                <small>5 - Excellent</small>
                                <small style={{ fontWeight: 'bold' }}>{Math.floor((Math.random() * 30) + 99)}</small>
                            </div>
                            <ProgressBar
                                percent={75}
                                filledBackground="navy"
                                height="8px"
                            />
                        </div>
                        <div className={styles.count_review}>
                            <div>
                                <small>4 - Good</small>
                                <small style={{ fontWeight: 'bold' }}>{Math.floor((Math.random() * 30) + 99)}</small>
                            </div>
                            <ProgressBar
                                percent={75}
                                filledBackground="navy"
                                height="8px"
                            />
                        </div>
                        <div className={styles.count_review}>
                            <div>
                                <small>3 - Okay</small>
                                <small style={{ fontWeight: 'bold' }}>{Math.floor((Math.random() * 30) + 99)}</small>
                            </div>
                            <ProgressBar
                                percent={75}
                                filledBackground="navy"
                                height="8px"
                            />
                        </div>
                        <div className={styles.count_review}>
                            <div>
                                <small>2 - Poor</small>
                                <small style={{ fontWeight: 'bold' }}>{Math.floor((Math.random() * 30) + 99)}</small>
                            </div>
                            <ProgressBar
                                percent={75}
                                filledBackground="navy"
                                height="8px"
                            />
                        </div>
                        <div className={styles.count_review}>
                            <div>
                                <small>1 - Terrible</small>
                                <small style={{ fontWeight: 'bold' }}>{Math.floor((Math.random() * 30) + 99)}</small>
                            </div>
                            <ProgressBar
                                percent={75}
                                filledBackground="navy"
                                height="8px"
                            />
                        </div>
                    </div>
                    <div className={styles.third}>
                        <div>
                            <h3>4.6/5</h3>
                            <p>Cleanliness</p>
                        </div>
                        <div>
                            <h3>4.6/5</h3>
                            <p>Staff & Service</p>
                        </div>
                        <div>
                            <h3>4.6/5</h3>
                            <p>Amenities</p>
                        </div>
                        <div>
                            <h3>4.5/5</h3>
                            <p>Property conditions & facilities</p>
                        </div>
                    </div>
                </div>
                <div className={styles.right}></div>
            </div>
        </div>
    )
}

export default Review
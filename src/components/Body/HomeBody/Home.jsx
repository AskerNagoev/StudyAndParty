import React from "react";
import styles from './Home.module.css'
import Top from "./Top/Top";
import Middle from "./Middle/Middle";
import Bottom from "./Bottom/Bottom";

const Home = () => {
    return (
        <div className={styles.body}>
            <Top/>
            <Middle/>
            <Bottom/>
        </div>
    )
}
export default Home;
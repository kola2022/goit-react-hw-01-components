import React from 'react';
import PropTypes from 'prop-types';
import style from './Statistics.module.css';

function getRandomColor() {
    return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
    return Math.round(Math.random() * 256).toString(16).padStart(2, "0");
}
 
function Statistics ({title, stats}) {
    return (
        <section className={style.statistics}>
        {title ? (<h2 className={style.title}>Upload stats</h2>) : null}

        <ul className={style.stat__list}>
            {
            stats.map(stat => (
            <li className={style.item} key={stat.id} style={{backgroundColor: getRandomColor()}}>
                <span className={style.label}>{stat.label}</span>
                <span className={style.percentage}>{stat.percentage}</span>
            </li>
                ))
            
             }
        </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object),
    label: PropTypes.string,
    percentage: PropTypes.number
}

export default Statistics;
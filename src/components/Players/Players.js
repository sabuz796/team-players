import React from 'react';
import './Players.css'

// ----fontawesome library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Players = (props) => {
    const { name, age, salary, image } = props.item
    const addTeam = props.addTeam
    const element = <FontAwesomeIcon icon={faUserPlus} />
    return (

        <div className='players'>
            <img src={image} alt="" />
            <h3>{name}</h3>
            <h5>Age: {age}</h5>
            <h5>Salary: {salary}</h5>
            <button onClick={() => addTeam(props.item)}>{element} Add to team</button>
        </div>


    );
};

export default Players;
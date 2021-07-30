import React from 'react';

const Team = (props) => {
    console.log('team', props);
    // console.log('team component ', props, props.team);
    let team = props.team
    let totalBudget = 0
    for (let i = 0; i < team.length; i++) {
        let budget = team[i];
        // console.log(budget, 'budget');
        totalBudget += budget.salary
        // console.log('team component ', team.salary, budget);
    }
    return (
        <div>
            <h3>Total Player count number: {team.length}</h3>
            <h3>Total Budget: {totalBudget}</h3>
        </div>
    );
};

export default Team;
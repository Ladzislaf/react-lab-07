import React, {useEffect, useState} from 'react'
import Notes from "./Notes/Notes";

const Scheduler = ({pickedDay}) => {
    console.log(pickedDay, 'pick')
    return (
        <div>
            {pickedDay && <Notes currentDay={pickedDay}/>}
        </div>
    )
}

export default Scheduler

import React from 'react'
import Notes from "./Notes/Notes";

const list = []

const Scheduler = ({pickedDay}) => {
    return (
        <>
            {pickedDay.date && <Notes list={list} pickedDay={pickedDay}/>}
        </>
    )
}

export default Scheduler

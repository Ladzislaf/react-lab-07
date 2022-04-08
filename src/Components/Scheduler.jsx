import React, {useState} from 'react'
import Notes from "./Notes/Notes"
import Calendar from "./Calendar/Calendar"

const checkedDaysList = []

const Scheduler = () => {
    const [pickedDay, setPickedDay] = useState({})

    return (
        <>
            <Calendar setPickedDay={setPickedDay} checkedDaysList={checkedDaysList}/>
            {pickedDay.date && <Notes pickedDaysList={checkedDaysList} pickedDay={pickedDay}/>}
        </>
    )
}

export default Scheduler

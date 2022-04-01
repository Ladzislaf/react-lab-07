import { useState } from 'react'
import CalendarBody from './CalendarBody'
import CalendarHead from './CalendarHead'
import './style/Calendar.css'

const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
    const [pickedDays, setPickedDays] = useState([])

    const handlePrevClick = () => {
        setCurrentMonth(currentMonth - 1)
        if (currentMonth % 12 === 0) {
            setCurrentYear(currentYear - 1)
        }
    }

    const handleNextClick = () => {
        setCurrentMonth(currentMonth + 1)
        if ((currentMonth + 1200) % 12 === 11) {
            setCurrentYear(currentYear + 1)
        }
    }

    const handleDayClick = (e, month, year) => {
		let day = new Date(year, month, Number(e.target.dataset.user))

		for (let i = 0; i < pickedDays.length; i++) {
			if (pickedDays[i].valueOf() === day.valueOf()) {
				let copy = pickedDays.slice()
				copy.splice(i, 1)
				// remove day
				setPickedDays(copy)
				return
			}
		}
		// add new day
		setPickedDays([...pickedDays, day])
    }

    return (
        <div className={'cal'}>
            <CalendarHead
                currentMonth={currentMonth}
                currentYear={currentYear}
                handlePrevClick={handlePrevClick}
                handleNextClick={handleNextClick}
            />
            <CalendarBody
                currentMonthIndex={currentMonth}
                handleDayClick={handleDayClick}
				pickedDays={pickedDays}
            />
            <div>{pickedDays.value}</div>
        </div>
    )
}

export default Calendar

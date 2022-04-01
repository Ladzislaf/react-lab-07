const CalendarBody = ({ currentMonthIndex, handleDayClick, pickedDays }) => {
	const dateNow = new Date()

	// первые дни месяцев
	let prevDate = new Date(dateNow.getFullYear(), currentMonthIndex - 1)
	let currentDate = new Date(dateNow.getFullYear(), currentMonthIndex)
	let nextDate = new Date(dateNow.getFullYear(), currentMonthIndex + 1)

	// индекс дня недели для первого числа
	let index = (currentDate.getDay() + 6) % 7

	// количество дней
	let days = (nextDate - currentDate) / (1000 * 3600 * 24)
	let prevDays = 	(currentDate - prevDate) / (1000 * 3600 * 24)

	const ROWS = 6
	const COLS = 7

	let daysMatrix = [], row = [], number = 1 - index

	// числа, которые будут подставляться после всех чисел текущего месяца
	let nextMonthDaysCounter = 1

	// условие проверки текущего дня
	let currentDayCheck =
        currentDate.getMonth() === dateNow.getMonth() &&
        currentDate.getFullYear() === dateNow.getFullYear() 

	for (let i = 0; i < ROWS; i++) {
        row = []
        for (let j = 0; j < COLS; j++) {
			// текущий день
			if(number === new Date().getDate() && currentDayCheck){
				row.push(<div key={j} data-user={number} className={'cell curr'} onClick={(e) => handleDayClick(e, currentDate.getMonth(), currentDate.getFullYear())}>{number}</div>)
				number++
				continue
			}
			if(number <= 0)
				row.push(<div key={j} data-user={number} className={'cell none'}>{prevDays + number}</div>)
			else if(number > 0 && number <= days)
				row.push(<div key={j} data-user={number} className={'cell'} onClick={(e) => handleDayClick(e, currentDate.getMonth(), currentDate.getFullYear())}>{number}</div>)
			else {
				row.push(<div key={j} data-user={number} className={'cell none'}>{nextMonthDaysCounter}</div>)
				nextMonthDaysCounter++
			}
			number++
        }
        daysMatrix.push(row)
    }

	// проверка, какие дни выбраны
	for(let i = 0; i < ROWS; i++) {
		for (let j = 0; j < COLS; j++) {
			for (let k = 0; k < pickedDays.length; k++) {
				if (
					daysMatrix[i][j].props.children === pickedDays[k].getDate() &&
					daysMatrix[i][j].props.className !== 'cell none' &&
					currentDate.getMonth() === pickedDays[k].getMonth() &&
					currentDate.getFullYear() === pickedDays[k].getFullYear()
				) {
					let number = daysMatrix[i][j].props.children
					daysMatrix[i][j] = (
						<div
							key={j}
							data-user={number}
							className={'cell checked'}
							onClick={(e) =>
								handleDayClick(
									e,
									currentDate.getMonth(),
									currentDate.getFullYear()
								)
							}
						>
							{number}
						</div>
					)
				}
			}
		}
	}
	
	return <div className={'calBody'}>{daysMatrix}</div>
}

export default CalendarBody

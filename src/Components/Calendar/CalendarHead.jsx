const CalendarHead = ({ currentMonth, currentYear, handlePrevClick, handleNextClick }) => {
	const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
    const months = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
    ]

	let daysNotation = []

	days.forEach( (element, index) => {
		daysNotation.push(<div key={index} className={'cell'}>{element}</div>)
	})

    return (
        <>
            <div className={'calHead'}>
				{/* 12 + 1200 - чтобы индекс не был отрицательным; возможно есть решение получше...*/}
                <div className={'month'}>{months[(currentMonth + 1200) % 12]}</div> 
                <div className={'year'}>{currentYear}</div> 
                <div className={'cell'} onClick={handlePrevClick}>{'<'}</div>
                <div className={'cell'} onClick={handleNextClick}>{'>'}</div>
				{daysNotation}
            </div>
        </>
    )
}

export default CalendarHead

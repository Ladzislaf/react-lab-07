import React, {useEffect, useState} from 'react'
import NotesList from "./NotesList"

import './style/Notes.css'

let currentSchedule = {}

const Notes = ({list, pickedDay}) => {
    const [notes, setNotes] = useState([])
    const [note, setNote] = useState({title: '', text: ''})
    const [warning, setWarning] = useState('')

    useEffect(() => {
        currentSchedule = {day: pickedDay.date, notes: []}

        for (let i = 0; i < list.length; i++) {
            if (list[i].day.getTime() === currentSchedule.day.getTime()) {
                console.log(list[i], 'list[i]')
                currentSchedule.notes = list[i].notes
                list.splice(i, 1)
            }
        }

        console.log(currentSchedule)
        list.push(currentSchedule)

        for (let i = 0; i < list.length; i++) {
            if (list[i].day.toString() === pickedDay.date.toString()) {
                setNotes(list[i].notes)
            }
        }
        console.log(list)
    }, [pickedDay])

    useEffect(() => {
        currentSchedule.notes = notes
    }, [notes])

    const addNewNote = (e) => {
        e.preventDefault()
        if (note.title === '')
            alert('Input note title!')
        else {
            setNotes([...notes, {...note, id: Date.now()}])
            setNote({title: '', text: ''})
        }
    }

    const deleteFirstNote = (e) => {
        e.preventDefault()
        setNotes(notes.filter((p, index) => index !== 0))
    }

    const deleteLastNote = (e) => {
        e.preventDefault()
        setNotes(notes.filter((p, index) => index !== notes.length - 1))
    }

    useEffect(() => {
        if (notes.length < 8) setWarning('')
        else setWarning('you have a lot of notes')
    }, [notes])

    return (
        <>
            <form className={'noteForm'}>
                <h2>Notes for {pickedDay.date && pickedDay.date.toLocaleDateString()}</h2>
                <h3 style={{color: 'red'}}>{warning}</h3>
                <input
                    className={'noteInput'}
                    type="text"
                    placeholder={'Note title'}
                    value={note.title}
                    onChange={e => setNote({...note, title: e.target.value})}
                />
                <input
                    className={'noteInput'}
                    type="text"
                    placeholder={'Note text'}
                    value={note.text}
                    onChange={e => setNote({...note, text: e.target.value})}
                />
                {
                    notes.length > 3 ?
                        <>
                            <button className={'noteBtn'} onClick={deleteFirstNote}>Delete first</button>
                            <button className={'noteBtn'} onClick={addNewNote}>New note</button>
                            <button className={'noteBtn'} onClick={deleteLastNote}>Delete last</button>
                        </>
                        : <button className={'noteBtn'} onClick={addNewNote}>New note</button>
                }
            </form>
            <br/>
            <NotesList notes={notes}/>
        </>

    )
}

export default Notes
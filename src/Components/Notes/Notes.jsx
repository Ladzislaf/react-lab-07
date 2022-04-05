import React, {useEffect, useState} from 'react'
import NotesList from "./NotesList"

import './style/Notes.css'

const Notes = ({currentDay}) => {
    const [notes, setNotes] = useState(
        currentDay.notes
        // { id:1, title: 'title post1', date: new Date().toLocaleDateString(), text:'text post1' },
    )

    const [note, setNote] = useState({title: '' , text: ''})

    const [warning, setWarning] = useState('')

    const addNewNote = (e) => {
        e.preventDefault()
        if(note.title === '')
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
        if(notes.length < 8)
            setWarning('')
        else
            setWarning('you have a lot of notes')
    }, [notes])

    return (
        <>
            <form className={'noteForm'}>
                <h2>Notes for {currentDay.date.toLocaleDateString()}</h2>
                <h3 style={{color:'red'}}>{warning}</h3>
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
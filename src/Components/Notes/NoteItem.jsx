import React from "react"

const NoteItem = ({note, styleClass, deleteNote, changeNote}) => {
    return (
        <div className={styleClass}>
            <div className={'titleNote'}>{note.title}</div>
            <div className={'textNote'}>{note.text}</div>
            <button className={'noteItemBtn'} onClick={() => deleteNote(note)}>delete</button>
            <button className={'noteItemBtn'} onClick={() => changeNote(note)}>change</button>
        </div>
    )
}

export default NoteItem
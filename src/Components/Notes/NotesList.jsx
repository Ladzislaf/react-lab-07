import React from "react"
import NoteItem from "./NoteItem"

const NotesList = ({notes, deleteNote, changeNote}) => {
    return (
        <div className={'notes_container'}>
            <h2>Notes list</h2>
            {notes.map((note, index) =>
                index > 6 ?
                    <NoteItem note={note} deleteNote={deleteNote} styleClass={'noteItemRed'} key={note.id}/>
                    : <NoteItem note={note} deleteNote={deleteNote} changeNote={changeNote} styleClass={'noteItem'} key={note.id}/>
                )}
        </div>
    )
}

export default NotesList
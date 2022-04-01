import React, {useState} from "react";
import NoteItem from "./NoteItem";

const NotesList = ({notes}) => {
    return (
        <div className={'notes_container'}>
            <h2>Notes list</h2>
            {notes.map((note, index) =>
                index > 6 ?
                    <NoteItem note={note} styleClass={'noteItemRed'} key={note.id}/>
                    : <NoteItem note={note} styleClass={'noteItem'} key={note.id}/>
                )}
        </div>
    )
}

export default NotesList
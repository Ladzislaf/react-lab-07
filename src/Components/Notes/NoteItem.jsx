const NoteItem = ({note, styleClass}) => {
    return (
        <div className={styleClass}>
            <div className={'titleNote'}>{note.title}</div>
            <div className={'textNote'}>{note.text}</div>
        </div>
    )
}

export default NoteItem
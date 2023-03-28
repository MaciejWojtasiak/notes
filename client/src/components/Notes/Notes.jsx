import Note from "../Note/Note"
import './Notes.css'

function Notes({notes}) {   
  return (
    <div className="notes"> 
        {notes.map(note => {
           return <Note
            key={note.id}
            id={note.id} 
            title={note.title}
            desc={note.desc}
            />
        })}
    </div>
  )
}

export default Notes
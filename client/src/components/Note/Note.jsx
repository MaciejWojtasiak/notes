import './Note.css';
import {Link} from "react-router-dom";

function Note({id, title, desc}) {
  return (
    <div className="note" id={id}>
        <div className="note_header">
            <h4 className="note_title"><Link className='link' to={`post/${id}`}>{title}</Link></h4>
            <div className="note_delete">X</div>
        </div>
       
        <p className="note_desc">{desc}</p>
    </div>
  )
}

export default Note
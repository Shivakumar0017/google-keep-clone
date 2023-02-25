import React,{useState} from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
import "../App.css"
const CreateArea = (props) => {
  const [IsExpanded,setIsExpanded]=useState(false);
  const [note, setnote] = useState({
    title:"",
    content:""
  });
  function hangleChange(event){
    const name= event.target.name;
    const value=event.target.value;
    setnote((prevNote)=>{
      return {
        ...prevNote, 
        [name]:value,
      }
    })
  } 
   function expand(){
    setIsExpanded(true);
  }

    function submitNote(event){
      props.onAdd(note);
      setnote({
        title:"",
        content:""
      })
    }

  return (
    
    <div>
        <form className='create-note'>
           {IsExpanded && (<input name='title' placeholder='Title' onChange={hangleChange} value={note.title}></input>)}
            <textarea name="content" placeholder='Take a note....' rows={IsExpanded ?3:1} onClick={expand} onChange={hangleChange} value={note.content}></textarea>
            <Zoom in={IsExpanded}>
              <Fab  onClick={submitNote}>
        <AddIcon />
        </Fab>
              </Zoom>
        </form>
    </div>
  )
}

export default CreateArea
import React,{useState} from 'react'
import CreateArea from './components/CreateArea';
import Footer from './components/Footer';
import Header from "./components/Header"
import Note from './components/Note';
import "./App.css"
const App = () => {
const [notes, setNotes] = useState([]);

function addNote(newNote){
  setNotes((prevNotes)=>{
    return [...prevNotes,newNote];
  });
}

function deleteNote(id){
  setNotes((prevNotes)=>{
    return prevNotes.filter((_,index)=>{
      return index !==id;
    })
  })
}
console.log(notes )
  return (
    <div >
      
       <Header></Header>
       <CreateArea onAdd={addNote}></CreateArea>
      {
        notes.map((noteItem,index)=>{
          return(
            <Note key={index} title={noteItem.title} content={noteItem.content} id={index} onDelete={deleteNote}></Note>
          )
        }
        )
      }
      <Footer></Footer>
    </div>
  )
}

export default App;

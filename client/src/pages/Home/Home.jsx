
import Notes from "../../components/Notes/Notes"
import data from "../../data";

function Home() {

  return (
    <div className="home">  
      <Notes notes={data}/>          
    </div>
  )
}

export default Home
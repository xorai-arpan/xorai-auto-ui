
import './App.css';
import { Component } from 'react';
import Header from './Header';
import ImageComponent from './ImageComponent';
import EditNote from './EditNoteComponent';
import SavedComments from './SavedCommentsComponent';



class App extends Component {

  fileChangedHandler = (event) => {
    // const file = event.target.files[0]
    const file = event.target.files[0];
    console.log(file);
  }

  render(){
    return (
      <div className="App">
        {/* <input type="file" onChange={this.fileChangedHandler}/> */}
        <Header/>
        <ImageComponent />
        <EditNote />
        <SavedComments />
      </div>
    );
  }
  }



export default App;

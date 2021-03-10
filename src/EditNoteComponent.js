import React from 'react';
import "./EditNoteComponent.css";



class EditNote extends React.Component{


    
    render(){
        // console.log('ok' ,this.props.data);
        return(
            <div className="editComponent">
                <span className="condition" >Condition</span>
                <br/>
                <textarea />

                <br/>
                <button className="edit">Edit</button>
            </div>
            
        )
    }
}
export default EditNote;
import React from 'react';
import "./SavedCommentsComponent.css";

class SavedComments extends React.Component{

    state = {
        listitems: [
            {
                id: 0,
                context: "Saved Comment 0"
            } ,
            {
                id: 1,
                context: "Saved Comment 1"
            } ,
            {
                id: 2,
                context: "Saved Comment 2"
            } ,
            {
                id: 3,
                context: "Saved Comment 3"
            } ,
            {
                id: 4,
                context: "Saved Comment 4"
            } 
        ],

        data: ""
        
    }
   


    
    // constructor() {
    //     super();
    //     // gives new instances of the click function and the this is the function is referencing to the current object
    //     this.click = this.click.bind(this);
    // }

    // using arrow function to bind
    handleclick = pro => {
        //    this.setState({data: pro});
           console.log({data: pro});
    }

    
    render() {
        return (
            <div>
                {/* <EditNote data={this.state.data} /> */}
                <span className="title">Saved Comments</span>
                <ul className="list-group">
                    {this.state.listitems.map(listitem => (
                    <li  key={listitem.id} className="list" onClick={ () => this.handleclick({text: listitem.context})}>
                        {listitem.context}
                    </li>
                    ))}
                </ul>
            </div>
        );
    }
  
}

export default SavedComments;

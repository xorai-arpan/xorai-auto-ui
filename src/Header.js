import React from 'react'
import "./Header.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

class Header extends React.Component{
    render(){
        return (
                <div className="header">
                    <div className="header_back">
                        <ArrowBackIosIcon className="back_icon"/>
                    </div>

                    <div className="header_edit" >
                        <span className="edit_note" >Edit Note</span>
                    </div>

                    <div className="header_empty">
                        
                    </div>
                </div>

    
        
        

        )
    }
}

export default Header;

// import React from 'react';
// import "./ImageComponent.css";
// import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';



// class ImageComponent extends React.Component{

//     constructor(props){
//         super(props)
//         this.state = {
//           file: null
//         }
//         this.handleChange = this.handleChange.bind(this)
//       }

//     handleChange(event) {
//         this.setState({
//           file: URL.createObjectURL(event.target.files[0])
//         })
//       }


//     render(){
//       console.log(this.state.file);
//         return(
//             <div className="image_component">
//                 <div className="camera">
//                     <PhotoCameraIcon className="camera_icon" />

//                 </div>
//                 <div className="file">
//                     <input accept="image/*" className="chooseFile"  type="file" onChange={this.handleChange} capture="environment" />
//                 </div>
//                 <div className="display">
//                     <img className="image" src={this.state.file}  height="80" width="80" alt=""/>
//                 </div>
                    
//             </div>
//         )
//     }
// }
// export default ImageComponent;

import React, { useState, useRef } from "react";
import "./ImageComponent.css";
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

const ImageComponent = () => {
  const [image, setImage] = useState("");
  const inputFile = useRef(null);

  const handleFileUpload = e => {
    const { files } = e.target;
    if (files && files.length) {
      const filename = files[0].name;

      var parts = filename.split(".");
      const fileType = parts[parts.length - 1];
      console.log("fileType", fileType); //ex: zip, rar, jpg, svg etc.

      setImage(URL.createObjectURL(files[0]));
    }
  };

  const onIconClick = () => {
    inputFile.current.click();
  };


  console.log("imageimage", image);
  return (
    <div className="image_component">
      <input style={{ display: "none" }}
        // accept=".zip,.rar"
        ref={inputFile}
        capture="environment"
        onChange={handleFileUpload}
        type="file"/>
      
        <div className="camera">
          <PhotoCameraIcon className="camera_icon" onClick={onIconClick} />
        </div>

        <div className="display">
          <img className="image" src={image} alt="" height="80" width="80"/>
        </div>
    </div>
  );
};

export default ImageComponent;
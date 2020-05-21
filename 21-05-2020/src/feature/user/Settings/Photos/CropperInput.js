import React, {Component,createRef} from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';  
 
class CropperInput extends Component {
    cropper=createRef()
    cropImage=()=>{
        const {setImage} = this.props;
       // console.log(this.cropper.current.getCropperCanvas());
        if(typeof this.cropper.current.getCroppedCanvas()==='undefined'){
            return
        }
        this.cropper.current.getCroppedCanvas().toBlob(blob=>{
            setImage(blob);
        },'image/jpeg')
    }
  render() {
      const {previewImage} = this.props
    return (
      <Cropper
        ref={this.cropper}
        src={previewImage}
        style={{height: 200, width: '100%'}}
        preview=".img-preview"
        scalable={true}
        aspectRatio={1}
        dragMode='move'
        viewMode={1}
        guides={false}
        cropBoxMovable={true}
        cropBoxResizable={true}
        crop={this.cropImage} />
    );
  }
}

export default CropperInput;
import React, { useState, useEffect, Fragment } from "react";
import {
  Segment,
  Header,
  Grid,
  Divider,
  Button,
} from "semantic-ui-react";
import { toastr } from "react-redux-toastr";
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from "react-redux";
import DropzoneInput from "./DropzoneInput";
import CropperInput from "./CropperInput";
import { uploadProfileImage } from "../../UserDeatiled/userAction";
import UserPhotos from "./UserPhotos";

const query=({auth})=>{
  return[
    {
      collection: 'users',
      doc: auth.uid,
      subcollections: [{ collection: 'photo' }],
      storeAs: 'photos'
    }
]
}
const actions = {
  uploadProfileImage,
};

const mapState=(state)=>({
  auth : state.firebase.auth,
  profile : state.firebase.profile,
  photos : state.firestore.ordered.photos
})

const PhotosPage = ({uploadProfileImage,photos,profile}) => {
  const [files, setFiles] = useState([]);
  const [image, setImage] = useState(null);
  useEffect(() => {
    files.forEach((file) => {
      URL.revokeObjectURL(file);
    });
  }, [files]);

  const  handleUploadImage = async () => {
//    console.log(files);
    const fileName = files[0].name;
//    console.log(fileName);
//    console.log(image);
    try {
      await uploadProfileImage(image,fileName);
      toastr.success('Success','File has uploaded.');
    } catch (error) {
      handleCancelImage();
      toastr.error('Oops!','Some Error');
      
    }
  };

  const handleCancelImage = () => {
    setFiles([]);
    setImage(null);
  };

  return (
    <Segment>
      <Header dividing size="large" content="Your Photos" />
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header color="teal" sub content="Step-1 Add Photos" />
            <DropzoneInput setFiles={setFiles} />
          </Grid.Column>
          <Grid.Column width={1} />
          <Grid.Column width={4}>
            <Header color="teal" sub content="Step-2 Resize Image" />
            {files.length > 0 && (
              <CropperInput
                previewImage={files[0].preview}
                setImage={setImage}
              />
            )}
          </Grid.Column>
          <Grid.Column width={1} />
          <Grid.Column width={4}>
            <Header color="teal" sub content="Step-3 Preview and Upload" />
            {files.length > 0 && (
              <Fragment>
                <div
                  className="img-preview"
                  style={{
                    minHeight: "200px",
                    minWidth: "200px",
                    overflow: "hidden",
                  }}
                />
                <Button.Group>
                  <Button style={{width:"100px"}} onClick={handleUploadImage} positive icon="checkmark" />
                  <Button style={{width:"100px"}} onClick={handleCancelImage} icon="close" />
                </Button.Group>
              </Fragment>
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider />
     <UserPhotos photos={photos} profile={profile} />
    </Segment>
  );
};

export default compose(connect(mapState, actions),firestoreConnect(auth => query(auth)))(PhotosPage);

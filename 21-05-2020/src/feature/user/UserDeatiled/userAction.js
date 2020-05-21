import { toastr } from "react-redux-toastr";
import { SubmissionError } from "redux-form";
import { asyncActionStart, asyncActionFinish, asyncActionError } from "../../asynchandle/asyncActions";

export const updateProfile = (user) => async (
  dispatchEvent,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();
  const { isLoaded, isEmpty, ...updatedUser } = user;
  try {
    await firebase.updateProfile(updatedUser);
    toastr.success("success", "Profile data has update");
  } catch (error) {
    throw new SubmissionError({
      _error: error.message,
    });
  }
};
export const uploadProfileImage=(file,filename)=>{
    return async (dispatchEvent,getState,{getFirebase,getFirestore})=>{
        const firebase = getFirebase();
        const firestore = getFirestore();
        const user = firebase.auth().currentUser;
        const path = `${user.uid}/user_images`;
        const options = {
            name : filename
        }
        try {
            dispatchEvent(asyncActionStart());
            //upload a file to firebase storage
            let uploadedFile = await firebase.uploadFile(path,file,null,options);
            console.log(uploadedFile);
            //get url of image from firebase
            let downloadURL2 = await uploadedFile.uploadTaskSnapshot.downloadURL;
            let downloadURL = await uploadedFile.uploadTaskSnapshot.ref.fullPath;
            let downloadURL3 = await uploadedFile.uploadTaskSnapshot.ref.downloadURL;
           // let downloadURL4 = await uploadedFile.uploadTaskSnapshot.ref.downloadURL();
            console.log(downloadURL);
            console.log(downloadURL2); 
            console.log(downloadURL3); 
            //console.log(downloadURL4); 
            //get user document
            let userDoc = await firestore.get(`users/${user.uid}`);
            console.log(userDoc);
            //check if user has photo , if not update profile
            if(!userDoc.data.photoURL){
                await firebase.updateProfile({
                    photoURL : downloadURL
                })
                await user.updateProfile({
                    photoURL : downloadURL
                })
            }
            //add image to firestore
            await firestore.add({
                collection : 'users',
                doc : user.uid,
                subcollections : [{collection : 'photo'}]
            },{
                name:filename,
                url : downloadURL
            }) 
            dispatchEvent(asyncActionFinish());
        } catch (error) {
            console.log(error);
            dispatchEvent(asyncActionError())
        }
    }
}
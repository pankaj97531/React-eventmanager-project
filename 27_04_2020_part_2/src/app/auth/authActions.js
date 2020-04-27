import { SubmissionError,reset } from "redux-form";
import { closeModal } from "../modal/modalAction";
import { toastr } from "react-redux-toastr";

export const loginAction = (cred) => {
  // console.log(cred);
  return async (dispatchEvent, getState, { getFirebase }) => {
    const firebase = getFirebase();
    //console.log(firebase.auth());
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(cred.email, cred.password);
      dispatchEvent(closeModal());
    } catch (error) {
      console.log(error);
      throw new SubmissionError({
        _error: error.message,
      });
    }
  };
};
export const registerUser = (user) => async (
  dispatchEvent,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  try {
    let createdUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password);
  //  console.log(createdUser);
    await createdUser.user.updateProfile({
        displayName : user.displayName
    })
    let newUser = {
        displayName : user.displayName,
        createdAt : firestore.FieldValue.serverTimestamp()
    }
    await firestore.set(`users/${createdUser.user.uid}`,{...newUser})
    dispatchEvent(closeModal());
  } catch (error) {
      console.log(error);
      throw new SubmissionError({
        _error: error.message,
      });
  }
};

export const updatePassword=(formData)=>
    async (dispatchEvent,getState,{getFirebase})=>{
        const firebase = getFirebase();
        const currentUser = await  firebase.auth().currentUser;
        try {
            await currentUser.updatePassword(formData.newPassword1);
            await dispatchEvent(reset('accountForm'));
            toastr.success('success',"Password has changed succesfully.");
        } catch (error) {
            throw new SubmissionError({
                _error: error.message,
              }); 
        }
    }
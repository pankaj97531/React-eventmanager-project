import { toastr } from "react-redux-toastr";
import { SubmissionError } from "redux-form";

export const updateProfile=(user)=>
    async (dispatchEvent,getState,{getFirebase})=>{
        const firebase = getFirebase();
        const { isLoaded,isEmpty,...updatedUser } = user;
        try {
            await firebase.updateProfile(updatedUser);
            toastr.success('success',"Profile data has update")
        } catch (error) {
            throw new SubmissionError({
                _error : error.message
            })
        }
    }
import {
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  FETCH_EVENT,
} from "./eventConstant";
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError,
} from "../asynchandle/asyncActions";
import sampleDataApi from "../mockApi/mockApi";
import { toastr } from "react-redux-toastr";
import { createNewEvent } from "../../common/reducerUtil/helper";

export const createEvent = (event) => {
  return async (dispatchEvent,getState,getFirestore,getFirebase) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const user = firebase.auth().currentUser;
    const photoURL = getState.firebase.profile.photoURL;
    const newEvent = createNewEvent(user,photoURL,event);
    
    try {
      let createdEvent = await firestore.add('events',newEvent);
      await firestore.set(`event_attendee/${createdEvent.id}_${user.uid}`,{
        eventId :createdEvent.id,
        userUid : user.uid,
        eventDate : event.date,
        host : true
      })
      toastr.success("success!", "Event has added");
    } catch (error) {
      toastr.error("oops", "Something went wrong.");
    }
  };
};

export const updateEvent = (event) => {
  return async (dispatchEvent) => {
    try {
      dispatchEvent({
        type: UPDATE_EVENT,
        payload: {
          event,
        },
      });
      toastr.success("success!", "Event has added");
    } catch (error) {
      toastr.error("oops", "Something went wrong.");
    }
  };
};

export const deleteEvent = (eventId) => {
  return {
    type: DELETE_EVENT,
    payload: {
      eventId,
    },
  };
};

export const fetchEvent = () => {
  return async (dispatchEvent) => {
    try {
      dispatchEvent(asyncActionStart());
      const events = await sampleDataApi();
      //console.log(events);
      dispatchEvent({ type: FETCH_EVENT, payload: { events } });
      dispatchEvent(asyncActionFinish());
    } catch (error) {
      dispatchEvent(asyncActionError());
    }
  };
};

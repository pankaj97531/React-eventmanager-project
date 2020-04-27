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

export const createEvent = (event) => {
  return async (dispatchEvent) => {
    try {
      dispatchEvent({
        type: CREATE_EVENT,
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

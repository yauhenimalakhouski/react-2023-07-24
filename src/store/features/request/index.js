import { LOADING_STATUS } from "../../../constants/loading-statuses";
import {REQUEST_ACTION} from "./action"
export const DEFAULT_STATE = {};



export const requsetReducer = (state = DEFAULT_STATE, {type, payload} = {}) => {
    switch(type) {
        case REQUEST_ACTION.start: {
            return {
                [payload.requestId]: {status: LOADING_STATUS.loading},
            }     
        };

        case REQUEST_ACTION.finish: {
            return {
                [payload.requestId]: {status: LOADING_STATUS.finished},
            }     
        };

        case REQUEST_ACTION.fail: {
            return {
                [payload.requestId]: {status: LOADING_STATUS.failed, error: payload.error},
            }     
        };


        default:
            return state;
    }

}
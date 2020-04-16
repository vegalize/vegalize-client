import { routingRequest, routingRequestDone } from "../action-creators/routing";

export const requestRouting = (route) => (dispatch) => {
  dispatch(routingRequest(route));
};

const defineRoutingDone = () => (dispatch) => {
  dispatch(routingRequestDone());
};

export const setRoutingDone = () => (dispatch) => {
  dispatch(defineRoutingDone());
};

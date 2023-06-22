import { REPORT_LIST_FAIL, REPORT_LIST_REQUEST, REPORT_LIST_SUCCESS } from "../constants/reportConstants"

export const tranactionDetailsReducer = (state = {transaction: []}, action) => {
    switch (action.type) {
          case REPORT_LIST_REQUEST:
                return { loading: true }
          case REPORT_LIST_SUCCESS:
                return { loading: false, transaction: action.payload }
          case REPORT_LIST_FAIL:
                return { loading: false, error: action.payload }
          default:
                return state
    }
}
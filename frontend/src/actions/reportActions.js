import axios from "axios"
import { REPORT_LIST_FAIL, REPORT_LIST_REQUEST, REPORT_LIST_SUCCESS, SUMMARY_FAIL, SUMMARY_REQUEST, SUMMARY_SUCCESS } from "../constants/reportConstants"

export const tranactionDetails = () => async (dispatch) => {
    try {
          dispatch({
                type: REPORT_LIST_REQUEST,
          })
          const config = {
            headres: {
                  'Content-Type': 'application/json',
            },
      }

          const { data } = await axios.get('http://148.251.225.118:3200/api/detailed-transaction', config)

          console.log("madus", data.transaction.transaction_list)

          dispatch({
                type: REPORT_LIST_SUCCESS,
                payload: data.transaction.transaction_list
          })
    } catch (error) {
          console.log(error)

          dispatch({
                type: REPORT_LIST_FAIL,
                payload:
                      error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message,

          })
    }
}


export const detailsSummary = () => async (dispatch) => {
    try {
          dispatch({
                type: SUMMARY_REQUEST,
          })
          const config = {
            headres: {
                  'Content-Type': 'application/json',
            },
      }

          const { data } = await axios.get('http://148.251.225.118:3200/api/transaction-summary', config)

          console.log("summery", data)

          dispatch({
                type: SUMMARY_SUCCESS,
                payload: data.summery
          })
          console.log("summery", data)
    } catch (error) {
          console.log(error)

          dispatch({
                type: SUMMARY_FAIL,
                payload:
                      error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message,

          })
    }
}
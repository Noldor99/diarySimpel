import { useDispatch } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { simpleActions } from "../store/slice/simpleSlice"

const actions = {
  ...simpleActions,
}

export const useTypedDispatch = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}

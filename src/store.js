import { combineReducers, createStore } from "redux"
import GeneralSlice from "./features/genereal/slice/generealSlice"
import BooleanSLice from "./features/boolean/slice/BooleanSlice"
import TypingTextSlice from "./features/typingtext/Slice/TypingTextSlice"

const rootReducer = combineReducers({
    general: GeneralSlice,
    boolean: BooleanSLice,
    typingText: TypingTextSlice
})
const store = createStore(rootReducer)
export default store


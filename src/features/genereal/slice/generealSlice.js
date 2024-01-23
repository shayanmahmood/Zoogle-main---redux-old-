import { useEffect } from "react"

const initialStateGenreal = {
    step: 1,
    name: '',
    image: '',
    message: ''
}

export default function GeneralSlice(state = initialStateGenreal, action) {
    switch (action.type) {
        case 'general/Inc':
            return { ...state, step: state.step + 1 }
        case 'general/Dec': return { ...state, step: state.step - 1 }
        case 'general/setname': return { ...state, name: action.payload }
        case 'general/Image': return { ...state, image: action.payload }
        case 'general/setMessage': return { ...state, message: action.payload }
        default: return state
    }
}


export function IncStep() {
    return {
        type: 'general/Inc'
    }
}

export function DecStep() {
    return {
        type: 'general/Dec'
    }
}

export function setname(name) {
    return {
        type: 'general/setname',
        payload: name
    }
}

export function Image(image) {
    return {
        type: 'general/Image',
        payload: image
    }
}
export function setMessage(message) {
    return {
        type: 'general/setMessage',
        payload: message
    }
}



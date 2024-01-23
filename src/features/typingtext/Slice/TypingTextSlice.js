const initialStateTypingText = {
    typingText: '',
}





export default function TypingTextSlice(state = initialStateTypingText, action) {
    switch (action.type) {
        case 'typingText/setTypingText': return { ...state, typingText: action.payload }
        default: return state
    }
}





export function setTypingText(typingText) {
    return {
        type: 'typingText/setTypingText',
        payload: typingText
    }
}
const initialStateBolean = {
    showChoose: false,
    show: false
}

export default function BooleanSLice(state = initialStateBolean, action) {
    switch (action.type) {
        case 'boolean/ShowChooseFalse': return { ...state, showChoose: false }
        case 'boolean/ShowChooseTrue': return { ...state, showChoose: true }
        case 'boolean/ShowFalse': return { ...state, show: false }
        case 'boolean/ShowTrue': return { ...state, show: true }
        default: return state
    }
}




export function ShowChooseFalse() {
    return {
        type: 'boolean/ShowChooseFalse'
    }
}

export function ShowChooseTrue() {
    return {
        type: 'boolean/ShowChooseTrue'
    }
}

export function ShowFalse() {
    return {
        type: 'boolean/ShowFalse'
    }
}

export function ShowTrue() {
    return {
        type: 'boolean/ShowTrue'
    }
}

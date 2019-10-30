export default function persons(state = [], action) {
    switch(action) {
        case "PERSON_FETCH_DATA_SUCCES" :
            return action.persons
        default :
            return state 
    }
}
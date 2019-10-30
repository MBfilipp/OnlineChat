export function personsFetchDataSucces(persons){
    return {
        type: "PERSON_FETCH_DATA_SUCCES",
        persons
    }
}

export function personsFetchData(url){
    return (dispatch) => {
        fetch(url)
            .then(res => {
                if(!res.ok) throw new Error(res.statusText);
                return res;
            })
            .then(res => res.json())
            .then(res => {
                dispatch(personsFetchDataSucces(res));
            })
    }
}
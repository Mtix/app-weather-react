import {VIEW_TOWN_LIST,
        VIEW_TOWN
} from '../constants/ActionType';

const initialState = {
    townsList: [
        {name: "Palo Alto", zip: "94303"},
        {name: "San Jose", zip: "94088"},
        {name: "Santa Cruz", zip: "95062"},
        {name: "Honolulu", zip: "96803"}
    ],
    viewTown: {
        temp: 0,
    }

}

export default function towns(state = initialState, action) {
    if (action.type == VIEW_TOWN) {
        return [
            ...state.viewTown

        ]
    }
    if (action.type == VIEW_TOWN_LIST) {
        return state.towns
    }

    return state;
}
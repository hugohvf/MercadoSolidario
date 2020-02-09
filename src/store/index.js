import { createStore } from 'redux';

const INITIAL_STATE = {
    lista: [{
        id: 0,
        qtd: 1,
        desc: "",
    }
    ],
}
// {...state, gamesData: action.value};
// Object.assign({}, state, {
//     gamesData: action.value
// })


function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD_QTD":
            return Object.assign({}, state, {
                lista: state.lista.map((item, index) => {
                  if (index === action.index) {
                    return Object.assign({}, item, {
                      qtd: item.qtd + 1
                    })
                  }
                  return item
                })
              })
        case "SUBTRACT_QTD":
        return Object.assign({}, state, {
            lista: state.lista.map((item, index) => {
                if (index === action.index) {
                return Object.assign({}, item, {
                    qtd: item.qtd - 1
                })
                }
                return item
            })
            })  
        case "UPDATE_TEXT":
            return Object.assign({}, state, {
                lista: state.lista.map((item, index) => {
                    if (index === action.index) {
                    return Object.assign({}, item, {
                        desc: action.value
                    })
                    }
                    return item
                })
                })    
        case "NEW_ITEM":
            return Object.assign({}, state, {
                lista: [
                    ...state.lista, action.new
                ]
            })
        case "DELETE_ITEM":
        return Object.assign({}, state, {
            lista: state.lista.filter(item => item.id !== action.id)
        })
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;
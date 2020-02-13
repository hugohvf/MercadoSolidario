import { createStore } from 'redux';

const INITIAL_STATE = {
    lista: [{
        id: 0,
        qtd: 1,
        desc: "",
    }],
    end: {
        nome: "",
        cep: "",
        num: "",
        logradouro: "",
        bairro: "",
        comp: "",
        tel: "",
        UF: "", 
        cidade: "",
        loc: {
            latitude: -37.85768986729777,
            longitude: 175.68081449992064,
        }
    },
    obs: {
        text: "",
        market: "",
    },
    data: "",
    dataEntrega: "",
}


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
        case "SET_ADRESS":
            return Object.assign({}, state, {
                    end: {
                        nome: action.nome,
                        cep: action.cep,
                        num: action.num,
                        logradouro: action.logradouro,
                        bairro: action.bairro,
                        comp: action.comp,
                        tel: action.tel,
                        UF: action.UF,
                        cidade: action.cidade,
                        loc: {
                            latitude: action.markerPosition.latitude,
                            longitude: action.markerPosition.longitude,
                        }
                    }
                })
        case "UPDATE_OBS":
            return Object.assign({}, state, {
                obs: {
                    text: action.text,
                    market: action.market,
                }
            })
        case "SET_DATE":
            return Object.assign({}, state, {
                data: action.data,
                dataEntrega: action.dataEntrega,
            })
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;
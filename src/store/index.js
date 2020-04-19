import { createStore } from "redux";

const INITIAL_STATE = {
  lista: [
    {
      id: 0,
      qtd: 1,
      desc: "",
    },
  ],
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
    },
  },
  obs: {
    text: "",
    market: "",
  },
  data: "",
  dataEntrega: "",
  orders: [],
  ordersDone: [],
  position: {},
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_QTD":
      return Object.assign({}, state, {
        lista: state.lista.map((item, index) => {
          if (index === action.index) {
            return Object.assign({}, item, {
              qtd: item.qtd + 1,
            });
          }
          return item;
        }),
      });
    case "SUBTRACT_QTD":
      return Object.assign({}, state, {
        lista: state.lista.map((item, index) => {
          if (index === action.index) {
            return Object.assign({}, item, {
              qtd: item.qtd - 1,
            });
          }
          return item;
        }),
      });
    case "UPDATE_TEXT":
      return Object.assign({}, state, {
        lista: state.lista.map((item, index) => {
          if (index === action.index) {
            return Object.assign({}, item, {
              desc: action.value,
            });
          }
          return item;
        }),
      });
    case "NEW_ITEM":
      return Object.assign({}, state, {
        lista: [...state.lista, action.new],
      });
    case "DELETE_ITEM":
      return Object.assign({}, state, {
        lista: state.lista.filter((item) => item.id !== action.id),
      });
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
          },
        },
      });
    case "UPDATE_OBS":
      return Object.assign({}, state, {
        obs: {
          text: action.text,
          market: action.market,
        },
      });
    case "SET_DATE":
      return Object.assign({}, state, {
        data: action.data,
        dataEntrega: action.dataEntrega,
      });
    case "GET_ORDERS":
      return Object.assign({}, state, {
        orders: action.value.map((itemO, indexO) => {
          return Object.assign({}, itemO, {
            lista: itemO.lista.map((itemL, indexL) => {
              return Object.assign({}, itemL, {
                checked: false,
              });
            }),
          });
        }),
      });

    case "GET_ORDERS_DONE":
      return Object.assign({}, state, {
        ordersDone: action.value.map((itemO, indexO) => {
          return Object.assign({}, itemO, {
            lista: itemO.lista.map((itemL, indexL) => {
              return Object.assign({}, itemL, {
                checked: false,
              });
            }),
          });
        }),
      });
    case "SET_CHECKED":
      return Object.assign({}, state, {
        orders: state.orders.map((item, index) => {
          if (index === action.orderi) {
            return Object.assign({}, item, {
              lista: action.lista,
            });
          }
          return item;
        }),
      });
    case "SET_CHECKED_DONE":
      return Object.assign({}, state, {
        ordersDone: state.ordersDone.map((item, index) => {
          if (index === action.orderi) {
            return Object.assign({}, item, {
              lista: action.lista,
            });
          }
          return item;
        }),
      });
    case "SET_DONE":
      if (action.status === "undone") {
        return Object.assign({}, state, {
          orders: state.orders.filter((item) => item._id !== action.pedido._id),
          ordersDone: [...state.ordersDone, { ...action.pedido, done: true }],
        });
      } else {
        return Object.assign({}, state, {
          ordersDone: state.ordersDone.filter(
            (item) => item._id !== action.pedido._id
          ),
          orders: [...state.orders, { ...action.pedido, done: false }],
        });
      }
    case "SET_REGION":
      return Object.assign({}, state, {
        position: action.value,
      });
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;

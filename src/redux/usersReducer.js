const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  arr: localStorage.getItem("userArr")
    ? JSON.parse(localStorage.getItem("userArr"))
    : [],
  arrTotalQuantity: 0,
  arrTotalAmount: 0,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, user) => {
      state.arr.push(user.payload);
      localStorage.setItem("userArr", JSON.stringify(state.arr));
    },

    orderedFoods: (state, action) => {
      const newArr = state.arr.map((user) => {
        if (user.username === action.payload.username) {
          user.orderedFoods.push(action.payload.enrolledFoods);
        }
        return user;
      });
      state.arr = [...newArr];
      localStorage.setItem("userArr", JSON.stringify(state.arr));
    },

    increaseQuantity: (state, action) => {
      const newArr = state.arr.map((user) => {
        if (user.username === action.payload.username) {
          user.orderedFoods.map((food) => {
            if (food.nameOfFood === action.payload.foodName) {
              food.quantity = food.quantity + 1;
              food.newPrice = food.newPrice + action.payload.foodPrice;
            }
            return food;
          });
        }
        return user;
      });
      state.arr = [...newArr];
      localStorage.setItem("userArr", JSON.stringify(state.arr));
    },

    decreaseQuantity: (state, action) => {
      const newArr = state.arr.map((user) => {
        if (user.username === action.payload.username) {
          user.orderedFoods.map((food) => {
            if (food.nameOfFood === action.payload.foodName) {
              if (food.quantity === 1) {
                return food.quantity && food.newPrice;
              } else {
                food.quantity = food.quantity - 1;
                food.newPrice = food.newPrice - action.payload.foodPrice;
              }
            }
            return food;
          });
        }
        return user;
      });
      state.arr = [...newArr];
      localStorage.setItem("userArr", JSON.stringify(state.arr));
    },

    deleteFood: (state, action) => {
      const newArr = state.arr.map((user) => {
        if (user.username === action.payload.username) {
          user.orderedFoods.splice(
            user.orderedFoods.findIndex((e) => e.id === action.payload.id),
            1
          );
        }
        return user;
      });
      state.arr = [...newArr];
      localStorage.setItem("userArr", JSON.stringify(state.arr));
    },

    addCreditCard: (state, action) => {
      const newArr = state.arr.map((user) => {
        if (user.name === action.payload.holder) {
          user.hasCard = true 
          user.creditCard = action.payload.card;
        }
        return user;
      });
      state.arr = [...newArr];
      localStorage.setItem("userArr", JSON.stringify(state.arr));
    },
    foodRecieved:(state, action) =>{
      const newArr = state.arr.map((user) => {
        if (user.username === action.payload) {
          user.orderedFoods = [];
        }
        return user;
      });
      state.arr = [...newArr];
      localStorage.setItem("userArr", JSON.stringify(state.arr));
    },
    changeUserDetails:(state, action)=>{
     const newArr = state.arr.map((user)=>{
      if(user.id === action.payload.id){
        user = action.payload.user
        if(user.hasCard){
          user.creditCard ={
            ...user.creditCard, holder:action.payload.user.name
          }
        }
       

      }
      return user;
     })
     state.arr = [...newArr];
     localStorage.setItem("userArr", JSON.stringify(state.arr));
    }
  },
});

export const {
  addUser,
  orderedFoods,
  increaseQuantity,
  decreaseQuantity,
  deleteFood,
  addCreditCard,
  foodRecieved,
  changeUserDetails
} = userSlice.actions;
export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const setuserDataSlice = createSlice({
  name: "setuserDataSlice",
  initialState: {
        address: "",
        birth_date: "" ,
        birth_place: "",
        email: "",
        first_name: "",
        gender: "",
        image: "",
        last_name: "",
        national_code: "",
        telephone: 0,
  },
  reducers: {
    setuserdata(state , action) {

        state.first_name = action.payload.first_name ;
        state.last_name = action.payload.last_name ;
        state.email = action.payload.email ;
        state.national_code = action.payload.national_code ;
        state.telephone = action.payload.telephone ;
        state.address = action.payload.address ;
        state.birth_date = action.payload.birth_date ;
        state.birth_place = action.payload.birth_place ;
    }
    }
});


// Action creators are generated for each case reducer function
export const {
    setuserdata
} = setuserDataSlice.actions;

export default setuserDataSlice.reducer;
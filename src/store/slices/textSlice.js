import { configureStore } from '@reduxjs/toolkit';


const initalState = {
    text: '',
    paras: 2,
    format: 'text'
}


export const textSlice = configureStore({
    name: 'text',
    initalState,
    reducer: {
        changeText: (state, action) => {
            state.text = action.payload
        },
        changeParas: (state, action) => {
            state.paras = action.payload
        },
        changeFormat: (state, action) => {
            state.format = action.payload
        }
    }
});

export const { changeText, changeParas, changeFormat } = textSlice.actions;

export default textSlice.reducer;
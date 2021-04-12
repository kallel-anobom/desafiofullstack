import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	message: undefined,
	type: undefined, // 'error'| 'success'| 'warning' | 'info'
	className: undefined
}

export const snackbarSlice = createSlice({
	name: 'snackbar',
	initialState,
	reducers: {
		sendNotification: (state, action) => {
			state.message = action.payload.message
			state.type = action.payload.type
			state.className = action.payload.className
		},
		clearNotification: (state, action) => {
			return {
				...initialState
			}
		}
	}
})

export const { sendNotification, clearNotification } = snackbarSlice.actions


export const selectSnackbarMessage = state => state.snackbar.message
export const selectSnackbarType = state => state.snackbar.type
export const selectSnackbarClassName = state => state.snackbar.className

export default snackbarSlice.reducer

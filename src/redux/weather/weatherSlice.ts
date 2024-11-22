import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState: any = {
    weather: null,
    moreData: null
}

export const fetchWeather = createAsyncThunk("weather/currentData",
    async (
        _, { rejectWithValue }) => {
        try {
            const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Yerevan&appid=cbb043d236de65c3c53a08c82faf67da")
            if (!response.ok) {
                throw new Error("Error")
            }
            const result = await response.json()

            return result
        } catch (error) {
            rejectWithValue(error)
        }
    }
)

export const fetchWeatherMoreDays = createAsyncThunk("weather/moreData",
    async (
        _, { rejectWithValue }) => {
        try {
            const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?q=Ереван&appid=cbb043d236de65c3c53a08c82faf67da")
            if (!response.ok) {
                throw new Error("Error")
            }
            const result = await response.json()

            return result
        } catch (error) {
            rejectWithValue(error)
        }
    }
)

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchWeather.fulfilled, (state, action) => {
            state.weather = action.payload
        })
            .addCase(fetchWeatherMoreDays.fulfilled, (state, action) => {
                state.moreData = action.payload
            })
    }
})

export default weatherSlice.reducer;
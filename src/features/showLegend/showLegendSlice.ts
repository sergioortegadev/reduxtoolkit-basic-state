import { createAppSlice } from "../../app/createAppSlice"

export interface ShowLegendSliceState {
  value: boolean
  status: "idle" | "loading" | "failed"
}

const initialState: ShowLegendSliceState = {
  value: false,
  status: "idle",
}

export const showLegendSlice = createAppSlice({
  name: "showLegend",
  initialState,
  reducers: create => ({
    setShowLegend: create.reducer(state => {
      state.value = !state.value
    }),
  }),

  selectors: {
    selectShowLegend: showLegend => showLegend.value,
    selectShowLegendStatus: showLegend => showLegend.status,
  },
})

export const { setShowLegend } = showLegendSlice.actions

export const selectShowLegend = showLegendSlice.selectors.selectShowLegend
export const selectShowLegendStatus =
  showLegendSlice.selectors.selectShowLegendStatus

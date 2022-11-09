import { SearchActionDispatch, SearchSliceState } from "@/types/search/search";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { searchProductByName } from "./search-thunks";

const searchState: SearchSliceState = {
  searchType: [
  ],
  loading: false,
  product: [],
  error: '',
  message: '',
  textSearch: ''
}
const searchSlice = createSlice({
  name: 'search-slice',
  initialState: searchState,

  reducers: {
    addSearch: () => {

    },
    changeSearch: (state, action: PayloadAction<SearchActionDispatch>) => {
      if (action.payload.textSearch) {
        state.textSearch = action.payload.textSearch || ''
        localStorage.setItem('text_search', action.payload.textSearch)
      }

      if (action.payload.searchType) {
        if (action.payload.searchType.nameType === 'SORT') {
          state.searchType[0] = action.payload.searchType
        }
        else if (action.payload.searchType.nameType === 'TYPE-SHOW') {
          state.searchType[1] = action.payload.searchType
        }
        else if (action.payload.searchType.nameType === 'LIST-SHOP') {
          state.searchType[2] = action.payload.searchType
        }
      }
      return state;
    }
  },
  extraReducers(builder) {
    builder.addCase(searchProductByName.pending, (state) => {
      state.loading = true
    }).addCase(searchProductByName.rejected, (state, action) => {
      state.error = action.error
    }).addCase(searchProductByName.fulfilled, (state, action) => {
      state.product = action.payload.data
    })
  },
})
export const { addSearch, changeSearch } = searchSlice.actions
export default searchSlice.reducer

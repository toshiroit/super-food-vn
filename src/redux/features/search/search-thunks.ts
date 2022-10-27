import { configAPI } from "@/config/config";
import { RequestServices } from "@/services/request-services";
import { SearchDataAPI } from "@/types/search/search";
import { createAsyncThunk } from "@reduxjs/toolkit";
const URL = configAPI.URL_BACKEND;

export const searchProductByName = createAsyncThunk('search/search-product', async (data: SearchDataAPI, thunkAPI) => {
  let querySearch: string = ''
  if (data.textSearch) {
    querySearch += `q=${data.textSearch}`
  }
  if (data.value) {
    console.log(data.value[0])
    if (data.value[0] && data.value[0].nameType === 'SORT' && data.value[0].valueType) {
      querySearch += `sort=${data.value[0].valueType}`
    }
    if (data.value[1] && data.value[1].nameType === 'TYPE-SHOW' && data.value[1].valueType) {
      console.log("VO DAY TYPE")
      querySearch += `typeshow=${data.value[1].valueType}`
    }
    if (data.value[2] && data.value[2].nameType === 'LIST-SHOP' && data.value[2].valueType) {
      querySearch += `listshop=${data.value[2].valueType}`
    }
  }

  console.log("query : ", querySearch)
  const responsive = await RequestServices.get({
    method: 'GET',
    authorization: "",
    contentType: 'application/json',
    isAuthRequired: false,
    url: `${URL + `/search?${querySearch}`}`,
  })
  console.log("-> ", responsive)
  return {
    data: responsive.data,
    error: responsive.error
  }
})

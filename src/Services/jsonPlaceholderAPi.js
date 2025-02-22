import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";


export const jsonPlaceHolderAPi = createApi({
    reducerPath: 'jsonPlaceholderApi',
    baseQuery: fetchBaseQuery({})
})
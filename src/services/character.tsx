import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CharacterType } from "../api/harry-potter-api";

export const charactersApi = createApi({
  reducerPath: "characters",
  baseQuery: fetchBaseQuery({ baseUrl: "https://hp-api.onrender.com/api/" }),
  endpoints: (builder) => ({
    getCharacters: builder.query<CharacterType[], void>({
      query: () => "characters",
    }),
  }),
});

export const { useGetCharactersQuery } = charactersApi;

export default charactersApi.reducer;

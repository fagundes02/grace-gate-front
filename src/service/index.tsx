import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

declare module "@reduxjs/toolkit/query" {
  interface FetchBaseQueryError {
    status: number | string;
    data: {
      message: string;
    };
  }
}

export const baseUrl = process.env.NEXT_PUBLIC_API_URL || "";

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.accessToken;

    if (token) {
      headers.set("authorization", token);
    }
    headers.set("content-type", "application/json;charset=UTF-8");

    return headers;
  },
});

const baseQueryWithErrorHandling: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error) {
    if (result.error.status === 401) {
      // TODO: Refresh token
    } else {
      const message = result.error.data.message;
      console.error("API Error", message);
    }
  }
  return result;
};

export const apiBase = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithErrorHandling,
  // Add the tags to the api cache
  tagTypes: ["User", "Event"],
  refetchOnFocus: false,
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});

import axios from "axios";


//Services URL
// const baseURL = {
//   auth: process.env.NEXT_PUBLIC_BASE_URL_AUTH,
//   catalog: process.env.NEXT_PUBLIC_BASE_URL_CATELOG,
//   fileservice: process.env.NEXT_PUBLIC_BASE_URL_FILESERVICE,
// };

/**
 * This function call apis via axios.
 *
 * @param {string} url  - base url apis.
 * @param {object} options - api options like method data and multipart .
 * @returns response of api
 */

export const callApi = async (url, options, tokens) => {
  // const token = getToken();
  let token;
  let headers =  {
    "Content-Type":
      options?.multipart === true ? "multipart/form-data" : "application/json",
    shopifyaccesstoken:"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",
    shopifyStoredomain:"quickstart-043da2ac.myshopify.com"

  };


  if (options?.headers) {
    headers = { ...headers, ...options.headers };
  }
  try {
    const res = await axios(import.meta.env.VITE_APP_API_URL + url, {
      headers: headers,
      ...(options?.multipart === true && {
        onUploadProgress: options.progressEvent,
      }),
      method: options?.method || "GET",

      data:
        options?.data && options?.multipart === true
          ? options?.data
          : options?.data
            ? JSON.stringify(options?.data)
            : undefined,
    });

    // if (!res.statusText) throw new Error(res.data.message);
    // console.log("resss", res.data);
    return res.data;
  } catch (error) {
    if (error?.response) {
      return error.response;
    } else {
      let err = {
        status: false,
        error: error
      }
      // console.log("error", error);
      return err;
    }
  } finally {
    // dispatch(setLoading(false))
  }
};






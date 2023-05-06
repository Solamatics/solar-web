import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../../pages/api/http";
// import Swal from "sweetalert2";

export const asyncGetMediaTypes = createAsyncThunk(
  "post/asyncGetMediaTypes",
  async () => {
    const header = {
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    };
    const response = await http.get("media-type", header);
    return response.data;
  }
);

export const asyncGetWishlist = createAsyncThunk(
  "product/asyncGetWishlist",
  async (item) => {
    // const header = {
    //   headers: {
    //     Authorization: `Token ${localStorage.getItem("token")}`,
    //   },
    // };
    // const response = await http.get("media-type", header);
    return {id: 1};
  }
);

export const asyncWishlistItem = createAsyncThunk(
  "product/asyncWishlistItem",
  async (item) => {
    // const header = {
    //   headers: {
    //     Authorization: `Token ${localStorage.getItem("token")}`,
    //   },
    // };
    // const response = await http.get("media-type", header);
    return item;
  }
);

export const asyncGetCart = createAsyncThunk(
  "product/asyncGetCart",
  async (item) => {
    // const header = {
    //   headers: {
    //     Authorization: `Token ${localStorage.getItem("token")}`,
    //   },
    // };
    // const response = await http.get("media-type", header);
    // return {id: 1};
  }
);

export const asyncAddToCart = createAsyncThunk(
  "product/asyncAddToCart",
  async (item) => {
    // const header = {
    //   headers: {
    //     Authorization: `Token ${localStorage.getItem("token")}`,
    //   },
    // };
    // const response = await http.get("media-type", header);
    return item;
  }
);

export const asyncLogin = createAsyncThunk("post/asyncLogin", async () => {
  console.log("user login");
  // const response = await http.get("media-type", header);
  // return response.data;
});

// export const asyncGetPostById = createAsyncThunk(
//   "post/asyncGetPostById",
//   async (postId) => {
//     const header = {
//       headers: {
//         Authorization: `Token ${localStorage.getItem("token")}`,
//       },
//     };
//     const response = await http.get(`post/${postId}`, header);
//     return response.data;
//   }
// );

/* define initial state */
const initialState = {
  cart: [],
  orders: [],
  wishlist: [],
};

/* define slice */
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [asyncGetMediaTypes.pending]: (state) => {
      console.log("fetching...");
      return { ...state, isLoading: true };
    },
    [asyncGetMediaTypes.fulfilled]: (state, { payload }) => {
      console.log("fetch successfil!");
      console.log("payload =>", payload);
      return { ...state, mediaTypes: payload.mediaTypes, isLoading: false };
    },
    [asyncGetMediaTypes.rejected]: (state) => {
      console.log("fetch failed...");
      Swal.fire({
        title: "Oops!!",
        text: "Something went wrong , please refresh to try again",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#2D5427",
      });
      return { ...state, isLoading: false };
    },
    //
    [asyncLogin.pending]: (state) => {
      console.log("fetching...");
      return { ...state, isLoading: true };
    },
    [asyncLogin.fulfilled]: (state, { payload }) => {
      console.log("fetch successfil!");
      // console.log("payload =>", payload);
      // return { ...state, mediaTypes: payload.mediaTypes, isLoading: false };
      window.location.replace("/cart");
    },
    [asyncLogin.rejected]: (state) => {
      console.log("fetch failed...");
      Swal.fire({
        title: "Oops!!",
        text: "Something went wrong , please refresh to try again",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#2D5427",
      });
      return { ...state, isLoading: false };
    },
    // get wishlist
    [asyncGetWishlist.pending]: (state) => {
      console.log("wishlisting item...");
      return { ...state, isLoading: true };
    },
    [asyncGetWishlist.fulfilled]: (state, { payload }) => {
      console.log("payload ::", payload, "state ::", state)
      return {
        ...state,
        wishlist: JSON.parse(localStorage.getItem("wishlist")),
        isLoading: false,
      };
    },
    [asyncGetWishlist.rejected]: (state) => {
      console.log("fetch failed...");
      Swal.fire({
        title: "Oops!!",
        text: "Something went wrong , please refresh to try again",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#2D5427",
      });
      return { ...state, isLoading: false };
    },
    // get cart
    [asyncGetCart.pending]: (state) => {
      console.log("get cart items...");
      return { ...state, isLoading: true };
    },
    [asyncGetCart.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        cart: JSON.parse(localStorage.getItem("cart")),
        isLoading: false,
      };
    },
    [asyncGetCart.rejected]: (state) => {
      console.log("fetch failed...");
      Swal.fire({
        title: "Oops!!",
        text: "Something went wrong , please refresh to try again",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#2D5427",
      });
      return { ...state, isLoading: false };
    },
    // add item to wishlist
    [asyncWishlistItem.pending]: (state) => {
      console.log("wishlisting item...");
      return { ...state, isLoading: true };
    },
    [asyncWishlistItem.fulfilled]: (state, { payload }) => {
      console.log("wishlisting successfil!", payload);
      // console.log("payload =>", payload);
      // return { ...state, mediaTypes: payload.mediaTypes, isLoading: false };
      let wishlist = JSON.parse(localStorage.getItem("wishlist"));
      if (wishlist.length > 0) {
        // check if item already exists
        console.log("wishlist items ::", wishlist);
        wishlist = wishlist.filter((i) => i.id != payload.id);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        console.log(
          "updated wishlist items ::",
          JSON.parse(localStorage.getItem("wishlist"))
        );

        return {
          ...state,
          wishlist: JSON.parse(localStorage.getItem("wishlist")),
          isLoading: false,
        };
      } else if (wishlist.length == 0) {
        // add item to wishlist
        wishlist = [...wishlist, payload];
        localStorage.setItem("wishlist", JSON.stringify(wishlist));

        console.log(
          "updated wishlist items ::",
          JSON.parse(localStorage.getItem("wishlist"))
        );
        return {
          ...state,
          wishlist: JSON.parse(localStorage.getItem("wishlist")),
          isLoading: false,
        };
      }
    },
    [asyncWishlistItem.rejected]: (state) => {
      console.log("fetch failed...");
      Swal.fire({
        title: "Oops!!",
        text: "Something went wrong , please refresh to try again",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#2D5427",
      });
      return { ...state, isLoading: false };
    },
    // add to cart
    [asyncAddToCart.pending]: (state) => {
      console.log("adding item to cart...");
      return { ...state, isLoading: true };
    },
    [asyncAddToCart.fulfilled]: (state, { payload }) => {
      console.log("adding to cart successfil!", payload);
      // console.log("payload =>", payload);
      // return { ...state, mediaTypes: payload.mediaTypes, isLoading: false };
      let cartlist = JSON.parse(localStorage.getItem("cart"));
      if (cartlist.length > 0) {
        // check if item already exists
        console.log("cartlist items ::", cartlist);
        cartlist = cartlist.filter((i) => i.id != payload.id);
        localStorage.setItem("cart", JSON.stringify(cartlist));
        console.log(
          "updated cartlist items ::",
          JSON.parse(localStorage.getItem("cart"))
        );

        return {
          ...state,
          cart: JSON.parse(localStorage.getItem("cart")),
          isLoading: false,
        };
      } else if (cartlist.length == 0) {
        // add item to cartlist
        cartlist = [...cartlist, payload];
        localStorage.setItem("cart", JSON.stringify(cartlist));

        console.log(
          "updated cartlist items ::",
          JSON.parse(localStorage.getItem("cart"))
        );
        return {
          ...state,
          cart: JSON.parse(localStorage.getItem("cart")),
          isLoading: false,
        };
      }
    },
    [asyncAddToCart.rejected]: (state) => {
      console.log("fetch failed...");
      Swal.fire({
        title: "Oops!!",
        text: "Something went wrong , please refresh to try again",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#2D5427",
      });
      return { ...state, isLoading: false };
    },
  },
});

export const getCart = (state) => state.product.cart;
export const getWishlist = (state) => state.product.wishlist;

export default productSlice.reducer;

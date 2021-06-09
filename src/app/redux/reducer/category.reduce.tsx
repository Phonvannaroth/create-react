/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-console */
import { createReducer } from "reduxsauce";
import { ICategory } from "../interface/category.interfac";
import types from "../types";

export interface ICategoryReducer {
  loading: boolean;
  progress: boolean;
  category: Array<ICategory>;
  detail: ICategory
}
const INITIAL_STATE: ICategoryReducer = {
  loading: true,
  progress: false,
  category: [],
  detail: null
};

// :FX1:<-Update Request Status ->
const onCreateNewCategory = (state: ICategoryReducer = INITIAL_STATE) => {
  return { ...state, progress: true };
};
const onCreateNewCategorySuccess = (
  state: ICategoryReducer = INITIAL_STATE
) => {
  return {
    ...state,
    progress: false,
  };
};
const onFetchCategory = (state: ICategoryReducer = INITIAL_STATE) => {
  return { ...state, progress: false };
};

// :FX2:<-Fetch Category ->
const onFetchCategorySuccess = (state: ICategoryReducer = INITIAL_STATE, action: any) => {
  return { ...state, loading: true, category: action.payload };
};
const onFetchCategoryError = (
  state: ICategoryReducer = INITIAL_STATE
) => {
  return {
    ...state,
    loading: false,
  };
};
const onCreateNewCategoryError = (state: ICategoryReducer = INITIAL_STATE) => {
  return { ...state, loading: false };
};

// :FX3:<-Fetch Category Detail ->
const onFetchCategoryDetail = (state: ICategoryReducer = INITIAL_STATE,) => {
  return { ...state, loading: true, };
};
const onFetchCategoryDetailSuccess = (
  state: ICategoryReducer = INITIAL_STATE,
  action: any
) => {
  console.log(`action.payload`, action.payload)
  return {
    ...state,
    loading: false,
    detail: action.payload

  };
};
const onFetchCategoryDetailError = (state: ICategoryReducer = INITIAL_STATE) => {
  return { ...state, loading: false };
};

const HANDLERS = {
  // :FX1:<-Creaate New Category ->
  [types.CREATE_NEW_CATEGORY]: onCreateNewCategory,
  [types.CREATE_NEW_CATEGORY_SUCCESS]: onCreateNewCategorySuccess,
  [types.CREATE_NEW_CATEGORY_ERROR]: onCreateNewCategoryError,

  // :FX2:<-Fetch Category ->
  [types.FETCH_CATEGORY]: onFetchCategory,
  [types.FETCH_CATEGORY_SUCCESS]: onFetchCategorySuccess,
  [types.FETCH_CATEGORY_ERROR]: onFetchCategoryError,

  // :FX3:<-Fetch Category Detail ->
  [types.FETCH_CATEGORY_DETAIL]: onFetchCategoryDetail,
  [types.FETCH_CATEGORY_DETAIL_SUCCESS]: onFetchCategoryDetailSuccess,
  [types.FETCH_CATEGORY_DETAIL_ERROR]: onFetchCategoryDetailError,
};
export default createReducer(INITIAL_STATE, HANDLERS);

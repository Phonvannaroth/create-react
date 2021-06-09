import { IPayloadCreateNewCategory, IPayloadFetchCategoryDetail } from "../interface/category.interfac";
import types from "../types";

export const categoryAction = {
  onCreateNewCategory: (payload: IPayloadCreateNewCategory) => {
    return {
      type: types.CREATE_NEW_CATEGORY,
      payload,
    };
  },
  onFetchCategory: () => {
    return {
      type: types.FETCH_CATEGORY,
    };
  },
  onFetchCategoryDetail: (payload: IPayloadFetchCategoryDetail) => {
    return {
      type: types.FETCH_CATEGORY_DETAIL,
      payload
    };
  },
};

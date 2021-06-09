export interface IPayloadCreateNewCategory {
    name: string,
    description: string,
    image: any,
    status: string,
    account: any,
    navigate: any
}

export interface IActionCreateNewCategory {
    type: any,
    payload: IPayloadCreateNewCategory,
}
export interface IPayloadFetchCategoryDetail {
    id: string,
}

export interface IActionFetchCategoryDetail {
    type: any,
    payload: IPayloadFetchCategoryDetail,
}
// Document

export interface ICategory {
    key: string,
    name: string,
    description: string,
    imageUrl: string,
    createdDate: any,
    createdByKey: string,
    createdBy: string,
    dateKey: number,
    status: string,
    updatedByKey?: string,
    updatedBy?: string,
    updatedDate?: any,
}

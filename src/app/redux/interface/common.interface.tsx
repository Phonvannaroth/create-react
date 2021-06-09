export interface IPayloadFetchAuditTrailDirectory {
  categoryCode: string;
  refId: number;
}

export interface IActionFetchAuditTrailDirectory {
  type: string;
  payload: IPayloadFetchAuditTrailDirectory;
}

export interface IPayloadUpdateRequestStatus {
  requestStatus: string;
  id: number;
}
export interface IActionUpdateRequestStatus {
  type: string;
  payload: IPayloadUpdateRequestStatus;
}
// /////////////////////////// Document Interface
export interface IApisRespond {
  result: boolean;
  resultCode: string;
  resultMessage: string;
  message: string;
  body: any;
}

export interface IUploadImage {
  imageType: string;
  file: any;
  boardId: number;
}
export interface IUploadUserImage {
  file: any;
  userId: number;
}
export interface IUploadFile {
  name: string;
  file: any;
}
export interface IUploadFileDocument {
  file: any;
  boardId: number;
  attachmentType: string;
}
export interface IUploadMemberFile {
  directoryId: number;
  file: any;
}
export interface IUploadNewsFile {
  directoryId: number;
  file: any;
}
export interface IUploadTrainingFile {
  directoryId: number;
  file: any;
}

export interface IUploadReceiptFile {
  directoryId: number;
  file: any;
}
export interface IUploadPriceFile {
  directoryId: number;
  file: any;
}

export interface IRoutes {
  name: string;
  route: string;
}
export interface IParamUpdateRequestStatus {
  requestStatus: string;
  id: number;
}

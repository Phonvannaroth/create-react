export interface IPayloadSetSidebar {
  index: number;
}

export interface IActionSetSidebar {
  type: string;
  payload: IPayloadSetSidebar;
}

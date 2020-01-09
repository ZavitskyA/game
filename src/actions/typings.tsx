export interface Action<TPayload> {
  type: string;
  payload: TPayload;
  meta?: {
    mute?: boolean;
  };
}

/*tslint:disable-next-line:no-any*/
export type PathReturnType = any[];

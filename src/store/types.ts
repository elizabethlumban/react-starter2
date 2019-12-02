export interface IItem {
  name: string;
}

export interface IState {
  loading: boolean;
  submittingChanges: boolean;
  items: IItem[];
}

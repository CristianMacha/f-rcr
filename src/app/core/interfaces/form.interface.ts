export interface IOption {
  id: number;
  name: string;
  selected: boolean;
  areas: IArea[]
}

export interface IArea {
  id: number;
  name: string;
  image: string;
  selected: boolean;
  tiles: ITile[];
}

export interface ITile {
  id: number;
  name: string;
  selected: boolean;
}

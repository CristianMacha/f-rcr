export interface IFormData {
  id: string
  createdAt: string
  fullName: string
  email: string
  address: string
  haveTile: boolean
  hasDesign: boolean
  size: string
  image: string
  areas: IFArea[]
}

export interface IFArea {
  id: number
  name: string
  selected: boolean
  zones: IFZone[]
}

export interface IFZone {
  id: number
  name: string
  image: string
  selected: boolean,
  tiles : IFTile[]
}

export interface IFTile {
  id: number;
  name: string;
  selected: boolean;
}




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

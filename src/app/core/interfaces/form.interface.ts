export interface IFormData {
  id: string
  createdAt: string
  fullName: string
  email: string
  address: string
  haveTile: boolean
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
  selected: boolean
  tiles : IFTile[]
  size: string
}

export interface IFTile {
  id: number;
  name: string;
  selected: boolean;
}

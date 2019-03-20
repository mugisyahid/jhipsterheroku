export interface IStore {
    id?: number;
    name?: string;
    description?: string;
    rating?: number;
    reputation?: number;
}

export class Store implements IStore {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public rating?: number,
        public reputation?: number
    ) {}
}

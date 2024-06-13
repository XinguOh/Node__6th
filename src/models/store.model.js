class Store {
    constructor({ id, name, regionId }) {
        this.id = id;
        this.name = name;
        this.regionId = regionId;
    }
}

const stores = [];

export { Store, stores };

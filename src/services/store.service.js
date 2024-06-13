import { Store, stores } from '../models/store.model.js';

const addStore = (regionId, storeData) => {
    const store = new Store({ ...storeData, regionId });
    stores.push(store);
    return store;
};

export default { addStore };

import StoreService from '../services/store.service.js';

const addStore = async (req, res) => {
    const { regionId } = req.params;
    const storeData = req.body;

    try {
        const store = await StoreService.addStore(regionId, storeData);
        return res.status(201).json(store);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

export { addStore as addStoreController };

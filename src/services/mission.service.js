import { Mission, missions } from '../models/mission.model.js';
import { stores } from '../models/store.model.js';

const addMission = (storeId, missionData) => {
    const store = stores.find(store => store.id === storeId);
    if (!store) {
        throw new Error('Store not found');
    }

    const mission = new Mission({ ...missionData, storeId });
    missions.push(mission);
    return mission;
};

export default { addMission };

import MissionService from '../services/mission.service.js';

const addMission = async (req, res) => {
    const { storeId } = req.params;
    const missionData = req.body;

    try {
        const mission = await MissionService.addMission(storeId, missionData);
        return res.status(201).json(mission);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

export { addMission as addMissionController };

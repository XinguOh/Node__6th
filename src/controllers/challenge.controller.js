import ChallengeService from '../services/challenge.service.js';

const challengeMission = async (req, res) => {
    const { missionId } = req.params;
    const { userId } = req.body;

    try {
        const challenge = await ChallengeService.challengeMission(missionId, userId);
        return res.status(201).json(challenge);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

export { challengeMission as challengeMissionController };

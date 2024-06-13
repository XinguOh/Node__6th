import { Challenge, challenges } from '../models/challenge.model.js';
import { missions } from '../models/mission.model.js';

const challengeMission = (missionId, userId) => {
    const mission = missions.find(mission => mission.id === missionId);
    if (!mission) {
        throw new Error('Mission not found');
    }

    const existingChallenge = challenges.find(challenge => challenge.missionId === missionId && challenge.userId === userId);
    if (existingChallenge) {
        throw new Error('Challenge already exists for this mission');
    }

    const challenge = new Challenge({ missionId, userId });
    challenges.push(challenge);
    return challenge;
};

export default { challengeMission };

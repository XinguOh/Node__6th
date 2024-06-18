export const storeMissionResponseDTO = (data) => {
    const missions = [];

    for (let i = 0; i < data.length; i++) {
        missions.push({
            "mission_id": data[i].mission_id,
            "mission_name": data[i].mission_name,
            "description": data[i].description,
            "reward": data[i].reward
        });
    }
    return { "missionData": missions };
}

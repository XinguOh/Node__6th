export const tempResponseDTO = (data) => {
    return {"testString" : data};
}

export const flagResponseDTO = (flag) => {
    return {"flag" : flag};
}

//미션 완료
export const missionFinsiehdDTO = (data) => {
    return {"Finished mission" : data};
}

//미션 중
export const missionPendingDTO = (data) => {
    return {"Pending mission" : data};
}
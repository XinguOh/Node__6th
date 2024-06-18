import { getStoreMissionsDAO } from '../daos/store.dao.js';
import { storeMissionResponseDTO } from '../dtos/store.dto.js';

export const getStoreMissionsProvider = async (storeId) => {
    return storeMissionResponseDTO(await getStoreMissionsDAO(storeId));
}

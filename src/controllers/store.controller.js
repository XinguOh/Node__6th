import { getStoreMissionsProvider } from '../providers/store.provider.js';
import { status } from '../config/response.status.js';
import { response } from '../config/response.js';
export const getStoreMissions = async (req, res, next) => {
    return res.send(response(status.SUCCESS, await getStoreMissionsProvider(req.params.storeId)));
}

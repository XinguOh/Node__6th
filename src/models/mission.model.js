class Mission {
    constructor({ id, title, description, storeId }) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.storeId = storeId;
    }
}

const missions = [];

export { Mission, missions };

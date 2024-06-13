class Review {
    constructor({ id, content, rating, storeId }) {
        this.id = id;
        this.content = content;
        this.rating = rating;
        this.storeId = storeId;
    }
}

const reviews = [];

export { Review, reviews };

import { createSelector } from 'reselect';

// the key is equal to what is coming in on the url params and the value is the id of the colleciton.
// const COLLECTION_ID_MAP = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5
// }

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);


// this selector takes the collections objects keys and map throught them, creating and returning an array of object which is what we originally had. 
export const selectCollectionsOverview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)



// This way of finding a collection is good on small data sets, but as it grows in complexity it could cause slower performance which is why we switched over to data normalizaion.
// export const selectCollection = collectionUrlParam => {
//     return createSelector(
//         [selectCollections],
//         collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
//     )
// }


// the concept of storing list of elements inside of an object instead of an array is called Data Normalization.
export const selectCollection = collectionUrlParam => {
    return createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    );
};
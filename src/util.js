// util.js

export const getModelImageSrc = (model) => {
    const formattedModel = model.toLowerCase().replace(/\s+/g, '-');
    return `/Images/${formattedModel}.jpg`;
};

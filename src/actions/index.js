import { IMAGES, STAT } from '../constants';

const loadImages = () => ({
    type: IMAGES.LOAD,
});

const setImages = images => ({
    type: IMAGES.LOAD_SUCCESS,
    images,
});

const setError = error => ({
    type: IMAGES.LOAD_FAIL,
    error,
});

const loadImagesStats = id => ({
    type: STAT.LOAD,
    id,
});

const setImagesStats = (id, downloads) => ({
    type: STAT.LOAD_SUCCESS,
    id,
    downloads,
});

const setImagesStatsError = id => ({
    type: STAT.LOAD_FAIL,
    id,
});

export {
    loadImages,
    setImages,
    setError,
    loadImagesStats,
    setImagesStats,
    setImagesStatsError,
};

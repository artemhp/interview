const map = function (callback) {
    const transformToNewArray  = (array, index = 0, newArray = []) => {
        if (array.length === index) {
            return newArray;
        }
        const computedArrayItem = callback(array[index], index, array);
        newArray=[
            ...newArray,
            computedArrayItem
        ];
        index++;
        return transformToNewArray(array, index, newArray);
    }
    return transformToNewArray(this);
};

/* istanbul ignore next */
if ( typeof module === "object" ) {
    module.exports = map;
} else {
    Array.prototype.aMap = map;
}
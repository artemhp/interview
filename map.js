Array.prototype.myMap = function (callback) {
    const transformToNewArray  = (array, index = 0, newArray = []) => {
        if (array.length === index) {
            return newArray;
        }
        const computedArrayItem = callback(array[index], index++, array);
        newArray=[
            ...newArray,
            computedArrayItem
        ];
        return transformToNewArray(array, index, newArray);
    }
    return transformToNewArray(this);
};
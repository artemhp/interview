Array.prototype.myFilter = function (callback) {
    const transformToNewArray  = (array, index = 0, newArray = []) => {
        if (array.length === index) {
            return newArray;
        }
        const condition = callback(array[index], index, array);
        if (condition) {
            newArray=[
                ...newArray,
                array[index]
            ];
        }
        index++;
        return transformToNewArray(array, index, newArray);
    }
    return transformToNewArray(this);
};
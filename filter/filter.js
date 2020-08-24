const filter = function (callback) {
    const transformToNewArray  = (array, index = 0, newArray = []) => {
        if (!callback) {
            // return this;
            throw  new Error ('You need to define function-callback for filtering array');
        }
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

/* istanbul ignore next */
if ( typeof module === "object" ) {
    module.exports = filter;
} else {
    Array.prototype.aFilter = filter;
}
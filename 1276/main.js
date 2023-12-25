// 数学题 解方程
var numOfBurgers = function(tomatoSlices, cheeseSlices) {
    if (tomatoSlices % 2 != 0 || tomatoSlices < cheeseSlices * 2 || cheeseSlices * 4 < tomatoSlices) {
        return []
    }
    return [(tomatoSlices >> 1) - cheeseSlices, cheeseSlices * 2 - (tomatoSlices >> 1)];
};

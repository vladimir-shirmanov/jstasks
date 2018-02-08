function shapeArea(n) {
    var unusedSquare = 2 * n * (n-1);
    var fullSquare = (2 * n - 1) ** 2;
    return fullSquare - unusedSquare;
}
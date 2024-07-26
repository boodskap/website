function emptySpaceCheck(obj) {
    var reWhiteSpace = new RegExp(/^\s+$/);
    if (!reWhiteSpace.test(obj.value)) {
        return obj.value.trim()
    } else {
        obj.value = ""
        return obj.value.trim()
    }
}
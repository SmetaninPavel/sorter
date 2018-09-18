class Sorter {
  constructor() {
    this.array = [];
    this.sortFunction = (a, b) => a - b;
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    const elementsIndexesToSort = indices.sort((a, b) => a - b);

    const toSortArrLength = elementsIndexesToSort.length;

    if (toSortArrLength <= 1) {
      return this.array;
    }

    if (Math.abs(elementsIndexesToSort[0] - elementsIndexesToSort[toSortArrLength - 1]) !== 1 && toSortArrLength === 2) {

      const firstElement = this.array[elementsIndexesToSort[0]];
      const lastElement = this.array[elementsIndexesToSort[toSortArrLength - 1]];

      if (firstElement !== -1 && lastElement !== -1) {
        this.array[elementsIndexesToSort[0]] = lastElement;
        this.array[elementsIndexesToSort[toSortArrLength - 1]] = firstElement;
      }

      return this.array;
    }

    const elementsToSortInArr = this.array.slice(
      elementsIndexesToSort[0],
      elementsIndexesToSort[toSortArrLength - 1] + 1
    );

    this.array.splice(
      elementsIndexesToSort[0],
      toSortArrLength,
      ...elementsToSortInArr.sort(this.sortFunction)
    );

    return this.array;
  }

  setComparator(compareFunction) {
    this.sortFunction = compareFunction;
  }
}

module.exports = Sorter;
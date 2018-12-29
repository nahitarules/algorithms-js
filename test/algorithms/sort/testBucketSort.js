const bucketSort = require('../../../src/algorithms/sort/bucket_sort');
const assert = require('assert');

describe('Bucket Sort', () => {
  it('should sort the array', () => {
    const array = [2, 1, 3, 4];
    let bucketSize = 4;

    assert.deepEqual(bucketSort(array, bucketSize), [1, 2, 3, 4]);

  });

  it('should sort the array in ascending order with few equal vals', () => {
    const array = [2, 1, 3, 4, 2];
    let bucketSize = 5;

    assert.deepEqual(bucketSort(array, bucketSize), [1, 2, 2, 3, 4]);

  });

  it('should sort 2 element array', () => {
    const array = [2, 1];
    let bucketSize = 2;

    assert.deepEqual(bucketSort(array, bucketSize), [1, 2]);

  });

  it('should sort 1 element array', () => {
    const array = [1];
    let bucketSize = 1;

    assert.deepEqual(bucketSort(array, bucketSize), [1]);

  });
});

import Calculations from "./calculations";

// Please complete the following unit tests for the Calculations class:

describe('Calculations', () =>
{
    it('should calculate the percentage standard deviation of a one-dimensional array', () =>
    {
        // TODO: Implement test

    });

    it('should calculate the percentage standard deviation of a two-dimensional array', () =>
    {
        // TODO: Implement test

    });

    it('should calculate the zero crossing percentage of an array', () =>
    {
        // TODO: Implement test

    });

    it('should calculate the average of a two-dimensional array', () =>
    {
        const input = [[1,2,3], [3,4,6], [1,6,7]]
        const output = Calculations.calculateAverageOfTwoDimensionalArray(input);
        const expectedOutput = 100 
        expect(output).to.be.eq(expectedOutput)
        // TODO: Implement test

    });

    it('should get the most frequent value at each subarray', () =>
    {
        const input = [[1,2,2,3], [3,4,6,6], [1,7,6,7]]
        const expectedOutput = [2,6,7]
        const output = Calculations.getMostFrequentValueAtEachSubarray(input)
        expect(output).to.be.eq(expectedOutput)
        // TODO: Implement test

    });

    it('should get the average value of the highest percentage of each subarray', () =>
    {
        // TODO: Implement test

    });

    it('should get the average value of each subarray after removing the outliers', () =>
    {
        // TODO: Implement test

    });

    it('should get the average value of each subarray after trimming percentage highest and lowest values', () =>
    {
        // TODO: Implement test

    });
});
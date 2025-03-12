public class MaximumNumber {

    public static void main(String[] args) {
        int[] array = {2, 3, 8, 7, 9}; // Input array
        int[] result = findLargestAndSmallest(array); // Call the method
        System.out.println("Largest and Smallest numbers: [" + result[0] + ", " + result[1] + "]");
    }

    // Method to find the largest and smallest numbers in the array
    public static int[] findLargestAndSmallest(int[] array) {
        int largest = findLargestNumber(array); // Call method to find largest
        int smallest = findSmallestNumber(array); // Call method to find smallest
        return new int[]{largest, smallest}; // Return as [largest, smallest]
    }

    // Method to find the largest number in the array
    public static int findLargestNumber(int[] array) {
        int largest = Integer.MIN_VALUE; // Initialize to the smallest possible integer
        for (int num : array) {
            if (num > largest) {
                largest = num; // Update largest
            }
        }
        return largest;
    }

    // Method to find the smallest number in the array
    public static int findSmallestNumber(int[] array) {
        int smallest = Integer.MAX_VALUE; // Initialize to the largest possible integer
        for (int num : array) {
            if (num < smallest) {
                smallest = num; // Update smallest
            }
        }
        return smallest;
    }
}
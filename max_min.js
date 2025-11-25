public class MaxMinArray {
    public static void findMaxMin(int[] arr) {
        int max = arr[0];
        int min = arr[0];

        for (int num : arr) {
            if (num > max) max = num;
            if (num < min) min = num;
        }

        System.out.println("Max: " + max);
        System.out.println("Min: " + min);
    }

    public static void main(String[] args) {
        int[] numbers = {3, 7, 2, 9, 5};
        findMaxMin(numbers); // Output: Max: 9, Min: 2
    }
}

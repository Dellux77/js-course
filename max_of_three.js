public class MaxOfThree {
    public static int maxOfThree(int a, int b, int c) {
        if (a >= b && a >= c) {
            return a;
        } else if (b >= a && b >= c) {
            return b;
        } else {
            return c;
        }
    }

    public static void main(String[] args) {
        System.out.println(maxOfThree(10, 25, 7)); // Output: 25
    }
}

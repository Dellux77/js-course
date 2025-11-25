public class PalindromeCheck {
    public static boolean isPalindrome(String word) {
        word = word.toLowerCase();
        String reversed = new StringBuilder(word).reverse().toString();
        return word.equals(reversed);
    }

    public static void main(String[] args) {
        System.out.println(isPalindrome("madam")); // Output: true
        System.out.println(isPalindrome("hello")); // Output: false
    }
}

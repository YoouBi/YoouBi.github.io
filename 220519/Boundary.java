// 사용자에게 정수 하나를 입력받아서
// 입력 값 -2 ~ +2 범위의 정수를 출력해보세요
// 예) 7 -> 5 6 7 8 9

import java.util.Scanner;

public class Boundary {
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		
		System.out.print("-2 ~ +2 범위를 알고싶은 정수 하나를 입력해주세요.");
		int x = input.nextInt();
		
		x = x - 2;
		
		System.out.println(x + "에 대한 -2 ~ +2 범위 안의 숫자는 " + x 
	                       +" "+ (++x) +" "+ (++x) +" "+ (++x) +" "+ (++x) + "이다.");
						   
		/* System.out.println(x);
		System.out.println(++x);
		System.out.println(++x);
		System.out.println(++x);
		System.out.println(++x); */
	}
}

/*public class NumberRange {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		System.out.print("정수 하나 입력: ");
		int number = scan.nextInt();
		int numberCopy = number;
		
		number -= 2;
		System.out.println(number);
		number++;
		System.out.println(number);
		number++;
		System.out.println(number);
		number++;
		System.out.println(number);
		number++;
		System.out.println(number);
	}
} */
//실수 연습

public class FloatTypes {
	public static void main(String[] args) {
		float f = 123.456F; // 플롯을 알려주려고 F붙인것 소문자 대문자 상관없음
		double d = 7777.88888;
		
		/* double sum = f + d;
		
		int i = 10000L;
		float sum = i + f; 정수와 실수를 더하면 실수를 따라가려고 한다 */
		
		float one = 0.1F; // 연산을 하면서 오차가 발생했고 정확한 값이 표현되지 않았다
		System.out.printf("%.15f", one * 22); // 실수 표현은 %f인데 중간에 .숫자로 자리값을 정해줄 수 있다
		// 2진수에서는 float과 double 둘 다 0.1을 0.10000000000(무언가의 숫자)가 붙어있는 걸로 무언가 이상하게 인식한다...
		// 그래서 0.1에 22를 곱한건데도 뒤에 2.200000047683716라는 소수점이 붙는 것이다
		// %010d(빈자리를 0으로 채우겠다)도 가능 %10d는 앞을 공간으로 띄운다
	}
}
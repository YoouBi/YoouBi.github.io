public class CharType {
	public static void main(String[] args) {
		char a = 'a'; // 값을 적을 때 "쌍따옴표"가 아닌 한글자, 문자 하나를 쓰는 '홑따옴표'를 쓴다
		char b = 'b';
		char ga = '가';
		char num1 = '1';
		
		char what = 65; // 문자열 선언하고 정수형 값 65를 넣으면 숫자가 아니라 대문자 A가 출력되는데
		// 65이라는 정수를 표현하는게 아니라 65번째에 약속되어있는 문자를 알려주는 것이다
		
		System.out.println(what + a); // 캐릭터 타입을 연산하면 달라붙는게 아니라 숫자로 인식하여 결과값 해당 숫자의 문자로 달라진다
		
		System.out.println(a);
		System.out.println(b);
		System.out.println(ga);
		System.out.println(num1);
	}
}
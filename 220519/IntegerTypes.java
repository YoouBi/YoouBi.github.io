// 79페이지 연습

public class IntegerTypes {
	public static void main(String[] args) {
		byte b = 100;
		short s = 30000;
		int i = 10_000_000; // ,로 자릿수 표현하면 자바에서는 컴파일 에러나기 때문에 _로 표기한다
		long l = 123456789L; // 롱타입의 큰 숫자라는 걸 알려주기 위해 L을 붙여줬다 안붙이면 int값이네? 라고 인식한다
		// long 변수에는 접미사인 L을 붙여줘야(소문자 대문자 상관없음!) 컴파일 에러가 발생하지 않는다
		
		int bs = b + s; // 작은 범위의 친구와 큰 범위의 친구를 연산하면 큰 범위의 친구로 따라간다
		System.out.println(bs);
		
		byte b2 = 100;
		
		byte sum = b + b2; // 넉넉하게 큰 범위의 공간을 지정해줘야 컴파일 에러가 안난다
		System.out.println(sum);
	}
}
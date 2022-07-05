/*
 javascript 파일 불러오기

 <script src="자바스크립트파일주소" defer></script>

 defer속성은 자바스크립트 실행 관련 지정자다.
 여러 개의 파일도 하나의 HTML에서 불러올 수 있으며 명령 기술의 순서에 따라 파일을 불러와 작업한다.
 파일 경로는
 상대 경로
 루트 경로
 절대 경로 가 있다

 상대 경로
 <script src="./script/script.js" defer></script>
 
 루트경로
 <script src="/project/script/script.js" defer></script>

 절대경로
 <script src="https://example.com/script/script.js" defer></script>

 ===================================================================================================
 값을 로그로 출력하기
 console.log
 console.log()의 파라미터의 수는 콤마를 사용하여 하나 이상의 전달이 가능하다
 cosnole.log("안녕", "지금은", new Date(), "이다");

 연산 적용도 가능하다
 +
 -
 *
 /
 % 나머지
 **

 ===================================================================================================
 변수 선언하기

 let 변수명 = 데이터 값
 변수의 종류
 let (스코프 외 재설정 불가능)
 const 상수
 var (스코프 외에서도 재설정 가능 (호이스팅)으로 사용에 유의)

 ===================================================================================================
 복합형 계산

 x+=y , x= x+y
 x-=y , x= x-y
 ....에 따른 규칙성을 살펴보면
 =앞에 연산자는 맨앞의 변수와의 연산을 시킨다는 축약형이다
 ===================================================================================================
 함수 사용
 function 함수명(파라미터){처리내용}
 return 값 //함수 내부의 값을 반환
 함수명() //함수 실행
 ===================================================================================================
 화살표 함수
 변수 변수명 =(파라미터) =>{처리내용}
 특징. 함수 간략화
       this를 묶는 것이 가능하다

 ===================================================================================================
 파라미터 설정
 function clacFunction(price, tax=20){
    const result = price + price*tax;
    return result;
 }
 const result1 = calcFunction(100);
 const result2 = calcFunction(100, 30); // tax값을 전달하면 파라미터로 전달된 값이 사용됨
 ===================================================================================================
 조건문 종류
 if(조건){(조건이 참일경우 해당 내용 처리)}else if(조건2){(조건2에 만족하면 해당 내용 처리)}else{(조건1, 2, ...어떤 조건에도 맞지 않으면 해당 내용을 처리)}

 swicth(식) 식에 따라 처리를 분기
 case 값: 처리내용, 해당 case에 맞는 경우 처리내용 실행
 default: 처리내용, 만족하는 조건이 하나도 없을 경우의 처리내용 실행
 break: 무한 반복되는 것을 막기 위해  break를 걸어줘야 한다
 ===================================================================================================
 반복문
 for(변수타입 변수명 = 변수값, 보통인덱스길이 값으로 반복개수설정<10, 변수명++){
    console.log(변수명)
 }

 while (number<10){ console.log(number); number+=1;}
 for문과 유사하나 반복 조건만을 지정한다 그러므로 코드를 통해 반복의 종료 시점을 지정해야 한다. 
 ===================================================================================================
 반복문 처리 스킵
 반복 처리 중 특정 조건에 대해 스킵하고 싶을 때
 for문 루프 중 처리를 스킵하고 싶을 때
 continue / for문 루프 중 처리 스킵
 >>
 index가 홀수인 경우에만 출력을 실행하는 코드를 짜보면서 continue에 대해 알아 보자 continue의 적용 범위는 for{}내부다

 for(let index=0; index<10; index++){
    if(index%2 ===0){
        //index가 짝수인 경우 아랫부분은 실행되지 않고 루프가 넘어감
        continue
    }
    console.log(index); //홀수만 출력
 }
 //루프가 끝나면 실행
 console.log('루프 종료됨)
 ===================================================================================================
 진위여부 판별
 적용(
    1. 브라우저 버전에 따라 알림창을 띄우고 싶을 때
    2. 입력 항목에 따라 확인 벼튼을 무효화 하고 싶을 때
 )
 ios판별 여부
 const isIos =navigator.userAgent.includes('iphone');
 if(isIos){
    //ios용 처리 작업
 }

 ****0이외의 숫자 타입, ''(작은 따옴표) 이외의 문자열 타입, 배열 타입, 객체 타입 조건에 들어가는 데이터는 참으로 간주
 false가 나오는 것들 (undefined, 0 , null, empty string, false)


 논리 부정 연산자로 진위 판별
 const name = 'javascript'.includes('a');
 console.log(!name); // false

 !!를 두번 사용하면 데이터 타입이 Boolean으로 변환
 console.log(!!'웰치스') // true
 console.log(!!99) // true
 console.log(!![1,2,3]) //true
 ===================================================================================================

 숫자 다루기

 숫자 다루기는 다음과 같은 작업에 유용하게 적용된다
 큰 숫자 계산  (10의 10000승 계산 등)
 어림 계산하기 (세금을 포함한 금애글 정수로 산출)
 삼각 함수 다루기 (애니메이션의 궤적 구하기)
 임의의 수 다루기 (애니메이션에 임의 값 부여하기)


 >>
 어림계산하기 (반올림, 올림, 버림)
 Math.round(값) 반올림하기
 Math.floor(값) 버림하기(가까운 정수 반환)
 Math.ceil(값) 올림하기
 Math.trunc(값) 정수만 반환

 Math.round(3.14) 3
 Math.floor(3.14) 3
 Math.ceil(3.14) 4
 Math.trunc(3.14) 3

 Math.round(9.84) 10
 Math.floor(9.84) 9
 Math.ceil(9.84) 10
 Math.trunc(9.84) 9

 >>임의의 수 다루기
 Math.random() 부동 소수형의 유사 난수를 반환(0이상 1미만)
 Math.floor(Math.rnadom()*100)); //0이상 100미만 임의의 정수
 10+Math.floor(Math.random()*10); //10이상 20미만 임의의 정수


 버튼을 누를 때마다 색상이 랜덤하게 바뀌는 코드
 <button class="button">색상 변경</button>
 <div class="rec"></div>
 CSS
 .rec{
    width: 100%;
    height: calc(100%-50px);
    --start: hsl(0, 100%, 50%);
    --end: hsl(322, 100%, 50%);
    background-image: linear-gradient(-134deg, var(--start), var(--end));
 }
 Js.js
 const rect=document.querySelector('.rec');
 //버튼 클릭시 conClickButton()실행
 document.querySelector('.button').addEventListener('click, onClickButton);
 function onClickButton(){
    const randomHue = Math.trunc(Math.random()*360); //0~359 임의의 수
    //그라디에션 시작 끝 색상 설정
    const randomColorStart = `hsl(%{randomHue}, 100%, 50%)`;
    const randomColorEnd = `hsl(${randomHue +40}, 100%, 50%)`;

    rect.style.setProperty('--start', randomColorStart);
    rect.style.setProperty('--end', randomColorEnd);
 }

  ***안전한 난수 사용은 crypto.getRandomValues()
  비밀번호등 정보 보호가 중요한 문자열을 생성할 때 사용
  인수에 타입 지정 배열과 값을 전달하면 값의 난수 배열을 생성한다

  //임의의 정수(부호없는 16비트) 10개가 들어 있는 배열을 생성
  //예: [1923, 12933, 49912, 19231, 41812,...]
  const randomArray = crypto.getRandomValues(new Uint16Arrayy(10));
  //배열 요소를 연결하여 난수를 생성
  //예: 192312933499121923141812....
  randomArray.join('');
  //부호 없는 32비트의 배열 난수를 생성
  crypto.getRandomValue(new Uint32Array(10)).join('');

  ===================================================================================================
  수학 계산 함수 사용하기
  적용(절대값, 제곱, 대수)

  Math.abs(값) 절대값
  Math.pow(값1, 값2) 값1의 값2승을 계산
  Math.sign(값) 값의 부호 계산(-10은 -1, 21은 1, 0은 0)
  Math.sqrt(값) 제곱근을 계산
  Math.log(값) 자연로그를 계산
  Math.exp(값) 지수 함수를 계산

  Math.E 자연로그e를 반환
  {
    EX
    Math.sign(2) // 2가 양수이므로 1
    Math.sign(-2) // -2가 음수이므로 -1
    Math.sqrt(16) // 16의 제곱근은 4
    Math.log(Math.E); // 자연 로그 e는 1
  }
  ===================================================================================================
  삼각함수 사용
  (삼각함수계산, 좌표에서 각도를 구하고 싶을때, 호를 그리는 애니메이션 효과를 주고 싶을 때)
  
  Math.PI 원주율
  Math.cos(값) 코사인
  Math.sin(값) 사인
  Math.tan(값) 탄젠트
  Math.acos(값) 코사인 역함수
  Math.asin(값) 사인 역함수
  Math.atan(값) 탄젠트 역함수
  Math.atan2(y좌표, x좌표) (x,y)좌표가 이루는 각도

  Math.cos()와 Math.acos()에 전달하는 값의 단위는 라디안이다 원주율의 길이를 표시하기 때문에 도수를 라디안으로 변환하는 편이 사용하기 쉽다.
  라디안 = (도수 *Math.PI)/180;


  *************삼각함수를 사용해 원을 그리는 애니메이션 (반지름 100인 원)
  HTML
  <div class="charactor"></div>
  JS
  let deg = 0; //각도 설정
  const rotation = (deg*Math.PI)/180 //회전각을 라디안으로 구하기
  
  const targetX = 100*Math.cos(rotation);
  const targetY = 100*Math.sin(rotation);

  >>deg를 일정 주기로 1도씩 증가시키면 호를 그리는 애니메이션을 구현할 수 있다
  const charactor = document.querySelector('.charactor');
  leg deg= 0; //각도 설정
  loop(); //루프의 개시
  //화면이 갱신될 때마다 실행되는 함수
  function loop(){
    //회전각을 라디안으로 구하기
    const rotation = (degree*Math.PI)/180;
    //회전각으로 위치 구하기
    const targetX = window.innerWidth/2 +100*Math.cos(rotation)-50;
    const targetY = window.innerHeight/2+100*Math.sin(rotation)-50;
    //charactor 위치 반영
    charactor.style.left=`${targetX}px`;
    charactor.style.top=`${targetY}px`;
    //각도 1도 증가시키기
    deg+=1;
    //다음 화면 갱신 타이밍에서 loop()실행
    requestAnimationFrame(loop)
  }


  **********************************************************************************************
  문자열 다루기
  문자열 길이 확인,
  문자열 추출
  문자열 변환
  문자열 나누고 싶을 때
  문자열 결합

  1. 길이확인
  문자열.length
  Array.from(문자열).length
  2. 문자열 공백 처리
  문자열.trim() 문자열 양 끝의 공백을 제거 (문자열 사이의 공백은 제거되지 않는다)
  3. 문자열 검색하기(인덱스검색)(원하는 문자열의 위치를 확인)
  문자열.indexOf(문자열, [검색시작인덱스])
  문자열.lastIndexOf(문자열,[검색시작인덱스]) // 문자열 종료 인덱스부터
  문자열.search(정규표현)

  //지정문자열이 존재하지 않을 경우 결과가 -1이 나오며, 대문자와 소문자를 구분하여 판별하기 때문에
  이를 주의해야 한다.

  //좀 더 체계화된 검색은 정규 표현을 사용한다. search()는 정규표현과 일치하는 문자의 인덱스 값을 반환한다.
  정규표현을 사용하여 문자열을 검색하는 코드를 보자

  const myString = 'javascirpt'
  const search = myString.search(/javascript/);
  console.log(search)// 0
  const search2 = myString.search(/none/);
  console.log(search2)// -1

  >>있다면 0 , 없다면 -1 반환 
*/
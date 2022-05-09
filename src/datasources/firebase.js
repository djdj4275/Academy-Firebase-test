// 파이어베이스 앱 객체 모듈 가져오기
// 파이어베이스9버전이므로 아래와 같이 /compat 를 함께 작성하여 사용
import firebase from "firebase/compat/app";

// 파이어베이스 초기화
const oFirebase = firebase.initializeApp({
  apiKey: /* 본인의 파이어 베이스 키값 */,
  authDomain:/* 본인의 파이어 베이스 도메인값 */,
});

// 파이어베이스 인증 객체 모듈로 사용
export const oFirebaseAuth = oFirebase.auth();

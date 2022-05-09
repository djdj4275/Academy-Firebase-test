// 에러 및 로딩관련 store 모듈

export default {
  state: {
    bIsLoading: false, // 처리중 시간이 걸림을 표시
    sErroreMessage: "", // 처리중 오류메세지의 내용
  },
  mutations: {
    //처리중에 시간이 걸리는지 여부를 설정
    fnSetLoading(state, payload) {
      state.bIsLoading = payload;
    },
    //처리중에 오류메시지를 저장
    fnSetErrorMessage(state, payload) {
      state.sErroreMessage = payload;
    },
  },
  getters: {
    fnGetLoading(state) {
      return state.bIsLoading;
    },
    fnGetErrorMessage(state) {
      return state.sErroreMessage;
    },
  },
  actions: {},
};

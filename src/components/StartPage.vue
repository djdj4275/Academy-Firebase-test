<template>
    <v-container>
        <v-row>
            <v-col cols='12' class="text-center mt-5">
                <h1 class="display-1 my-1">시작화면 페이지</h1>
                <p class="body-1">로그인없이 방문자 누구나 접속가능한 페이지입니다</p>

                <!-- 시간지연의 경우 회전 프로그레스 원 표시 -->
                <v-progress-circular v-if="fnGetLoading"
                color="grey lighten-1" :width="7" :size="70"
                indeterminate>
                </v-progress-circular>
            </v-col>
            <v-col cols="6" offset="3" class="text-center mt-5">
                <v-btn @click="fnDoGoogleLogin_Popup" outlined color="red" large dark block>
                    <v-icon>mdi-google</v-icon>
                    구글 로그인
                </v-btn>
            </v-col>
            <v-col cols="6" offset="3" class="text-center mt-5">
                <v-btn to="/login" color="red" large dark block>
                    <v-icon>mdi-email</v-icon>
                    이메일 로그인
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    methods : {
        fnDoGoogleLogin_Popup() {
            //스토어에 있는 구글계정 로그인 처리요청
            this.$store.dispatch('fnDoGoogleLogin_Popup');
        }
    },
    computed : {
        fnGetLoading(){
            return this.$store.getters.fnGetLoading
        }
    }
}
</script>
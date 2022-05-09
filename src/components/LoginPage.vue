<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="text-center my-5">
                <h1 class="display-1">로그인 페이지</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="text-center" cols="8" offset="2" sm="6" offset-sm="3">
                <form @submit.prevent="DoLogin">
                    <v-text-field name="Email" label="이메일" type="email" required 
                    v-model="sEmail"></v-text-field>
                    <v-text-field name="password" label="비밀번호" type="password" required 
                    v-model="sPassword"></v-text-field>
                    <v-btn type="submit" color="orange" dark v-if="!fnGetLoading">로그인</v-btn>

                    <!-- 시간지연의 경우 회전 프로그레스 원 표시 -->
                    <v-progress-circular v-if="fnGetLoading"
                    color="grey lighten-1" :width="7" :size="70"
                    indeterminate>
                    </v-progress-circular>
                    
                    <!-- 오류메시지가 있을 경우 표시 -->
                    <v-alert class="mt-3" type="error" dismissible v-model="bAlert">
                        {{fnGetErrMsg}}
                    </v-alert>
                </form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            sEmail : '',
            sPassword: '',
            bAlert : false,
        }
    },
    methods : {
        DoLogin() {
            this.$store.dispatch('DoLogin',{
                pEmail : this.sEmail,
                pPassword : this.sPassword
            })
        }
    },
    computed :{
        fnGetLoading(){
            return this.$store.getters.fnGetLoading;
        },
        fnGetErrMsg(){
            return this.$store.getters.fnGetErrorMessage;
        }
    },
    watch : {
        // fnGetErrMsg의 값이 있으면 true로 바꿈
        fnGetErrMsg(pMsg) {
            if (pMsg) this.bAlert = true;
        },
        // pValue값이 false면 오류메시지의 값 초기화
        bAlert(pValue) {
            if (pValue == false) this.$store.commit('fnSetErrorMessage','');
        }
    }
}
</script>
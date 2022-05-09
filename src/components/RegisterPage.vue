<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="text-center my-5">
                <h1 class="display-1">회원가입 페이지</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="text-center" cols="8" offset="2" sm="6" offset-sm="3">
                <form @submit.prevent="fnRegisterUser">
                    <v-text-field name="Email" label="이메일" type="email" 
                    v-model="sEmail" required></v-text-field>
                    <v-text-field name="password" label="비밀번호" type="password" 
                    v-model="sPassword" required></v-text-field>
                    
                    <!-- 비밀번호 확인 : rules 속성 -->
                    <v-text-field name="ConfirmPassword" label="비밀번호 확인" type="password" 
                    v-model="sConfirmPassword" required
                    :rules="[fnComparePassword]">
                    </v-text-field>
                    
                    <v-btn type="submit" color="orange" dark v-if="!fnGetLoading">회원가입</v-btn>

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
    data () {
        return {
            sEmail :'',
            sPassword:"",
            sConfirmPassword :'',
            bAlert : false,
        }
    },
    computed : {
        fnComparePassword(){
            if(this.sPassword == this.sConfirmPassword) {
                return true
            }else return '비밀번호가 일치하지않습니다'
        },
        fnGetLoading(){
            return this.$store.getters.fnGetLoading
        },
        fnGetErrMsg(){
            return this.$store.getters.fnGetErrorMessage;
        }

    },
    methods : {
        fnRegisterUser() {
            if(this.fnComparePassword == true) {
                this.$store.dispatch('fnRegisterUser', {
                    pEmail : this.sEmail,
                    pPassword : this.sPassword
                })
            }
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
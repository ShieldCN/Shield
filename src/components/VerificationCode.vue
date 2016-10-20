<style>

.movepwd {
    display: block;
    height: 1.328125rem;
    background: #c8c8c8;
    width: 3.21875rem;
    text-align: center;
}

</style>

<template>

<span class="fr movepwd font10" @click="getCode">{{codeText}}</span>






<error-pop :is-show.sync="isError" :pop-text="errorText"></error-pop>

</template>

<script>

export default {
    replace: true,
    props: {
        'phoneNumber': {
            type: [String, Number],
            required: true
        },
        'type': {
            type: [String, Number],
            default: 0
        },
        'verificationAccount': {
            type: [Boolean],
            default: false
        }

    },
    data() {
        return {
            codeText: '获取验证码',
            codeState: true,
            errorText: '',
            isError: ''
        }
    },
    methods: {
        //验证码倒计时
        countdown() {
                let self = this;

                self.codeState = false;
                let time = 60;
                let timer = null;
                let params = JSON.stringify({
                    mobile: self.phoneNumber,
                    type: self.type
                });

                self.$http.post(configPath.apiBaseUrl + 'smsCodes/send', params, {
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8'
                    }
                }).then((res) => {

                }, (e) => {
                  console.error(e);
                });
                timer = setInterval(() => {
                    self.codeText = (time - 1) + '秒后重新获取';
                    time = time - 1;
                    if (time === 0) {
                        self.codeState = true;
                        self.codeText = '获取验证码';
                        clearInterval(timer);
                    }
                }, 1000);
            },
            getCode() {

                let self = this;
                if(!self.codeState){
                  return false;
                }
                if (!/^1[3|4|5|7|8]\d{9}$/.test(self.phoneNumber)) {

                    self.errorText = '请输入正确的手机号';
                    self.isError = true;
                    return false;
                }
                if (self.verificationAccount) {
                    self.$http.post(configPath.apiBaseUrl + `account/${self.phoneNumber}/confirm?r=` + Math.random()).then((res) => {
                        if (res.data && res.data.code == 404) {
                            self.errorText = res.data.message;
                            self.isError = true;
                        }
                        if (res.data && res.data.code == 0) {

                            self.countdown();
                        }
                    }, (e) => {
                        console.error(e);
                    });
                } else {
                    self.countdown();
                }
            }
    },
    components: {
        "errorPop": require('./errorPop.vue')
    }
}

</script>

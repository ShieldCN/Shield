

<template>

<div class="order">
    <jyn-header :jyn-title="bookTitle"> </jyn-header>
    <div class="top fl">已选车型：{{bookData.carName}}</div>
    <div class="order-content">
        <div class="order-con fl">
            <validator name="registerForm">
                <form novalidate>
                    <div class="username fl">
                        <span>您的姓名：</span>
                        <span class="username-input">
                    <input v-model="bookObject.name" type="text" v-validate:name="{ required: true,name:true}" id="name" class="input-required" >
                    </span>
                    </div>
                    <div class="username fl">
                        <span>手机号码：</span>
                        <span class="username-input">
                    <input type="text" v-validate:phonenumber="{ required: true,phonenumber:true}" id="phonenumber" class="input-required" v-model="bookObject.contactPhone">
                    </span>
                    </div>
                    <div class="inp register fl">
                        <span><input v-validate:code="{ required: true,code:true}" class="identify_code font16" type="text" v-model="bookObject.code" placeholder="输入验证码"></span>
                        <verification-code :phone-number="bookObject.contactPhone" :type="2"></verification-code>
                    </div>
                    <div class="order-btn fl font16" @click="bookCar($registerForm)">立即预约</div>
                </form>
            </validator>
        </div>
    </div>
</div>
<error-pop :is-show.sync="isError" :pop-text="errorText"></error-pop>

</template>

<script>

export default {
    props: {
        bookData: {
            type: Object,
            required: true
        },
        bookTitle: {
            type: String
        }
    },
    data() {
        return {
            isShowPass: false,
            errorText: '',
            isError: false,
            registerForm: {
                phoneNumber: '',
                passWord: '',
                code: ''
            },
            bookObject: {
                no: '',
                contactPhone:'',
                name: '',
                code:'',
                reserveType: 0,
            },
        }
    },
    methods: {
        //立即预约
        bookCar($registerForm) {
                let self = this;
                if (!$registerForm.valid) {
                    self.errorText = self.errorFn($registerForm);
                    self.isError = true;
                    return false
                }
                self.bookObject.no = self.bookData.carNum;
                self.bookObject.reserveType = self.bookData.type;
                self.$http.post(`${configPath.apiBaseUrl}reserveCars/${self.bookData.carNum}`, self.bookObject).then((res) => {
                    if (res.data.code == 400) {
                        self.isError = true;
                        self.errorText = res.data.message;
                    } else {
                        self.isError = true;
                        self.errorText = '预约成功';
                        setTimeout(() => {
                            history.go(-1)
                        }, 1000);
                    }
                }, (e) => {
                    console.error(e);
                })
            },
            errorFn($registerForm) {
                let textArr = [];
                $registerForm.name.required && (textArr.push(`姓名必填`));
                $registerForm.phonenumber.required? textArr.push(`手机号必填`):($registerForm.phonenumber.phonenumber && textArr.push(`手机号格式错误`));
                $registerForm.code.required ?textArr.push(`验证码必填`):  ($registerForm.code.code && textArr.push(`验证码格式错误`));
                return textArr;
            }
    },
    components: {
        "jynHeader": require('./header.vue'),
        "verificationCode": require('./verificationCode.vue'),
        "errorPop": require('./errorPop.vue')
    }
}

</script>

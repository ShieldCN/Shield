

<template>

<div class="detail-fullscreen-slider" style="display: block; " v-if="isShow" @click="hide()">
    <div class="slides-vertical-container">
        <div class="slides-wrapper">
            <div class="slides" style="width: 100%; margin-top:40%">
                <picture-list :pages="pages" :sliderinit.sync="sliderinit">
                </picture-list>
            </div>
        </div>
    </div>
    <div class="fullscreen-footer">
        <label class="pic-index">{{currentPageNumber}} / {{totalPageNumber}}</label>
        <div class="tel-fullscreen" v-if="isNeedBook">
            <a class="right-tel-btn telephone_buy" @click="bookCar">预约看车</a>
        </div>
    </div>
</div>

</template>

<script>

import pictureList from './picture.vue';
import utils from '../libs/utils';
export default {
    replace: true,
    props: {
        isShow: {
            type: Boolean,
            required: true
        },
        pages: {
            type: Array,
            required: true
        },
        bookData: {
            type: Object
        },
        currentPageNumber: {
            type: [String, Number],
            default: 1
        },
        isNeedBook: {
            type: Boolean,
            default: true
        }
    },
    data(){
      return{
        sliderinit:{
            currentPage: 0,
            start: {},
            end: {},
            tracking: false,
            thresholdTime: 500, //滑动判定距离
            thresholdDistance: 100, //滑动判定时间
            loop: true, //无限循环
        }
      }
    },
    computed: {
        totalPageNumber() {
            return this.pages.length;
        }
    },
    methods: {
        hide() {
                let self = this;
                self.isShow = false;
            },
            bookCar(e) {
                e.stopPropagation();
                let self = this,
                    routerName, localStorageName;
                let {
                    type
                } = self.bookData;
                if (type === 0) {
                    routerName = 'newCar.details.bookCar';
                    localStorageName = 'newCar-details-book-car';
                }
                if (type === 1) {
                    routerName = 'usedCar.details.bookCar';
                    localStorageName = 'usedCar-details-book-car';
                }
                if (!routerName || !localStorageName) {
                    return false;
                }
                utils.setCachePromise(localStorageName, self.bookData).then(() => {
                    self.$route.router.go({
                        name: routerName
                    })
                })

            }
    },
    events: {
        slide(data) {
            let self = this;
            self.currentPageNumber = data + 1;
        }
    },
    components: {
        pictureList
    }
}

</script>

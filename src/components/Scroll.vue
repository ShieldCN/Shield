<style lang="sass" scoped>
  @keyframes preloader-spin {
    100% {
      transform: rotate(360deg);
    }
  }
.pull-to-refresh-layer {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 2.2rem;
    color: #999;
    .preloader {
        visibility: hidden;
        width: 20px;
        height: 20px;
        transform-origin: 50%;
        animation: preloader-spin 1s steps(12, end) infinite;
        &:after {
            display: block;
            width: 100%;
            height: 100%;
            content: "";
            background: url('../assets/images/icon/refresh.png');
            background-repeat: no-repeat;
            background-position: 50%;
            background-size: 100%;
        }
    }
    .pull-to-refresh-arrow {
        width: 0.65rem;
        height: 1rem;
        background: no-repeat center;
        background: url('../assets/images/icon/arrow.png');
        background-size: 0.65rem 1rem;
        z-index: 10;
        transform: rotate(0deg) translate3d(0, 0, 0);
        transition-duration: 300ms;
    }
}

.scroll {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    &.content {
        position: absolute;
    }
    &.touching .scroll-inner {
        transition-duration: 0ms;
    }
    &:not(.refreshing) {
        .pull-to-refresh-layer .preloader {
            animation: none;
        }
    }
    &.refreshing {
        .pull-to-refresh-arrow {
            visibility: hidden;
            transition-duration: 0ms;
        }
        .preloader {
            visibility: visible;
        }
    }
    &.pull-up {
        .pull-to-refresh-arrow {
            transform: rotate(180deg) translate3d(0, 0, 0);
        }
    }
}

.scroll-inner {
    position: absolute;
    top: -2.2rem;
    width: 100%;
    transition-duration: 300ms;
}

.label-down,
.label-up,
.label-refresh {
    display: none;
    width: 9rem;
    text-align: center;
}

.label-refresh {
    width: 5rem;
}

.pull-down .label-down,
.pull-up .label-up,
.refreshing .label-refresh {
    display: block;
    padding-left: .5rem;
}

.pull-to-refresh-layer {
    display: flex;
    align-items: center;
    justify-content: center;
}

.infinite-layer {
    height: 2.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
}

.infinite-preloader {
    width: 20px;
    height: 20px;
    transform-origin: 50%;
    animation: preloader-spin 1s steps(12, end) infinite;
    &:after {
        display: block;
        width: 100%;
        height: 100%;
        content: "";
        background: url('../assets/images/icon/refresh.png');
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: 100%;
    }
    margin-right: .5rem;
}

</style>

<template>

<div class="scroll" :style="{'margin-top':marginTop}" :class="{
         'pull-down': (state === 0),
         'pull-up': (state === 1),
         refreshing: (state === 2),
         touching: touching
       }" @touchstart="touchStart($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)" @scroll="(onInfinite || infiniteLoading) ? onScroll($event) : undefined">
    <div class="scroll-inner" :style="{ transform: 'translate3d(0, ' + top + 'px, 0)' }">
        <div class="pull-to-refresh-layer" v-if="!!onRefresh">
            <slot name="refresh">
                <div class="preloader"></div>
                <div class="pull-to-refresh-arrow"></div>
                <span class="label-down">下拉刷新</span>
                <span class="label-up">释放开始刷新</span>
                <span class="label-refresh">刷新中...</span>
            </slot>
        </div>
        <slot></slot>
        <div class="infinite-layer" v-if="enableInfinite">
            <slot name="infinite">
                <div class="infinite-preloader"></div>
                <div>加载中...</div>
            </slot>
        </div>
    </div>
</div>

</template>

<script>

export default {
    props: {
        offset: {
            type: Number,
            default: 44
        },
        enableInfinite: {
            type: Boolean,
            default: true
        },
        enableRefresh: {
            type: Boolean,
            default: true
        },
        onRefresh: {
            type: Function,
            default: undefined,
            required: false
        },
        onInfinite: {
            type: Function,
            default: undefined,
            require: false
        },
        marginTop:{
          type:String,
          default:'1.4rem'
        }
    },
    data() {
        return {
            top: 0,
            state: 0, // 0:down, 1: up, 2: refreshing
            startY: 0,
            touching: false,
            infiniteLoading: false
        }
    },
    methods: {
        touchStart(e) {
                this.startY = e.targetTouches[0].pageY
                this.startScroll = this.$el.scrollTop || 0
                this.touching = true
            },
            touchMove(e) {
                if (!this.enableRefresh || this.$el.scrollTop > 0 || !this.touching) {
                    return
                }
                let diff = e.targetTouches[0].pageY - this.startY - this.startScroll
                if (diff > 0) e.preventDefault()
                this.top = Math.pow(diff, 0.8) + (this.state === 2 ? this.offset : 0)

                if (this.state === 2) { // in refreshing
                    return
                }
                if (this.top >= this.offset) {
                    this.state = 1
                } else {
                    this.state = 0
                }
            },
            touchEnd(e) {
                if (!this.enableRefresh) return
                this.touching = false
                if (this.state === 2) { // in refreshing
                    this.state = 2
                    this.top = this.offset
                    return
                }
                if (this.top >= this.offset) { // do refresh
                    this.refresh()
                } else { // cancel refresh
                    this.state = 0
                    this.top = 0
                }
            },
            refresh() {
                this.state = 2
                this.top = this.offset
                this.onRefresh(this.refreshDone)
            },
            refreshDone() {
                this.state = 0
                this.top = 0
            },

            infinite() {
                this.infiniteLoading = true
                this.onInfinite(this.infiniteDone)
            },

            infiniteDone() {
                this.infiniteLoading = false
            },

            onScroll(e) {
                if (!this.enableInfinite || this.infiniteLoading) {
                    return
                }
                let outerHeight = this.$el.clientHeight
                let innerHeight = this.$el.querySelector('.scroll-inner').clientHeight
                let scrollTop = this.$el.scrollTop
                let ptrHeight = this.onRefresh ? this.$el.querySelector('.pull-to-refresh-layer').clientHeight : 0
                let infiniteHeight = this.$el.querySelector('.infinite-layer').clientHeight
                let bottom = innerHeight - outerHeight - scrollTop - ptrHeight

                if (bottom < infiniteHeight) this.infinite()
            }
    }
}

</script>

<style>
.v-spinner {
    position: fixed;
    height: 100%;
    background: #fff;
    width: 100%;
    z-index: 9999999;
    text-align: center;
    padding-top: 50%;
}
.v-spinner .v-bounce {

}

.v-spinner .v-bounce1 {}

.v-spinner .v-bounce2 {
    -webkit-animation: v-bounceStretchDelay 2s 1s infinite ease-in-out;
    animation: v-bounceStretchDelay 2s 1s infinite ease-in-out;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}

.v-spinner .v-bounce3 {
    -webkit-animation: v-bounceStretchDelay 2s 0s infinite ease-in-out;
    animation: v-bounceStretchDelay 2s 0s infinite ease-in-out;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}
.spinnerStyle {
    background-color: #5dc596;
    height: 1.875rem;
    width:1.875rem;
    border-radius: 100%;
    opacity: 0.6;
    position: absolute;;
    top: 0;
    left: 0;
}
.spinnerBasicStyle{
    height: 1.875rem;
    width: 1.875rem;
    position: relative;;
    display:inline-block;;
  }
@-webkit-keyframes v-bounceStretchDelay {
    0%,
    100% {
        -webkit-transform: scale(0);
        transform: scale(0);
    }
    50% {
        -webkit-transform: scale(1.0);
        transform: scale(1.0);
    }
}

@keyframes v-bounceStretchDelay {
    0%,
    100% {
        -webkit-transform: scale(0);
        transform: scale(0);
    }
    50% {
        -webkit-transform: scale(1.0);
        transform: scale(1.0);
    }
}

</style>

<template>


<div class="v-spinner" v-show="loading">
    <div class="v-bounce v-bounce1 spinnerBasicStyle" >
        <div class="v-bounce v-bounce2 spinnerStyle" >
        </div>
        <div class="v-bounce v-bounce3 spinnerStyle" >
        </div>
    </div>
</div>

</template>

<script>

export default {

    name: 'BounceLoader',
    props: {
        loading: {
            type: Boolean,
            default: true
        },
        color: {
            type: String,
            default: '#5dc596'
        }
    }
}

</script>

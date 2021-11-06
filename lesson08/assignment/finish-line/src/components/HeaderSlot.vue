<template>
    <div class="header-title">
        <!-- jumbotron with animation and transition on render -->
            <transition appear :duration="10000" name="bounce">
            <b-jumbotron :header="title" fluid class="jumbotron"></b-jumbotron>
            </transition>
        <slot/>
    </div>
</template>

<script>

    export default {

        data() {
            return {
                title: 'Crossing the Finish Line!',
            }
        }

    }
</script>

<style scoped>

    .jumbotron {
        color: #f3e230 !important;
        background: linear-gradient(45deg, #9eb5c4, #191970 80%);
    }
    .jumbotron h1 {
        font-weight: 500;
        text-align: right;
    }

    /*animate the jumbotron */
    .bounce-enter-active {
        animation: bounceIn 5s;
    }
    .bounce-leave-active {
    animation: bounceIn 10s reverse;
    }

    @keyframes bounceIn {
        0% {
            transform: scale(0.1);
            margin-left: 100%;
        }
        60% {
            transform: scale(1.5);  
        }
        100% {
            transform: scale(1);
            opacity: 3;
        }
    }

</style>



<template>
    <div id="app">
        <div class='timers-cont'>
            <Timer v-for="t in timers" :key="t"></Timer>
            <TimerAdder></TimerAdder>
        </div>
    </div>
</template>

<script>
    import Timer from './Timer.vue';
    import TimerAdder from './TimerAdder.vue';

    export default {
        name: 'App',
        components: {
            Timer, TimerAdder
        },
        computed: {
            timers() {
                return this.$store.getters.TIMERS;
            },
        }
    }
</script>

<style lang='scss'>
    @font-face {
        font-family: 'Gotham Pro Regular';
        src: url('../assets/fonts/GothamPro.eot');
        src: url('../assets/fonts/GothamPro.eot?#iefix') format('embedded-opentype'),
        url('../assets/fonts/GothamPro.woff') format('woff'),
        url('../assets/fonts/GothamPro.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    body {
        margin: 0;
        font-family: 'Gotham Pro Regular';
        color: #fff;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
        background-color: #353638;
    }
    #app {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        
        .timers-cont {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
        }
    }

    @media (min-width: 1023px) {
        #app {
            .timers-cont {
                width: 825px;
            }
        }
    }

    @media (min-width: 767px) and (max-width: 1023px) {
        #app {
            .timers-cont {
                width: 550px;
            }
        }
    }

    @media (min-width: 320px) and (max-width: 767px) {
        #app {
            .timers-cont {
                width: 275px;
            }
        }
    }
</style>

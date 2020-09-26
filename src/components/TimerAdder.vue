<template>
    <div v-on:click='addTimer' class="timer-adder">
        <img src='../assets/images/add.png'>
    </div>
</template>

<script>
    export default {
        name: 'TimerAdder',
        methods: {
            addTimer: function() {
                const id = new Date().getTime();
                this.$store.dispatch('ADD_TIMER', id);
            }
        }
    }
</script>

<style lang='scss' scoped>
    .timer-adder {
        width: 225px;
        height: 120px;
        background-color: #696969;
        margin: 25px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        user-select: none;
        flex: 0 0 auto;
    }
</style>
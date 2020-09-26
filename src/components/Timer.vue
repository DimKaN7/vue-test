<template>
    <div v-if='counting' class='timer'>
        <div class='timer__time'>
            <span>{{parseTime(Math.floor(this.time))}}</span>
        </div>
        <div class='timer__actions'>
            <div>
                <div v-on:click='onPlayPause' class='action__play-pause'>
                    <img src='../assets/images/pause.png'>
                </div>
                <div v-on:click='onStop' class='action__stop'>
                    <img src='../assets/images/stop.png'>
                </div>
            </div>
        </div>
    </div>

    <div v-else class='timer paused'>
        <div class='timer__time'>
            <span>{{parseTime(Math.floor(this.time))}}</span>
        </div>
        <div class='timer__actions'>
            <div>
                <div v-on:click='onPlayPause' class='action__play-pause'>
                    <img src='../assets/images/play.png'>
                </div>
                <div v-on:click='onStop' class='action__stop'>
                    <img src='../assets/images/stop_dis.png'>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Timer',
        methods: {
            onPlayPause: function() {
                this.counting = !this.counting; 
                if (this.counting) {
                    this.intervalId = setInterval(() => {
                            this.time += 1;
                        }, 10);
                }
                else {
                    clearInterval(this.intervalId);
                }
            },
            onStop: function() {
                this.time = 0;
            },
            parseTime: function(time) {
                const newTime = Math.floor((time + 1) / 100);
                const h = Math.floor(newTime / 3600);
                let m = Math.floor(newTime / 60) - 60 * h;
                let s = `${newTime % 60}`;
                m < 10 ? m = `0${m}` : m = `${m}`;
                s < 10 ? s = `0${s}` : s = `${s}`;
                return h === 0
                            ? m === '00'
                                ? `${s}`
                                : `${m}:${s}`
                            : `${h}:${m}:${s}`;
            },
        },
        data: () => {
            return {
                counting: false,
                time: 0,
                intervalId: null,
            }
        },
        beforeDestroy () {
            clearInterval(this.intervalid1)
        },
    }
</script>

<style lang='scss' scoped>
    %timer-cont {
        width: 100%;
        flex: 0 0 50%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .timer {
        width: 225px;
        height: 120px;
        background-color: #696969;
        margin: 25px;
        display: flex;
        flex-direction: column;
        color: #fff;

        &.paused {
            color: #9E9E9E;

            .timer__time {
                &::after {
                    background-color: #9E9E9E;
                }
            }
        }

        .timer__time {
            @extend %timer-cont;
            position: relative;

            &::after {
                position: absolute;
                content: '';
                width: 100%;
                height: 1px;
                background-color: #fff;
                left: 0px;
                top: 59px;
            }
        }

        .timer__actions {
            @extend %timer-cont;
            user-select: none;

            >div {
                width: 85px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                .action__play-pause, .action__stop {
                    cursor: pointer;
                }
            }
        }
    }
</style>
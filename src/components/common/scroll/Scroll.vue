<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
        <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    data() {
        return {
            scroll: null
        }
    },
    props: {
        probeType: {
            type: Number,
            default: 1
        },
        pullUpload: {
            type: Boolean,
            default: false
        }
    },
    mounted() {
        this._initScroll()
    },
    methods: {
        /* ---------------------------组件事件---------------------------- */
        /* 滚动条滚动 */
        scrollTo(x, y, time) {
            this.scroll && this.scroll.scrollTo(x, y, time)
        },
        /* 停止下拉加载更多 */
        finishPullUp() {
            this.scroll && this.scroll.finishPullUp()
        },
        /* 重新计算scroll区域高度 */
        refresh() {
            this.scroll && this.scroll.refresh()
        },
        /* 获取滚动高度 */
        getScrollY() {
            return this.scroll.y ? this.scroll.y : 0
        },
        /* ---------------------------组件方法---------------------------- */
        /* 初始化滚动信息 */
        _initScroll() {
            this.scroll = new BScroll(this.$refs.wrapper, {
                probeType: this.probeType,
                pullUpLoad: this.pullUpload,
                click: true
            })

            console.log(this.scroll)

            if(this.probeType === 2 || this.probeType === 3) {
                // 监听滚动事件
                this.scroll.on('scroll', pos => {
                    this.$emit('scroll', pos)
                })
            }

            if(this.pullUpload) {
                // 监听下拉加载
                this.scroll.on('pullingUp', () => {
                    this.$emit('pullingUp')
                } )
            }
            
        }
    },
}
</script>

<style>

</style>
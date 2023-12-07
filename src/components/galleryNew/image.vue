<template>
  <figure :class="figureClassName" :id="id" :style="styleObj" @click.stop="handleClick">
    <div class="front">
      <img :src="data.url" :alt="data.title" />
      <h3 class="img-title">{{ data.title }}</h3>
    </div>
    <div class="back" @click.stop="handleClick">
      <p v-html="data.desc"></p>
    </div>
  </figure>
</template>

<script lang='ts' setup>
import { ref, onMounted, watch } from 'vue'
const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  },
  id: {
    type: String,
    default: ''
  },
  arrange: {
    type: Object,
    default: () => ({})
  }
})
const figureClassName = ref("img-figure")
const emit = defineEmits(['reverse', 'center'])
const handleClick = () => {
  if (props.arrange.isCenter) {
    emit('reverse')
  } else {
    emit('center')
  }
}
const styleObj = ref<any>({})
watch(() => props.arrange, (value) => {
  if (value.pos) {
    if(value.pos.left==0||value.pos.left){
      styleObj.value = Object.assign(styleObj.value, { left: value.pos.left + 'px'})
    }
    if(value.pos.top==0||value.pos.top){
      styleObj.value = Object.assign(styleObj.value, { top: value.pos.top + 'px'})
    }
  }
  if (value.rotate) {
    styleObj.value =  Object.assign(styleObj.value, { transform: `rotate(${value.rotate}deg)` })
  }
  if (value.isCenter) {
    styleObj.value = Object.assign(styleObj.value, { zIndex: 11,transform: `rotate(0deg)` })
  }
  figureClassName.value = value.isReverse ? 'img-figure is-reverse' : 'img-figure'

},
  { immediate: true, deep: true }
)
</script>

<style scoped lang="less">
@import url('./gallery.less');
</style>

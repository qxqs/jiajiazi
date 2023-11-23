<template>
  <figure :class="figureClassName" :id="id" :style="styleObj" @click.stop="handleClick">
    <div class="front">
      <img :src="data.url" :alt="data.title" />
      <h3 class="img-title">{{ data.title }}</h3>
    </div>
    <div class="back" @click.stop="handleClick">
      <p>{{ data.desc }}</p>
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
const emit = defineEmits(['reverse','center'])
const handleClick = () => {
  if(props.arrange.isCenter){
      emit('reverse')
    }else{
      emit('center')
    }
}
const styleObj = ref<any>({
  left:0,
  top:0,
  right:0,
  bottom:0,
})
watch(()=>props.arrange,(value)=>{
  if(value.pos){
    styleObj.value = value.pos
  }
  if(value.rotate){
    Object.assign(styleObj.value,{transform:`rotate(${value.rotate}deg)`})
  }
  if(value.isCenter){
    Object.assign(styleObj.value,{zIndex:11})
  }
  figureClassName.value = props.arrange.isReverse ? 'img-figure is-reverse' : 'img-figure'
  
},
{immediate:true,deep:true}
)
</script>

<style scoped lang="less">
@import url('./gallery.less');
</style>

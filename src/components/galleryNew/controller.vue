<template>
  <div>
    <span class="controller" :class="navClassName" @click="handleClick"></span>
  </div>
</template>

<script lang='ts' setup>
import { ref, onMounted, watch } from 'vue'
const props = defineProps({
  arrange:{
    type:Object,
    default:()=>{}
  }
})
const emit = defineEmits(['reverse', 'center'])
const navClassName = ref('')
const handleClick = ()=>{
  if (props.arrange.isCenter) {
    emit('reverse')
  } else {
    emit('center')
  }
}
watch(()=>props.arrange,(val)=>{
  if(!val){
    return
  }
  navClassName.value = val.isCenter ? ' is-center':''
  navClassName.value += val.isReverse ? ' is-reverse':''
},{deep:true,immediate:true})
</script>

<style scoped lang="less">
@import url('./gallery.less');
</style>

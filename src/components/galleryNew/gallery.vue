<template>
  <div class="stage" ref="stageRef">
    <div class="img-container">
      <my-image v-for="(imgInfo, index) in ImgInfos" :key="imgInfo.url" :data="imgInfo" src="@/assets/imgs/1.jpg"
        :id="'figure' + index" :arrange="defaultFigureArrangeArr[index]" @reverse="reverseFigure(index)"
        @center="reArrangFigure(index)" />
    </div>
    <img class="bg-img scale" :src="oldBgImgUrl" />
    <img class="bg-img" :class="bgImgUrl ? 'scale' : ''" :src="bgImgUrl" />
    <nav class="img-nav">
      <controller v-for="(arrange, index) in ImgInfos" :key="index" :arrange="defaultFigureArrangeArr[index]"
        @reverse="reverseFigure(index)" @center="reArrangFigure(index)" />
    </nav>
  </div>
</template>

<script lang='ts' setup>
import ImgsData from './imgsdata.json'
import MyImage from './image.vue';
import { ref, onMounted, watch, nextTick } from 'vue'
let stageRef = ref()
//初始化 figure 的位置
let defaultConstantPos = ref<any>({
  //中间展示 figure
  centerPos: {
    left: 0,
    top: 0
  },
  //水平方向取值范围
  horizontalRange: {
    leftSectionX: [0, 0], //左分区figure 的 x(水平)方向取值范围
    rightSectionX: [0, 0], //右分区figure 的 x(水平)方向取值范围
    y: [0, 0] // y 方向取值范围
  },
  //垂直方向取值范围
  verticalRange: {
    x: [0, 0],
    topSectionY: [0, 0]
  }
})
const getImgUrl = (name: string) => {
  return new URL(`/src/assets/imgs/${name}`, import.meta.url).href;
};
let defaultFigureArrangeArr = ref<any>([])
let ImgInfos = ImgsData.map((img) => {
  return Object.assign(
    img,
    { url: getImgUrl(img.filename) }
  )
})

// 偏移度
let getRandom = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min)
}
//旋转 获取-30~30的随机数字
let getRandomDeg = () => {
  return ((Math.random() > 0.5 ? '' : '-') + Math.ceil(Math.random() * 30))
}

/**
 * 翻转图片
 * @param  index 需要翻转图片的 index 值 
 * 将该图片 isReverse 取反后触发 setState 进行重新渲染
 * @return 返回一个待执行函数
 */
const reverseFigure = (index: number) => {
  defaultFigureArrangeArr.value[index].isReverse = !defaultFigureArrangeArr.value[index].isReverse
}
const bgImgUrl = ref(ImgInfos[0].url)
const oldBgImgUrl = ref(ImgInfos[0].url)
// 重新排布图片
const reArrangFigure = (centerIndex: number) => {
  oldBgImgUrl.value = bgImgUrl.value
  bgImgUrl.value = ''
  setTimeout(() => {
    bgImgUrl.value = ImgInfos[centerIndex].url
  }, 0);
  let constantPos = defaultConstantPos.value
  let centerPos = constantPos.centerPos
  let horizontalRange = constantPos.horizontalRange
  let verticalRange = constantPos.verticalRange
  let leftSectionX = horizontalRange.leftSectionX
  let rightSectionX = horizontalRange.rightSectionX
  let figureArrangeArr = defaultFigureArrangeArr.value
  let centerFigure = figureArrangeArr.splice(centerIndex, 1)
  // 居中图片
  centerFigure = {
    pos: centerPos,
    rotate: 0,
    isReverse: false,
    isCenter: true
  }
  // 上部区域图片
  let topArrNum = Math.floor(Math.random() * 2)// 上部图片数量 0~1
  let topIndex = Math.floor(Math.random() * (figureArrangeArr.length - topArrNum)) // 上部图片起始 index
  let figureTopArr = figureArrangeArr.splice(topIndex, topArrNum)
  let imgList = figureTopArr.length ? figureTopArr : ImgInfos
  imgList.forEach((img: string, index: number) => {
    figureTopArr[index] = {
      pos: {
        left: sizeSetPX(getRandom(verticalRange.x[0], verticalRange.x[1])),
        top: sizeSetPX(getRandom(verticalRange.topSectionY[0], verticalRange.topSectionY[1]))
      },
      rotate: getRandomDeg(),
      isReverse: false,
      isCenter: false
    }
  })
  // 左右两边图片
  let figureList = figureArrangeArr.length ? figureArrangeArr : ImgInfos
  figureList = figureList.sort(() => Math.random() - 0.5)
  for (let i = 0, j = figureList.length, k = j / 2; i < j; i++) {
    if (i % 2) {
      figureArrangeArr[i] = {
        ...figureArrangeArr[i],
        pos: {
          left: sizeSetPX(getRandom(leftSectionX[0], leftSectionX[1])),
          bottom: sizeSetPX(getRandom(horizontalRange.y[0], horizontalRange.y[1]))
        },
      }
    } else {
      figureArrangeArr[i] = {
        ...figureArrangeArr[i],
        pos: {
          right: sizeSetPX(getRandom(rightSectionX[0], rightSectionX[1])),
          bottom: sizeSetPX(getRandom(horizontalRange.y[0], horizontalRange.y[1]))
        },
      }
    }
    figureArrangeArr[i] = {
      ...figureArrangeArr[i],
      rotate: getRandomDeg(),
      isReverse: false,
      isCenter: false
    }
  }
  if (figureTopArr && figureTopArr[0]) {
    figureArrangeArr.splice(topIndex, 0, figureTopArr[0])
  }
  figureArrangeArr.splice(centerIndex, 0, centerFigure)
  defaultFigureArrangeArr.value = figureArrangeArr
}

// 在组件初次渲染之后触发，计算figure位置范围
onMounted(() => {
  // 获取 stage 的宽高
  let stageWidth = stageRef.value.scrollWidth
  let stageHeight = stageRef.value.scrollHeight
  let halfStageWidth = Math.ceil(stageWidth / 2)
  let halfStageHeight = Math.ceil(stageHeight / 2)
  // 获取 figure 的宽高
  let figure = document.getElementById('figure0') || {} as any
  let figureWidth = figure.scrollWidth
  let figureHeight = figure.scrollHeight
  let halfFigureWidth = Math.ceil(figureWidth / 2)
  let halfFigureHeight = Math.ceil(figureHeight / 2)
  defaultConstantPos.value = {
    // 中心 figure 位置
    centerPos: {
      left: sizeSetPX(halfStageWidth - halfFigureWidth),
      top: sizeSetPX(halfStageHeight - halfFigureHeight)
    },
    horizontalRange: {
      leftSectionX: [0, halfFigureWidth * (3 / 2)],
      rightSectionX: [halfFigureWidth * (3 / 2), 0],
      y: [-halfFigureHeight, stageHeight - halfFigureHeight]
    },
    verticalRange: {
      x: [halfStageWidth - figureWidth, halfStageWidth],
      topSectionY: [-halfFigureHeight, halfStageHeight - 3 * halfFigureHeight]
    }
  }
  reArrangFigure(0)
})

const sizeSetPX = (number: number) => {
  if (!number) {
    return number
  }
  return number + 'px'
}
</script>

<style scoped lang="less">
@import url('./gallery.less');

.bg-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  transform: scale(.1);
  opacity: 0;
  overflow: hidden;
  object-fit: cover;
}

.scale {
  z-index: 0;
  opacity: 1;
  transform: scale(1);
  transition: all .5s;
}
</style>

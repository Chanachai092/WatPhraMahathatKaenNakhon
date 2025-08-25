<template>
  <div class="home-page-fullscreen">
    <div
      class="carousel-track"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      @transitionend="handleTransitionEnd"
      ref="track"
    >
      <!-- Clone last image -->
      <div class="slide">
        <img :src="images[images.length - 1]" class="temple-image" alt="clone-last" />
      </div>
      <!-- Images -->
      <div class="slide" v-for="(img, idx) in images" :key="idx">
        <img :src="img" class="temple-image" :alt="`image-${idx}`" />
      </div>
      <!-- Clone first image -->
      <div class="slide">
        <img :src="images[0]" class="temple-image" alt="clone-first" />
      </div>
    </div>

    <!-- ✅ overlay-text ภาษาไทยแนวนอน -->
    <div class="overlay-text">
      <h2>🙏 ยินดีต้อนรับสู่เว็บไซต์วัดพระมหาธาตุแก่นนคร</h2>
    </div>

    <!-- Dots -->
    <div class="dots">
      <span
        v-for="(img, idx) in images"
        :key="idx"
        class="dot"
        :class="{ active: idx === (currentIndex - 1 + images.length) % images.length }"
        @click="goToImage(idx + 1)"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const images = [
  'https://cms.dmpcdn.com/travel/2022/12/21/b1f64700-80fa-11ed-8433-93895adf0d79_webp_original.jpg',
  'https://palanla.com/ckeditor/upload/files/id37/domestic_location/Pra%20Mahathat%20Kaen%20Nakhon/003.jpg',
  'https://img.wongnai.com/p/1920x0/2019/08/08/eb4865f482974a99b4165a16e0db592f.jpg',
]

const currentIndex = ref(1)
const isTransitioning = ref(false)
const track = ref(null)

const nextImage = () => {
  if (isTransitioning.value) return
  isTransitioning.value = true
  currentIndex.value++
}

const goToImage = (idx) => {
  if (isTransitioning.value) return
  isTransitioning.value = true
  currentIndex.value = idx
}

const handleTransitionEnd = () => {
  isTransitioning.value = false
  if (currentIndex.value === images.length + 1) {
    currentIndex.value = 1
    track.value.style.transition = 'none'
    track.value.style.transform = `translateX(-${currentIndex.value * 100}%)`
    void track.value.offsetWidth
    track.value.style.transition = ''
  }
  if (currentIndex.value === 0) {
    currentIndex.value = images.length
    track.value.style.transition = 'none'
    track.value.style.transform = `translateX(-${currentIndex.value * 100}%)`
    void track.value.offsetWidth
    track.value.style.transition = ''
  }
}

let intervalId
onMounted(() => {
  intervalId = setInterval(nextImage, 5000)
})
onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<style scoped>
.home-page-fullscreen {
  position: relative;
  width: 100%;
  height: 120vh;
  overflow: hidden;
  font-family: 'Sarabun', sans-serif;
  color: white;
}

/* track */
.carousel-track {
  display: flex;
  height: 100%;
  transition: transform 0.5s ease;
}

/* แต่ละสไลด์ */
.slide {
  flex: 0 0 100%; /* slide กว้างเต็มจอเสมอ */
  height: 100%;
}

.temple-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* ให้ครอบเต็ม frame */
  filter: brightness(0.6);
  user-select: none;
  pointer-events: none;
}

/* ✅ overlay-text ภาษาไทยแนวนอน */
.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;                 
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 15px;
  z-index: 10;
  max-width: 95%;
  text-align: center;
  white-space: nowrap;           /* ✅ ไม่ให้ขึ้นบรรทัดใหม่ */
  overflow: hidden;              /* ✅ ป้องกันข้อความล้น */
}

.overlay-text h2 {
  font-size: clamp(1rem, 4vw, 2.5rem); /* ✅ ย่อ-ขยายออโต้ */
  font-weight: 700;
  margin: 0;
  line-height: 1.4;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
}

/* dots */
.dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 30;
}
.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background 0.3s;
}
.dot.active {
  background: white;
}

/* responsive */
@media (max-width: 768px) {
  .overlay-text {
    padding: 0.6rem 1rem;
  }
  .overlay-text h2 {
    font-size: clamp(0.8rem, 4vw, 1.8rem); /* ✅ มือถือเล็กยังย่อได้ */
  }
  .dot {
    width: 10px;
    height: 10px;
  }
}
</style>

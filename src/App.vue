<template>
  <div id="app">
    <header>
      <h1>วัดพระมหาธาตุแก่นนคร</h1>
    </header>

    <nav class="nav-buttons">
      <router-link to="/" v-slot="{ isActive }">
        <button :class="{ active: isActive }">หน้าหลัก</button>
      </router-link>
      <router-link to="/info" v-slot="{ isActive }">
        <button :class="{ active: isActive }">ข้อมูลวัด</button>
      </router-link>
      <router-link to="/history" v-slot="{ isActive }">
        <button :class="{ active: isActive }">ประวัติวัด</button>
      </router-link>
      <router-link to="/tourist" v-slot="{ isActive }">
        <button :class="{ active: isActive }">ข้อมูลท่องเที่ยว</button>
      </router-link>
      <router-link to="/panorama" v-slot="{ isActive }">
        <button :class="{ active: isActive }">ภาพ 360°</button>
      </router-link>
    </nav>

    <main class="content-area">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@400;700&display=swap');

/* ✅ reset browser */
:global(html, body) {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  font-family: 'Sarabun', sans-serif;
}

/* ✅ app wrapper */
#app {
  background: linear-gradient(135deg, rgba(255, 244, 224, 0.88), rgba(243, 216, 174, 0.88)),
              url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80');
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #4b3b2b;
  padding-bottom: 3rem;
  box-sizing: border-box;
}

/* หัวเว็บ */
header {
  background: linear-gradient(90deg, #a6794e, #d4af7f, #b68b4c);
  background-size: 300% 300%;
  animation: headerGradient 8s ease infinite;
  color: #fff8e7;
  text-align: center;
  padding: 1.5rem 2rem;
  font-weight: 800;
  letter-spacing: 2px;
  border-radius: 0 0 25px 25px;
  box-shadow: 0 6px 20px rgba(166, 134, 68, 0.6);
  width: 100%;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
}

header h1 {
  font-size: clamp(20px, 6vw, 48px);
  line-height: 1.3;
  margin: 0;
}

/* ✅ auto font ทุก element */
h2 {
  font-size: clamp(18px, 4.5vw, 36px);
  line-height: 1.3;
  margin: 0.5rem 0;
}

h3 {
  font-size: clamp(16px, 3.5vw, 28px);
  line-height: 1.4;
  margin: 0.5rem 0;
}

p {
  font-size: clamp(14px, 2.8vw, 20px);
  line-height: 1.6;
  margin: 0.5rem 0;
}

@keyframes headerGradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* เมนู */
.nav-buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  margin: 1.5rem 0;
  width: 100%;
  flex-wrap: nowrap;
  overflow-x: auto; /* ✅ scroll ได้ถ้าปุ่มเยอะ */
  padding: 0 0.5rem;
}

.nav-buttons button {
  flex: 1 1 auto;
  max-width: 220px;
  min-width: 140px;
  padding: clamp(0.5rem, 2vw, 1rem);
  font-size: clamp(12px, 2.5vw, 18px);
  font-weight: 700;
  letter-spacing: 0.04em;
  font-family: 'Sarabun', sans-serif;
  color: #fffdf2;
  background: linear-gradient(270deg, #6b4c23, #d9af76, #b47c2a, #6b4c23);
  background-size: 400% 400%;
  animation: buttonGradient 12s ease infinite;
  border: none;
  border-radius: 35px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(107, 76, 35, 0.7),
              inset 0 -3px 6px rgba(255, 255, 255, 0.3);
  transition: transform 0.25s ease, box-shadow 0.35s ease;
  white-space: nowrap;
}

@keyframes buttonGradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.nav-buttons button.active {
  background: linear-gradient(270deg, #d9af76, #b47c23, #b47c2a, #d9af76);
  box-shadow: 0 0 14px 4px rgba(217, 175, 118, 0.85);
  color: #3e2f0b;
}

.nav-buttons button:hover {
  transform: translateY(-4px) scale(1.12);
  box-shadow: 0 8px 30px rgba(217, 175, 118, 0.95),
              inset 0 -3px 8px rgba(255, 255, 255, 0.4);
}

.nav-buttons button:active {
  transform: scale(0.95);
}

/* Responsive */
/* 📱 จอมือถือ */
@media (max-width: 768px) {
  .nav-buttons {
    justify-content: flex-start;
  }
  .nav-buttons button {
    flex: 0 0 auto;
  }
}

/* 💻 จอคอม */
@media (min-width: 769px) {
  .nav-buttons button {
    flex: 1 1 20%;
  }
}
</style>

<template>
  <div id="app">
    <!-- Header -->
   <header>
  <h1 class="header-title">
    <span class="thai">วัดพระมหาธาตุแก่นนคร</span>
    <span class="eng">Wat Phra Mahathat Kaen Nakhon</span>
  </h1>
</header>

    <!-- Navigation -->
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

    <!-- Content -->
    <main class="content-area">
      <router-view />
    </main>

    <!-- Contact Section -->
    <section class="contact-map-section">
      <div class="contact-details">
        <h2>ติดต่อ</h2>
        <p class="address">CR5M+7M4, ซอย, วัดหนองแวง, อำเภอเมืองขอนแก่น ขอนแก่น 40000</p>
        <p class="address">เหมาะแก่การไหว้พระ ชมวิว และถ่ายภาพ</p>
        <p class="phone">Tel: 080-236-6391</p>
        <p class="facebook">
          <a href="https://www.facebook.com/watnongwaengkhonkaen" target="_blank" rel="noopener noreferrer">
            วัดหนองแวง พระอารามหลวง-วัดเหนือ
          </a>
        </p>
        <p><strong>เวลาทำการ:</strong> เปิดทุกวัน เวลา 06.00 – 18.00 น.</p>
      </div>
      <div class="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.3177723167617!2d102.835437!3d16.432018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31228b9f13a5e0d3%3A0x3a0a1e6f13b4c80!2z4Lit4Liy4LiE4Liy4LiZ4LmA4LiB4Liy4Lij4Lix4Lia4LmJ4Lit4LiyIOC4hOC4tOC4meC5gOC4oeC4suC4hOC4seC5jOC4l-C4oeC5jCDguIjguLPguYDguKHguLLguIHguK3guJnguKHguKXguKLguJXguYnguJnguJnguIfguKPguJnguLHguIrguKPguKPguYnguJnguLHguJfguJnguJTguJnguJXguKPguKHguKI!5e0!3m2!1sth!2sth!4v1692956400000"
          allowfullscreen
          loading="lazy"
          title="แผนที่วัดพระมหาธาตุแก่นนคร">
        </iframe>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@400;700&display=swap');

:global(html, body) {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  font-family: 'Sarabun', sans-serif;
}

#app {
  background: linear-gradient(135deg, rgba(255, 244, 224, 0.88), rgba(243, 216, 174, 0.88)),
              url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  color: #4b3b2b;
  padding-bottom: 0.5rem;
  box-sizing: border-box;
}

header {
  background: linear-gradient(90deg, #a6794e, #d4af7f, #b68b4c);
  width: 98%;
  padding: 1.5rem 1rem;
  border-radius: 0 0 25px 25px;
  color: #fff8e7;
  text-align: center;
  box-shadow: 0 6px 20px rgba(166, 134, 68, 0.6);
}

.header-title {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
}

header .thai {
  font-size: clamp(26px, 6vw, 46px);
  font-weight: 1000;
}

header .eng {
  font-size: clamp(27px, 5vw, 28px);
  font-weight: 500;
  font-style: italic;
  opacity: 0.9;
}


.nav-buttons {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin: 1.5rem auto;
  flex-wrap: wrap;
  width: 100%;
}
.nav-buttons button {
  padding: clamp(0.5rem, 2vw, 1rem);
  border-radius: 35px;
  font-size: 19px;
  font-weight: 700;
  font-family: 'Sarabun', sans-serif;
  background: linear-gradient(270deg, #6b4c23, #d9af76, #b47c2a);
  color: #fff;
  border: none;
  cursor: pointer;
  transition: transform 0.25s;
}
.nav-buttons button:hover {
  transform: translateY(-5px) scale(1.1);
}
.nav-buttons button.active {
  background: linear-gradient(270deg, #d9af76, #b47c2a);
  font-size: 19px;
  font-family: 'Sarabun', sans-serif;
  color: #573f07;
}

.content-area {
  width: 100%;
}

.contact-map-section {
  background: rgba(255, 250, 240, 0.95);
  padding: 4rem 2rem;
  display: flex;
  gap: 3rem;
  justify-content: center;
  align-items: flex-start;
  max-width: 1100px;
  margin: 3rem auto;
  border-radius: 20px;
  border-top: 5px solid #b47c2a;
}
.contact-details {
  flex: 1;
  max-width: 480px;
  border-right: 2px solid #d9af76;
  padding-right: 1.5rem;
}
.contact-details p {
  margin: 1rem 0;
  padding-left: 2rem;
  position: relative;
}
.contact-details p a {
  color: #4b3b2b;
  text-decoration: none;
  transition: color 0.3s;
}
.contact-details p a:hover {
  color: #b47c2a;
  text-decoration: underline;
}
.contact-details p.address::before { content: "📍"; position: absolute; left: 0; }
.contact-details p.phone::before { content: "📞"; position: absolute; left: 0; }
.contact-details p.facebook::before { content: "📘"; position: absolute; left: 0; }

.map-container {
  flex: 1;
  max-width: 600px;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(180,124,42,0.25);
  border: 4px solid #d9af76;
  transition: transform 0.4s ease;
}
.map-container iframe {
  width: 100%;
  height: 420px;
  border: none;
  border-radius: 14px;
}
.map-container:hover {
  transform: scale(1.05);
}

@media (max-width: 900px) {
  .contact-map-section {
    flex-direction: column;
    padding: 3rem 1.5rem;
    max-width: 100%;
    border-radius: 14px;
  }
  .contact-details {
    border-right: none;
    border-bottom: 2px solid #d9af76;
    padding: 0 0 2rem 0;
    max-width: 100%;
  }
  .map-container {
    max-width: 100%;
  }
}
</style>
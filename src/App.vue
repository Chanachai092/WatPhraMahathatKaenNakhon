<template>
  <div id="app">
    <!-- Header -->
    <header>
      <h1>วัดพระมหาธาตุแก่นนคร</h1>
      <h1>Wat Phra Mahathat Kaen Nakhon</h1>
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
<section class="contact-map-section">
  <div class="contact-details">
  <h2>ติดต่อ</h2>
  <p class="address">สำนักงานวัดพระเชตุพน (หอสมุดสมเด็จ ว.ม.ค.)</p>
  <p class="address">2 ถนนสนามไชย แขวงพระบรมมหาราชวัง เขตพระนคร กรุงเทพมหานคร 10200</p>
  <p class="phone">โทร (Tel): 083-057-7100</p>
  <p class="fax">โทรสาร (Fax): 02-226-0370, 083-057-7100</p>
  <p class="email">Email: watpho.th@gmail.com</p>
  <p class="facebook">Facebook Page: วัดโพธิ์ ท่าเตียน Wat Pho</p>
  <p><strong>เวลาทำการ:</strong> เปิดทุกวัน</p>
</div>

</section>
    <!-- Footer -->
    <footer class="contact-footer">
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@400;700&display=swap');

/* Reset */
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
  background-position: center center;
  background-attachment: fixed;
  min-height: 100vh;  /* ใช้เต็มความสูง viewport */
  height: 100vh;      /* ให้เต็มความสูง */
  width: 100vw;       /* ให้เต็มความกว้าง viewport */
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #4b3b2b;
  padding-bottom: 10rem;
  box-sizing: border-box;
  overflow-y: auto;   /* เลื่อนแนวตั้งได้ถ้าเนื้อหายาว */
  overflow-x: hidden; /* ซ่อนเลื่อนขวาง */
}


/* Header */
header {
  background: linear-gradient(90deg, #a6794e, #d4af7f, #b68b4c);
  background-size: 400% 400%;
  animation: headerGradient 8s ease infinite;
  color: #fff8e7;
  text-align: center;
  padding: 1.5rem 1rem;
  border-radius: 0 0 25px 25px;
  box-shadow: 0 6px 20px rgba(166, 134, 68, 0.6);
  width: 100%;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  position: relative;
  z-index: 10;
}

header h1 {
  margin: 0;
  display: flex;              /* ✅ ใช้ flex */
  justify-content: center;    /* ✅ จัดให้อยู่กลางแนวนอน */
  align-items: center;        /* ✅ จัดให้อยู่กลางแนวตั้ง */
  gap: 1.2rem;                /* ✅ ระยะห่างระหว่างไทย-อังกฤษ */
  flex-wrap: wrap;            /* ✅ กันกรณีจอเล็ก → ขึ้นบรรทัดใหม่ */
}

header h1 .thai {
  font-size: clamp(26px, 6vw, 46px);
  font-weight: 800;
}

header h1 .eng {
  font-size: clamp(18px, 5vw, 28px);
  font-weight: 500;
  font-style: italic; /* ✅ เพิ่มความต่างเล็กน้อย */
  opacity: 0.9;
}

header::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 3px;
  background: linear-gradient(to right, #d9af76, #fff5d7, #d9af76);
  border-radius: 3px;
}

header h1 {
  font-size: clamp(20px, 6vw, 48px);
  line-height: 1.3;
  margin: 0;
}

/* Fonts auto-size */
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

/* Contact + Google Map Section */
.contact-map-section {
  background: rgba(255, 250, 240, 0.95);
  padding: 4rem 2rem;
  display: flex;
  flex-wrap: nowrap;
  gap: 3rem;
  justify-content: center;
  align-items: flex-start;
  border-top: 5px solid #b47c2a;
  color: #4b3b2b;
  box-shadow: inset 0 0 15px rgba(180, 124, 42, 0.2);
  font-family: 'Sarabun', sans-serif;
  max-width: 1100px;
  margin: 3rem auto 6rem;
  border-radius: 20px;
}

.contact-map-section h2 {
  font-size: clamp(28px, 4vw, 38px);
  font-weight: 700;
  color: #6b4c23;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 3px rgba(180,124,42,0.5);
  flex-basis: 100%;
  text-align: center;
  user-select: none;
}

.contact-details {
  flex: 1 1 50%;
  max-width: 480px;
  font-size: clamp(17px, 2.5vw, 20px);
  line-height: 1.7;
  padding: 0 1.5rem;
  border-right: 2px solid #d9af76;
  color: #5a4220;
  position: relative;
  user-select: text;
}

.contact-details p {
  margin: 1rem 0;
  padding-left: 2.8rem;
  position: relative;
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: default;
  letter-spacing: 0.02em;
}

.contact-details p::before {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.6rem;
  color: #b47c2a;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-details p.address::before { content: "📍"; }
.contact-details p.phone::before { content: "📞"; }
.contact-details p.email::before { content: "✉️"; }
.contact-details p.facebook::before { content: "📘"; }

.contact-details p:hover {
  color: #b47c2a;
  text-shadow: 0 0 8px #d9af76;
}
.contact-details p:hover::before {
  color: #d9af76;
  filter: drop-shadow(0 0 3px #d9af76);
}

.map-container {
  flex: 1 1 50%;
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
  user-select: none;
}

.map-container:hover {
  transform: scale(1.05);
  box-shadow: 0 20px 45px rgba(180,124,42,0.45);
}

/* Navigation */
.nav-buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  margin: 1.5rem 0;
  width: 100%;
  flex-wrap: nowrap;
  overflow-x: auto;
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
  transition: transform 0.25s ease, box-shadow 0.35s ease, background 0.5s;
  white-space: nowrap;
}

.nav-buttons button:hover {
  transform: translateY(-5px) scale(1.12);
  box-shadow: 0 8px 25px rgba(217, 175, 118, 1),
              inset 0 -3px 8px rgba(255, 255, 255, 0.5);
  background: linear-gradient(270deg, #e2c07d, #b47c2a, #d9af76, #e2c07d);
}

.nav-buttons button.active {
  background: linear-gradient(270deg, #d9af76, #b47c23, #b47c2a, #d9af76);
  box-shadow: 0 0 14px 4px rgba(217, 175, 118, 0.85);
  color: #3e2f0b;
}

.nav-buttons button:active {
  transform: scale(0.95);
}

@keyframes buttonGradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Footer */
.contact-footer {
  width: 100%;
  background: linear-gradient(135deg, rgba(244,229,200,0.98), rgba(252,244,220,0.85));
  padding: 2rem 1rem;
  box-sizing: border-box;
  color: #604b21;
  font-weight: 600;
  max-width: 1100px;
  margin: 0 auto 4rem;
  border-radius: 20px;
  box-shadow: inset 0 0 20px rgba(180,124,42,0.2);
  font-family: 'Sarabun', sans-serif;
}

.contact-footer h2 {
  margin-bottom: 1.2rem;
  font-weight: 700;
  font-size: clamp(22px, 4vw, 32px);
  text-align: center;
  color: #6b4c23;
  text-shadow: 1px 1px 3px rgba(180,124,42,0.5);
}

.contact-footer ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
  font-size: clamp(16px, 2.8vw, 20px);
  line-height: 1.6;
  user-select: text;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
}

.contact-footer ul li {
  padding-left: 1.2rem;
  position: relative;
}

.contact-footer ul li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.4rem;
}

/* Responsive */
@media (max-width: 900px) {
  .contact-map-section {
    flex-direction: column;
    padding: 3rem 1.5rem;
    max-width: 100%;
    border-radius: 14px;
  }
  .contact-details {
    max-width: 100%;
    padding: 0 0 2rem 0;
    border-right: none;
    border-bottom: 2px solid #d9af76;
  }
  .map-container {
    max-width: 100%;
    height: 380px;
  }
  .map-container iframe {
    height: 380px;
  }
}

/* Animation for header */
@keyframes headerGradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
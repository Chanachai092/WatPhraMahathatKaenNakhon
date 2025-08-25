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

    <!-- Footer -->
    <footer class="contact-footer">
      <h2>ข้อมูลติดต่อ</h2>
      <ul>
        <li><strong>ที่อยู่:</strong> วัดหนองแวง, อำเภอเมืองขอนแก่น, ขอนแก่น 40000</li>
        <li><strong>เบอร์โทรศัพท์:</strong> 080-236-6391 </li>
        <li><strong>Email:</strong> info@watphramahathat.com </li>
        <li><strong>Facebook:</strong> 
          <a href="https://www.facebook.com/wathnongwaeng.khonkaen/" target="_blank">
            facebook.com/watphramahathat
          </a>
        </li>
      </ul>
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

/* App wrapper */
#app {
  background: linear-gradient(135deg, rgba(255, 244, 224, 0.88), rgba(243, 216, 174, 0.88)),
              url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80');
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  min-height: 140vh;
  width: 106%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #4b3b2b;
  padding-bottom: 10rem;
  box-sizing: border-box;
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

@keyframes headerGradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
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
  background: linear-gradient(135deg, rgba(244,229,200,0.98), rgba(252,244,220,0.95));
  border-top: 5px solid #b47c2a;
  padding: 3rem 3rem;
  box-shadow: inset 0 2px 10px rgba(0,0,0,0.08);
  color: #4b3b2b;
  position: relative;
  overflow: hidden;
  animation: fadeIn 1.2s ease;
  text-align: center;
}

/* ลายไทย overlay */
.contact-footer::before {
  content: "";
  position: absolute;
  inset: 0;
  background: url("https://png.pngtree.com/png-clipart/20230916/original/pngtree-golden-thai-pattern-background-png-image_12230574.png") repeat;
  background-size: 300px;
  opacity: 0.07;
  pointer-events: none;
  animation: patternMove 20s linear infinite;
}

@keyframes patternMove {
  0% { background-position: 0 0; }
  100% { background-position: 300px 300px; }
}

.contact-footer h2 {
  margin-bottom: 2rem;
  font-weight: 700;
  color: #6b4c23;
  font-size: 1.8rem;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.1);
  position: relative;
}

.contact-footer h2::after {
  content: "";
  display: block;
  width: 80px;
  height: 3px;
  margin: 12px auto 0;
  background: linear-gradient(to right, #b47c2a, #e6c98f, #b47c2a);
  border-radius: 3px;
}

/* ✅ Grid Layout สำหรับข้อมูลติดต่อ */
.contact-footer ul {
  list-style: none;
  padding-left: 0;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem 2rem;
  max-width: 1000px;
}

.contact-footer li {
  font-size: 1.05rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1rem;
  background: rgba(255, 255, 255, 0.65);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: transform 0.25s ease, background 0.25s, color 0.25s;
}

.contact-footer li:hover {
  transform: translateY(-4px);
  color: #b47c2a;
  background: rgba(255, 255, 240, 0.9);
}

.contact-footer li::before {
  font-size: 1.2rem;
}

.contact-footer li:nth-child(1)::before { content: "📍"; }
.contact-footer li:nth-child(2)::before { content: "☎"; }
.contact-footer li:nth-child(3)::before { content: "✉"; }
.contact-footer li:nth-child(4)::before { content: "📘"; }

.contact-footer a {
  color: #6b4c23;
  font-weight: 500;
  text-decoration: none;
  border-bottom: 1px dotted transparent;
  transition: all 0.3s ease;
}

.contact-footer a:hover {
  color: #b47c2a;
  border-bottom: 1px dotted #b47c2a;
  text-shadow: 0 0 6px rgba(180,124,42,0.7);
}

/* fade-in */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Responsive */
@media (max-width: 768px) {
  .contact-footer {
    padding: 2rem 1.2rem;
  }
  .contact-footer ul {
    grid-template-columns: 1fr;
  }
  .contact-footer li {
    justify-content: center;
  }
  .nav-buttons {
    justify-content: flex-start;
  }
  .nav-buttons button {
    flex: 0 0 auto;
  }
}
</style>

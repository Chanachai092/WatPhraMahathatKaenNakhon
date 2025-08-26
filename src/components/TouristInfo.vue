<template> 
  <section class="tourist-page">
    <!-- แบนเนอร์หัวเรื่อง -->
    <div class="title-banner">
      <h2 class="animate-fade-up">🌸 {{ title }} 🌸</h2>
      <p class="animate-fade-up delay-1">{{ subtitle }}</p>
    </div>

    <!-- การ์ดข้อมูล -->
    <div class="info-grid">
      <div
        v-for="(item, index) in infoCards"
        :key="index"
        class="info-card animate-zoom-in"
        :style="{ animationDelay: `${index * 0.15}s` }"
      >
        <h3>{{ item.icon }} {{ item.title }}</h3>
        <p v-if="item.text">{{ item.text }}</p>
        <ul v-if="item.list">
          <li v-for="(activity, i) in item.list" :key="i">{{ activity }}</li>
        </ul>
      </div>
    </div>

    <!-- ส่วนรายละเอียด -->
    <div class="detail-section animate-fade-up delay-2">
      <h3>📜 {{ historyTitle }}</h3>
      <p>{{ historyText }}</p>

      <h3>🛕 ไฮไลต์ที่น่าสนใจ</h3>
      <ul>
        <li v-for="(highlight, i) in highlights" :key="i">
          <strong>{{ highlight.title }}:</strong> {{ highlight.desc }}
        </li>
      </ul>

      <h3>🎎 ประเพณีประจำปี</h3>
      <ul>
        <li v-for="(event, i) in annualEvents" :key="i">{{ event }}</li>
      </ul>

      <h3>📝 คำแนะนำสำหรับนักท่องเที่ยว</h3>
      <ul>
        <li v-for="(tip, i) in tips" :key="i">{{ tip }}</li>
      </ul>

      <h3>🕰 ช่วงเวลาน่าเที่ยว</h3>
      <table class="visit-table">
        <thead>
          <tr>
            <th>ฤดูกาล</th>
            <th>จุดเด่น</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(season, i) in seasons" :key="i">
            <td>{{ season.period }}</td>
            <td>{{ season.highlight }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- แผนที่ -->
    <div class="map-section animate-fade-up delay-3">
      <h3>🗺 {{ mapTitle }}</h3>
      <div class="map-frame">
        <iframe
          :src="mapSrc"
          width="100%"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>

    <!-- ปุ่มกลับหน้าหลัก -->
    <div class="back-button animate-fade-up delay-3">
      <router-link to="/">
        <button>
          <i class="fas fa-arrow-left" style="margin-right: 0.5rem;"></i>กลับหน้าหลัก
        </button>
      </router-link>
    </div>
  </section>
</template>

<script setup>
const title = 'ท่องเที่ยววัดหนองแวง พระอารามหลวง'
const subtitle = 'พาใจสงบในศิลป์แห่งศรัทธาและสถาปัตยกรรมอันงดงาม'

const infoCards = [
  { icon: '📍', title: 'ที่ตั้ง', text: 'ถ.รอบเมือง ต.ในเมือง อ.เมือง จ.ขอนแก่น' },
  { icon: '🕰', title: 'เวลาเปิด-ปิด', text: 'ทุกวัน 06:00 - 18:00 น.' },
  {
    icon: '⭐', title: 'กิจกรรมแนะนำ',
    list: [
      'ชมพระมหาธาตุแก่นนคร 9 ชั้น',
      'สักการะพระบรมสารีริกธาตุ',
      'ชมวิวเมืองขอนแก่นจากชั้นบนสุด'
    ]
  }
]

const historyTitle = 'ประวัติย่อ'
const historyText = 'วัดหนองแวง พระอารามหลวง ตั้งอยู่ริมบึงแก่นนคร...'

const highlights = [
  { title: 'พระมหาธาตุแก่นนคร', desc: 'เจดีย์สูง 9 ชั้น ประดิษฐานพระบรมสารีริกธาตุ' },
  { title: 'พิพิธภัณฑ์', desc: 'จัดแสดงโบราณวัตถุและเรื่องราวเมืองขอนแก่น' },
  { title: 'จุดชมวิว', desc: 'ชั้น 9 มองเห็นวิวเมืองแบบพาโนรามา' }
]

const annualEvents = [
  'งานแห่เทียนพรรษา',
  'งานสงกรานต์ (สรงน้ำพระ)',
  'งานบุญออกพรรษา'
]

const tips = [
  '📷 มาเที่ยวช่วงเช้า แสงสวยและอากาศไม่ร้อน',
  '🙏 แต่งกายสุภาพ หลีกเลี่ยงเสียงดัง',
  '🍽 ร้านอาหารและของฝากมีมากมายรอบวัด'
]

const seasons = [
  { period: 'ธ.ค. - ก.พ.', highlight: 'อากาศเย็น เหมาะกับชมวิวบนชั้น 9' },
  { period: 'เม.ย.', highlight: 'เทศกาลสงกรานต์ สรงน้ำพระ' },
  { period: 'ก.ค. - ส.ค.', highlight: 'งานแห่เทียนพรรษา' },
  { period: 'ต.ค.', highlight: 'งานบุญออกพรรษา' }
]

const mapTitle = 'แผนที่วัดหนองแวง'
const mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.447384047259!2d102.82637211414045!3d16.420303788659225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31228b65f1806cf1%3A0x8c07c5f83f2c1436!2z4Lia4Lij4Li04Lip4Lix4LiZ4LmA4Lir4Lil4Liy4LiZIOC5gOC4muC4peC4sOC5iOC4p-C4sOC5geC4geC4oeC4mQ!5e0!3m2!1sth!2sth!4v1719812810212!5m2!1sth!2sth'
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Thai:wght@400;600&family=Sarabun:wght@400;700&display=swap');

.tourist-page {
  font-family: 'Sarabun', sans-serif;
  background: linear-gradient(180deg, #fffdf6 0%, #f7f1e5 100%);
  color: #4b3825;
  width: 100%;
  border-radius: 12px;
  padding: 1.2rem 1.5rem;
  overflow-x: hidden;
  font-size: clamp(0.9rem, 2.2vw, 1.1rem);
}

/* Banner */
.title-banner {
  text-align: center;
  background: radial-gradient(circle at top, #ffe9c5, #ffddb0);
  padding: 2.5rem 5vw;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}
.title-banner h2 {
  font-size: clamp(1.6rem, 4vw, 2.8rem);
  margin-bottom: 0.5rem;
  color: #aa5c00;
}
.title-banner p {
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  color: #6b4c2f;
}

/* Cards */
.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 0 auto 2rem;
  padding: 0 5vw;
}
.info-card {
  background: #ffffff;
  border-left: 8px solid #f2a65a;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  font-size: clamp(0.95rem, 2.2vw, 1.15rem);
}
.info-card h3 {
  font-size: clamp(1.1rem, 2.8vw, 1.5rem);
  margin-bottom: 0.5rem;
}
.info-card:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.15);
}

/* Detail section */
.detail-section {
  padding: 5vw 2rem;
  line-height: 1.8;
  font-size: clamp(0.9rem, 2.2vw, 1.1rem);
}
.detail-section h3 {
  margin-top: 2rem;
  color: #844c00;
  font-size: clamp(1.2rem, 3vw, 1.6rem);
}
.detail-section ul li {
  font-size: clamp(0.9rem, 2.2vw, 1.1rem);
}

/* Table */
.visit-table {
  margin-top: 1rem;
  border-collapse: collapse;
  width: 100%;
  font-size: clamp(0.9rem, 2.2vw, 1.1rem);
}
.visit-table th, .visit-table td {
  border: 1px solid #ccc;
  padding: 0.75rem;
}
.visit-table th {
  background-color: #f2a65a;
  color: #fff;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
}

/* Map */
.map-section {
  margin-top: 2rem;
  padding: 0 5vw;
}
.map-section h3 {
  font-size: clamp(1.2rem, 3vw, 1.6rem);
}
.map-frame {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 26px rgba(0, 0, 0, 0.18);
}

/* Animation */
@keyframes fade-up {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes zoom-in {
  0% { opacity: 0; transform: scale(0.9); }
  100% { opacity: 1; transform: scale(1); }
}
.animate-fade-up {
  animation: fade-up 0.8s ease forwards;
}
.animate-zoom-in {
  animation: zoom-in 0.6s ease forwards;
}
.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.4s; }
.delay-3 { animation-delay: 0.6s; }

/* Back Button */
.back-button {
  text-align: center;
  margin: 3rem 0 2rem;
}
.back-button button {
  background: #a8621c;
  color: #fff;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 6px 14px rgba(187, 119, 52, 0.6);
  transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  font-weight: 600;
}
.back-button button:hover {
  background: #d98d42;
  box-shadow: 0 8px 20px rgba(217, 141, 66, 0.8);

  transform: translateY(-3px);
}
.back-button button:focus {
  outline: none;
  box-shadow: 0 0 0 3px #f2a65a99;
}
</style>

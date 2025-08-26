<template>
  <div class="container">
    <h1>ข้อมูลวัด</h1>

    <div
      class="wat-card"
      v-for="(wat, index) in watList"
      :key="index"
      data-aos="fade-up"
    >
      <h2>{{ wat.title }}</h2>
      <p v-html="wat.description"></p>
      <img v-if="wat.image" :src="wat.image" :alt="wat.title" />
    </div>

    <div style="text-align: center;">
      <router-link to="/" class="back-btn">กลับหน้าหลัก</router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
  })
})

const watList = [
  {
    title: 'วัดพระมหาธาตุแก่นนคร',
    description: `
      วัดพระมหาธาตุแก่นนคร หรือที่ชาวขอนแก่นรู้จักกันในชื่อ วัดหนองแวงพระอารามหลวง 
      เป็นวัดสำคัญทางประวัติศาสตร์และศิลปกรรมของจังหวัดขอนแก่น ตั้งอยู่ริมบึงแก่นนคร เขตเทศบาลนครขอนแก่น 
      ก่อตั้งมาตั้งแต่ปี พ.ศ. 2354 โดยเจ้าป่วงเมืองพัน วัดนี้มีพระมหาธาตุ 9 ชั้นที่สูงถึง 80 เมตร 
      ถือเป็นสัญลักษณ์ของศรัทธาและวัฒนธรรมอีสาน ผสมผสานศิลปะทวารวดี-อินโดจีนและศิลปะไทยอีสานได้อย่างงดงาม
      <br><br>
      ในอดีตพื้นที่นี้เป็นที่ตั้งของหนองน้ำกว้างใหญ่ที่เรียกว่า “หนองแวง” จนกระทั่งสร้างวัดขึ้นเพื่อเป็นศูนย์กลางจิตใจ 
      และใช้ในการประกอบพิธีกรรมทางพุทธศาสนา ภายในพระมหาธาตุมีการจัดแสดงพระพุทธรูปประจำวันเกิด 
      และนิทรรศการวัฒนธรรมอีสานที่มีคุณค่าทางประวัติศาสตร์
      <br><br>
      วัดนี้เป็นสถานที่จัดงานบุญสำคัญของชุมชน เช่น งานบุญเดือนสาม งานสงกรานต์ และงานประเพณีต่าง ๆ ที่สะท้อนวิถีชีวิตชาวอีสาน 
      นอกจากนี้ยังเป็นแหล่งท่องเที่ยวเชิงวัฒนธรรมที่ดึงดูดนักท่องเที่ยวทั้งชาวไทยและชาวต่างชาติ
    `,
    image: 'https://chillchill-trip.com/wp-content/uploads/2020/09/image4-4.jpg',
  },
  {
    title: 'ประวัติและการก่อสร้างพระมหาธาตุแก่นนคร',
    description: `
      พระมหาธาตุแก่นนคร สร้างขึ้นในปี พ.ศ. 2539 เพื่อเฉลิมฉลองในโอกาสครองราชย์ครบ 50 ปีของพระบาทสมเด็จพระเจ้าอยู่หัวรัชกาลที่ 9
      ใช้เวลาก่อสร้างถึง 5 ปี โดยออกแบบให้มี 9 ชั้น มีความสูง 80 เมตร ฐานกว้าง 50 เมตร 
      ซึ่งได้รับแรงบันดาลใจจากพระธาตุพนม ผสมผสานศิลปะแบบทวารวดีและอินโดจีนอย่างวิจิตร
      <br><br>
      ฐานพระมหาธาตุประดับด้วยลวดลายพญานาค 7 เศียร และพระจุลธาตุทั้ง 4 มุม ภายในแต่ละชั้นมีการจัดแสดงภาพจิตรกรรมฝาผนัง 
      และประติมากรรมที่เล่าเรื่องพุทธประวัติและชาดกที่สำคัญ ชั้นที่ 9 ประดิษฐานพระบรมสารีริกธาตุ 
      และเป็นจุดชมวิว 360 องศาที่สวยงามของเมืองขอนแก่น
    `,
    image: 'https://www.isaninsight.com/wp-content/uploads/2021/02/%E0%B8%AA%E0%B9%88%E0%B8%A7%E0%B8%99%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%AD%E0%B8%9A%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%98%E0%B8%B2%E0%B8%95%E0%B8%B8-%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B9%81%E0%B8%A7%E0%B8%87-scaled.jpg',
  },
  {
    title: 'สถาปัตยกรรมและศิลปะ',
    description: `
      วัดพระมหาธาตุแก่นนครเป็นตัวอย่างของสถาปัตยกรรมผสมผสานระหว่างศิลปะไทยอีสานและลาว 
      โดยใช้วัสดุหลักเป็นคอนกรีตเสริมเหล็กซึ่งทนทานต่อสภาพอากาศ
      <br><br>
      การตกแต่งภายในเน้นจิตรกรรมฝาผนังที่เล่าเรื่องพระพุทธประวัติและชาดก ซึ่งมีความละเอียดอ่อนและสีสันสดใส 
      นอกจากนั้นยังมีประติมากรรมรูปพญานาค และลวดลายประดับที่แสดงถึงความเชื่อและวัฒนธรรมของชาวอีสาน
      <br><br>
      ความงดงามของพระมหาธาตุแก่นนครไม่เพียงแต่ในแง่สถาปัตยกรรมเท่านั้น แต่ยังเป็นศูนย์รวมจิตใจของชุมชน 
      และเป็นแรงบันดาลใจให้กับงานศิลปะและวัฒนธรรมในภูมิภาคนี้
    `,
    image: 'https://www.timsthailand.com/wp-content/uploads/2019/12/wat-nong-wang-ground-floor-carved-shutters-650x433.jpg',
  },
  {
    title: 'บทบาททางศาสนาและวัฒนธรรม',
    description: `
      วัดพระมหาธาตุแก่นนครเป็นสถานที่ประกอบพิธีกรรมทางศาสนาที่สำคัญของจังหวัดขอนแก่น 
      เช่น พิธีทำบุญ วันมาฆบูชา วันวิสาขบูชา และวันเข้าพรรษา
      <br><br>
      นอกจากนี้ยังเป็นศูนย์เรียนรู้ศิลปวัฒนธรรมอีสานที่ส่งเสริมการศึกษาความรู้และประเพณีพื้นบ้าน
      รวมถึงการจัดกิจกรรมส่งเสริมการท่องเที่ยวเชิงวัฒนธรรมที่ทำให้วัดแห่งนี้มีความสำคัญทั้งในด้านศาสนาและการท่องเที่ยว
    `,
    image: 'https://kkdata.khonkaenlink.info/wp-content/uploads/2025/01/IMG_9888.jpeg',
  },
  {
    title: 'การท่องเที่ยวและชุมชน',
    description: `
      วัดพระมหาธาตุแก่นนครตั้งอยู่ในทำเลที่สวยงามริมบึงแก่นนคร ซึ่งเป็นพื้นที่สาธารณะและจุดพักผ่อนยอดนิยมของชาวขอนแก่น
      <br><br>
      รอบ ๆ วัดมีลานกิจกรรมและสวนสาธารณะที่ใช้จัดงานประจำปี เช่น งานบุญเดือนสาม งานสงกรานต์ และเทศกาลท้องถิ่นต่าง ๆ
      การท่องเที่ยวที่นี่จึงไม่ใช่แค่การชมวัด แต่ยังรวมถึงการสัมผัสกับวิถีชีวิตและวัฒนธรรมท้องถิ่นอย่างแท้จริง
      <br><br>
      นักท่องเที่ยวสามารถเดินชมพระมหาธาตุและวิวรอบ ๆ จากชั้นบนสุดของพระธาตุ ที่ซึ่งสามารถมองเห็นทิวทัศน์ของเมืองขอนแก่นได้แบบ 360 องศา
    `,
    image: 'https://www.thailandee.com/img/villes/khon-kaen/wat-nong-wan-khon-kaen-61.jpg',
  },
  {
    title: 'ข้อมูลสรุป',
    description: `
      <ul>
        <li>อายุวัด: กว่า 200 ปี (ตั้งแต่ปี พ.ศ. 2354)</li>
        <li>ช่วงเวลาสร้างพระมหาธาตุ: พ.ศ. 2539–2544</li>
        <li>ความสูง: 80 เมตร</li>
        <li>ฐาน: กว้าง 50×50 เมตร</li>
        <li>จำนวนชั้น: 9 ชั้น</li>
        <li>สิ่งสำคัญ: พระบรมสารีริกธาตุ, ภาพจิตรกรรมฝาผนัง, ศิลปะอีสาน</li>
      </ul> 
    `,
    image: '',
  },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Thai:wght@400;600&family=Sarabun:wght@400;700&display=swap');

.container {
  max-width: 1200px;
  margin: 0rem auto;
  padding: 2rem 1.5rem;
  font-family: 'Sarabun', sans-serif;
  border-radius: 16px;
  background: linear-gradient(to bottom, #fffdf0, #fefae0);
  color: #4a3c31;
  line-height: 1.6;
  letter-spacing: 0.2px;
  transition: background-color 0.4s ease;
}

h1 {
  font-family: 'Sarabun', sans-serif;
  text-align: center;
  color: #7a5a39;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  margin-bottom: 2.5rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  border-bottom: 3px solid #bb9457;
  display: inline-block;
  padding-bottom: 0.4rem;
}

.wat-card {
  background: #fffef5;
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 2.5rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  border-left: 6px solid #bb9457;
  transition: transform 0.3s ease;
}

.wat-card:hover {
  transform: translateY(-6px);
}

.wat-card h2 {
  font-family: 'Sarabun', sans-serif;
  color: #bb9457;
  font-size: clamp(1.2rem, 3.5vw, 2rem);
  margin-bottom: 1.2rem;
  font-weight: 700;
  position: relative;
}

.wat-card h2::before {
  content: "༄";
  position: absolute;
  left: -1.8rem;
  top: 0;
  font-size: clamp(1rem, 2.5vw, 1.6rem);
  color: #d4a373;
}

.wat-card p,
.wat-card ul {
  font-family: 'Sarabun', sans-serif;
  font-size: clamp(0.95rem, 2.5vw, 1.25rem);
  line-height: 1.85;
  color: #444;
  text-align: justify;
  font-weight: 400;
}

.wat-card ul {
  padding-left: 1.4rem;
  list-style-type: disc;
}

.wat-card ul li {
  margin-bottom: 0.4rem;
}

/* รูปเต็มๆ */
.wat-card img {
  width: 100%;
  height: clamp(250px, 60vw, 850px); /* ย่อขยายตามจอ */
  border-radius: 12px;
  margin-top: 1.5rem;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.15);
  object-fit: cover;
  transition: transform 0.4s ease;
}

.wat-card img:hover {
  transform: scale(1.04);
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  justify-content: center;
  background: linear-gradient(135deg, #bb9457, #a47148);
  color: white;
  padding: clamp(0.6rem, 2vw, 0.9rem) clamp(1rem, 4vw, 2.2rem);
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: clamp(0.9rem, 2.5vw, 1.05rem);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
  margin: 3rem auto 0;
}

.back-btn::before {
  content: "←";
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  transition: transform 0.3s ease;
}

.back-btn:hover {
  background: linear-gradient(135deg, #8c5c3e, #99582a);
  transform: translateY(-3px);
}

.back-btn:hover::before {
  transform: translateX(-4px);
}

/* mobile เล็กลงอีก */
@media (max-width: 600px) {
  .wat-card {
    padding: 1.2rem;
  }
  .wat-card img {
    height: auto;
  }
}
</style>


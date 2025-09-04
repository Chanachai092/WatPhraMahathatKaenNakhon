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
      <router-link to="/" class="back-btn">กลับหน้าแรก</router-link>
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
      <p>
        วัดพระมหาธาตุแก่นนคร หรือที่ชาวขอนแก่นรู้จักกันในชื่อ วัดหนองแวงพระอารามหลวง 
        เป็นวัดสำคัญทางประวัติศาสตร์และศิลปกรรมของจังหวัดขอนแก่น ตั้งอยู่ริมบึงแก่นนครเขตเทศบาลนครขอนแก่น 
        ก่อตั้งมาตั้งแต่ปี พ.ศ. 2354 โดยเจ้าป่วงเมืองพัน วัดนี้มีพระมหาธาตุ 9 ชั้นที่สูงถึง 80 เมตร 
        ถือเป็นสัญลักษณ์ของศรัทธาและวัฒนธรรมอีสาน ผสมผสานศิลปะทวารวดี-อินโดจีนและศิลปะไทยอีสานได้อย่างงดงาม
      </p>
      <p>
        ในอดีตพื้นที่นี้เป็นที่ตั้งของหนองน้ำกว้างใหญ่ที่เรียกว่า “หนองแวง” จนกระทั่งสร้างวัดขึ้นเพื่อเป็นศูนย์กลางจิตใจและใช้ในการประกอบพิธีกรรมทางพุทธศาสนา ภายในพระมหาธาตุมีการจัดแสดงพระพุทธรูปประจำวันเกิดและนิทรรศการวัฒนธรรมอีสานที่มีคุณค่าทางประวัติศาสตร์
      </p>
      <p>
        วัดนี้เป็นสถานที่จัดงานบุญสำคัญของชุมชน เช่น งานบุญเดือนสาม งานสงกรานต์ และงานประเพณีต่างๆ 
        ที่สะท้อนวิถีชีวิตชาวอีสาน นอกจากนี้ยังเป็นแหล่งท่องเที่ยวเชิงวัฒนธรรมที่ดึงดูดนักท่องเที่ยวทั้งชาวไทยและชาวต่างชาติ
      </p>
    `,
    image: 'https://chillchill-trip.com/wp-content/uploads/2020/09/image4-4.jpg',
  },
  {
    title: 'ประวัติและการก่อสร้างพระมหาธาตุแก่นนคร',
    description: `
      <p>
        พระมหาธาตุแก่นนครสร้างขึ้นในปี พ.ศ. 2539 เพื่อเฉลิมฉลองในโอกาสครองราชย์ครบ 50 ปีของพระบาทสมเด็จพระเจ้าอยู่หัวรัชกาลที่ 9 ใช้เวลาก่อสร้างถึง 5 ปีโดยออกแบบให้มี 9 ชั้นความสูง 80 เมตรฐานกว้าง 50 เมตรซึ่งได้รับแรงบันดาลใจจากพระธาตุพนม ผสมผสานศิลปะแบบทวารวดีและอินโดจีนอย่างวิจิตร
      </p>
      <p>
        ฐานพระมหาธาตุประดับด้วยลวดลายพญานาค 7 เศียรและพระจุลธาตุทั้ง 4 มุมภายในแต่ละชั้นมีการจัดแสดงภาพจิตรกรรมฝาผนังและประติมากรรมที่เล่าเรื่องพุทธประวัติและชาดกที่สำคัญชั้นที่ 9 ประดิษฐานพระบรมสารีริกธาตุและเป็นจุดชมวิว 360 องศาที่สวยงามของเมืองขอนแก่น
      </p>
    `,
    image: 'https://www.isaninsight.com/wp-content/uploads/2021/02/%E0%B8%AA%E0%B9%88%E0%B8%A7%E0%B8%99%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%AD%E0%B8%9A%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%98%E0%B8%B2%E0%B8%95%E0%B8%B8-%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B9%81%E0%B8%A7%E0%B8%87-scaled.jpg',
  },
  {
    title: 'สถาปัตยกรรมและศิลปะ',
    description: `
      <p>
              วัดพระมหาธาตุแก่นนครเป็นตัวอย่างของสถาปัตยกรรมผสมผสานระหว่างศิลปะไทยอีสานและลาวโดยใช้วัสดุหลักเป็นคอนกรีตเสริมเหล็กซึ่งทนทานต่อสภาพอากาศการตกแต่งภายในเน้นจิตรกรรมฝาผนังที่เล่าเรื่องพระพุทธประวัติและชาดกซึ่งมีความละเอียดอ่อนและสีสันสดใส
        <p>
        นอกจากนี้ยังมีประติมากรรมรูปพญานาคและลวดลายประดับที่แสดงถึงความเชื่อและวัฒนธรรมของชาวอีสานความงดงามของพระมหาธาตุแก่นนครไม่เพียงแต่ในแง่สถาปัตยกรรมเท่านั้นแต่ยังเป็นศูนย์รวมจิตใจของชุมชนและเป็นแรงบันดาลใจให้กับงานศิลปะและวัฒนธรรมในภูมิภาคนี้
      </p>
    `,
    image: 'https://www.timsthailand.com/wp-content/uploads/2019/12/wat-nong-wang-ground-floor-carved-shutters-650x433.jpg',
  },
  {
    title: 'บทบาททางศาสนาและวัฒนธรรม',
    description: `
      <p>
        วัดพระมหาธาตุแก่นนครเป็นสถานที่ประกอบพิธีกรรมทางศาสนาที่สำคัญของจังหวัดขอนแก่น เช่น พิธีทำบุญ วันมาฆบูชา วันวิสาขบูชา และวันเข้าพรรษา
      </p>
      <p>
        นอกจากนี้ยังเป็นศูนย์เรียนรู้ศิลปวัฒนธรรมอีสานที่ส่งเสริมการศึกษาความรู้และประเพณีพื้นบ้านรวมถึงการจัดกิจกรรมส่งเสริมการท่องเที่ยวเชิงวัฒนธรรมที่ทำให้วัดแห่งนี้มีความสำคัญทั้งในด้านศาสนาและการท่องเที่ยว
      </p>
    `,
    image: 'https://kkdata.khonkaenlink.info/wp-content/uploads/2025/01/IMG_9888.jpeg',
  },
  {
    title: 'การท่องเที่ยวและชุมชน',
    description: `
      <p>
        วัดพระมหาธาตุแก่นนครตั้งอยู่ในทำเลที่สวยงามริมบึงแก่นนครซึ่งเป็นพื้นที่สาธารณะและจุดพักผ่อนยอดนิยมของชาวขอนแก่นรอบๆวัดมีลานกิจกรรมและสวนสาธารณะที่ใช้จัดงานประจำปี เช่น งานบุญเดือนสาม งานสงกรานต์ และเทศกาลท้องถิ่นต่างๆ
      </p>
      <p>
        การท่องเที่ยวที่นี่จึงไม่ใช่แค่การชมวัดแต่ยังรวมถึงการสัมผัสกับวิถีชีวิตและวัฒนธรรมท้องถิ่นอย่างแท้จริงนักท่องเที่ยวสามารถเดินชมพระมหาธาตุและวิวรอบๆจากชั้นบนสุดของพระธาตุที่ซึ่งสามารถมองเห็นทิวทัศน์ของเมืองขอนแก่นได้แบบ 360 องศา
      </p>
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
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Thai:wght@500;700&family=Sarabun:wght@400;500;600&display=swap');

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  font-family: 'Sarabun', sans-serif;
  color: #4a3c31;
  line-height: 1.9;
  letter-spacing: 0.3px;
  background: linear-gradient(to bottom, #fffdf0, #fefae0);
  border-radius: 16px;
}

/* Main Title */
h1 {
  font-family: 'Noto Serif Thai', serif;
  font-weight: 700;
  font-size: clamp(2rem, 5vw, 3rem);
  text-align: center;
  color: #7a5a39;
  margin-bottom: 2.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid #bb9457;
}

/* Card */
.wat-card {
  background: #fffef5;
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 2.5rem;
  border-left: 6px solid #bb9457;
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
  transition: transform 0.3s ease;
}

.wat-card:hover {
  transform: translateY(-6px);
}

/* Card Title */
.wat-card h2 {
  font-family: 'Noto Serif Thai', serif;
  font-weight: 700;
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: #bb9457;
  margin-bottom: 1.5rem;
  position: relative;
}

.wat-card h2::before {
  content: "༄";
  position: absolute;
  left: -1.6rem;
  top: 0;
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  color: #d4a373;
}

/* Paragraph */
.wat-card p {
  font-size: clamp(1rem, 2.2vw, 1.2rem);
  line-height: 2.2;
  margin-bottom: 1.5rem;
  text-align: justify;
  text-justify: inter-word;
}

/* List */
.wat-card ul {
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  line-height: 2.1;
  padding-left: 1.5rem;
  margin: 1.5rem 0;
  list-style-type: disc;
}

.wat-card ul li {
  margin-bottom: 0.6rem;
}

/* Image */
.wat-card img {
  width: 100%;
  height: clamp(250px, 55vw, 800px);
  margin-top: 1.5rem;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 5px 16px rgba(0,0,0,0.15);
  transition: transform 0.4s ease;
}

.wat-card img:hover {
  transform: scale(1.04);
}

/* Back Button */
.back-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin: 2.5rem auto 0;
  padding: clamp(0.6rem, 2vw, 0.9rem) clamp(1rem, 4vw, 2rem);
  font-weight: 600;
  font-size: clamp(0.95rem, 2.5vw, 1.1rem);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  background: linear-gradient(135deg, #bb9457, #a47148);
  box-shadow: 0 6px 16px rgba(0,0,0,0.25);
  transition: all 0.3s ease;
}

.back-btn::before {
  content: "←";
  font-size: 1.1rem;
  transition: transform 0.3s ease;
}

.back-btn:hover {
  background: linear-gradient(135deg, #8c5c3e, #99582a);
  transform: translateY(-3px);
}

.back-btn:hover::before {
  transform: translateX(-4px);
}

/* Responsive */
@media (max-width: 600px) {
  .wat-card {
    padding: 1.5rem;
  }
  .wat-card img {
    height: auto;
  }
}
</style>

<template>
  <section id="viewer-wrapper">
    <h2 class="title">วัดพระมหาธาตุแก่นนคร 360°</h2>

    <!-- ครอบ iframe ให้ responsive -->
    <div class="viewer-container">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!4v1755617310395!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQzY5WWpETEE.!2m2!1d16.40811111281769!2d102.83436071309!3f4.014751834985466!4f-5.292869069200478!5f0.7820865974627469"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </section>
</template>

<style scoped>
#viewer-wrapper {
  max-width: 1000px;
  margin: 1rem auto;
  padding: clamp(1.5rem, 5vw, 4rem); /* ✅ responsive padding */
  text-align: center;
  background: linear-gradient(135deg, #c89f68 0%, #b67b42 100%);
  border-radius: 19px;
  box-shadow: 0 20px 40px rgba(80, 50, 20, 0.3);
  color: #fff8e7;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  transition: transform 0.3s ease;
}

#viewer-wrapper:hover {
  transform: scale(1.01);
}

.title {
  font-size: clamp(1.8rem, 5vw, 2.6rem); /* ✅ responsive font */
  margin-bottom: 2rem;
  font-weight: 900;
  text-shadow: 2px 2px 8px rgba(60, 30, 10, 0.4);
}

.viewer-container {
  position: relative;
  width: 100%;
  padding-bottom: 100%; /* สี่เหลี่ยมจัตุรัส */
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
}

.viewer-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 20px;
}

/* ✅ ปรับ padding ให้เล็กลงในหน้าจอแคบ */
@media (max-width: 650px) {
  #viewer-wrapper {
    padding: 1.2rem;
  }
}
</style>

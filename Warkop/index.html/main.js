// Mengimpor Vue dari CDN
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

// Membuat aplikasi Vue
createApp({
  data() {
    return {
    cardHtml: 
      `<div class="card">
  <img src="assets/Nasi-Goreng.jpg" class="card-img-top" alt="Nasi Goreng">
  <div class="card-body">
    <h5 class="card-title">Nasi Goreng</h5>
    <p class="card-text">Nasi goreng dengan bumbu rempah-rempah aseli dari Nusantara dan perpaduan rasa yang autentik.</p>
    <a href="#" class="btn btn-primary w-100">Pesan</a>
  </div>
</div>`,
cardHtml1: 
      `<div class="card">
  <img src="assets/kopi.jpeg" class="card-img-top" alt="Kopi">
  <div class="card-body">
    <h5 class="card-title">Kopi Dalgona</h5>
    <p class="card-text">Kopi Dalgona yang dibuat dari biji kopi asli serta memiliki perpaduan rasa yang nikmat dan khas.</p>
    <a href="#" class="btn btn-primary w-100">Pesan</a>
  </div>
</div>`,
cardHtml2: 
      `<div class="card">
  <img src="assets/donat.jpeg" class="card-img-top" alt="Donat">
  <div class="card-body">
    <h5 class="card-title">Donat</h5>
    <p class="card-text">Donat yang dibuat dari bahan terbaik dan bahan impor yang membuat nikmat citra rasanya.</p>
    <a href="#" class="btn btn-primary w-100">Pesan</a>
  </div>
</div>`,
    };
  }
}).mount('#app');

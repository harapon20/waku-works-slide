/**
 * スライドナビゲーション
 * - 矢印キーでスライド移動
 * - ナビゲーションボタンで移動
 * - ビューポートに合わせてスライドを縮小表示
 */

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const currentEl = document.getElementById('currentSlide');
  const totalEl = document.getElementById('totalSlides');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let currentIndex = 0;

  // スライド総数を表示
  totalEl.textContent = slides.length;

  // ビューポートに合わせてスケール調整
  function updateScale() {
    const vw = window.innerWidth;
    const scale = Math.min((vw - 64) / 1920, 1);
    slides.forEach(slide => {
      slide.style.transform = 'scale(' + scale + ')';
      slide.style.marginBottom = (-1080 * (1 - scale)) + 'px';
    });
  }

  // 指定スライドへ移動
  function goToSlide(index) {
    if (index < 0 || index >= slides.length) return;
    currentIndex = index;
    slides[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
    currentEl.textContent = currentIndex + 1;
  }

  // スクロール位置から現在のスライドを検出
  function detectCurrentSlide() {
    const scrollY = window.scrollY;
    let closest = 0;
    let closestDist = Infinity;

    slides.forEach((slide, i) => {
      const rect = slide.getBoundingClientRect();
      const dist = Math.abs(rect.top);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });

    if (closest !== currentIndex) {
      currentIndex = closest;
      currentEl.textContent = currentIndex + 1;
    }
  }

  // キーボードナビゲーション
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      goToSlide(currentIndex + 1);
    }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      goToSlide(currentIndex - 1);
    }
  });

  // ボタンナビゲーション
  prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
  nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

  // スクロール検出（throttle付き）
  let scrollTimer;
  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(detectCurrentSlide, 100);
  });

  // リサイズ時にスケール更新
  window.addEventListener('resize', updateScale);

  // 初期化
  updateScale();
  detectCurrentSlide();
});

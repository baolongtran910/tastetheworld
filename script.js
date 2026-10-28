// ===== 1. MENU TRÊN ĐIỆN THOẠI =====
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Đóng menu khi bấm vào một liên kết
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// ===== 2. FAQ (ACCORDION) =====
document.querySelectorAll(".faq-item").forEach((item) => {
  const question = item.querySelector(".faq-q");
  const answer = item.querySelector(".faq-a");

  question.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");

    // Đóng tất cả mục khác
    document.querySelectorAll(".faq-item").forEach((other) => {
      other.classList.remove("open");
      other.querySelector(".faq-a").style.maxHeight = null;
    });

    // Mở mục vừa bấm (nếu trước đó đang đóng)
    if (!isOpen) {
      item.classList.add("open");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

// ===== 3. HIỆN DẦN KHI CUỘN TRANG =====
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ===== 4. FORM ĐĂNG KÝ EMAIL (chỉ demo, chưa gửi đi đâu) =====
const form = document.getElementById("newsletterForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("emailInput").value.trim();
  msg.textContent = `Cảm ơn bạn! Đã đăng ký ${email} (demo).`;
  form.reset();
});
// ===== 5. POPUP SẢN PHẨM =====
const modal = document.getElementById("productModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const addBtn = document.getElementById("addBtn");

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    const img = card.querySelector("img");
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modalTitle.textContent = card.querySelector("h3").textContent;
    modalDesc.textContent = card.querySelector("p").textContent;

    addBtn.textContent = "Thêm vào hộp ❤";
    addBtn.classList.remove("added");
    modal.classList.add("open");
  });
});

function closeModal() {
  modal.classList.remove("open");
}

document.getElementById("modalClose").addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal(); // bấm ra ngoài hộp thì đóng
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal(); // bấm phím Esc thì đóng
});

addBtn.addEventListener("click", () => {
  addBtn.textContent = "Đã thêm ✓";
  addBtn.classList.add("added");
});
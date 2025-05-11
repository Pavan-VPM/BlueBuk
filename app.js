// ==== Floating Particles Effect ====
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 100;

// Create particles
for (let i = 0; i < particleCount; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 3 + 1,
    speedX: Math.random() * 1 - 0.5,
    speedY: Math.random() * 1 - 0.5,
    color: `rgba(0, 240, 255, ${Math.random() * 0.5 + 0.1})`
  });
}

// Animation loop
function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  particles.forEach(particle => {
    ctx.fillStyle = particle.color;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fill();
    
    // Movement
    particle.x += particle.speedX;
    particle.y += particle.speedY;
    
    // Reset particles when they go off-screen
    if (particle.x < 0 || particle.x > canvas.width || 
        particle.y < 0 || particle.y > canvas.height) {
      particle.x = Math.random() * canvas.width;
      particle.y = Math.random() * canvas.height;
    }
  });
  
  requestAnimationFrame(animateParticles);
}

animateParticles();

// ==== Typing Animation ====
const textElement = document.getElementById("typing-text");
const phrases = [
  "Ace your exams with AI-powered notes.",
  "Study smarter, not harder.",
  "The future of learning is here."
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
  const currentPhrase = phrases[phraseIndex];
  
  if (isDeleting) {
    textElement.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  } else {
    textElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
  }
  
  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    setTimeout(typeText, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(typeText, 500);
  } else {
    setTimeout(typeText, isDeleting ? 50 : 100);
  }
}

typeText();

// ==== 3D Button Tilt Effect ====
const btn3d = document.querySelector(".btn-3d");

btn3d.addEventListener("mousemove", (e) => {
  const rect = btn3d.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  const angleX = (y - centerY) / 20;
  const angleY = (centerX - x) / 20;
  
  btn3d.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
});

btn3d.addEventListener("mouseleave", () => {
  btn3d.style.transform = "rotateX(0) rotateY(0)";
});
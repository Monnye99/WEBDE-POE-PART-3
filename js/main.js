// PART 3 - All JS functionality
document.addEventListener('DOMContentLoaded', () => {

  // 1. Dynamic Content Loading - Services from JS array
  const services = [
    {id: 1, name: "Cyber Security Course", price: 3500, category: "IT", img: "images/cyber.jpg", desc: "Learn to protect systems"},
    {id: 2, name: "Networking N+", price: 2800, category: "IT", img: "images/network.jpg", desc: "Master networks"},
    {id: 3, name: "Software Development", price: 4000, category: "Programming", img: "images/software.jpg", desc: "Code your future"},
    {id: 4, name: "IT Management", price: 3200, category: "Management", img: "images/itmanager.jpg", desc: "Lead tech teams"}
  ];

  const serviceContainer = document.getElementById('dynamic-services');
  if(serviceContainer){
    renderServices(services);
  }

  function renderServices(list){
    serviceContainer.innerHTML = list.map(s => `
      <div class="service-card" data-category="${s.category}">
        <img src="${s.img}" alt="${s.name} course at Motlapz Tech" class="gallery-img">
        <h3>${s.name}</h3>
        <p>${s.desc}</p>
        <p><strong>R${s.price}</strong></p>
        <button onclick="addToEnquiry(${s.id})">Enquire</button>
      </div>
    `).join('');
  }

  // 2. Search / Filter functionality
  const searchInput = document.getElementById('serviceSearch');
  if(searchInput){
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      const filtered = services.filter(s => s.name.toLowerCase().includes(term) || s.category.toLowerCase().includes(term));
      renderServices(filtered);
    });
  }

  // 3. Accordion - for FAQ on about.html
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      header.nextElementSibling.classList.toggle('active');
    });
  });

  // 4. Lightbox Gallery
  const lightbox = document.getElementById('lightbox');
  document.addEventListener('click', (e) => {
    if(e.target.classList.contains('gallery-img')){
      lightbox.style.display = 'flex';
      document.getElementById('lightbox-img').src = e.target.src;
    }
  });
  if(lightbox){
    lightbox.addEventListener('click', () => lightbox.style.display = 'none');
  }

  // 5. Animations on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) entry.target.classList.add('show');
    });
  });
  document.querySelectorAll('.animate').forEach(el => observer.observe(el));

  // 6. Interactive Map - Leaflet on contact.html
  if(document.getElementById('map')){
    const map = L.map('map').setView([-26.2041, 28.0473], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    L.marker([-26.2041, 28.0473]).addTo(map).bindPopup('Motlapz Tech School - Pretoria').openPopup();
  }
});

// 7. Enquiry Form - with COST calculation
function addToEnquiry(id){ localStorage.setItem('selectedService', id); window.location.href='enquiries.html'; }

function calculateCost(){
  const form = document.getElementById('enquiryForm');
  if(!form) return;
  const service = form.service.value;
  const qty = parseInt(form.quantity.value) || 1;
  let price = 0;
  if(service.includes('Cyber')) price = 3500;
  if(service.includes('Networking')) price = 2800;
  if(service.includes('Software')) price = 4000;
  if(service.includes('IT Management')) price = 3200;
  const total = price * qty;
  document.getElementById('costResult').innerHTML = `Estimated Cost: R${total} for ${qty} x ${service}. Availability: In Stock. Next intake: Jan 2026`;
  return false; // prevent real submit
}

// 8. Contact Form - Email compilation + Validation
function validateAndSendContact(e){
  e.preventDefault();
  const name = document.getElementById('cName').value.trim();
  const email = document.getElementById('cEmail').value.trim();
  const type = document.getElementById('cType').value;
  const msg = document.getElementById('cMessage').value.trim();
  const errorBox = document.getElementById('formError');

  // HTML5 + JS validation
  if(name.length < 3){ errorBox.textContent = "Name must be at least 3 characters"; return false; }
  if(!/^\S+@\S+\.\S+$/.test(email)){ errorBox.textContent = "Enter valid email"; return false; }
  if(msg.length < 10){ errorBox.textContent = "Message too short"; return false; }

  // Compile email
  const subject = `Contact - ${type} from ${name}`;
  const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AType: ${type}%0D%0AMessage: ${msg}`;
  window.location.href = `mailto:info@motlapztech.co.za?subject=${subject}&body=${body}`;
  document.getElementById('formSuccess').textContent = "Email client opened - please send.";
  return false;
}
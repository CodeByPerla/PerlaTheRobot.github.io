const images = [
  "images/llmprompting/tenentrights.png",
  "images/llmprompting/promptclclarityrewriter.png",
  "images/llmprompting/behavioralpatterninterpreter.png",
  "images/llmprompting/truthenforcmentassistant.png",
  "images/llmprompting/rolefitevaluator.png",
  "images/llmprompting/crypticliteraturebloggenerator.png",
  "images/llmprompting/promptperformanceviewer.png",
  "images/llmpromptingportfolioimg/tenentrights.png",
  "images/llmpromptingportfolioimg/prompt-clarity-rewriter.jpg"
];

const titles = [
  "Tenant Rights Case Builder",
  "Prompt Clarity Rewriter (Meta Prompting)",
  "Behavioral Pattern Interpreter",
  "Truth Enforcement Assistant",
  "Role Fit Evaluator",
  "Cryptic Literature Blog Generator",
  "Prompt Performance Viewer"
];

const descriptions = [
  "Auto-generates structured legal case files using factual tagging and violation templates.",
  "Takes vague prompts and rewrites them with optimized clarity, intent, and output targeting.",
  "Analyzes behavior patterns to extract motivations, inconsistencies, and confidence signals.",
  "Applies strict truth-tagging logic to reject hallucinations and enforce information integrity.",
  "Compares user resumes to job listings and scores role alignment based on core responsibilities.",
  "Turns classic books into puzzle-themed blog entries that challenge and delight the reader.",
  "Visualizes token flow, logic branches, and model responses for diagnostic feedback and tuning."
];

const grid = document.getElementById('projects');

titles.forEach((title, i) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${images[i % images.length]}" alt="Project image">
    <div class="card-content">
      <h3>${title}</h3>
      <p>${descriptions[i] || "No description available."}</p>
    </div>
  `;
  grid.appendChild(card);
});

// Dark mode toggle
const toggleDark = document.getElementById('toggleDark');
toggleDark.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Modal logic
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');

document.addEventListener('click', function (e) {
  if (e.target.tagName === 'IMG' && e.target.closest('.card')) {
    modal.classList.remove('hidden');
    modalImage.src = e.target.src;
  }
});

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') modal.classList.add('hidden');
});

// Search functionality
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function () {
  const query = this.value.toLowerCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = title.includes(query) ? 'block' : 'none';
  });
});

// ==========================
// LOAD BASIC INFO
// ==========================
document.getElementById("name").innerText = config.name;
document.getElementById("title").innerText = config.title;
document.getElementById("tagline").innerText = config.tagline;

// ==========================
// HERO SECTION
// ==========================
document.getElementById("hero-heading").innerText = config.hero.heading;
document.getElementById("hero-subheading").innerText = config.hero.subheading;

const heroBtn = document.getElementById("hero-btn");
heroBtn.innerText = config.hero.buttonText;
heroBtn.href = config.hero.buttonLink;

// ==========================
// ABOUT SECTION
// ==========================
document.getElementById("about-desc").innerText = config.about.description;
document.getElementById("exp").innerText = config.about.experience;
document.getElementById("projects-count").innerText = config.about.projectsCompleted;
document.getElementById("clients").innerText = config.about.clients;

// ==========================
// SKILLS SECTION
// ==========================
const skillsContainer = document.getElementById("skills");

config.skills.forEach(skill => {
  const span = document.createElement("span");
  span.className = "skill";
  span.innerText = skill;
  skillsContainer.appendChild(span);
});

// ==========================
// PROJECTS SECTION
// ==========================
const projectContainer = document.getElementById("projects");

function loadProjects(category = "all") {
  projectContainer.innerHTML = "";

  config.projects.forEach(project => {
    if (category === "all" || project.category === category) {
      const div = document.createElement("div");
      div.className = "project-card";

      div.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="buttons">
          <a href="${project.live}" target="_blank">Live</a>
          <a href="${project.github}" target="_blank">Code</a>
        </div>
      `;

      projectContainer.appendChild(div);
    }
  });
}

// Load all projects initially
loadProjects();

// ==========================
// FILTER BUTTONS
// ==========================
window.filterProjects = function(category) {
  loadProjects(category);
};

// ==========================
// BLOG SECTION
// ==========================
const blogContainer = document.getElementById("blog");

config.blog.forEach(post => {
  const div = document.createElement("div");
  div.className = "blog-card";

  div.innerHTML = `
    <h3>${post.title}</h3>
    <small>${post.date}</small>
    <p>${post.excerpt}</p>
    <a href="${post.link}">Read More</a>
  `;

  blogContainer.appendChild(div);
});

// ==========================
// SOCIAL LINKS
// ==========================
document.getElementById("github").href = config.social.github;
document.getElementById("linkedin").href = config.social.linkedin;
document.getElementById("twitter").href = config.social.twitter;

// ==========================
// CONTACT SECTION
// ==========================
document.getElementById("contact-heading").innerText = config.contact.heading;
document.getElementById("contact-subheading").innerText = config.contact.subheading;

// ==========================
// CV DOWNLOAD
// ==========================
const cvBtn = document.getElementById("cv-btn");
cvBtn.innerText = config.resume.buttonText;
cvBtn.href = config.resume.file;

// ==========================
// THEME SYSTEM (Dark/Light)
// ==========================
const toggle = document.getElementById("theme-toggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const theme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});

// ==========================
// SCROLL ANIMATIONS
// ==========================
if (typeof ScrollReveal !== "undefined") {
  ScrollReveal().reveal('.section', {
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    duration: 800
  });
}

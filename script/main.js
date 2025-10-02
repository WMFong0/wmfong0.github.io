// IMPORT AFTER DATA.JS IS LOADED

// Create and render skill categories
function createSkillCategory(skill) {
    const category = document.createElement('div');
    category.className = 'skill-category';
    
    let skillItemsHtml = '';
    for (let i = 0; i < skill.skillItems.length; i++) {
        skillItemsHtml += `
            <div class="skill-item">
                <i class="${skill.icons[i]}"></i> ${skill.skillItems[i]}
            </div>
        `;
    }
    
    category.innerHTML = `
        <h3>${skill.title}</h3>
        ${skillItemsHtml}
    `;
    
    return category;
}

function renderSkills() {
    const container = document.getElementById('skillsContainer');
    container.innerHTML = '';
    
    skillset.forEach(skill => {
        const category = createSkillCategory(skill);
        container.appendChild(category);
    });
}

// Create and render project cards
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    const badgesHtml = project.skillset.map(skill => 
        `<span class="language-badge">${skill}</span>`
    ).join('');
    
    card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="badges-container">
            ${badgesHtml}
        </div>
        <a href="${project.link}" class="project-link">View Project</a>
    `;
    
    return card;
}

function renderProjects(projects) {
    const container = document.getElementById('projectsContainer');
    container.innerHTML = '';
    
    if (projects.length === 0) {
        container.innerHTML = '<p class="no-projects">No projects found with this filter.</p>';
        return;
    }
    
    projects.forEach(project => {
        const card = createProjectCard(project);
        container.appendChild(card);
    });
}

// Create and render education items
function createEducationItem(education) {
    const item = document.createElement('div');
    item.className = 'education-item';
    
    let activitiesHtml = '';
    if (education.activities && education.activities.length > 0) {
        activitiesHtml = `
            <div class="education-activities">
                <h4 class="activities-title">Activities:</h4>
                <ul class="activities-list">
                    ${education.activities.map(activity => `<li>${activity}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    let achievementsHtml = '';
    if (education.achievements && education.achievements.length > 0) {
        achievementsHtml = `
            <div class="education-achievements">
                <h4 class="achievements-title">Achievements:</h4>
                <ul class="achievements-list">
                    ${education.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    item.innerHTML = `
        <div class="education-header">
            <div>
                <h3 class="education-title">${education.institution}</h3>
                <p class="education-details">${education.degree}</p>
            </div>
            <div class="education-date">${education.period}</div>
        </div>
        ${activitiesHtml}
        ${achievementsHtml}
    `;
    
    return item;
}

function renderEducation() {
    const container = document.getElementById('educationContainer');
    container.innerHTML = '';
    
    educationData.forEach(education => {
        const item = createEducationItem(education);
        container.appendChild(item);
    });
}

// Filter projects by category
function filterProjects(category) {
    if (category === 'all') {
        renderProjects(projectsData);
        return;
    }
    
    const filteredProjects = projectsData.filter(project => 
        project.category.includes(category)
    );
    
    renderProjects(filteredProjects);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderSkills();
    renderProjects(projectsData);
    renderEducation();
    
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterProjects(this.dataset.filter);
        });
    });
});
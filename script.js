const page = document.body.dataset.page;
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginError = document.getElementById('login-error');
const registerError = document.getElementById('register-error');
const companyList = document.getElementById('company-list');
const applicationList = document.getElementById('application-list');
const userWelcome = document.getElementById('user-welcome');
const appliedCount = document.getElementById('applied-count');
const profileName = document.getElementById('profile-name');
const profileEmail = document.getElementById('profile-email');
const profileCollege = document.getElementById('profile-college');
const profileBranch = document.getElementById('profile-branch');
const profileMobile = document.getElementById('profile-mobile');
const profileLinkedin = document.getElementById('profile-linkedin');
const profileGithub = document.getElementById('profile-github');
const editProfileButton = document.getElementById('edit-profile-button');
const profileEditForm = document.getElementById('profile-edit-form');
const profileEditMessage = document.getElementById('profile-edit-message');
const profileNameInput = document.getElementById('edit-profile-name');
const profileCollegeInput = document.getElementById('edit-profile-college');
const profileBranchInput = document.getElementById('edit-profile-branch');
const profileMobileInput = document.getElementById('edit-profile-mobile');
const profileLinkedinInput = document.getElementById('edit-profile-linkedin');
const profileGithubInput = document.getElementById('edit-profile-github');
const companySearch = document.getElementById('company-search');
const cityFilter = document.getElementById('city-filter');
const companyNameList = document.getElementById('company-name-list');
const dashboardSummary = document.getElementById('dashboard-summary');
const logoutButton = document.getElementById('logout-button');

const companies = [
  { id: 1, name: 'Alpha Systems', role: 'Software Engineer', details: 'Backend development and enterprise APIs', location: 'Bangalore', salary: 420000, experience: '2-4 years', industry: 'Fintech', website: 'https://alpha.systems', skills: ['Python', 'APIs', 'SQL'] },
  { id: 2, name: 'Bright Tech', role: 'Frontend Developer', details: 'UI implementation and animation work', location: 'Hyderabad', salary: 410000, experience: '1-3 years', industry: 'SaaS', website: 'https://brighttech.io', skills: ['JavaScript', 'React', 'CSS'] },
  { id: 3, name: 'CloudWorks', role: 'Cloud Engineer', details: 'Azure and AWS automation', location: 'Pune', salary: 470000, experience: '3-5 years', industry: 'Cloud Services', website: 'https://cloudworks.com', skills: ['AWS', 'Azure', 'Terraform'] },
  { id: 4, name: 'DataBridge', role: 'Data Analyst', details: 'Data visualization and reporting', location: 'Mumbai', salary: 390000, experience: '1-2 years', industry: 'Analytics', website: 'https://databridge.ai', skills: ['Excel', 'Power BI', 'SQL'] },
  { id: 5, name: 'Eagle AI', role: 'AI Researcher', details: 'ML models and research solutions', location: 'Chennai', salary: 500000, experience: '2-4 years', industry: 'Artificial Intelligence', website: 'https://eagleai.tech', skills: ['Python', 'AI/ML', 'TensorFlow'] },
  { id: 6, name: 'Future Labs', role: 'DevOps Engineer', details: 'CI/CD pipelines and deployments', location: 'Delhi', salary: 450000, skills: ['Docker', 'Kubernetes', 'CI/CD'] },
  { id: 7, name: 'Genix Solutions', role: 'UI/UX Designer', details: 'Design systems and prototypes', location: 'Noida', salary: 320000, skills: ['Figma', 'Adobe XD', 'Design Thinking'] },
  { id: 8, name: 'Hero Networks', role: 'Network Engineer', details: 'Network planning and security', location: 'Kolkata', salary: 360000, skills: ['Network Security', 'Cisco', 'Troubleshooting'] },
  { id: 9, name: 'IQ Mobility', role: 'Mobile Developer', details: 'Android and iOS development', location: 'Bangalore', salary: 430000, skills: ['Kotlin', 'Swift', 'Mobile UI'] },
  { id: 10, name: 'Jupiter Tech', role: 'Product Manager', details: 'Product planning and execution', location: 'Mumbai', salary: 520000, skills: ['Roadmapping', 'Stakeholder Management', 'Agile'] },
  { id: 11, name: 'Kinetic Labs', role: 'Systems Engineer', details: 'Embedded system solutions', location: 'Pune', salary: 400000, skills: ['C/C++', 'Embedded Systems', 'RTOS'] },
  { id: 12, name: 'Luna Innovations', role: 'Quality Analyst', details: 'Testing and quality assurance', location: 'Chennai', salary: 340000, skills: ['Testing', 'Automation', 'Selenium'] },
  { id: 13, name: 'MetroGear', role: 'Business Analyst', details: 'Requirement gathering and analysis', location: 'Delhi', salary: 380000, skills: ['Business Analysis', 'Documentation', 'Stakeholder Research'] },
  { id: 14, name: 'Nexa Dynamics', role: 'Database Engineer', details: 'Database design and optimization', location: 'Hyderabad', salary: 440000, skills: ['SQL', 'Database Design', 'Performance Tuning'] },
  { id: 15, name: 'Orbit Tech', role: 'Cybersecurity Analyst', details: 'Security monitoring and alerts', location: 'Bangalore', salary: 490000, skills: ['Cybersecurity', 'SIEM', 'Threat Analysis'] },
  { id: 16, name: 'Pioneer Systems', role: 'Technical Support', details: 'Customer support for software', location: 'Noida', salary: 300000, skills: ['Customer Support', 'Troubleshooting', 'Communication'] },
  { id: 17, name: 'Quantum Core', role: 'Research Intern', details: 'R&D support with mentorship', location: 'Pune', salary: 280000, skills: ['Research', 'Documentation', 'Team Collaboration'] },
  { id: 18, name: 'Radix Labs', role: 'Full Stack Developer', details: 'MERN stack development', location: 'Bangalore', salary: 460000, skills: ['JavaScript', 'Node.js', 'MongoDB'] },
  { id: 19, name: 'Skyline Soft', role: 'Operations Executive', details: 'Process coordination and tracking', location: 'Chennai', salary: 310000, skills: ['Operations', 'Excel', 'Coordination'] },
  { id: 20, name: 'Titan Edge', role: 'Technical Writer', details: 'Documentation and guides', location: 'Hyderabad', salary: 330000, skills: ['Technical Writing', 'Research', 'MS Office'] },
  { id: 21, name: 'Unity Systems', role: 'Game Developer', details: 'Game features and implementation', location: 'Bangalore', salary: 470000, skills: ['Unity', 'C#', 'Game Design'] },
  { id: 22, name: 'Vantage Point', role: 'Sales Engineer', details: 'Pre-sales tech support', location: 'Mumbai', salary: 410000, skills: ['Sales', 'Technical Demos', 'Customer Engagement'] },
  { id: 23, name: 'Wave Networks', role: 'IT Consultant', details: 'Infrastructure advisory and support', location: 'Noida', salary: 430000, skills: ['IT Consulting', 'Networking', 'Strategy'] },
  { id: 24, name: 'Xpress Labs', role: 'Automation Tester', details: 'Test automation and scripts', location: 'Delhi', salary: 360000, skills: ['Automation', 'Scripting', 'Quality Assurance'] },
  { id: 25, name: 'YieldWorks', role: 'Machine Learning Engineer', details: 'Model deployment and monitoring', location: 'Pune', salary: 510000, skills: ['Python', 'Machine Learning', 'Deployment'] },
  { id: 26, name: 'Zenith Digital', role: 'Social Media Analyst', details: 'Digital campaign analysis', location: 'Mumbai', salary: 320000, skills: ['Digital Marketing', 'Analytics', 'Content Strategy'] },
  { id: 27, name: 'Apex Systems', role: 'Hardware Engineer', details: 'Component integration and testing', location: 'Bangalore', salary: 410000, skills: ['Hardware Design', 'Testing', 'Circuit Analysis'] },
  { id: 28, name: 'BrightWave', role: 'Research Analyst', details: 'Market research and insights', location: 'Chennai', salary: 350000, skills: ['Market Research', 'Reporting', 'Data Analysis'] },
  { id: 29, name: 'CoreTech', role: 'Technical Lead', details: 'Lead engineering teams', location: 'Hyderabad', salary: 540000, skills: ['Leadership', 'Architecture', 'Project Management'] },
  { id: 30, name: 'DreamWorks', role: 'Internship Trainee', details: 'Learning and project support', location: 'Delhi', salary: 290000, skills: ['Learning', 'Team Support', 'Basic Programming'] }
];

function getUsers() {
  return JSON.parse(localStorage.getItem('placement_users') || '[]');
}

function setUsers(users) {
  localStorage.setItem('placement_users', JSON.stringify(users));
}

function getCurrentUserEmail() {
  return localStorage.getItem('placement_current_user');
}

function setCurrentUserEmail(email) {
  if (email) {
    localStorage.setItem('placement_current_user', email);
  } else {
    localStorage.removeItem('placement_current_user');
  }
}

function normalizeApplications(applications) {
  return (applications || []).map((application) => {
    if (typeof application === 'number') {
      return {
        companyId: application,
        status: 'Applied',
        appliedAt: new Date().toISOString(),
        notes: ''
      };
    }
    return {
      companyId: application.companyId,
      status: application.status || 'Applied',
      appliedAt: application.appliedAt || new Date().toISOString(),
      notes: application.notes || ''
    };
  });
}

function getCurrentUser() {
  const email = getCurrentUserEmail();
  if (!email) return null;
  const user = getUsers().find((userItem) => userItem.email === email) || null;
  if (!user) return null;
  const normalizedApplications = normalizeApplications(user.applications);
  if (JSON.stringify(normalizedApplications) !== JSON.stringify(user.applications)) {
    user.applications = normalizedApplications;
    saveCurrentUser(user);
  }
  return user;
}

function saveCurrentUser(updatedUser) {
  const users = getUsers();
  const index = users.findIndex((user) => user.email === updatedUser.email);
  if (index >= 0) {
    users[index] = updatedUser;
    setUsers(users);
  }
}

function redirectToLogin() {
  window.location.href = 'login.html';
}

function redirectToDashboard() {
  window.location.href = 'dashboard.html';
}

function formatRupees(value) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);
}

function getUniqueCities() {
  return [...new Set(companies.map((company) => company.location))].sort();
}

function populateCityFilter() {
  if (!cityFilter) return;
  const cities = getUniqueCities();
  cityFilter.innerHTML = `
    <option value="">All cities</option>
    ${cities.map((city) => `<option value="${city}">${city}</option>`).join('')}
  `;
}

function getFilteredCompanies(query, city) {
  const searchValue = (query || '').trim().toLowerCase();
  return companies.filter((company) => {
    const matchesSearch = !searchValue || [
      company.name,
      company.role,
      company.location,
      company.details
    ].some((value) => value.toLowerCase().includes(searchValue));
    const matchesCity = !city || company.location === city;
    return matchesSearch && matchesCity;
  });
}

function renderDashboard() {
  const user = getCurrentUser();
  if (!user) return redirectToLogin();
  if (userWelcome) userWelcome.textContent = `Hello, ${user.name}`;
  if (appliedCount) appliedCount.textContent = `${user.applications.length} application${user.applications.length === 1 ? '' : 's'}`;
  const selectedCity = cityFilter ? cityFilter.value : '';
  const filteredCompanies = getFilteredCompanies(companySearch ? companySearch.value : '', selectedCity);
  if (dashboardSummary) {
    const cityText = selectedCity ? ` in ${selectedCity}` : '';
    dashboardSummary.textContent = filteredCompanies.length > 0
      ? `Showing ${filteredCompanies.length} of ${companies.length} companies${cityText}.`
      : `No companies match your search${selectedCity ? ` in ${selectedCity}` : ''}. Try another keyword or city.`;
  }
  if (companyNameList) {
    companyNameList.innerHTML = filteredCompanies.length > 0
      ? filteredCompanies.map((company) => `<span class="company-name-tag">${company.name}</span>`).join('')
      : '<span class="company-name-tag">No companies available</span>';
  }
  if (!companyList) return;
  if (filteredCompanies.length === 0) {
    companyList.innerHTML = '<p class="form-note">No matches found for your search query.</p>';
    return;
  }
  companyList.innerHTML = filteredCompanies
    .map((company) => {
      const applied = user.applications.some((app) => (typeof app === 'number' ? app : app.companyId) === company.id);
      return `
        <article class="company-card">
          <h3>${company.name}</h3>
          <p>${company.details}</p>
          <div class="company-meta">
            <span class="badge">Role: ${company.role}</span>
            <span class="badge">Location: ${company.location}</span>
          </div>
          <div class="company-detail-list">
            <p><strong>Industry:</strong> ${company.industry}</p>
            <p><strong>Experience:</strong> ${company.experience}</p>
            <p><strong>Website:</strong> <a href="${company.website}" target="_blank">${company.website}</a></p>
            <div class="company-skills">
              ${company.skills ? company.skills.map((skill) => `<span class="badge">${skill}</span>`).join('') : ''}
            </div>
          </div>
          <details>
            <summary>More details</summary>
            <p>${company.details} at ${company.name} includes collaboration, mentorship, and technical growth.</p>
          </details>
          <p><strong>Salary:</strong> ${formatRupees(company.salary)}</p>
          <button class="button ${applied ? 'button-secondary' : 'button-primary'}" ${applied ? 'disabled' : ''} onclick="applyToJob(${company.id})">
            ${applied ? 'Applied' : 'Apply Now'}
          </button>
        </article>
      `;
    })
    .join('');
}

function renderProfilePage() {
  const user = getCurrentUser();
  if (!user) return redirectToLogin();
  if (profileName) profileName.textContent = user.name;
  if (profileEmail) profileEmail.textContent = user.email;
  if (profileCollege) profileCollege.textContent = user.college;
  if (profileBranch) profileBranch.textContent = user.branch;
  if (profileMobile) profileMobile.textContent = user.mobile;
  if (profileLinkedin) profileLinkedin.innerHTML = user.linkedin ? `<a class="social-link linkedin" href="${user.linkedin}" target="_blank">LinkedIn profile</a>` : 'Not provided';
  if (profileGithub) profileGithub.innerHTML = user.github ? `<a class="social-link github" href="${user.github}" target="_blank">GitHub profile</a>` : 'Not provided';

  if (profileNameInput) profileNameInput.value = user.name;
  if (profileCollegeInput) profileCollegeInput.value = user.college;
  if (profileBranchInput) profileBranchInput.value = user.branch;
  if (profileMobileInput) profileMobileInput.value = user.mobile;
  if (profileLinkedinInput) profileLinkedinInput.value = user.linkedin || '';
  if (profileGithubInput) profileGithubInput.value = user.github || '';
}

function toggleProfileEdit() {
  if (!profileEditForm || !editProfileButton) return;
  profileEditForm.classList.toggle('active-view');
  editProfileButton.textContent = profileEditForm.classList.contains('active-view') ? 'Close editor' : 'Edit Profile';
}

function initProfileEditor() {
  if (!editProfileButton || !profileEditForm) return;
  editProfileButton.addEventListener('click', toggleProfileEdit);
  profileEditForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const user = getCurrentUser();
    if (!user) return redirectToLogin();

    user.name = profileNameInput.value.trim();
    user.college = profileCollegeInput.value.trim();
    user.branch = profileBranchInput.value.trim();
    user.mobile = profileMobileInput.value.trim();
    user.linkedin = profileLinkedinInput.value.trim();
    user.github = profileGithubInput.value.trim();
    saveCurrentUser(user);
    renderProfilePage();
    if (profileEditMessage) profileEditMessage.textContent = 'Profile updated successfully.';
    toggleProfileEdit();
  });
}

function renderApplicationsPage() {
  const user = getCurrentUser();
  if (!user) return redirectToLogin();
  if (!applicationList) return;
  const applicationData = user.applications
    .map((application) => {
      const company = companies.find((companyItem) => companyItem.id === application.companyId);
      return company ? { ...application, company } : null;
    })
    .filter(Boolean);

  if (applicationData.length === 0) {
    applicationList.innerHTML = '<p class="form-note">You have not applied to any company yet. Go to the dashboard and apply for roles.</p>';
    return;
  }
  applicationList.innerHTML = applicationData
    .map((item) => `
      <article class="application-card">
        <h3>${item.company.name}</h3>
        <div class="application-meta">
          <span class="badge">Role: ${item.company.role}</span>
          <span class="badge">Location: ${item.company.location}</span>
        </div>
        <p>${item.company.details}</p>
        <div class="company-skills">
          ${item.company.skills ? item.company.skills.map((skill) => `<span class="badge">${skill}</span>`).join('') : ''}
        </div>
        <p><strong>Salary:</strong> ${formatRupees(item.company.salary)}</p>
        <p><strong>Industry:</strong> ${item.company.industry}</p>
        <p><strong>Applied on:</strong> ${new Date(item.appliedAt).toLocaleDateString()}</p>
        <div class="application-actions">
          <label>
            <span>Status</span>
            <select id="status-${item.company.id}" class="status-select">
              <option value="Applied" ${item.status === 'Applied' ? 'selected' : ''}>Applied</option>
              <option value="Interview" ${item.status === 'Interview' ? 'selected' : ''}>Interview</option>
              <option value="Selected" ${item.status === 'Selected' ? 'selected' : ''}>Selected</option>
              <option value="Rejected" ${item.status === 'Rejected' ? 'selected' : ''}>Rejected</option>
            </select>
          </label>
          <label>
            <span>Notes</span>
            <textarea id="notes-${item.company.id}" class="textarea-field" rows="4">${item.notes}</textarea>
          </label>
          <button class="button button-primary" type="button" onclick="updateApplication(${item.company.id})">Save application details</button>
        </div>
      </article>
    `)
    .join('');
}

function applyToJob(jobId) {
  const user = getCurrentUser();
  if (!user) return redirectToLogin();
  if (!user.applications.some((application) => application.companyId === jobId)) {
    user.applications.push({
      companyId: jobId,
      status: 'Applied',
      appliedAt: new Date().toISOString(),
      notes: ''
    });
    saveCurrentUser(user);
    if (page === 'dashboard') renderDashboard();
  }
}

function updateApplication(companyId) {
  const user = getCurrentUser();
  if (!user) return redirectToLogin();
  const application = user.applications.find((app) => app.companyId === companyId);
  if (!application) return;

  const statusSelect = document.getElementById(`status-${companyId}`);
  const notesTextarea = document.getElementById(`notes-${companyId}`);
  if (!statusSelect || !notesTextarea) return;

  application.status = statusSelect.value;
  application.notes = notesTextarea.value.trim();
  saveCurrentUser(user);
  if (page === 'applications') renderApplicationsPage();
}

function logoutCurrentUser() {
  setCurrentUserEmail(null);
  redirectToLogin();
}

function protectPage() {
  if (!getCurrentUser()) {
    redirectToLogin();
  }
}

function initLoginPage() {
  if (!loginForm) return;
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('login-email').value.trim().toLowerCase();
    const password = document.getElementById('login-password').value;
    const user = getUsers().find((item) => item.email === email && item.password === password);

    if (loginError) loginError.textContent = '';
    if (!user) {
      if (loginError) loginError.textContent = 'Incorrect email or password. Try again.';
      return;
    }
    setCurrentUserEmail(user.email);
    redirectToDashboard();
  });
}

function initRegisterPage() {
  if (!registerForm) return;
  registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('reg-name').value.trim();
    const email = document.getElementById('reg-email').value.trim().toLowerCase();
    const password = document.getElementById('reg-password').value;
    const college = document.getElementById('reg-college').value.trim();
    const branch = document.getElementById('reg-branch').value.trim();
    const mobile = document.getElementById('reg-mobile').value.trim();
    const linkedin = document.getElementById('reg-linkedin').value.trim();
    const github = document.getElementById('reg-github').value.trim();
    const users = getUsers();

    if (registerError) registerError.textContent = '';
    if (users.some((user) => user.email === email)) {
      if (registerError) registerError.textContent = 'This email is already registered. Please login.';
      return;
    }

    users.push({ name, email, password, college, branch, mobile, linkedin, github, applications: [] });
    setUsers(users);
    window.location.href = 'login.html?registered=1';
  });
}

function initDashboardPage() {
  protectPage();
  populateCityFilter();
  renderDashboard();
  if (companySearch) {
    companySearch.addEventListener('input', renderDashboard);
  }
  if (cityFilter) {
    cityFilter.addEventListener('change', renderDashboard);
  }
}

function initProfilePage() {
  protectPage();
  renderProfilePage();
}

function initApplicationsPage() {
  protectPage();
  renderApplicationsPage();
}

function attachLogout() {
  if (!logoutButton) return;
  logoutButton.addEventListener('click', logoutCurrentUser);
}

window.addEventListener('DOMContentLoaded', () => {
  if (page === 'login') {
    initLoginPage();
    if (new URLSearchParams(window.location.search).has('registered')) {
      if (loginError) loginError.textContent = 'Registration successful. Please login now.';
    }
  }
  if (page === 'register') {
    initRegisterPage();
  }
  if (page === 'dashboard') {
    initDashboardPage();
    attachLogout();
  }
  if (page === 'profile') {
    initProfilePage();
    initProfileEditor();
    attachLogout();
  }
  if (page === 'applications') {
    initApplicationsPage();
    attachLogout();
  }
});

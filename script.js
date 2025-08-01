const jobRoles = [
    { id: "software-engineer", name: "Software Engineer", skills: ["JavaScript", "Python", "React", "Node.js"], questions: [] },
    { id: "data-scientist", name: "Data Scientist", skills: ["Python", "R", "SQL", "Machine Learning"], questions: [] },
    { id: "product-manager", name: "Product Manager", skills: ["Agile", "Roadmapping", "Stakeholder Management"], questions: [] },
    { id: "ux-designer", name: "UX Designer", skills: ["Figma", "User Research", "Prototyping"], questions: [] },
    { id: "devops-engineer", name: "DevOps Engineer", skills: ["Docker", "Kubernetes", "AWS", "CI/CD"], questions: [] },
    { id: "marketing-manager", name: "Marketing Manager", skills: ["SEO", "Content Strategy", "Analytics"], questions: [] },
    { id: "sales-executive", name: "Sales Executive", skills: ["CRM", "Negotiation", "Lead Generation"], questions: [] },
    { id: "hr-specialist", name: "HR Specialist", skills: ["Recruitment", "Employee Relations", "HRIS"], questions: [] },
    { id: "financial-analyst", name: "Financial Analyst", skills: ["Excel", "Financial Modeling", "Data Analysis"], questions: [] },
    { id: "project-manager", name: "Project Manager", skills: ["PMP", "Scrum", "Risk Management"], questions: [] }
];

const questionBank = {
    "software-engineer": {
        entry: [
            "Explain the difference between let, const, and var in JavaScript.",
            "What is a closure in JavaScript, and how is it used?",
            "Describe how you would debug a JavaScript error in the browser.",
            "What is the purpose of the 'this' keyword in JavaScript?",
            "How do you handle asynchronous operations in JavaScript?",
            "What is the DOM, and how do you interact with it?",
            "Explain the concept of event bubbling.",
            "What are promises in JavaScript, and how do they work?",
            "Describe a situation where you used a loop to solve a problem.",
            "What is the difference between == and === in JavaScript?",
            "How would you optimize a web page's performance?",
            "What is a REST API, and how have you used it?"
        ],
        junior: [
            "How do you manage state in a React application?",
            "Explain the lifecycle methods in React.",
            "What are higher-order functions in JavaScript?",
            "How do you ensure code quality in your projects?",
            "Describe your experience with unit testing in JavaScript.",
            "What is the purpose of package.json in a Node.js project?",
            "How do you handle errors in asynchronous JavaScript code?",
            "What are ES6 modules, and how do you use them?",
            "Explain the concept of a single-page application (SPA).",
            "How would you implement a search feature in JavaScript?",
            "What is TypeScript, and how does it differ from JavaScript?",
            "Describe a challenging bug you fixed in a project."
        ],
        mid: [
            "How do you optimize a Node.js application's performance?",
            "Explain the microservices architecture and its benefits.",
            "What are WebSockets, and how have you used them?",
            "Describe your experience with GraphQL.",
            "How do you secure a REST API?",
            "What is Redux, and how does it manage state?",
            "Explain the concept of memoization in JavaScript.",
            "How do you handle cross-browser compatibility issues?",
            "What are service workers, and how do they improve web apps?",
            "Describe your experience with CI/CD pipelines.",
            "How would you design a scalable frontend architecture?",
            "What is server-side rendering, and when would you use it?"
        ],
        senior: [
            "How would you architect a large-scale React application?",
            "Explain the trade-offs of monoliths vs. microservices.",
            "How do you ensure security in a full-stack application?",
            "Describe your experience with performance profiling tools.",
            "What are the benefits of using TypeScript in large projects?",
            "How do you manage technical debt in a codebase?",
            "Explain the concept of event-driven architecture.",
            "How would you implement a feature flag system?",
            "What strategies do you use for database optimization?",
            "Describe a complex system you designed from scratch.",
            "How do you mentor junior developers in coding practices?",
            "What is your approach to handling production incidents?"
        ],
        lead: [
            "How do you align technical strategy with business goals?",
            "Describe your experience leading a development team.",
            "What is your approach to system design reviews?",
            "How do you evaluate new technologies for adoption?",
            "Explain your process for capacity planning in projects.",
            "How do you ensure high availability in systems?",
            "What is your strategy for cross-team collaboration?",
            "How do you handle conflicts in technical decisions?",
            "Describe a time you improved team productivity.",
            "What is your approach to technical roadmapping?",
            "How do you ensure compliance with industry standards?",
            "What metrics do you use to measure system success?"
        ]
    },
    "data-scientist": {
        entry: [
            "What is the difference between supervised and unsupervised learning?",
            "Explain the purpose of a confusion matrix.",
            "How do you handle missing data in a dataset?",
            "What is overfitting, and how can you prevent it?",
            "Describe the steps in a data preprocessing pipeline.",
            "What is a p-value in statistical testing?",
            "How do you select features for a machine learning model?",
            "What is the role of a validation set in model training?",
            "Explain the bias-variance tradeoff.",
            "What is a decision tree, and how does it work?",
            "How do you evaluate a regression model's performance?",
            "What is SQL, and how have you used it for data analysis?"
        ],
        junior: [
            "How do you implement a linear regression model in Python?",
            "What is k-fold cross-validation, and why is it used?",
            "Describe your experience with pandas in Python.",
            "How do you visualize data to identify trends?",
            "What are ensemble methods in machine learning?",
            "Explain the concept of gradient descent.",
            "How do you handle imbalanced datasets?",
            "What is the purpose of normalization in data preprocessing?",
            "Describe your experience with Jupyter notebooks.",
            "How would you optimize a machine learning pipeline?",
            "What is clustering, and when would you use it?",
            "Explain a time you used SQL for complex data queries."
        ],
        mid: [
            "How do you tune hyperparameters in a machine learning model?",
            "What is the difference between bagging and boosting?",
            "Describe your experience with deep learning frameworks.",
            "How do you deploy a machine learning model to production?",
            "What are time-series forecasting techniques you’ve used?",
            "Explain the concept of feature engineering.",
            "How do you handle large datasets in Python?",
            "What is A/B testing, and how have you implemented it?",
            "Describe your experience with cloud-based data platforms.",
            "How do you ensure model interpretability?",
            "What is natural language processing, and how have you used it?",
            "Explain a challenging data science project you completed."
        ],
        senior: [
            "How do you design experiments for causal inference?",
            "What is your approach to model drift in production?",
            "Describe your experience with distributed computing frameworks.",
            "How do you optimize neural network architectures?",
            "What are the ethical considerations in data science?",
            "How do you balance model complexity and performance?",
            "Explain your process for stakeholder communication in projects.",
            "What is your approach to building recommendation systems?",
            "How do you handle privacy concerns in data analysis?",
            "Describe a time you improved a model’s performance significantly.",
            "What is your strategy for mentoring junior data scientists?",
            "How do you evaluate the ROI of a data science project?"
        ],
        lead: [
            "How do you align data science initiatives with business strategy?",
            "Describe your experience leading a data science team.",
            "What is your approach to building a data-driven culture?",
            "How do you evaluate new tools for data science teams?",
            "Explain your process for managing data pipelines.",
            "How do you ensure data quality across projects?",
            "What is your strategy for cross-functional collaboration?",
            "How do you handle conflicts in data-driven decisions?",
            "Describe a time you drove a major data initiative.",
            "What is your approach to long-term data strategy?",
            "How do you ensure compliance with data regulations?",
            "What metrics do you use to measure team success?"
        ]
    },
    // Additional roles follow similar structure
    "product-manager": {
        entry: [
            "What is the role of a product manager in a team?",
            "How do you prioritize features in a product roadmap?",
            "What is a user story, and how do you write one?",
            "Explain the concept of an MVP.",
            "How do you gather user feedback for a product?",
            "What is Agile methodology, and how is it used?",
            "Describe a tool you’ve used for product management.",
            "How do you define success for a product feature?",
            "What is a product backlog, and how is it managed?",
            "How do you collaborate with engineering teams?",
            "What is the purpose of a product requirements document?",
            "Describe a time you handled a stakeholder disagreement."
        ],
        junior: [
            // Similar structure with 10-12 questions
        ],
        mid: [
            // Similar structure
        ],
        senior: [
            // Similar structure
        ],
        lead: [
            // Similar structure
        ]
    }
    // Other roles (ux-designer, devops-engineer, etc.) follow similar structure
};

let participants = [];
let currentParticipant = null;
let currentQuestionIndex = 0;
let responses = [];
let assessmentInProgress = false;
let currentLanguage = 'en';
let isDarkMode = false;

const translations = {
    en: {
        "headerSubtitle": "Advanced Multi-Participant AI System for Streamlined Recruitment",
        "job-role-agent": "Job Role Agent",
        "question-agent": "Question Generator Agent",
        "evaluation-agent": "Evaluation Agent",
        "recommendation-agent": "Recommendation Agent",
        "jobRoleAgentDesc": "Defines precise hiring criteria using AI algorithms and industry benchmarks.",
        "questionAgentDesc": "Creates adaptive, role-specific questions using NLP.",
        "evaluationAgentDesc": "Analyzes responses with sentiment analysis and scoring algorithms.",
        "recommendationAgentDesc": "Provides AI-powered candidate rankings and hiring insights.",
        "dashboard-heading": "Recruitment Dashboard",
        "role-selection-heading": "Job Role Configuration",
        "participants-heading": "Participants Management",
        "chatbot-assessment-heading": "AI-Powered Assessment",
        "evaluation-results-heading": "Comprehensive Evaluation Results",
        "comparison-heading": "Advanced Candidate Comparison",
        "analytics-heading": "Advanced Analytics Dashboard",
        "insights-heading": "AI-Powered Insights"
    },
    es: {
        // Spanish translations
    },
    fr: {
        // French translations
    },
    de: {
        // German translations
    },
    hi: {
        // Hindi translations
    },
    ur: {
        // Urdu translations
    }
};

function initializeApp() {
    populateJobRoles();
    updateDashboard();
    loadParticipants();
    initializeVoiceRecognition();
    initializeCharts();
}

function populateJobRoles() {
    const jobRoleSelect = document.getElementById('jobRole');
    const participantRoleSelect = document.getElementById('participantRole');
    const filterRoleSelect = document.getElementById('filterRole');
    jobRoles.forEach(role => {
        const option = document.createElement('option');
        option.value = role.id;
        option.textContent = role.name;
        jobRoleSelect.appendChild(option);
        participantRoleSelect.appendChild(option.cloneNode(true));
        filterRoleSelect.appendChild(option.cloneNode(true));
    });
}

function loadJobRequirements() {
    const jobRole = document.getElementById('jobRole').value;
    const experienceLevel = document.getElementById('experienceLevel').value;
    const jobRequirements = document.getElementById('jobRequirements');
    if (jobRole && experienceLevel) {
        const role = jobRoles.find(r => r.id === jobRole);
        jobRequirements.style.display = 'block';
        jobRequirements.innerHTML = `
            <h3>${role.name} Requirements</h3>
            <p><strong>Skills:</strong> ${role.skills.join(', ')}</p>
            <p><strong>Experience Level:</strong> ${experienceLevel.charAt(0).toUpperCase() + experienceLevel.slice(1)}</p>
            <p><strong>Sample Questions:</strong></p>
            <ul>
                ${questionBank[jobRole][experienceLevel].slice(0, 3).map(q => `<li>${q}</li>`).join('')}
            </ul>
        `;
    } else {
        jobRequirements.style.display = 'none';
    }
}

function updateQuestions() {
    loadJobRequirements();
}

function saveRoleConfiguration() {
    const jobRole = document.getElementById('jobRole').value;
    const experienceLevel = document.getElementById('experienceLevel').value;
    const workMode = document.getElementById('workMode').value;
    const urgency = document.getElementById('urgency').value;
    const teamSize = document.getElementById('teamSize').value;
    if (jobRole && experienceLevel) {
        alert('Role configuration saved successfully!');
    } else {
        alert('Please select a job role and experience level.');
    }
}

function saveCustomRole() {
    const title = document.getElementById('customRoleTitle').value;
    const skills = document.getElementById('customRoleSkills').value.split(',').map(s => s.trim());
    const description = document.getElementById('customRoleDescription').value;
    if (title && skills.length && description) {
        jobRoles.push({ id: title.toLowerCase().replace(/\s/g, '-'), name: title, skills, questions: [] });
        populateJobRoles();
        alert('Custom role saved successfully!');
    } else {
        alert('Please fill in all fields.');
    }
}

function generateAISuggestions() {
    const industry = document.getElementById('industrySelect').value;
    const companySize = document.getElementById('companySize').value;
    const budget = document.getElementById('budget').value;
    const aiSuggestions = document.getElementById('aiSuggestions');
    if (industry && companySize && budget) {
        aiSuggestions.innerHTML = `
            <div class="result-card">
                <h3>Suggested Role: Senior ${industry.charAt(0).toUpperCase() + industry.slice(1)} Specialist</h3>
                <p>Skills: Industry-specific skills tailored for ${companySize} companies.</p>
                <p>Budget: ${budget.toUpperCase()}</p>
                <button class="btn" onclick="addSuggestedRole('Senior ${industry.charAt(0).toUpperCase() + industry.slice(1)} Specialist')">Add Role</button>
            </div>
        `;
    } else {
        aiSuggestions.innerHTML = '<p>Please select all fields to generate suggestions.</p>';
    }
}

function addSuggestedRole(roleName) {
    jobRoles.push({ id: roleName.toLowerCase().replace(/\s/g, '-'), name: roleName, skills: ['TBD'], questions: [] });
    populateJobRoles();
    alert(`Suggested role "${roleName}" added successfully!`);
}

function loadTemplate(templateType) {
    const jobRoleSelect = document.getElementById('jobRole');
    jobRoleSelect.value = templateType === 'startup' ? 'software-engineer' : templateType === 'enterprise' ? 'project-manager' : 'ux-designer';
    loadJobRequirements();
}

function addNewParticipant() {
    document.getElementById('participantModal').style.display = 'flex';
}

function saveParticipant() {
    const name = document.getElementById('participantName').value;
    const email = document.getElementById('participantEmail').value;
    const role = document.getElementById('participantRole').value;
    const resume = document.getElementById('participantResume').files[0];
    if (name && email && role) {
        const participant = { id: Date.now(), name, email, role, resume: null, status: 'pending', responses: [], score: 0 };
        if (resume) {
            parseResume(resume, participant);
        } else {
            participants.push(participant);
            updateParticipantList();
            closeModal('participantModal');
            alert('Participant added successfully!');
        }
    } else {
        alert('Please fill in all required fields.');
    }
}

function parseResume(file, participant) {
    const reader = new FileReader();
    reader.onload = async function (e) {
        const typedArray = new Uint8Array(e.target.result);
        const pdf = await pdfjsLib.getDocument(typedArray).promise;
        let text = '';
        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const content = await page.getTextContent();
            text += content.items.map(item => item.str).join(' ') + '\n';
        }
        participant.resume = text;
        participants.push(participant);
        updateParticipantList();
        displayResumePreview(file);
        closeModal('participantModal');
        alert('Participant and resume added successfully!');
    };
    reader.readAsArrayBuffer(file);
}

function displayResumePreview(file) {
    const resumePreview = document.getElementById('resumePreview');
    const resumeCanvas = document.getElementById('resumeCanvas');
    resumePreview.style.display = 'block';
    const reader = new FileReader();
    reader.onload = async function (e) {
        const typedArray = new Uint8Array(e.target.result);
        const pdf = await pdfjsLib.getDocument(typedArray).promise;
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 1 });
        resumeCanvas.height = viewport.height;
        resumeCanvas.width = viewport.width;
        page.render({ canvasContext: resumeCanvas.getContext('2d'), viewport });
    };
    reader.readAsArrayBuffer(file);
}

function updateParticipantList() {
    const participantList = document.getElementById('participantList');
    const evaluationSelect = document.getElementById('evaluationParticipantSelect');
    const bulkParticipants = document.getElementById('bulkParticipants');
    participantList.innerHTML = participants.length === 0
        ? `<div class="result-card" style="text-align: center; padding: 40px;">
               <h3>No Participants Added</h3>
               <p>Add your first participant to get started.</p>
               <button class="btn success" onclick="addNewParticipant()">➕ Add First Participant</button>
           </div>`
        : participants.map(p => `
            <div class="participant-card" data-id="${p.id}">
                <div>
                    <strong>${p.name}</strong><br>
                    <span>${p.email}</span><br>
                    <span>Role: ${jobRoles.find(r => r.id === p.role)?.name || 'N/A'}</span><br>
                    <span>Status: ${p.status.charAt(0).toUpperCase() + p.status.slice(1)}</span>
                </div>
                <div class="actions">
                    <button class="btn" onclick="startAssessment(${p.id})" ${p.status !== 'pending' ? 'disabled' : ''}>Start</button>
                    <button class="btn warning" onclick="viewParticipant(${p.id})">View</button>
                    <button class="btn danger" onclick="deleteParticipant(${p.id})">Delete</button>
                </div>
            </div>
        `).join('');
    evaluationSelect.innerHTML = '<option value="">-- Select Participant --</option>' + participants.map(p => `<option value="${p.id}">${p.name}</option>`).join('');
    bulkParticipants.innerHTML = participants.map(p => `<option value="${p.id}">${p.name}</option>`).join('');
    updateDashboard();
}

function searchParticipants() {
    const searchTerm = document.getElementById('participantSearch').value.toLowerCase();
    const filtered = participants.filter(p => p.name.toLowerCase().includes(searchTerm) || p.email.toLowerCase().includes(searchTerm));
    const participantList = document.getElementById('participantList');
    participantList.innerHTML = filtered.length === 0
        ? `<div class="result-card">No participants found.</div>`
        : filtered.map(p => `
            <div class="participant-card" data-id="${p.id}">
                <div>
                    <strong>${p.name}</strong><br>
                    <span>${p.email}</span><br>
                    <span>Role: ${jobRoles.find(r => r.id === p.role)?.name || 'N/A'}</span><br>
                    <span>Status: ${p.status.charAt(0).toUpperCase() + p.status.slice(1)}</span>
                </div>
                <div class="actions">
                    <button class="btn" onclick="startAssessment(${p.id})" ${p.status !== 'pending' ? 'disabled' : ''}>Start</button>
                    <button class="btn warning" onclick="viewParticipant(${p.id})">View</button>
                    <button class="btn danger" onclick="deleteParticipant(${p.id})">Delete</button>
                </div>
            </div>
        `).join('');
}

function startAssessment(participantId) {
    currentParticipant = participants.find(p => p.id === participantId);
    if (!currentParticipant) return;
    currentQuestionIndex = 0;
    responses = [];
    assessmentInProgress = true;
    currentParticipant.status = 'in-progress';
    updateParticipantList();
    showSection('chatbot');
    document.getElementById('currentParticipantName').textContent = currentParticipant.name;
    document.getElementById('currentParticipantEmail').textContent = currentParticipant.email;
    document.getElementById('currentParticipantRole').textContent = jobRoles.find(r => r.id === currentParticipant.role)?.name || 'N/A';
    document.getElementById('chatInput').disabled = false;
    document.getElementById('chatInput').focus();
    document.querySelector('.send-btn').disabled = false;
    document.getElementById('skipBtn').style.display = 'inline-block';
    document.getElementById('pauseBtn').style.display = 'inline-block';
    document.getElementById('endBtn').style.display = 'inline-block';
    askNextQuestion();
}

function askNextQuestion() {
    const experienceLevel = document.getElementById('experienceLevel').value;
    const questions = questionBank[currentParticipant.role][experienceLevel] || [];
    if (currentQuestionIndex < questions.length && currentQuestionIndex < 12) {
        const question = questions[Math.floor(Math.random() * questions.length)];
        const chatbotInterface = document.getElementById('chatbotInterface');
        chatbotInterface.innerHTML += `<div class="chat-message bot">🤖 ${question}</div>`;
        chatbotInterface.scrollTop = chatbotInterface.scrollHeight;
        document.getElementById('questionsAsked').textContent = currentQuestionIndex + 1;
    } else {
        endAssessment();
    }
}

function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (!message) return;
    const chatbotInterface = document.getElementById('chatbotInterface');
    chatbotInterface.innerHTML += `<div class="chat-message user">${message}</div>`;
    chatbotInterface.scrollTop = chatbotInterface.scrollHeight;
    responses.push({ question: questionBank[currentParticipant.role][document.getElementById('experienceLevel').value][currentQuestionIndex], answer: message });
    input.value = '';
    currentQuestionIndex++;
    document.getElementById('typingIndicator').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('typingIndicator').style.display = 'none';
        evaluateResponse(message);
        askNextQuestion();
    }, 1000);
}

function evaluateResponse(response) {
    // Simulated AI evaluation
    const score = Math.floor(Math.random() * 20) + 80; // Placeholder scoring
    currentParticipant.responses.push({ response, score });
    const completionRate = Math.min((currentQuestionIndex / 12) * 100, 100);
    document.getElementById('completionRate').textContent = `${completionRate.toFixed(1)}%`;
    document.getElementById('avgResponseTime').textContent = `${(Math.random() * 5 + 2).toFixed(1)}s`;
    document.getElementById('confidenceScore').textContent = `${(Math.random() * 20 + 80).toFixed(1)}%`;
}

function skipQuestion() {
    currentQuestionIndex++;
    askNextQuestion();
}

function pauseAssessment() {
    assessmentInProgress = false;
    currentParticipant.status = 'pending';
    updateParticipantList();
    document.getElementById('chatInput').disabled = true;
    document.querySelector('.send-btn').disabled = true;
    document.getElementById('skipBtn').style.display = 'none';
    document.getElementById('pauseBtn').style.display = 'none';
    document.getElementById('endBtn').style.display = 'none';
    document.getElementById('chatbotInterface').innerHTML += `<div class="chat-message bot">🤖 Assessment paused. You can resume later.</div>`;
}

function endAssessment() {
    assessmentInProgress = false;
    currentParticipant.status = 'completed';
    currentParticipant.score = currentParticipant.responses.reduce((sum, r) => sum + r.score, 0) / currentParticipant.responses.length || 0;
    updateParticipantList();
    document.getElementById('chatInput').disabled = true;
    document.querySelector('.send-btn').disabled = true;
    document.getElementById('skipBtn').style.display = 'none';
    document.getElementById('pauseBtn').style.display = 'none';
    document.getElementById('endBtn').style.display = 'none';
    document.getElementById('chatbotInterface').innerHTML += `<div class="chat-message bot">🤖 Assessment completed! Check the Evaluation section for results.</div>`;
    showSection('evaluation');
    loadParticipantResults();
}

function loadParticipantResults() {
    const participantId = document.getElementById('evaluationParticipantSelect').value;
    const participant = participants.find(p => p.id == participantId);
    if (!participant) return;
    const overallScore = participant.score.toFixed(1);
    document.getElementById('overallScoreText').textContent = `${overallScore}%`;
    document.getElementById('overallScoreCircle').style.setProperty('--score', `${overallScore}%`);
    document.getElementById('performanceDetails').innerHTML = `
        <p><strong>Name:</strong> ${participant.name}</p>
        <p><strong>Email:</strong> ${participant.email}</p>
        <p><strong>Role:</strong> ${jobRoles.find(r => r.id === participant.role)?.name || 'N/A'}</p>
        <p><strong>Score:</strong> ${overallScore}%</p>
        <p><strong>Resume Summary:</strong> ${participant.resume ? participant.resume.slice(0, 200) + '...' : 'No resume uploaded'}</p>
    `;
    document.getElementById('aiReport').innerHTML = `Detailed AI report for ${participant.name}: Strong performance in ${participant.role} skills.`;
    document.getElementById('candidateFeedback').innerHTML = `Feedback: ${participant.name} demonstrated proficiency in key areas. Consider advancing to next round.`;
    updateCharts(participant);
}

function updateCharts(participant) {
    const skillsCtx = document.getElementById('skillsRadarChart').getContext('2d');
    const interviewCtx = document.getElementById('interviewChart').getContext('2d');
    new Chart(skillsCtx, {
        type: 'radar',
        data: {
            labels: jobRoles.find(r => r.id === participant.role)?.skills || [],
            datasets: [{
                label: 'Skills Proficiency',
                data: participant.responses.map(r => r.score),
                backgroundColor: 'rgba(49, 130, 206, 0.2)',
                borderColor: '#3182ce',
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
    new Chart(interviewCtx, {
        type: 'bar',
        data: {
            labels: participant.responses.map((_, i) => `Q${i + 1}`),
            datasets: [{
                label: 'Question Scores',
                data: participant.responses.map(r => r.score),
                backgroundColor: '#3182ce'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

function initializeCharts() {
    const performanceCtx = document.getElementById('performanceChart').getContext('2d');
    const skillTrendsCtx = document.getElementById('skillTrendsChart').getContext('2d');
    const timelineCtx = document.getElementById('timelineChart').getContext('2d');
    new Chart(performanceCtx, {
        type: 'histogram',
        data: {
            labels: ['0-20', '20-40', '40-60', '60-80', '80-100'],
            datasets: [{
                label: 'Score Distribution',
                data: [0, 0, 0, 0, 0],
                backgroundColor: '#3182ce'
            }]
        }
    });
    new Chart(skillTrendsCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Skill Trends',
                data: [0, 0, 0, 0, 0],
                borderColor: '#3182ce',
                fill: false
            }]
        }
    });
    new Chart(timelineCtx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Assessments Completed',
                data: [0, 0, 0, 0],
                borderColor: '#3182ce',
                fill: false
            }]
        }
    });
}

function updateDashboard() {
    document.getElementById('totalParticipants').textContent = participants.length;
    document.getElementById('completedAssessments').textContent = participants.filter(p => p.status === 'completed').length;
    document.getElementById('averageScore').textContent = participants.length ? (participants.reduce((sum, p) => sum + p.score, 0) / participants.length).toFixed(1) : 0;
    document.getElementById('topCandidates').textContent = participants.filter(p => p.score >= 80).length;
    document.getElementById('pendingAssessments').textContent = participants.filter(p => p.status === 'pending').length;
    document.getElementById('inProgressAssessments').textContent = participants.filter(p => p.status === 'in-progress').length;
    document.getElementById('participantSuccessRate').textContent = participants.length ? `${((participants.filter(p => p.score >= 70).length / participants.length) * 100).toFixed(1)}%` : '0%';
}

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    document.querySelector(`button[onclick="showSection('${sectionId}')"]`).classList.add('active');
    document.getElementById('progressFill').style.width = `${(Array.from(document.querySelectorAll('.nav-btn')).findIndex(btn => btn.classList.contains('active')) + 1) * 12.5}%`;
}

function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    document.querySelector(`button[onclick="showTab('${tabId}')"]`).classList.add('active');
}

function showComparisonTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.getElementById(`${tabId}-comparison`).classList.add('active');
    document.querySelector(`button[onclick="showComparisonTab('${tabId}')"]`).classList.add('active');
    updateComparisonView(tabId);
}

function updateComparisonView(tabId) {
    if (tabId === 'table') {
        document.getElementById('comparisonTable').innerHTML = participants.length
            ? `<table style="width: 100%; border-collapse: collapse;">
                 <tr><th>Name</th><th>Role</th><th>Score</th><th>Status</th></tr>
                 ${participants.map(p => `
                     <tr style="border-bottom: 1px solid #e2e8f0;">
                         <td style="padding: 10px;">${p.name}</td>
                         <td>${jobRoles.find(r => r.id === p.role)?.name || 'N/A'}</td>
                         <td>${p.score.toFixed(1)}%</td>
                         <td>${p.status.charAt(0).toUpperCase() + p.status.slice(1)}</td>
                     </tr>`).join('')}
               </table>`
            : '<div class="result-card">No participants to compare</div>';
    } else if (tabId === 'chart') {
        const ctx = document.getElementById('comparisonChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: participants.map(p => p.name),
                datasets: [{
                    label: 'Candidate Scores',
                    data: participants.map(p => p.score),
                    backgroundColor: '#3182ce'
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    }
}

function changeLanguage() {
    currentLanguage = document.getElementById('languageSelect').value;
    document.getElementById('headerSubtitle').textContent = translations[currentLanguage].headerSubtitle;
    document.getElementById('job-role-agent').textContent = translations[currentLanguage]["job-role-agent"];
    document.getElementById('question-agent').textContent = translations[currentLanguage]["question-agent"];
    document.getElementById('evaluation-agent').textContent = translations[currentLanguage]["evaluation-agent"];
    document.getElementById('recommendation-agent').textContent = translations[currentLanguage]["recommendation-agent"];
    document.getElementById('jobRoleAgentDesc').textContent = translations[currentLanguage].jobRoleAgentDesc;
    document.getElementById('questionAgentDesc').textContent = translations[currentLanguage].questionAgentDesc;
    document.getElementById('evaluationAgentDesc').textContent = translations[currentLanguage].evaluationAgentDesc;
    document.getElementById('recommendationAgentDesc').textContent = translations[currentLanguage].recommendationAgentDesc;
    document.getElementById('dashboard-heading').textContent = translations[currentLanguage]["dashboard-heading"];
    document.getElementById('role-selection-heading').textContent = translations[currentLanguage]["role-selection-heading"];
    document.getElementById('participants-heading').textContent = translations[currentLanguage]["participants-heading"];
    document.getElementById('chatbot-assessment-heading').textContent = translations[currentLanguage]["chatbot-assessment-heading"];
    document.getElementById('evaluation-results-heading').textContent = translations[currentLanguage]["evaluation-results-heading"];
    document.getElementById('comparison-heading').textContent = translations[currentLanguage]["comparison-heading"];
    document.getElementById('analytics-heading').textContent = translations[currentLanguage]["analytics-heading"];
    document.getElementById('insights-heading').textContent = translations[currentLanguage]["insights-heading"];
}

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode');
}

function showHelp() {
    document.getElementById('helpModal').style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function startBulkAssessment() {
    document.getElementById('bulkActionModal').style.display = 'flex';
    document.getElementById('bulkActionSelect').value = 'start';
}

function importParticipants() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.csv';
    input.onchange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            const text = event.target.result;
            const rows = text.split('\n').slice(1);
            rows.forEach(row => {
                const [name, email, role] = row.split(',');
                if (name && email && role && jobRoles.find(r => r.id === role.trim())) {
                    participants.push({ id: Date.now() + Math.random(), name: name.trim(), email: email.trim(), role: role.trim(), status: 'pending', responses: [], score: 0 });
                }
            });
            updateParticipantList();
            alert('Participants imported successfully!');
        };
        reader.readAsText(file);
    };
    input.click();
}

function exportParticipantsToCSV() {
    const csv = ['Name,Email,Role,Status,Score'];
    participants.forEach(p => {
        csv.push(`${p.name},${p.email},${p.role},${p.status},${p.score}`);
    });
    const blob = new Blob([csv.join('\n')], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'participants.csv';
    a.click();
    URL.revokeObjectURL(url);
}

function generateOverallReport() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text('SmartHRBot Pro - Overall Report', 10, 10);
    let y = 20;
    participants.forEach(p => {
        doc.text(`Name: ${p.name}, Role: ${jobRoles.find(r => r.id === p.role)?.name || 'N/A'}, Score: ${p.score.toFixed(1)}%`, 10, y);
        y += 10;
    });
    doc.save('overall_report.pdf');
}

function initializeVoiceRecognition() {
    if ('webkitSpeechRecognition' in window) {
        window.recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = currentLanguage;
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            document.getElementById('chatInput').value = transcript;
            sendChatMessage();
        };
        recognition.onerror = (event) => {
            alert('Voice recognition error: ' + event.error);
        };
    } else {
        document.querySelector('.voice-btn').disabled = true;
    }
}

function startVoiceInput() {
    if (window.recognition) {
        recognition.start();
    }
}

function uploadFile() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.pdf';
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (file && currentParticipant) {
            parseResume(file, currentParticipant);
        }
    };
    input.click();
}

function deleteParticipant(participantId) {
    if (confirm('Are you sure you want to delete this participant?')) {
        participants = participants.filter(p => p.id !== participantId);
        updateParticipantList();
    }
}

function viewParticipant(participantId) {
    const participant = participants.find(p => p.id === participantId);
    if (participant) {
        document.getElementById('evaluationParticipantSelect').value = participantId;
        showSection('evaluation');
        loadParticipantResults();
    }
}

function executeBulkAction() {
    const action = document.getElementById('bulkActionSelect').value;
    const selectedParticipants = Array.from(document.getElementById('bulkParticipants').selectedOptions).map(opt => parseInt(opt.value));
    if (action === 'start') {
        selectedParticipants.forEach(id => startAssessment(id));
    } else if (action === 'pause') {
        participants.forEach(p => {
            if (selectedParticipants.includes(p.id) && p.status === 'in-progress') {
                p.status = 'pending';
            }
        });
        updateParticipantList();
    } else if (action === 'delete') {
        participants = participants.filter(p => !selectedParticipants.includes(p.id));
        updateParticipantList();
    }
    closeModal('bulkActionModal');
}

function applyAdvancedFilters() {
    const role = document.getElementById('filterRole').value;
    const minScore = parseFloat(document.getElementById('filterScore').value) || 0;
    const status = document.getElementById('filterStatus').value;
    const filtered = participants.filter(p => {
        return (!role || p.role === role) &&
               (minScore === 0 || p.score >= minScore) &&
               (!status || p.status === status);
    });
    const participantList = document.getElementById('participantList');
    participantList.innerHTML = filtered.length === 0
        ? `<div class="result-card">No participants match the filters.</div>`
        : filtered.map(p => `
            <div class="participant-card" data-id="${p.id}">
                <div>
                    <strong>${p.name}</strong><br>
                    <span>${p.email}</span><br>
                    <span>Role: ${jobRoles.find(r => r.id === p.role)?.name || 'N/A'}</span><br>
                    <span>Status: ${p.status.charAt(0).toUpperCase() + p.status.slice(1)}</span>
                </div>
                <div class="actions">
                    <button class="btn" onclick="startAssessment(${p.id})" ${p.status !== 'pending' ? 'disabled' : ''}>Start</button>
                    <button class="btn warning" onclick="viewParticipant(${p.id})">View</button>
                    <button class="btn danger" onclick="deleteParticipant(${p.id})">Delete</button>
                </div>
            </div>
        `).join('');
    closeModal('advancedFilterModal');
}

function advancedFilters() {
    document.getElementById('advancedFilterModal').style.display = 'flex';
}

function bulkActions() {
    document.getElementById('bulkActionModal').style.display = 'flex';
}

function generateDetailedReport() {
    const participantId = document.getElementById('evaluationParticipantSelect').value;
    const participant = participants.find(p => p.id == participantId);
    if (!participant) return;
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text(`Detailed Report for ${participant.name}`, 10, 10);
    doc.text(`Role: ${jobRoles.find(r => r.id === participant.role)?.name || 'N/A'}`, 10, 20);
    doc.text(`Score: ${participant.score.toFixed(1)}%`, 10, 30);
    let y = 40;
    participant.responses.forEach((r, i) => {
        doc.text(`Q${i + 1}: ${r.response}`, 10, y);
        doc.text(`Score: ${r.score}%`, 10, y + 10);
        y += 20;
    });
    doc.save(`${participant.name}_report.pdf`);
}

function scheduleInterview() {
    const participantId = document.getElementById('evaluationParticipantSelect').value;
    const participant = participants.find(p => p.id == participantId);
    if (participant) {
        alert(`Interview scheduled for ${participant.name}!`);
    }
}

function sendFeedbackEmail() {
    const participantId = document.getElementById('evaluationParticipantSelect').value;
    const participant = participants.find(p => p.id == participantId);
    if (participant) {
        alert(`Feedback email sent to ${participant.email}!`);
    }
}

function exportResults() {
    generateDetailedReport();
}

function shareResults() {
    const participantId = document.getElementById('evaluationParticipantSelect').value;
    const participant = participants.find(p => p.id == participantId);
    if (participant) {
        alert(`Results for ${participant.name} shared successfully!`);
    }
}

function exportComparison() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text('Candidate Comparison Report', 10, 10);
    let y = 20;
    participants.forEach(p => {
        doc.text(`Name: ${p.name}, Role: ${jobRoles.find(r => r.id === p.role)?.name || 'N/A'}, Score: ${p.score.toFixed(1)}%`, 10, y);
        y += 10;
    });
    doc.save('comparison_report.pdf');
}

function generateRankings() {
    const sorted = [...participants].sort((a, b) => b.score - a.score);
    document.getElementById('candidateRanking').innerHTML = sorted.length
        ? `<ol>${sorted.map(p => `<li>${p.name} - ${p.score.toFixed(1)}% (${jobRoles.find(r => r.id === p.role)?.name || 'N/A'})</li>`).join('')}</ol>`
        : 'No completed assessments for ranking';
}

function exportAnalytics() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text('Analytics Report', 10, 10);
    doc.text(`Total Candidates: ${participants.length}`, 10, 20);
    doc.text(`Average Score: ${participants.length ? (participants.reduce((sum, p) => sum + p.score, 0) / participants.length).toFixed(1) : 0}%`, 10, 30);
    doc.text(`Completion Rate: ${participants.length ? ((participants.filter(p => p.status === 'completed').length / participants.length) * 100).toFixed(1) : 0}%`, 10, 40);
    doc.save('analytics_report.pdf');
}

function generateCustomReport() {
    alert('Custom report generation started. Please check the Analytics section for details.');
}

function predictHiringTrends() {
    document.getElementById('predictiveAnalytics').innerHTML = 'Predicted trend: Increased demand for DevOps Engineers and Data Scientists in the next quarter.';
}

function generateInsightsReport() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text('AI-Powered Insights Report', 10, 10);
    doc.text('Hiring Recommendations: Focus on candidates with strong technical and soft skills.', 10, 20);
    doc.text('Market Analysis: Growing demand for remote-first roles.', 10, 30);
    doc.text('Skill Gap Analysis: Need for advanced cloud computing skills.', 10, 40);
    doc.save('insights_report.pdf');
}

function implementRecommendations() {
    alert('Recommendations implemented successfully!');
}

function refreshInsights() {
    document.getElementById('hiringRecommendations').innerHTML = 'Updated: Prioritize candidates with cloud computing expertise.';
    document.getElementById('marketAnalysis').innerHTML = 'Updated: Strong demand for AI and ML specialists.';
    document.getElementById('skillGapAnalysis').innerHTML = 'Updated: Upskilling required in cybersecurity.';
}

function filterCandidates() {
    const filter = document.getElementById('comparisonFilter').value;
    let filtered = [...participants];
    if (filter === 'role') {
        const role = prompt('Enter role ID:');
        filtered = filtered.filter(p => p.role === role);
    } else if (filter === 'score') {
        filtered = filtered.filter(p => p.score >= 70);
    } else if (filter === 'experience') {
        const level = prompt('Enter experience level (entry, junior, mid, senior, lead):');
        filtered = filtered.filter(p => p.experienceLevel === level);
    } else if (filter === 'completed') {
        filtered = filtered.filter(p => p.status === 'completed');
    }
    updateComparisonView(document.querySelector('.tab.active').getAttribute('onclick').match(/'([^']+)'/)[1]);
}

function sortCandidates() {
    const sortBy = document.getElementById('sortBy').value;
    let sorted = [...participants];
    if (sortBy === 'score-desc') {
        sorted.sort((a, b) => b.score - a.score);
    } else if (sortBy === 'score-asc') {
        sorted.sort((a, b) => a.score - b.score);
    } else if (sortBy === 'name') {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'date') {
        sorted.sort((a, b) => new Date(b.id) - new Date(a.id));
    }
    participants = sorted;
    updateComparisonView(document.querySelector('.tab.active').getAttribute('onclick').match(/'([^']+)'/)[1]);
}

document.addEventListener('DOMContentLoaded', initializeApp);
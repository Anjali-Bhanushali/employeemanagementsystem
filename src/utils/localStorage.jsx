
localStorage.clear()
const employees = [
  {
    id: 1,
    name: "Anjali",
    email: "e@e.com",
    password: "123",
    taskCount: {  newTask: 4, active: 1, completed: 3, failed: 2 },
    tasks: [
      { active: true, title: "Build Login Page", description: "Create login UI using React and Tailwind", date: "2026-01-10", category: "Frontend" },
      { newTask: true, title: "Add Signup Page", description: "Create signup UI", date: "2026-01-11", category: "Frontend" },
      { newTask: true, title: "Setup Routing", description: "Setup React Router", date: "2026-01-12", category: "Frontend" },
      { newTask: true, title: "Navbar Styling", description: "Style the navbar", date: "2026-01-13", category: "UI/UX" },
      { newTask: true, title: "Footer Design", description: "Design website footer", date: "2026-01-14", category: "Frontend" },
      { completed: true, title: "Fix Navbar Bug", description: "Resolve alignment issue in navbar", date: "2026-01-08", category: "Bug Fix" },
      { completed: true, title: "Button Animations", description: "Add hover animations", date: "2026-01-09", category: "UI/UX" },
      { completed: true, title: "Update Header", description: "Update header styles", date: "2026-01-07", category: "Frontend" },
      { failed: true, title: "API Integration", description: "Integrate authentication API", date: "2026-01-05", category: "Backend" },
      { failed: true, title: "Fix API Bugs", description: "Resolve API issues", date: "2026-01-06", category: "Backend" },
    ],
  },

  {
    id: 2,
    name: "Rahul",
    email: "employee2@example.com",
    password: "123",
    taskCount: {  newTask: 3, active: 2, completed: 1, failed: 4 },
    tasks: [
      { active: true, title: "Dashboard UI", description: "Design dashboard cards", date: "2026-01-12", category: "UI/UX" },
      { active: true, title: "Sidebar Component", description: "Build sidebar component", date: "2026-01-13", category: "UI/UX" },
      { newTask: true, title: "Notification Setup", description: "Add notifications logic", date: "2026-01-14", category: "Frontend" },
      { newTask: true, title: "Theme Toggle", description: "Implement light/dark toggle", date: "2026-01-15", category: "Feature" },
      { newTask: true, title: "Tooltip Feature", description: "Add tooltips to buttons", date: "2026-01-16", category: "UI/UX" },
      { completed: true, title: "Form Validation", description: "Add validation to forms", date: "2026-01-09", category: "Frontend" },
      { failed: true, title: "Chart Integration", description: "Add charts using chart library", date: "2026-01-06", category: "Frontend" },
      { failed: true, title: "Fix Chart Bugs", description: "Resolve chart rendering bugs", date: "2026-01-07", category: "Frontend" },
      { failed: true, title: "API Fetch Issues", description: "Debug API data fetch", date: "2026-01-08", category: "Backend" },
      { failed: true, title: "Optimize Dashboard", description: "Improve dashboard performance", date: "2026-01-10", category: "Optimization" },
    ],
  },

  {
    id: 3,
    name: "Sneha",
    email: "employee3@example.com",
    password: "123",
    taskCount: {  newTask: 2, active: 4, completed: 1, failed: 5 },
    tasks: [
      { active: true, title: "Password Generator", description: "Create password generator app", date: "2026-01-14", category: "React" },
      { active: true, title: "UI Improvements", description: "Improve UI responsiveness", date: "2026-01-15", category: "UI/UX" },
      { active: true, title: "Add Tooltips", description: "Add tooltips to buttons", date: "2026-01-16", category: "UI/UX" },
      { active: true, title: "Error Handling", description: "Add error handling in app", date: "2026-01-17", category: "React" },
      { newTask: true, title: "Code Linting", description: "Set up ESLint", date: "2026-01-12", category: "Optimization" },
      { newTask: true, title: "Setup GitHub Actions", description: "Add CI/CD pipeline", date: "2026-01-13", category: "DevOps" },
      { completed: true, title: "CSS Cleanup", description: "Remove unused CSS classes", date: "2026-01-11", category: "Optimization" },
      { failed: true, title: "Deploy App", description: "Deploy project on Netlify", date: "2026-01-07", category: "Deployment" },
      { failed: true, title: "Fix Deploy Issues", description: "Resolve deployment bugs", date: "2026-01-08", category: "Deployment" },
      { failed: true, title: "Backend Setup", description: "Set up backend server", date: "2026-01-09", category: "Backend" },
      { failed: true, title: "Bug Fixes", description: "Fix minor bugs in project", date: "2026-01-18", category: "Frontend" },
      { failed: true, title: "Optimize Components", description: "Refactor React components for performance", date: "2026-01-19", category: "React" },
    ],
  },

  {
    id: 4,
    name: "Aman",
    email: "employee4@example.com",
    password: "123",
    taskCount: {  newTask: 2, active: 1, completed: 3, failed: 4 },
    tasks: [
      { active: true, title: "Profile Page", description: "Create profile page UI", date: "2026-01-13", category: "Frontend" },
      { newTask: true, title: "Settings Page", description: "Build settings UI", date: "2026-01-14", category: "Frontend" },
      { newTask: true, title: "Help Center", description: "Build help center page", date: "2026-01-15", category: "Frontend" },
      { completed: true, title: "Responsive Fixes", description: "Fix mobile responsiveness", date: "2026-01-10", category: "UI/UX" },
      { completed: true, title: "Header Design", description: "Style header component", date: "2026-01-11", category: "Frontend" },
      { completed: true, title: "Footer Updates", description: "Update footer links", date: "2026-01-09", category: "UI/UX" },
      { failed: true, title: "Dark Mode", description: "Implement dark mode", date: "2026-01-06", category: "Feature" },
      { failed: true, title: "Bug Fixes", description: "Fix minor bugs", date: "2026-01-07", category: "Frontend" },
      { failed: true, title: "Optimize Images", description: "Compress images for performance", date: "2026-01-08", category: "Optimization" },
      { failed: true, title: "Fix CSS Issues", description: "Resolve styling bugs", date: "2026-01-12", category: "UI/UX" },
    ],
  },

  {
    id: 5,
    name: "Priya",
    email: "employee5@example.com",
    password: "123",
    taskCount: {  newTask: 1, active: 4, completed: 3, failed: 5 },
    tasks: [
      { active: true, title: "Task Manager", description: "Build task manager logic", date: "2026-01-15", category: "Logic" },
      { active: true, title: "Dashboard Refactor", description: "Improve dashboard logic", date: "2026-01-16", category: "Refactor" },
      { active: true, title: "Notifications Feature", description: "Add notifications", date: "2026-01-17", category: "Feature" },
      { active: true, title: "Profile Settings", description: "Manage user settings", date: "2026-01-18", category: "UI/UX" },
      { newTask: true, title: "Theme Picker", description: "Add theme selection", date: "2026-01-19", category: "UI/UX" },
      { completed: true, title: "Refactor Code", description: "Improve code readability", date: "2026-01-12", category: "Refactor" },
      { completed: true, title: "Optimize Logic", description: "Optimize backend logic", date: "2026-01-13", category: "Optimization" },
      { completed: true, title: "Optimize Logic", description: "Optimize backend logic", date: "2026-01-13", category: "Optimization" },
      { failed: true, title: "Unit Testing", description: "Write unit tests", date: "2026-01-08", category: "Testing" },
      { failed: true, title: "Fix Bugs", description: "Resolve minor bugs", date: "2026-01-09", category: "Frontend" },
      { failed: true, title: "API Error Handling", description: "Handle API errors", date: "2026-01-10", category: "Backend" },
      { failed: true, title: "Update Components", description: "Update outdated components", date: "2026-01-11", category: "Frontend" },
      { failed: true, title: "Optimize Database", description: "Improve DB queries", date: "2026-01-14", category: "Backend" },
    ],
  },
];





const admin = [
  {
    id: 101,
    name: "Admin",
    email: "admin@example.com",
    password: "123",
  },
];



export const setLocalStorage = () => {
   localStorage.setItem('employees',JSON.stringify(employees))
   localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = () => {
   const employees = JSON.parse(localStorage.getItem('employees'))
   const admin = JSON.parse(localStorage.getItem('admin'))

   return {employees,admin}

}


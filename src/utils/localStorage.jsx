
localStorage.clear()
const employees = [
  {
    id: 1,
    name: "Anjali",
    email: "employee1@example.com",
    password: "123",

    taskCount: {
      active: 1,
      newTask: 4,
      completed: 3,
      failed: 2,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Build Login Page",
        description: "Create login UI using React and Tailwind",
        date: "2026-01-10",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix Navbar Bug",
        description: "Resolve alignment issue in navbar",
        date: "2026-01-08",
        category: "Bug Fix",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "API Integration",
        description: "Integrate authentication API",
        date: "2026-01-05",
        category: "Backend",
      },
    ],
  },

  {
    id: 2,
    name: "Rahul",
    email: "employee2@example.com",
    password: "123",

    taskCount: {
      active: 2,
      newTask: 3,
      completed: 1,
      failed: 4,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Dashboard UI",
        description: "Design dashboard cards",
        date: "2026-01-12",
        category: "UI/UX",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Form Validation",
        description: "Add validation to forms",
        date: "2026-01-09",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Chart Integration",
        description: "Add charts using chart library",
        date: "2026-01-06",
        category: "Frontend",
      },
    ],
  },

  {
    id: 3,
    name: "Sneha",
    email: "employee3@example.com",
    password: "123",

    taskCount: {
      active: 4,
      newTask: 2,
      completed: 1,
      failed: 5,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Password Generator",
        description: "Create password generator app",
        date: "2026-01-14",
        category: "React",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "CSS Cleanup",
        description: "Remove unused CSS classes",
        date: "2026-01-11",
        category: "Optimization",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Deploy App",
        description: "Deploy project on Netlify",
        date: "2026-01-07",
        category: "Deployment",
      },
    ],
  },

  {
    id: 4,
    name: "Aman",
    email: "employee4@example.com",
    password: "123",

    taskCount: {
      active: 1,
      newTask: 2,
      completed: 3,
      failed: 4,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Profile Page",
        description: "Create profile page UI",
        date: "2026-01-13",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Responsive Fixes",
        description: "Fix mobile responsiveness",
        date: "2026-01-10",
        category: "UI/UX",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Dark Mode",
        description: "Implement dark mode",
        date: "2026-01-06",
        category: "Feature",
      },
    ],
  },

  {
    id: 5,
    name: "Priya",
    email: "employee5@example.com",
    password: "123",

    taskCount: {
      active: 4,
      newTask: 1,
      completed: 3,
      failed: 5,
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Task Manager",
        description: "Build task manager logic",
        date: "2026-01-15",
        category: "Logic",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Refactor Code",
        description: "Improve code readability",
        date: "2026-01-12",
        category: "Refactor",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Unit Testing",
        description: "Write unit tests",
        date: "2026-01-08",
        category: "Testing",
      },
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


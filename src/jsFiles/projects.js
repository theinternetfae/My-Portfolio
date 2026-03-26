export const projects = [
    {
        id: 0,
        name: "Optima",
        subtitle: "Adaptive productivity app",
        banner: "./images/Optima-Logo.png",
        problem: "Most productivity apps treat all users the same, encouraging rigid task tracking that often leads to inconsistency or burnout. They don’t adapt to how users actually behave over time.",
        solution: "Optima is a productivity app that analyzes task completion patterns and dynamically adjusts its behavior based on user consistency. Instead of enforcing a fixed system, it introduces a self-evolving approach that encourages sustainable productivity by responding to how users interact with their tasks.",
        features: ["Dynamic task system that adapts based on user completion patterns", "Real-time data persistence and syncing using Appwrite", "User authentication for personalized task management", "Smart feedback loop that adjusts expectations based on consistency", "Clean, responsive UI designed for ease of use across devices"],
        challenges: "Built a system that responds to user behavior over time, which required managing asynchronous data, structuring state effectively, and designing UI logic that reflects changing conditions without breaking user experience.",
        description: "Optima is a productivity app that analyzes task completion patterns to dynamically adapt its behavior. Its core feature, a self-evolving system, adjusts based on user consistency to encourage sustainable productivity rather than burnout.",
        langTools: ["HTML", "React", "TailwindCSS", "Appwrite"],
        gitLink: "https://github.com/theinternetfae/Optima-V.2.git",
        live: "https://theinternetfae.github.io/Optima-V.2/",
        border: ['#60A5FA', '#032C7D']
    },
    {
        id: 1,
        name: "GirlyPop",
        banner: "./images/Girlypop-Logo.png",
        description: "GirlyPop is an e-commerce website made just for femme clothing. It provides a focused space where users can discover, list, and trade styles that reflect feminine aesthetics across all sizes, eras, and interpretations, without having to dig through unrelated items.",
        langTools: ["HTML", "JavaScript", "CSS"],
        gitLink: "https://github.com/theinternetfae/GirlyPop.git",
        live: "",
        border: ['#7e1037', '#FF0077']
    }
]
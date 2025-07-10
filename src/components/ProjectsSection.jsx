import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Jatim Journey",
    description: "Bangkit Academy 2024 Capstone Project - A comprehensive travel platform for East Java tourism with ML-powered recommendations, mobile app, and cloud infrastructure.",
    image: "/projects/project1.jpg",
    tags: ["Kotlin", "TensorFlow", "Google Cloud", "Node.js", "Machine Learning", "Android Development", "Cloud Computing"],
    demoUrl: "#",
    githubUrl: "https://github.com/Jatim-Journey",
  },
  {
    id: 2,
    title: "Sistem Keamanan Anti-Perusakan Berbasis IoT",
    description: "Menggunakan teknologi IoT untuk memantau, mendeteksi, dan memberikan peringatan dini terhadap aktivitas perusakan di UB Forest.",
    image: "/projects/image.png",
    tags: ["Laravel", "Leaflet", "MySQL", "PHP"],
    demoUrl: "#",
    githubUrl: "https://github.com/septiannaim/ub-forest",
  },
  {
    id: 3,
    title: "Sistem Monitoring & Konservasi UB Forest Berbasis AI & IoT",
    description: "Sistem monitoring hutan UB Forest berbasis AI & IoT dengan kamera jebak, LoRa, dan YOLO untuk deteksi aktivitas, serta fog computing dan panel surya untuk efisiensi energi. Mendukung pengawasan dan konservasi berkelanjutan.",
    image: "/projects/project-3.jpg",
    tags: ["AI", "IoT", "LoRa", "YOLO", "Fog Computing", "Solar Panel"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/project1.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "User Management API",
    description: "RESTful API untuk manajemen user dengan fitur CRUD, validasi, filtering, pagination, dan dokumentasi Swagger. Dibangun dengan Node.js, Express.js, dan MongoDB, serta siap untuk deployment di Vercel.",
    image: "/projects/project-4.png",
    tags: ["Node.js", "Express.js", "MongoDB", "REST API", "Vercel"],
    demoUrl: "https://management-user-api.vercel.app",
    githubUrl: "https://github.com/septiannaim/management-user-api",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/septiannaim"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

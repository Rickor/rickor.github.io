document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true
    });

    // Load projects dynamically
    fetch("libraries/projects.json")
        .then(response => response.json())
        .then(projects => {
            const projectsContainer = document.getElementById("projects-container");

            projects.forEach(project => {
                const projectDiv = document.createElement("div");
                projectDiv.classList.add("project");

                projectDiv.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.github}" target="_blank" class="btn">View on GitHub</a>
                `;

                projectsContainer.appendChild(projectDiv);
            });
        })
        .catch(error => console.error("Error loading projects:", error));
});

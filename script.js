document.addEventListener('DOMContentLoaded', function() {
    const githubUsername = 'uwaiseibna2';  
    const projectContainer = document.getElementById('github-projects');

    fetch(`https://api.github.com/users/${githubUsername}/repos`)
        .then(response => response.json())
        .then(data => {
            data.forEach(repo => {
                const project = document.createElement('div');
                project.classList.add('project');
                project.innerHTML = `
                    <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
                    <p>${repo.description}</p>
                `;
                projectContainer.appendChild(project);
            });
        })
        .catch(error => console.error('Error fetching repos:', error));
});
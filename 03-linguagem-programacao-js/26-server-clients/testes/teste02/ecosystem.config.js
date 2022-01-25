module.exports = {
    apps: [
        {
            // script: 'backend/app.js',
            script: 'npm start',
            cwd: 'backend/',
            name: 'Backend',
            watch: true,
        },
        {
            // script: 'frontend/server-front.js',
            script: 'npm start',
            cwd: 'frontend/',
            name: 'Frontend',
            watch: true,
        }
    ]
}
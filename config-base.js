module.exports = {
    endpoint: 'https://gitlab.my-company.com/api/v4/',
    platform: 'gitlab',
    logFileLevel: process.env.RENOVATE_LOG_FILE_LEVEL,
    logFile: process.env.LOG_FILE,
    includeForks: true,
    dependencyDashboard: false,
    onboarding: true,
    onboardingConfig: {
        extends: ['config:base', 'group:all'],
    },
    extends: ['config:base'],
    prCommitsPerRunLimit: 50,
};

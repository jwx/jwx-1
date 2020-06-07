export default {
    new: {
        cmd: 'npx',
        args: ['makes', 'aurelia'],
        passThroughArgs: true,
        requiresProject: false,
    },
    help: {
        cmd: 'help',
        args: [],
        passThroughArgs: true,
        requiresProject: false,
    },
    localize: {
        cmd: 'npm',
        args: ['install', '--save-dev', 'jwx-1'],
        passThroughArgs: false,
        requiresProject: true,
    },
    globalize: {
        cmd: 'npm',
        args: ['install', '-g', 'jwx-1'],
        passThroughArgs: false,
        requiresProject: false,
    },
};

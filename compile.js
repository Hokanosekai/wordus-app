const electronInstaller = require('electron-winstaller');

const t = async () => {
    try {
        await electronInstaller.createWindowsInstaller({
            appDirectory: `${process.cwd()}/`,
            outputDirectory: `${process.cwd()}/out/`,
            authors: 'Hokanosekai',
            exe: 'wordus.exe'
        });
        console.log('It worked!');
    } catch (e) {
        console.log(`No dice: ${e.message}`);
    }
}

t().then();
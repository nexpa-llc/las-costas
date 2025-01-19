import process from 'node:process';
import { promisify } from 'node:util';
import pc from 'picocolors';
import inquirer from 'inquirer';
import semver from 'semver';
import childProcess from 'node:child_process';

const exec = promisify(childProcess.exec);

const packageVersion = process.env.npm_package_version;

async function runCommand(name, cmd) {
  try {
    console.log(pc.white(name));
    await exec(cmd);
  } catch (error) {
    console.log(pc.red(error.stderr));
    process.exit();
  }
}

async function updateVersion() {
  const questions = [
    {
      name: 'version',
      type: 'list',
      message: `The current version is ${packageVersion}, specify the next version:`,
      choices: [
        {
          name: `Patch ${semver.inc(packageVersion, 'patch')}`,
          value: semver.inc(packageVersion, 'patch'),
        },
        {
          name: `Minor ${semver.inc(packageVersion, 'minor')}`,
          value: semver.inc(packageVersion, 'minor'),
        },
        {
          name: `Major ${semver.inc(packageVersion, 'major')}`,
          value: semver.inc(packageVersion, 'major'),
        },
      ],
    },
    {
      name: 'message',
      type: 'input',
      message: 'Enter a message:',
    },
  ];

  const { version, message } = await inquirer.prompt(questions);

  console.log(pc.white('Updating version'), pc.green(version));
  await exec(`npm version "${version}" -m "${message}"`);
}

async function main() {
  await runCommand('Running Linter', 'npm run lint');
  await runCommand('Running Build', 'npm run build');
  await updateVersion();
}

main();

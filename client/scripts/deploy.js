import process from 'node:process';
import { promisify } from 'node:util';
import pc from 'picocolors';
import inquirer from 'inquirer';
import semver from 'semver';
import childProcess from 'node:child_process';

const exec = promisify(childProcess.exec);

const CURRENT_PACKAGE_VERSION = process.env.npm_package_version;
const VERSION_MESSAGE = 'New Version';

async function runCommand(name, cmd) {
  try {
    console.log(pc.white(`Running ${name}`));
    await exec(cmd);
    console.log(pc.green(`Success Running ${name}`));
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
      message: `The current version is ${CURRENT_PACKAGE_VERSION}, specify the next version:`,
      choices: [
        {
          name: `Patch ${semver.inc(CURRENT_PACKAGE_VERSION, 'patch')}`,
          value: semver.inc(CURRENT_PACKAGE_VERSION, 'patch'),
        },
        {
          name: `Minor ${semver.inc(CURRENT_PACKAGE_VERSION, 'minor')}`,
          value: semver.inc(CURRENT_PACKAGE_VERSION, 'minor'),
        },
        {
          name: `Major ${semver.inc(CURRENT_PACKAGE_VERSION, 'major')}`,
          value: semver.inc(CURRENT_PACKAGE_VERSION, 'major'),
        },
      ],
    },
    {
      name: 'message',
      type: 'input',
      message: 'Enter a message:',
      default: VERSION_MESSAGE,
    },
  ];

  const { version, message } = await inquirer.prompt(questions);

  console.log(pc.white('Updating version'), pc.green(version));
  await exec(`npm version "${version}" -m "${message}"`);
}

async function confirmDeploy() {
  const questions = [
    {
      name: 'message',
      type: 'input',
      message: `Type "deploy" to confirm the push to production:`,
      validate(value) {
        if (value.toLowerCase() === 'deploy') {
          return true;
        }

        return 'Invalid entry.';
      },
    },
  ];

  await inquirer.prompt(questions);
}

async function main() {
  // await runCommand('Linter', 'npm run lint');
  await runCommand('Build', 'npm run build');
  await confirmDeploy();
  await updateVersion();
  await runCommand(
    'Pushing version',
    `git commit -am "${VERSION_MESSAGE}" && git push origin main`,
  );
}

main();

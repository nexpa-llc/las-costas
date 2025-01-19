import process from "node:process";
import { promisify } from "node:util";
import pc from "picocolors";
import inquirer from "inquirer";
import semver from "semver";
import childProcess from "node:child_process";

const exec = promisify(childProcess.exec);

const WORKSPACE = process.argv[2];

async function main() {
  const { stdout } = await exec(
    `node -p "require('${WORKSPACE}/package.json').version"`
  );

  if (!stdout) {
    console.error(pc.red("Could not identify version."));
    process.exit();
  }

  const CURRENT_PACKAGE_VERSION = stdout.replace("\n", "");

  const questions = [
    {
      name: "version",
      type: "list",
      message: `The current version is ${CURRENT_PACKAGE_VERSION}, specify the next version:`,
      choices: [
        {
          name: `Patch ${semver.inc(CURRENT_PACKAGE_VERSION, "patch")}`,
          value: semver.inc(CURRENT_PACKAGE_VERSION, "patch"),
        },
        {
          name: `Minor ${semver.inc(CURRENT_PACKAGE_VERSION, "minor")}`,
          value: semver.inc(CURRENT_PACKAGE_VERSION, "minor"),
        },
        {
          name: `Major ${semver.inc(CURRENT_PACKAGE_VERSION, "major")}`,
          value: semver.inc(CURRENT_PACKAGE_VERSION, "major"),
        },
      ],
    },
  ];

  const { version } = await inquirer.prompt(questions);

  console.log(pc.white("Updating version"), pc.green(version));
  await exec(`npm version "${version}" --workspace=${WORKSPACE}"`);
}

main();

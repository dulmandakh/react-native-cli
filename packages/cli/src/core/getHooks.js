/**
 * @flow
 */

import { spawn } from 'child_process';
import getPackageConfiguration from './getPackageConfiguration';

export function makeCommand(command: string) {
  // eslint-disable-next-line flowtype/no-weak-types
  return (cb: Function) => {
    if (!cb) {
      throw new Error(
        `You missed a callback function for the ${command} command`
      );
    }

    const args = command.split(' ');
    const cmd = args.shift();

    const commandProcess = spawn(cmd, args, {
      stdio: 'inherit',
      stdin: 'inherit',
    });

    commandProcess.on('close', code => {
      if (code) {
        throw new Error(`Error occurred during executing "${command}" command`);
      }

      cb();
    });
  };
}

export default function getHooks(root: string) {
  const commands = getPackageConfiguration(root).commands || {};

  const acc = {};

  Object.keys(commands).forEach(command => {
    acc[command] = makeCommand(commands[command]);
  });

  return acc;
}

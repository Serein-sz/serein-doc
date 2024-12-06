import { execSync } from "node:child_process";
import pc from "picocolors";

execCommand(
  "scp -r ./docs/.vitepress/dist root@112.125.89.224:/opt/app/serein-docs/",
  "upload success"
)

execCommand(
  "ssh root@112.125.89.224 sh /opt/app/serein-docs/deploy.sh",
  "deploy success"
)

function execCommand(path: string, message: string) {
  const start = new Date();
  execSync(path)
  const consumeTime = ((new Date().getTime() - start.getTime()) / 1000).toFixed(2);
  console.log(pc.green(pc.bold(`${message} in ${consumeTime}s\n`)));
}

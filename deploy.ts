import { execSync } from "node:child_process";
import pc from "picocolors"

let start = new Date()

console.log("\n")

execSync('scp -r ./docs/.vitepress/dist root@112.125.89.224:/opt/app/serein-docs/');
let consumeTime = ((new Date().getTime() - start.getTime()) / 1000).toFixed(2)
console.log(pc.green(pc.bold(`upload success in ${consumeTime}s\n`)));

start = new Date()

execSync('ssh root@112.125.89.224 sh /opt/app/serein-docs/deploy.sh');
consumeTime = ((new Date().getTime() - start.getTime()) / 1000).toFixed(2)
console.log(pc.green(pc.bold(`deploy success in ${consumeTime}s`)));

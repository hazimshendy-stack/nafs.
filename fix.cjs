#!/usr/bin/env node

const { execSync } = require("child_process");

// ====== الإعدادات ======
const BRANCH = process.env.BRANCH || "main";
const FORCE = process.argv.includes("--force");

// الرسالة: أول باراميتر مش --force، أو وقت دلوقتي
const args = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const MSG =
  args[0] ||
  `auto update ${new Date().toISOString().slice(0, 16).replace("T", " ")}`;
// =======================

function run(cmd) {
  console.log(`\n$ ${cmd}`);
  try {
    execSync(cmd, { stdio: "inherit" });
  } catch (err) {
    // لو commit فشل لأن مفيش تغييرات، كمّل عادي
    if (cmd.startsWith("git commit")) {
      console.log("⚠️  No changes to commit, skipping...");
      return;
    }
    console.error(`❌ Failed: ${cmd}`);
    process.exit(1);
  }
}

console.log("📦 Adding files...");
run("git add .");

console.log(`\n💾 Committing: ${MSG}`);
run(`git commit -m "${MSG.replace(/"/g, '\\"')}"`);

console.log(`\n🚀 Pushing to ${BRANCH}${FORCE ? " (force)" : ""}...`);
run(`git push${FORCE ? " --force" : ""} origin ${BRANCH}`);

console.log("\n✅ Done!");

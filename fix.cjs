#!/usr/bin/env node
/**
 * fix-gh.cjs
 * ----------------------------------------------------------------------
 * Fixes GitHub Pages auto-deployment for this presentation project.
 *
 * What it does:
 *   1. Ensures .github/workflows/deploy.yml exists (the ONLY folder
 *      GitHub Actions reads from — with a leading dot).
 *   2. If a workflow exists at github/workflows/ (no dot), it moves it.
 *   3. If no workflow exists at all, it creates a minimal, correct one.
 *   4. Warns if the repo looks like it needs a Pages-source switch.
 *
 * Usage:
 *   node fix-gh.cjs
 *   node fix-gh.cjs --dry-run
 * ----------------------------------------------------------------------
 */

"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = process.cwd();
const DRY = process.argv.includes("--dry-run");

const log = (...a) => console.log(...a);
const warn = (...a) => console.warn("  ⚠", ...a);
const ok = (...a) => console.log("  ✓", ...a);

function write(rel, content) {
  const abs = path.join(ROOT, rel);
  if (DRY) {
    log(`  [dry-run] would write ${rel}`);
    return;
  }
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, content, "utf8");
  ok(`wrote ${rel}`);
}

const WORKFLOW = `name: Deploy to GitHub Pages

on:
  push:
    branches: [ main, master ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: .

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
`;

function ensureDir(rel) {
  const abs = path.join(ROOT, rel);
  if (!fs.existsSync(abs)) {
    if (DRY) log(`  [dry-run] would mkdir ${rel}`);
    else fs.mkdirSync(abs, { recursive: true });
  }
}

function moveIfExists(from, to) {
  const src = path.join(ROOT, from);
  const dst = path.join(ROOT, to);
  if (!fs.existsSync(src)) return false;
  if (fs.existsSync(dst)) {
    warn(`both ${from} and ${to} exist — leaving ${from} untouched`);
    return false;
  }
  if (DRY) {
    log(`  [dry-run] would move ${from} → ${to}`);
    return true;
  }
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  fs.renameSync(src, dst);
  ok(`moved ${from} → ${to}`);
  return true;
}

function detectRepoInfo() {
  try {
    const out = execSync("git remote -v", {
      cwd: ROOT,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });
    const m = out.match(/github\.com[:/]([^/]+)\/([^/\s.]+)(?:\.git)?/);
    if (m) return { owner: m[1], repo: m[2] };
  } catch {
    /* not a git repo or no remote */
  }
  return null;
}

function detectBranch() {
  try {
    const out = execSync("git branch --show-current", {
      cwd: ROOT,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    if (out) return out;
  } catch {
    /* ignore */
  }
  try {
    const out = execSync("git symbolic-ref --short HEAD", {
      cwd: ROOT,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    if (out) return out;
  } catch {
    /* ignore */
  }
  return "main";
}

/* ------------------------------------------------------------------ */

log("\n=== fix-gh.cjs — GitHub Pages auto-deploy fix ===\n");
if (DRY) log("  [dry-run mode]\n");

/* 1. Ensure .github/workflows exists. */
ensureDir(".github/workflows");

/* 2. Move github/workflows/* into .github/workflows/ if present. */
const legacyDir = path.join(ROOT, "github", "workflows");
if (fs.existsSync(legacyDir)) {
  const legacyFiles = fs.readdirSync(legacyDir);
  if (legacyFiles.length) {
    log(
      `\nFound legacy folder: github/workflows/ (${legacyFiles.length} file(s))`
    );
    for (const f of legacyFiles) {
      moveIfExists(
        path.join("github", "workflows", f),
        path.join(".github", "workflows", f)
      );
    }
    // Remove the now-empty legacy dir if possible.
    if (!DRY) {
      try {
        const rest = fs.readdirSync(legacyDir);
        if (!rest.length) {
          fs.rmdirSync(legacyDir);
          ok("removed empty github/workflows/");
        }
      } catch {
        /* ignore */
      }
    }
  }
}

/* 3. Write the workflow if it doesn't exist. */
const targetWorkflow = path.join(ROOT, ".github", "workflows", "deploy.yml");
if (fs.existsSync(targetWorkflow)) {
  const cur = fs.readFileSync(targetWorkflow, "utf8");
  // Make sure the essential bits are present.
  const missing = [];
  if (!/pages:\s*write/.test(cur)) missing.push("pages: write");
  if (!/id-token:\s*write/.test(cur)) missing.push("id-token: write");
  if (!/upload-pages-artifact/.test(cur)) missing.push("upload-pages-artifact");
  if (!/deploy-pages/.test(cur)) missing.push("deploy-pages");
  if (missing.length) {
    warn(`.github/workflows/deploy.yml is missing: ${missing.join(", ")}`);
    warn("overwriting with the canonical workflow");
    write(".github/workflows/deploy.yml", WORKFLOW);
  } else {
    ok(".github/workflows/deploy.yml looks correct — leaving as is");
  }
} else {
  write(".github/workflows/deploy.yml", WORKFLOW);
}

/* 4. Sanity checks + next steps. */
log("\n--- checks ---");

const hasIndex = fs.existsSync(path.join(ROOT, "index.html"));
hasIndex
  ? ok("index.html found at repo root")
  : warn("no index.html at root — Pages will serve a 404");

const info = detectRepoInfo();
const branch = detectBranch();

if (info) {
  const url = `https://${info.owner}.github.io/${info.repo}/`;
  log(`\n  repo   : ${info.owner}/${info.repo}`);
  log(`  branch : ${branch}`);
  log(`  url    : ${url}`);
} else {
  warn("could not detect a github.com remote — is 'origin' set?");
  log("        git remote add origin git@github.com:<user>/<repo>.git");
}

log(`
--- ما الذي عليك فعله يدويًا في GitHub (مرة واحدة) ---

1. ارفع التعديلات:

     git add .github
     git commit -m "ci: fix GitHub Pages workflow location"
     git push

2. افتح الريبو → Settings → Pages
   - تحت "Build and deployment" → Source: اختر  GitHub Actions
     (لو مختار "Deploy from a branch" غيّره لـ GitHub Actions)
   - احفظ.

3. افتح تاب Actions → يجب أن تشوف "Deploy to GitHub Pages"
   اشتغل أوتوماتيك بعد الـ push. لو مش شغال:
     - Actions → Deploy to GitHub Pages → Run workflow (يدوي).

4. لو الريبو Private على حساب Free:
   - GitHub Pages ما بتشتغلش على Private repos إلا في Pro/Team/Enterprise.
   - الحل: خلّي الريبو Public، أو رقّي الحساب.

5. لو لسه فاضي بعد 2–3 دقايق:
   - Actions → آخر run → شوف الـ logs.
   - أشهر الأخطاء:
       • "Get Pages site failed" → Pages source لسه مش GitHub Actions.
       • "Not found" → مفيش index.html في الـ root.
       • صلاحيات ناقصة → لازم تكون في ملف الـ workflow:
           permissions:
             pages: write
             id-token: write
`);

log(DRY ? "\n[dry-run] no changes written.\n" : "\nDone.\n");

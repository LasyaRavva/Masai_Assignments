# Project Management in Node.js

## a. Package Managers
- **What is a package manager?** A tool that installs, updates, removes, and tracks third-party libraries so you do not manually copy code or chase transitive dependencies.
- **Why do we need them in backend development?** Backends rely on many libraries (HTTP servers, ORMs, logging). A package manager automates fetching the right versions, verifying integrity, and wiring them into the project, which keeps setup repeatable for every developer and environment.
- **Problems without one:** Manual downloads, version mismatches between teammates, missing transitive deps, harder security updates, and no single source of truth for what the project needs.

## b. NPM (Node Package Manager)
- **What is NPM?** The default package manager and registry client for Node.js, installed with Node.
- **Why is it important?** It gives access to the public npm registry, manages install scripts, and standardizes how Node apps declare and resolve dependencies.
- **How it manages dependencies:** `package.json` declares direct deps with semantic versions; `npm install` resolves the tree, saves exact versions in `package-lock.json`, downloads code into `node_modules`, and can run lifecycle scripts (e.g., build/test) defined in the manifest.

## c. Backend Project Initialization
- **Command:** Run `npm init` in the project folder.
- **`npm init`:** Interactive; asks for name, version, entry file, etc., then writes `package.json` from your answers.
- **`npm init -y`:** Skips questions and writes `package.json` with default values (you can edit later). Useful for quick setup or demos.

## d. Files and Folders Created After Initialization
- **package.json:** Project manifest; stores name, version, scripts, dependencies, and metadata. Needed for installs, CI, and publishing.
- **node_modules:** Actual downloaded dependency code (and their dependencies). Machine-generated, can be large, and is regenerated from `package.json`/`package-lock.json`.
- **package-lock.json:** Exact, deterministic dependency graph with resolved versions and integrity hashes; ensures everyone installs the same tree and speeds up installs.

### What to push (and not) to GitHub
- **Do not push:** `node_modules/` because it is large, platform-specific, and reproducible from the lockfile. Add it to `.gitignore`.
- **Must commit:** `package.json` and `package-lock.json` so others (and CI) install the same dependency set and scripts.

### Simple flow example
1. `npm init -y` → creates `package.json`.
2. `npm install express` → adds Express to `package.json`, writes exact versions to `package-lock.json`, downloads code to `node_modules`.
3. Push `package.json` + `package-lock.json`; omit `node_modules/`. On another machine, `npm install` recreates the same setup.

---
name: Portfolio Project Addition
summary: A step-by-step agentic skill for adding a new project to Alex Gomes Pimentel's portfolio using the data-driven project manifest and JSON experience model.
applyTo:
  - "**/index.html"
  - "**/assets/js/**"
  - "**/projects/**"
---

# Portfolio Project Addition Skill

## Purpose
This skill explains exactly how to add a new project to the portfolio without editing the static HTML page. It is designed for an agentic coder that can manipulate JSON data, create assets, and validate the data-driven rendering flow.

## When to use
- Add a new project to an existing company experience
- Add a new company experience with one or more projects
- Update the manifest and project JSON data for the portfolio
- Validate the portfolio timeline and project modal behavior

## Required files
- `projects/manifest.json`
- `projects/<company-folder>/data.json`
- `projects/<company-folder>/<image>`
- `assets/js/data-loader.js`
- `assets/js/main.js`

## How it works
1. `index.html` loads `assets/js/data-loader.js` and `assets/js/main.js`.
2. `assets/js/data-loader.js` fetches `projects/manifest.json`.
3. It then loads every `projects/<company-folder>/data.json` listed in the manifest.
4. `assets/js/main.js` renders the experience timeline and project modal from the JSON data.
5. When a company experience has a `projects` array, the timeline card displays a `Projects` button.
6. The modal slider uses `currentProjectIndex` to show each project in `exp.projects`.

## Agentic workflow

### Step 1: Choose or create company folder
- If the project belongs to an existing engagement, use the existing folder under `projects/`.
- If it is a new engagement, create a new folder: `projects/<new-folder-name>/`.

### Step 2: Update `projects/manifest.json`
- Add the new folder name to the `companies` array if necessary.
- Example:
```json
{
  "companies": [
    "eletromidia",
    "masterminds",
    "sony-music",
    "drmarket",
    "notion",
    "fireball",
    "agente-resolve",
    "tmx-grafica",
    "new-company-folder"
  ]
}
```

### Step 3: Create or update `projects/<folder>/data.json`
- Add or update the experience object with these fields:
  - `company`
  - `role`
  - `period`
  - `location`
  - `link`
  - `desc`
  - `techs`
  - `projects`
- Each project object must include:
  - `id`
  - `title`
  - `description`
  - `image`
  - `prompt`
  - `challenges`
  - `solutions`
  - `tradeoffs`
  - `results`
  - `period`
  - `duration`

### Step 4: Add the project image asset
- It is mandatory to generate the image using the built-in script.
- Update replacing content `projects/image-prompts.json` first to include the new image output path and prompt.
- Store the image output path in the same company folder: `projects/<folder>/<image>`.
- The frontend constructs the path as `projects/<folder>/<project.image>`.
- Run the script from the `projects/` folder:
  ```bash
  cd projects
  GEMINI_API_KEY="your-key" ./generate-images.sh
  ```
- If `GEMINI_API_KEY` is not already set in environment variables, ask the user to provide it before running the command.
- The script will save the image file under the output path defined in `projects/image-prompts.json`.
- If the image still fails to load in the modal, verify the output path and file name in the project JSON.

### Step 5: Verify tech tags
- `techs` at the experience level populate the global tag cloud.
- Use normalized tag names for consistency.
- Known aliases in code:
  - `Next` → `Next.js`
  - `Vue` / `Vuejs` → `Vue.js`
  - `React.js` → `React`
  - `FastApi` → `FastAPI`
  - `Nest` → `Nest.js`

### Step 6: Validate JSON and reload
- Confirm the JSON is valid and properly formatted.
- Confirm `projects` is an array.
- Reload the portfolio page and check the experience card.
- Open the modal and validate the project details.

## JSON template
```json
{
  "company": "Example Company",
  "role": "Senior Engineer",
  "period": "Month Year - Month Year",
  "location": "Remote",
  "link": "https://example.com",
  "desc": "Brief description of the engagement.",
  "techs": ["React", "Node.js", "TypeScript", "GCP"],
  "projects": [
    {
      "id": "example-project",
      "title": "Example Project",
      "description": "Short project summary and impact.",
      "image": "example-project.png",
      "prompt": "Optional image generation prompt.",
      "challenges": ["Challenge 1", "Challenge 2"],
      "solutions": ["Solution 1", "Solution 2"],
      "tradeoffs": [
        {"title": "Tradeoff 1", "body": "Decision reasoning."}
      ],
      "results": ["Result 1", "Result 2"],
      "period": "Month Year - Month Year",
      "duration": "X months"
    }
  ]
}
```

## Notes for the agentic coder
- Do not edit `index.html` to add projects.
- All project content is data-driven via JSON.
- The only required code change for a new project is `manifest.json` and the relevant `data.json`.
- If the new folder already exists, only update that folder's `data.json` and image assets.

## Success criteria
- The new company appears in the timeline.
- The `Projects` button appears when `projects` is non-empty.
- The modal shows the new project with all sections.
- Tech tags are added to the global cloud when new tech names appear.

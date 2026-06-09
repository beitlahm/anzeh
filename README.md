# Anzeh Portfolio Site

Ahmad Emran AlOmour's personal portfolio. Vanilla HTML, CSS & JS — no build tools required.

## Running locally

```bash
# Any of these work:
npx serve .
python -m http.server
```

> Serving over HTTP (rather than opening `index.html` directly) avoids CORS issues with local fonts and background animations.

## Project structure

```
/
├── index.html
├── style.css
├── script.js
├── resume.pdf          ← replace with your own
├── icon (1).png        ← favicon
├── bg1/                ← parallax background set 1 (4 layers, meadow)
│   ├── grass with more detail and has flowers.png
│   ├── plain green.png
│   ├── clouds.png
│   └── sky with some clouds.png
├── bg2/                ← parallax background set 2 (5 layers, meadow + tree)
│   ├── grass with more detail with flowers and a tree.png
│   ├── plain grass.png
│   ├── clouds.png
│   ├── tiny cloud.png
│   └── plain sky(i dont think this should move).png
└── bg3/                ← parallax background set 3 (4 layers, hills)
    ├── grass with more detail and has flowers.png
    ├── plain grass.png
    ├── hill.png
    └── clouds.png
```

On each page load, `script.js` picks one of the three background sets at random and adds `.bg-1`, `.bg-2`, or `.bg-3` to `<body>`. To add a new set: create a `bg4/` folder, add your layer PNGs, define a new `@keyframes parallax-bg-4` and `.bg-4` rule in `style.css` (follow the existing pattern), and change `totalBackgrounds` in `script.js` from `3` to `4`.

---

## Adding content

Paste the templates below inside the matching `<div class="card-group">` in `index.html`.

### Experience

```html
<article class="experience-card" role="listitem">
    <a href="YOUR_COMPANY_URL" class="card-link" target="_blank" rel="noopener noreferrer">
        <div class="card-grid">
            <header class="card-date" aria-label="YOUR_DATE_RANGE">
                YOUR_DATE_RANGE
            </header>
            <div class="card-body">
                <h3 class="card-title">
                    YOUR_ROLE · YOUR_COMPANY
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="arrow-icon" aria-hidden="true">
                        <path fill-rule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clip-rule="evenodd"/>
                    </svg>
                </h3>
                <p class="card-description">YOUR_DESCRIPTION</p>
                <ul class="tag-list" aria-label="Technologies used">
                    <li><span class="tag">YOUR_SKILL_1</span></li>
                    <li><span class="tag">YOUR_SKILL_2</span></li>
                </ul>
            </div>
        </div>
    </a>
</article>
```

### Project

```html
<article class="project-card" role="listitem">
    <a href="YOUR_PROJECT_URL" class="card-link" target="_blank" rel="noopener noreferrer">
        <div class="card-grid card-grid--project">
            <div class="project-media" aria-hidden="true">
                <!-- Add multiple <img> tags here to auto-rotate every 3 seconds -->
                <img src="YOUR_IMAGE.png" alt="Screenshot of YOUR_PROJECT_NAME" loading="lazy">
            </div>
            <div class="card-body">
                <h3 class="card-title">
                    YOUR_PROJECT_NAME
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="arrow-icon" aria-hidden="true">
                        <path fill-rule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clip-rule="evenodd"/>
                    </svg>
                </h3>
                <p class="card-description">YOUR_DESCRIPTION</p>
                <ul class="tag-list" aria-label="Technologies used">
                    <li><span class="tag">YOUR_SKILL_1</span></li>
                    <li><span class="tag">YOUR_SKILL_2</span></li>
                </ul>
            </div>
        </div>
    </a>
</article>
```

> **Rotating images:** add as many `<img>` tags as you want inside `.project-media` — the JS carousel handles the rest.
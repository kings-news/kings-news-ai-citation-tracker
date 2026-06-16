# Kings News AI Citation Tracker

[![npm](https://img.shields.io/npm/v/@kings-news/ai-citation-tracker)](https://npmjs.com/package/@kings-news/ai-citation-tracker)
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.20721642.svg)](https://doi.org/10.5281/zenodo.20721642)

Track how visible your press releases are across AI platforms, search engines, and the modern discovery ecosystem. Built by [Kingnewswire.co](https://kingnewswire.co/)

## Features

- AI Citation Score — measures content suitability for AI platform references
- Search Visibility Score — evaluates traditional and AI-enhanced search optimization
- Platform-by-Platform Analysis — ChatGPT, Google AI Overviews, Gemini, Perplexity, Copilot
- Citation Readiness Assessment — signals, structure, authority, and context evaluation
- Visibility Gap Report — identifies weaknesses preventing AI discovery
- Actionable Recommendations — improve discoverability, authority, and citation potential
- Competitive Benchmarking — compare against industry standards
- Content Optimization Insights — headlines, factual clarity, source attribution, structure
- CLI support in Node.js and Python
- Benchmark dataset included (20 citation tracking cases)
- Lightweight, publish-ready, minimal dependencies

## Quick Start

### Node.js

```bash
npm install @kings-news/ai-citation-tracker
npx ai-citation-tracker "press-release-title" 72 65 80 55 70 60
```

### Python

```bash
pip install kings-news-citation-tracker
python -m tracker "press-release-title" 72 65 80 55 70 60
```

## Output

```
Content: press-release-title
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AI Citation Score:           72 / 100  [Healthy]
Search Visibility Score:     65 / 100  [At Risk]
Citation Readiness Score:    80 / 100  [Healthy]
Visibility Gap Score:        55 / 100  [At Risk]
Platform Reach Score:        70 / 100  [Healthy]
Content Optimization Score:  60 / 100  [At Risk]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Overall Citation Health:     67 / 100
Priority Action:             Visibility Gap (lowest — act first)

Platform Breakdown:
  ChatGPT:              72 / 100
  Google AI Overviews:  68 / 100
  Gemini:               65 / 100
  Perplexity:           74 / 100
  Copilot:              63 / 100
```

## Project Structure

```
kings-news-ai-citation-tracker/
├── index.ts              # TypeScript tracker
├── tracker.py            # Python tracker
├── package.json          # NPM package config
├── package-lock.json     # NPM lock file
├── tsconfig.json         # TypeScript config
├── schema.json           # JSON-LD structured data
├── zenodo.json           # Zenodo metadata
├── heartbeat.txt         # Auto-updated daily
├── mkdocs.yml            # ReadTheDocs config
├── .readthedocs.yaml     # ReadTheDocs build config
├── docs/
│   ├── index.md          # Documentation
│   └── requirements.txt
├── dataset/
│   └── citation_benchmarks.csv
├── kaggle/
│   └── notebook.ipynb
├── .github/workflows/
│   ├── heartbeat.yml     # Auto-commit daily
│   └── npm-publish.yml   # Auto-publish to NPM
├── README.md
└── LICENSE
```

## Citation Signal Scores

| Signal | Description | Score Range |
|--------|-------------|-------------|
| AI Citation | Content suitability for AI platform references | 0–100 |
| Search Visibility | Traditional and AI-enhanced search optimization | 0–100 |
| Citation Readiness | Signals, structure, authority, context | 0–100 |
| Visibility Gap | Weaknesses preventing AI discovery | 0–100 |
| Platform Reach | Coverage across AI platforms and search ecosystems | 0–100 |
| Content Optimization | Headlines, clarity, attribution, structure | 0–100 |

## Platform Coverage

| Platform | Description |
|----------|-------------|
| ChatGPT | OpenAI large language model citation tracking |
| Google AI Overviews | Google SGE and AI Overview visibility |
| Gemini | Google Gemini AI citation potential |
| Perplexity | Perplexity AI source citation tracking |
| Copilot | Microsoft Copilot visibility analysis |

## Score Interpretation

| Score | Status | Action |
|-------|--------|--------|
| 0–30 | Critical | Immediate optimization required |
| 31–60 | At Risk | Active improvement needed |
| 61–80 | Healthy | Maintain and refine |
| 81–100 | Excellent | Sustain and scale |

## Keywords

AI Citation Tracker · Press Release Visibility · AI Search · ChatGPT Citation · Google AI Overviews · Perplexity · Gemini · Copilot · Content Discovery · King News Wire

## Links

| Platform | URL |
|----------|-----|
| Website | https://kingnewswire.co |
| GitHub | https://github.com/kings-news/kings-news-ai-citation-tracker |
| GitHub Pages | https://kings-news.github.io/kings-news-ai-citation-tracker/ |
| NPM | https://npmjs.com/package/@kings-news/ai-citation-tracker |
| Hugging Face | https://huggingface.co/datasets/kings-news/ai-citation-benchmarks |
| Kaggle | https://kaggle.com/datasets/kingsnews/ai-citation-benchmarks |
| Zenodo | https://zenodo.org/records/20721642 |
| Docs | https://kings-news-ai-citation-tracker.readthedocs.io |

## About Kings News

Kings News AI Citation Tracker empowers organizations to measure, understand, and improve their visibility in the evolving world of AI-powered discovery — helping every press release achieve maximum reach and impact. 

## License

MIT — [Kingnewswire.co](https://kingnewswire.co/)

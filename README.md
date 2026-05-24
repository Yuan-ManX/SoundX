<div align="center">

<img src="./assets/SoundX.png" alt="SoundX Logo">


<h1 align="center">SoundX</h1>
<p align="center">
  <strong>AI-Native Digital Audio Workstation</strong><br/>
  <sub>An autonomous agent framework for music production — planning, generation, and cross-engine delivery driven by natural language.</sub>
</p>

![Website Demo](./website/public/hero-demo.gif)

![Version](https://img.shields.io/badge/version-2.0.0-blue)
![Python Version](https://img.shields.io/badge/Python-3.10+-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green)
![Stars](https://img.shields.io/github/stars/Yuan-ManX/SoundX?style=social)


#### [English](./README.md) | [中文文档](./README_CN.md)

</div>



## Table of Contents

- [Overview](#overview)
- [Key Capabilities](#key-capabilities)
- [Getting Started](#getting-started)

## Overview

SoundX is a full-stack, AI-native Digital Audio Workstation that replaces the conventional click-and-drag DAW workflow with an autonomous agent loop. Users express production intent in natural language; the system handles intent decomposition, multi-step planning, tool orchestration, sandboxed code generation, and iterative refinement — targeting multiple audio engines including Web Audio, Native, Unreal Engine, and Unity.

## Key Capabilities

### Natural Language Music Production

Express your creative vision in plain language — "create a lo-fi hip hop track with vinyl crackle" or "add a warm analog reverb to the vocals". The system understands musical intent and translates it into actionable workflows, eliminating manual parameter tweaking.

### Multi-Modal Audio Generation

Seamlessly integrate text-to-music, text-to-sound-effect, and vocal generation models. Generate original compositions, realistic instrument samples, or sound design elements directly from descriptive prompts, with full control over style, mood, and technical parameters.

### Intelligent Mixing & Mastering

AI-powered mixing that automatically balances tracks, applies EQ, compression, and spatial effects based on genre conventions and artistic intent. Smart mastering delivers studio-grade results with adaptive dynamics, stereo imaging, and loudness normalization to industry standards.

### Smart Project Management

Intelligent organization of tracks, stems, and assets. Automatic version control, stem export, and collaboration features. Semantic search across project history allows you to recall "that bassline we tried last week" using natural language.

### Personalized Style Modeling

The system learns your unique production style through continuous interaction. Over time, it suggests mixing techniques, sound design choices, and arrangement decisions that align with your artistic preferences, creating a personalized production assistant.

## Getting Started

### Prerequisites

- **Python** ≥ 3.9
- **Node.js** ≥ 18
- **LLM API Key** — OpenAI, Anthropic, or compatible provider

### Installation

```bash
git clone https://github.com/Yuan-ManX/SoundX.git
cd SoundX

pip install -r requirements.txt
cd web && npm install && cd ..

cp .env.example .env
# Configure SOUNDX_LLM_API_KEY, SOUNDX_LLM_MODEL, etc.

./start-soundx.sh
```

## License

This project is licensed under the MIT License — see [LICENSE](LICENSE) for details.


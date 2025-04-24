---
layout: doc
title: Get Started
description: Quick start guide for luna.cli - the ultimate Discord bot template generator
sidebar:
  - text: Installation
    link: "#installation"
  - text: Creating Your First Bot
    link: "#creating-your-first-bot"
  - text: Framework Options
    link: "#framework-options"
  - text: Common Commands
    link: "#common-commands"
---

# Get Started

## Installation

Install luna.cli globally using npm:

```bash [npm]
npm install -g luna.cli
```

## Creating Your First Bot

### 1. Generate a new bot project

```bash [create]
mkdir my-awesome-bot
```

### 2. Navigate to your project

```bash [navigate]
cd my-awesome-bot
```

### 3. Add a template
`Usage: luna template add <template>`
```bash [template]
luna template add aoi.js --basic
```

### 4. Configure your bot

```bash [config]
luna config
```

### Start Developing!

```bash [run]
npm run dev
```

## Commands

| Command | Description | Example |
|---------|-------------|---------|
| `luna template list` | Show templates | `luna template list` |
| `luna template add <template>` | Adds a template | `luna template add aoi.js --basic` |
| `luna template remove` | Removes the template | `luna template remove` |
| `luna template update <template>` | Updates the template | `luna template update aoi.js --basic` |
| `luna config` | Configure your bot | `luna config` |

## Next Steps

- [Explore Templates](/templates)
- [Join Discord Support](https://discord.gg/bdmxYHCrBF)

<Badge type="tip" text="Pro Tip" /> Use `luna template list` to see all available templates!
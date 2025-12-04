# WAR Card Game

A simple browser-based implementation of the classic card game **WAR**, built using **JavaScript**, **HTML/CSS**, and **Vite** as the development server.

---

## 📌 Project Overview

This project was created as part of a collaborative, 60-minute, single-computer activity for a software engineering course. The objective is to practice teamwork, iterative development, and rapid prototyping.

The game simulates the card game **WAR** between the Player and a CPU opponent. The UI is intentionally simple to support the time constraint.

---

## 🎮 Game Rules (Summary)

* A standard 52‑card deck is created and shuffled.
* The deck is split evenly into two 26‑card decks: **Player** and **CPU**.
* Each round, both players reveal the top card.
* Higher value wins the round; winner takes both cards and places them on the bottom of their deck.
* If the cards tie, a **WAR** occurs (expanded rules in full project doc).
* Game ends when a player has **0 cards**.

---

## 📂 Project Structure

```
project-root/
  ├─ index.html
  ├─ style.css
  ├─ main.js
  ├─ deck.js
  ├─ vite.config.js (auto generated)
  └─ README.md
```

---

## 🚀 Getting Started

This project uses **Vite** for fast development.

### **1. Create a new Vite project**

Run this command in your terminal:

```bash
npm create vite@latest war-game -- --template vanilla
```

### **2. Install dependencies**

```bash
cd war-game
npm install
```

### **3. Start development server**

```bash
npm run dev
```

A local server will start and give you a URL (usually `http://localhost:5173`).

---

## 🧩 Features

* Deck creation & shuffling
* Card drawing and comparison
* Win/lose detection
* Basic UI displaying cards and scores
* Modular JavaScript (ES Modules)

---

## ⭐ Stretch Goals

* Full WAR support with face-down cards
* Card images instead of text
* Animations for drawing and flipping cards
* Auto-play mode
* Sound effects

---

## 👥 Team Activity Notes

This project is ideal for:

* Pair programming / mob programming
* Quick iterations
* Practicing JS module structure
* Learning basic front-end architecture

---

## 📜 License

This project is for educational use.

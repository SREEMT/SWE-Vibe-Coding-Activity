# WAR Card Game Project Documentation

## 1. Game Rules (In Depth)

WAR is a simple two-player card game using a standard 52‑card deck. The objective is to win all the cards.

### **Setup**

* Use a standard deck of 52 cards.
* Shuffle the deck.
* Split the deck evenly between **Player** and **CPU** (26 cards each).

### **Gameplay Loop**

1. **Both players reveal the top card** from their deck simultaneously.
2. **Compare card values** (Aces high or low — choose; for this project we will treat Ace as high).
3. **Higher card wins**.

   * The winner takes both cards and places them at the bottom of their deck.
4. **If values are equal**, a "WAR" happens:

   * Each player places **3 cards face-down** (if available), then a **4th card face‑up**.
   * The face‑up cards are compared.
   * Winner takes *all* cards in the pot.
   * If another tie occurs, WAR repeats.
   * If a player doesn't have enough cards to complete a WAR, they play as many as they can; the other player still reveals the next card.

### **Winning the Game**

* A player wins when the opponent has **0 cards remaining**.

---

# 2. Requirements (Markdown)

## **WAR Card Game — Project Requirements**

### **1. Functional Requirements**

* **FR1:** The system shall shuffle a standard 52‑card deck.
* **FR2:** The system shall distribute cards evenly between Player and CPU.
* **FR3:** The system shall allow the player to press a button to play the next round.
* **FR4:** The system shall reveal both played cards on the UI.
* **FR5:** The system shall automatically determine the round winner.
* **FR6:** The system shall move won cards to the bottom of the winner's deck.
* **FR7:** The system shall handle a WAR event when both values match.
* **FR8:** The system shall detect and declare when the game ends.
* **FR9:** The user shall be able to restart the game.

### **2. Non‑Functional Requirements**

* **NFR1:** The game should run in any modern browser.
* **NFR2:** The UI should update within 100ms after a round begins.
* **NFR3:** Code should be modular and written using ES modules.
* **NFR4:** The system shall not require external libraries besides Vite.

### **3. Constraints**

* Must be built within ~60 minutes.
* Only one computer used collaboratively.
* Keep UI minimal.
* No backend.

### **4. Stretch Goals (Optional)**

* Animations for flipping/drawing cards.
* Sound effects.
* Card images instead of text.
* Auto-play mode.

---

# 3. Minimal Starter Template (Vite Project)

### **Directory Structure**

```
war-game/
  ├─ index.html
  ├─ style.css
  ├─ main.js
  ├─ deck.js
  ├─ utils.js
  └─ vite.config.js (auto-generated)
```

---


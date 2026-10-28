# Lineage 2 Mechanics

A static information portal about how the game mechanics of **Lineage 2** (up to the *Interlude* chronicles) actually work: stats, formulas, skills, items and combat physics.

This is a rework of the information portal [l2p.lacrafter.ru](http://l2p.lacrafter.ru), which is not reachable from many countries because of its Russian domain. No ads.

## Contents

- **Skills and Items** – boss jewelry, hero weapons, +6 armor bonuses, buffs, passives, toggles, summons and pets, skill enchant (per class), status window info
- **Base Stats** – HP, CP, MP, P.Atk., M.Atk., P.Def., M.Def., accuracy, evasion, critical, speed, attack/casting speed
- **Mastery** – weapon, armor, M.Def
- **Debuffs** – theory and base land rates
- **Combat Physics & Misc.** – attributes, magic critical hits, non-skill attacks, resurrection, shield block rate, weight limit

## Usage

No build step or backend. Open `index.html` in a browser, or serve the folder with any static server:

```
python -m http.server
```

An internet connection is needed for jQuery, normalize.css and Google Fonts, which are loaded from CDNs.

## Structure

```
*.html   one page per topic
css/     styles
js/      core.js (navigation) and addon_*.js (per-page logic)
img/     icons, UI textures, source files (psd, ai, tga)
```

## Credits

Information on this portal comes from the Lineage 2 community. The full list of contributors is on the home page.

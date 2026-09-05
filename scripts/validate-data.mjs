import fs from 'node:fs/promises';
const cfg=JSON.parse(await fs.readFile(new URL('../data/series.json',import.meta.url),'utf8'));
const h=JSON.parse(await fs.readFile(new URL('../data/history.json',import.meta.url),'utf8'));
if(!Array.isArray(cfg.series)||cfg.series.length<10) throw new Error('series config invalid');
if(!h.series||typeof h.series!=='object') throw new Error('history invalid');
console.log(`config ok: ${cfg.series.length} series; history contains ${Object.keys(h.series).length}`);

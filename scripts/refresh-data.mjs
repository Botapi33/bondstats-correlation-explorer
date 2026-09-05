import fs from 'node:fs/promises';
const cfg=JSON.parse(await fs.readFile(new URL('../data/series.json',import.meta.url),'utf8'));
const key=process.env.FRED_API_KEY;
if(!key) throw new Error('FRED_API_KEY is required');
const start=new Date(); start.setUTCFullYear(start.getUTCFullYear()-11);
const startDate=start.toISOString().slice(0,10);
const out={generated_at:new Date().toISOString(),source:'FRED API',series:{}};
for(const s of cfg.series){
  const u=new URL('https://api.stlouisfed.org/fred/series/observations');
  u.searchParams.set('series_id',s.id); u.searchParams.set('api_key',key); u.searchParams.set('file_type','json'); u.searchParams.set('observation_start',startDate);
  const r=await fetch(u); if(!r.ok){console.warn(s.id,r.status); continue}
  const j=await r.json(); out.series[s.id]=(j.observations||[]).filter(x=>x.value!=='.').map(x=>[x.date,Number(x.value)]);
}
await fs.writeFile(new URL('../data/history.json',import.meta.url),JSON.stringify(out));
console.log(`refreshed ${Object.keys(out.series).length} series`);

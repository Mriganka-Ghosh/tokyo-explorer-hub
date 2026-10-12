import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Search } from 'lucide-react';
import { TokyoLayout } from '@/components/tokyo-layout';
import { HeritageCard } from '@/components/heritage-card';
import { Button } from '@/components/ui/button';
import { heritageSites } from '@/lib/heritage';
import { tokyoMeta } from '@/lib/tokyo-meta';
export const Route=createFileRoute('/heritage/')({head:()=>tokyoMeta('Heritage sites','Explore eleven historic places in Tokyo, from Sensō-ji and Meiji Jingū to Edo-period gardens and the Imperial Palace.'),component:Heritage});
function Heritage(){const [filter,setFilter]=useState('All sites');const [query,setQuery]=useState('');const sites=heritageSites.filter(s=>(filter==='All sites'||s.category===filter)&&`${s.name} ${s.district}`.toLowerCase().includes(query.toLowerCase()));return <TokyoLayout><div className="site-container"><div className="page-intro"><div className="section-kicker">THE HEART OF THE CITY</div><h1>Tokyo’s living heritage</h1><p>Beyond the skyline lies a city shaped by centuries. Discover sacred shrines, storied temples, and gardens where the spirit of old Edo lives on.</p></div><div className="filter-bar"><div className="filter-group">{['All sites','Temples','Shrines','Palaces & Gardens'].map(f=><Button key={f} variant={filter===f?'default':'ghost'} size="sm" onClick={()=>setFilter(f)}>{f}</Button>)}</div><label className="search-field"><Search/><input aria-label="Search heritage sites" placeholder="Search places…" value={query} onChange={e=>setQuery(e.target.value)}/></label></div><p className="text-xs text-muted-foreground mb-5">{sites.length} places to discover</p><div className="heritage-grid pb-16">{sites.map(site=><HeritageCard site={site} key={site.slug}/>)}</div>{sites.length===0&&<p className="pb-16 text-muted-foreground">No places found. Try another name or neighborhood.</p>}</div></TokyoLayout>}

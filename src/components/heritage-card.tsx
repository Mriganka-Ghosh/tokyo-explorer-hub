import { Link } from '@tanstack/react-router';
import { ArrowUpRight, MapPin } from 'lucide-react';
import type { HeritageSite } from '@/lib/heritage';
export function HeritageCard({site}:{site:HeritageSite}) {
 return <Link to="/heritage/$slug" params={{slug:site.slug}} className="site-card"><div className="site-card-photo"><img src={site.image} alt={site.name} width={960} height={640} loading="lazy"/><span className="site-tag">{site.category === 'Palaces & Gardens' ? 'GARDEN & PALACE' : site.category.slice(0,-1).toUpperCase()}</span></div><div className="site-card-title"><h3>{site.name}</h3><ArrowUpRight/></div><p><MapPin size={12}/>{site.district}</p></Link>;
}

import { createFileRoute, notFound } from '@tanstack/react-router';
import { heritageSites } from '@/lib/heritage';
import { HeritageDetail } from '@/components/heritage-detail';
import { tokyoMeta } from '@/lib/tokyo-meta';
export const Route=createFileRoute('/heritage/$slug')({loader:({params})=>{const site=heritageSites.find(s=>s.slug===params.slug);if(!site)throw notFound();return site;},head:({loaderData})=>tokyoMeta(loaderData?.name??'Heritage site not found',loaderData?.description??'This Tokyo heritage site is unavailable.'),component:Site});
function Site(){const site=Route.useLoaderData();return <HeritageDetail site={site}/>;}

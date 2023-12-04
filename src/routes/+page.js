import { createClient } from '@supabase/supabase-js';
import appConfig from '$lib/app.config';

const supabase = createClient(appConfig.supabase.url, appConfig.supabase.jwt);

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    return await supabase
        .from('featured_projects')
        .select(`
            title,
            description,
            svg,
            app_label,
            app_link,
            repo_label,
            repo_link,
            programming_language( name, css_color )
        `);
}
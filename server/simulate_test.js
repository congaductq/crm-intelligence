import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
async function simulateGetStoreInfo(store_name) {
    console.log(`\n--- Simulating get_store_info for: "${store_name}" ---`);
    // Initial fuzzy match
    const fuzzyName = store_name.replace(/[^a-zA-Z0-9]/g, "%").replace(/%+/g, "%");
    console.log(`1. Initial fuzzy search: %${fuzzyName}%`);
    const { data: initialData } = await supabase.from("stores").select("id, store_name").ilike("store_name", `%${fuzzyName}%`).limit(5);
    if (initialData && initialData.length > 0) {
        console.log(`✅ Found in Supabase (Initial):`, initialData);
        return;
    }
    console.log(`❌ Not found in initial search. Trying fallback...`);
    // Fallback search
    const words = store_name.split(/[^a-zA-Z0-9]/).filter(w => w.length > 2 && !["includes", "location", "info", "show", "data"].includes(w.toLowerCase()));
    console.log(`Significant words found:`, words);
    if (words.length > 0) {
        const firstWords = words.slice(0, 3).join("%");
        console.log(`2. Fallback search: %${firstWords}%`);
        const { data: fallbackData } = await supabase.from("stores").select("id, store_name").ilike("store_name", `%${firstWords}%`).limit(5);
        if (fallbackData && fallbackData.length > 0) {
            console.log(`✅ Found in Supabase (Fallback):`, fallbackData);
            return;
        }
    }
    console.log(`❌ Still not found in Supabase. Would fall back to MongoDB.`);
}
async function runTests() {
    await simulateGetStoreInfo("Profile 3 - Greenline (Dispensary Canabis)");
    await simulateGetStoreInfo("Profile 3 - Greenline (Dispensary Canabis) includes location");
}
runTests();

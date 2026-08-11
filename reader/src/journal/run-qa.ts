import { assertJournalCatalog } from "./qa.ts";
import { listJournalBriefs } from "./registry.ts";

assertJournalCatalog(listJournalBriefs());
console.log(`Journal QA passed (${listJournalBriefs().length} brief(s)).`);

// Pings IndexNow (Bing, Yandex, Seznam, Naver…) with every URL in the live sitemap, so a
// deploy is picked up without waiting for the next crawl. Run after deploying:
//   bun run indexnow
// The key is public by design: IndexNow verifies ownership by fetching /<key>.txt.
const HOST = "rentflow.it";
const KEY = "245fe8e0c0dfc138589242352ae81a53";

const sitemap = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);

if (urlList.length === 0) throw new Error("No URLs found in the live sitemap — is the site deployed?");

const response = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});

console.log(`IndexNow: ${response.status} ${response.statusText} for ${urlList.length} URL(s)`);
if (!response.ok) process.exit(1);

export {};

export function convertRSSToJson(rssUrl) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', rssUrl, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(xhr.responseText, 'text/xml');
                const items = xmlDoc.getElementsByTagName('item');
                const jsonResult = [];

                for (let i = 0; i < items.length; i++) {
                    const item = items[i];
                    const jsonItem = {};

                    jsonItem.title = item.getElementsByTagName('title')[0].textContent;
                    jsonItem.link = item.getElementsByTagName('link')[0].textContent;
                    jsonItem.description = item.getElementsByTagName('description')[0].textContent;
                    jsonItem.published = item.getElementsByTagName('pubDate')[0].textContent;

                    const mediaContent = item.getElementsByTagName('media:content');
                    if (mediaContent.length > 0) {
                        jsonItem.img = mediaContent[0].getAttribute('url');
                    }

                    const categories = item.getElementsByTagName('category');
                    if (categories.length > 0) {
                        jsonItem.categories = Array.from(categories).map(cat => cat.textContent);
                    }

                    jsonResult.push(jsonItem);
                }

                resolve(jsonResult);
            } else if (xhr.readyState === 4) {
                reject(new Error('Failed to fetch RSS feed'));
            }
        };
        xhr.send();
    });
}

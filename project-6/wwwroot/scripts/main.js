
let links = document.querySelectorAll('a');

for (let link of links) {
    let href = link.getAttribute('href');

    if ((!href) || !href.includes('://') || (href.startsWith('http://internal.com'))) continue;

    link.style.color = 'orange';
}

// или:
//
// let selector = 'a[href*="://"]:not([href^="http://internal.com"])';
// let links = document.querySelectorAll(selector);
//
// links.forEach(link => link.style.color = 'orange');
# Maxema.com Site Map (English locale)

> Discovered via Chrome DevTools MCP on 2026-05-04. Scope: clone every internal page.

## URL → Local Route Mapping

| Source URL                                     | Local Route                  | Type             | Status |
| ---------------------------------------------- | ---------------------------- | ---------------- | ------ |
| `/?l=en`                                       | `/`                          | home             | built  |
| `/about/en/`                                   | `/about`                     | marketing        | TODO   |
| `/contacts/en/`                                | `/contacts`                  | marketing + form | TODO   |
| `/customisation/en/`                           | `/customisation`             | marketing        | TODO   |
| `/customisation/en/#sezione_pantone`           | `/customisation#pantone`     | anchor           | TODO   |
| `/customisation/en/#sezione_stampa`            | `/customisation#stampa`      | anchor           | TODO   |
| `/customisation/en/#sezione_packaging`         | `/customisation#packaging`   | anchor           | TODO   |
| `/finishes/en/`                                | `/finishes`                  | marketing        | TODO   |
| `/services/en/`                                | `/services`                  | marketing        | TODO   |
| `/sample_cases/en/`                            | `/sample-cases`              | marketing        | TODO   |
| `/recycled-plastic-pens/en/`                   | `/recycled-plastic-pens`     | marketing        | TODO   |
| `/products/en/`                                | `/products`                  | catalog index    | TODO   |
| `/faq/en/`                                     | `/faq`                       | marketing        | TODO   |
| `/media/en/`                                   | `/media`                     | marketing        | TODO   |
| `/cookie_privacy_policy/en`                    | `/cookie-privacy-policy`     | legal            | TODO   |
| `/kind-rpet/en`                                | `/kind-rpet`                 | landing          | TODO   |
| `/request-sample/en/`                          | `/reserved-area`             | login (gated)    | TODO   |
| `/favorites/en/`                               | `/reserved-area`             | login (gated)    | TODO   |
| `/user-profile/en/`                            | `/reserved-area`             | login (gated)    | TODO   |
| `/search/en/{1,2,4,5,6,7,8,9,10}/`             | `/search/[category]`         | dynamic          | TODO   |
| `/product/en/{id}/` (18 valid IDs)             | `/products/[id]`             | dynamic          | TODO   |

> Note: `/product/en/0/` returns 404 on the live site — excluded.
> Note: `/request-sample`, `/favorites`, and `/user-profile` all serve the same "Reserved Area" login page on the live site; collapsed into a single `/reserved-area` route locally.
> Note: `/services/en/` on the live site has mixed Italian/English content (probable bug); cloned as-is.

## Product IDs

| ID  | Name        | Source URL                  | Local Route       |
| --- | ----------- | --------------------------- | ----------------- |
| 44  | Next        | `/product/en/44/`           | `/products/44`    |
| 61  | Pixel       | `/product/en/61/`           | `/products/61`    |
| 73  | Ethic       | `/product/en/73/`           | `/products/73`    |
| 93  | Icon        | `/product/en/93/`           | `/products/93`    |
| 104 | Tag         | `/product/en/104/`          | `/products/104`   |
| 105 | Icon green  | `/product/en/105/`          | `/products/105`   |
| 120 | View        | `/product/en/120/`          | `/products/120`   |
| 124 | Tag Green   | `/product/en/124/`          | `/products/124`   |
| 157 | Zink        | `/product/en/157/`          | `/products/157`   |
| 161 | Dot         | `/product/en/161/`          | `/products/161`   |
| 171 | Flow        | `/product/en/171/`          | `/products/171`   |
| 191 | Bay         | `/product/en/191/`          | `/products/191`   |
| 198 | Flow Pure   | `/product/en/198/`          | `/products/198`   |
| 217 | Mood        | `/product/en/217/`          | `/products/217`   |
| 235 | Icon Pure   | `/product/en/235/`          | `/products/235`   |
| 251 | Mood Metal  | `/product/en/251/`          | `/products/251`   |
| 252 | Kind        | `/product/en/252/`          | `/products/252`   |
| 261 | Kind (R-PET)| `/product/en/261/`          | `/products/261`   |

## Search Categories

The `/search/en/{n}/` URLs are alternate sortings/filters of the same 18-product catalog ("search by color"). Implemented as a single dynamic route `/search/[category]` that filters/sorts the same dataset.

| Category | Likely Filter                     |
| -------- | --------------------------------- |
| 1        | by color (default ordering)       |
| 2..10    | sub-orderings — to be inspected   |

## External Links (NOT cloned, kept as-is)

- `https://www.instagram.com/maxema_official/`
- `https://www.linkedin.com/company/maxema/`
- `https://www.youtube.com/user/MAXEMAchannel`
- `https://landing.maxema.com/post-industrial-recycled-plastic/en` — sub-domain landing page

## Italian Locale

Every page on the live site has a `?l=it` mirror. **Out of scope** for this clone (English only).

## Link Rewrite Rules

When ingesting a live page's `<a href>`, apply these regex rewrites (in order):

```
^https?://(www\.)?maxema\.com/?\?l=en$            -> /
^https?://(www\.)?maxema\.com/?$                   -> /
^https?://(www\.)?maxema\.com/about/en/?$          -> /about
^https?://(www\.)?maxema\.com/contacts/en/?$       -> /contacts
^https?://(www\.)?maxema\.com/customisation/en/?$  -> /customisation
^https?://(www\.)?maxema\.com/customisation/en/#sezione_(\w+)$ -> /customisation#$2
^https?://(www\.)?maxema\.com/finishes/en/?$       -> /finishes
^https?://(www\.)?maxema\.com/services/en/?$       -> /services
^https?://(www\.)?maxema\.com/sample_cases/en/?$   -> /sample-cases
^https?://(www\.)?maxema\.com/recycled-plastic-pens/en/?$ -> /recycled-plastic-pens
^https?://(www\.)?maxema\.com/products/en/?$       -> /products
^https?://(www\.)?maxema\.com/faq/en/?$            -> /faq
^https?://(www\.)?maxema\.com/media/en/?$          -> /media
^https?://(www\.)?maxema\.com/cookie_privacy_policy/en/?$ -> /cookie-privacy-policy
^https?://(www\.)?maxema\.com/kind-rpet/en/?$      -> /kind-rpet
^https?://(www\.)?maxema\.com/(request-sample|favorites|user-profile)/en/?$ -> /reserved-area
^https?://(www\.)?maxema\.com/product/en/(\d+)/?$  -> /products/$2
^https?://(www\.)?maxema\.com/search/en/(\d+)/?$   -> /search/$2
^https?://(www\.)?maxema\.com/?\?l=it$             -> /  (drop language switcher targets — locale not supported)
```

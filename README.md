# Academic Homepage

A compact Jekyll template for researchers, maintained by **Shaoyan Liu**. Navy accents, a single-column layout, and light/dark themes, with publications, academic activities, news, and a continuous PDF CV reader.

[Live demo](https://shaoyanliu.github.io/academic-homepage/) · [Use this template](https://github.com/shaoyanliu/academic-homepage/generate)

The demo identity **Avery Researcher**, papers, events, images, and PDFs are fictional. Replace them before publishing your own site. No visitor tracking or Scholar API requests are enabled by default.

## Features

- Responsive About page, profile icons, selected papers, and six latest news items.
- Publications grouped by year, numbered entries, topic filters, text search, abstract panels, and BibTeX copy/download.
- Optional Google Scholar totals and per-paper citations, updated using SerpApi and GitHub Actions.
- Full news archive, consistent category icons, and a keyboard-accessible photo viewer.
- Teaching, service, and conference presentations in one Activities page.
- Continuous-scroll CV PDF viewer with zoom, section navigation, and direct PDF access.
- Theme switch, canonical URLs, sitemap, structured data, and optional Search Console verification.
- Optional GoatCounter integration across all pages.

## Create your website

1. Click **Use this template → Create a new repository**.
2. For a personal site, name the repository `USERNAME.github.io`. For a project site, choose any name.
3. In **Settings → Pages**, choose **GitHub Actions** as the build source.
4. Edit `_config.yml` and replace the sample content listed below. Commit your changes.
5. Open **Actions → Deploy academic homepage**. The workflow runs on default-branch pushes; you can also select **Run workflow** after enabling Pages.

The workflow derives the site URL and project subpath from GitHub Pages. For local builds or another host, set these yourself:

| Hosting | `url` | `baseurl` |
| --- | --- | --- |
| User site | `https://USERNAME.github.io` | `""` |
| Project site | `https://USERNAME.github.io` | `"/REPOSITORY"` |
| Custom domain | `https://your-domain.example` | `""` |

Keep local asset paths root-based, such as `/assets/img/portrait.jpg`; templates apply `relative_url` to support project sites. Use `{{ '/path/' | relative_url }}` for links in Markdown. Data in YAML is not processed a second time as Liquid.

## Customize

| What to change | File |
| --- | --- |
| Name, affiliation, email, social links, avatar, SEO | `_config.yml` |
| Bio, tagline, photo caption | `index.md` |
| Navigation | `_data/navigation.yml` |
| Papers and selected papers (`selected: true`) | `_data/publications.yml` |
| Topic labels/colors | `_data/publication_topics.yml` |
| News and category icons | `_data/news.yml`, `_data/news_icons.yml` |
| Teaching and service | `_includes/teaching.md`, `_includes/services.md` |
| Conference presentations | `_data/conferences.yml` |
| CV PDF and section titles | `cv_pdf` in `_config.yml`, `_data/cv_sections.yml` |
| Colors, spacing, typography | `assets/css/theme.css`, `layout-wide.css`, `style.css` |
| Favicon | `assets/img/favicon.svg` |

Only include links/resources you have. Empty social links and absent publication resources stay hidden. Store BibTeX files under `bib/`. For a news photo, use the example's `photo_url` and `photo_label` fields instead of embedding an absolute-root image link inside HTML.

Replace `cv/example-cv.pdf` with your own CV and set `cv_pdf`. Section names must match text headings in the PDF; unmatched sections stay hidden. Scanned image-only PDFs need OCR for section detection. The direct **View PDF** link remains available for text selection and browser accessibility.

## Optional daily Scholar updates

1. Set `scholar.enabled: true` and `scholar.profile_id` in `_config.yml`. The ID is the `user=` value in your public Google Scholar profile URL. Set `google_scholar` to your own profile link.
2. Replace the sample papers and add their exact `scholar_id` values where available; the updater can also match normalized titles.
3. In **Settings → Secrets and variables → Actions**, add repository secret **`SERPAPI_API_KEY`** containing your own SerpApi key. Never put the key in a file or commit it.
4. Add repository variable **`ENABLE_SCHOLAR_SYNC`** with value **`true`**.
5. Run **Update Google Scholar statistics** manually once and inspect the run summary.

The scheduled run is daily at **05:16 America/New_York**, including daylight-saving changes. GitHub schedules can be delayed; this is not a real-time service. SerpApi account quotas and pricing apply; check your current plan. Failed fetches do not replace the last valid statistics. A profile change cannot reuse another profile's snapshot.

Successful runs update `_data/scholar_stats.yml` and commit changed data. The Pages workflow also listens for completion of the Scholar workflow, so updates committed with GitHub's built-in token trigger a fresh deployment. No personal API key, Scholar ID, or statistics ship with this template.

## Optional analytics and search verification

GoatCounter is off by default. Set `analytics.goatcounter_code` to your own account code to enable it. Set `analytics.show_count: true` only if you want the public total and have enabled public counter access in GoatCounter. Keep `show_count: false` for private dashboards. Check privacy/consent requirements applicable to your site before enabling analytics.

For Google Search Console, add your own HTML-tag verification value to `google_site_verification`. Submit your deployed `/sitemap.xml`. Verification, sitemap submission, and search indexing are separate steps; this template does not guarantee ranking.

Fonts and icon styles load from Google Fonts and cdnjs even when analytics is disabled. Their notices are in `THIRD_PARTY_NOTICES.md`.

## Preview locally

Install a current supported Ruby and Bundler, then:

```sh
bundle install
bundle exec jekyll serve --baseurl ""
```

Open `http://localhost:4000`. To verify a project path:

```sh
bundle exec jekyll serve --baseurl /academic-homepage
```

Open `http://localhost:4000/academic-homepage/`. Reload or restart after changing `_config.yml`.

Offline Scholar tests:

```sh
python3 -m venv .venv
. .venv/bin/activate
pip install -r scripts/requirements-scholar.txt
python -m unittest discover -s tests
```

## Credits and license

This template grew out of Shaoyan Liu's customized personal website, originally based on [Yaoyao Liu's personal website](https://github.com/yaoyao-liu/personal-website) and [Minimal Light](https://github.com/yaoyao-liu/minimal-light). It is independently maintained and preserves the original **CC0 1.0** license in `LICENSE`.

Bundled **PDF.js** retains its **Apache 2.0** license. See `THIRD_PARTY_NOTICES.md` for component-specific credits and licenses. The template contains no personal photographs, university branding, real research PDFs, or live analytics accounts.

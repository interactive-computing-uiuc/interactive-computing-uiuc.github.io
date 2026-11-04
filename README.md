# Interactive Computing @ Illinois

Website for the Interactive Computing group at the University of Illinois Urbana-Champaign. It is the HCI community across the Siebel School and partner units: people, research themes, paper notes, and the HCI Seminar.

The look follows the [NLP group site](https://nlp.cs.illinois.edu): Illini Blue and Illini Orange, a faculty grid, and event cards. The university header and footer come from the Illinois brand CDN. Unlike that NLP site, new papers and talks are markdown files, so the pages do not have to be edited by hand.

Hosting is [GitHub Pages](https://pages.github.com/) from the `main` branch. A custom `cs.illinois.edu` name can come later; links already go through `baseurl`, so that change is configuration, not a rewrite.

## Run it locally

You need Ruby 3 and Bundler.

```bash
gem install bundler
bundle install
bundle exec jekyll serve
```

The site is at <http://127.0.0.1:4000>. This repo's `Gemfile` uses the `github-pages` gem so the local build matches what GitHub Pages runs.

## Publish on GitHub Pages

1. Push `main`.
2. In the repository settings, open **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Set the branch to `main` and the folder to `/ (root)`.

GitHub builds the site with Jekyll. You do not need a custom workflow.

### Project site or organization site

`_config.yml` ships with an empty `url` and `baseurl`, which is right for a site served from the domain root (`https://org.github.io/`).

For a project site (`https://org.github.io/repo-name/`):

```yaml
url: "https://org.github.io"
baseurl: "/repo-name"
```

Then push. A later campus hostname is the same edit, plus a `CNAME` file and a DNS record from campus IT.

## Add a paper note

Copy [`templates/post.md`](templates/post.md) to `_posts/YYYY-MM-DD-short-title.md`. The date in the filename is required. Use the publication date. A future date still shows up.

```yaml
---
title: "Paper title"
authors:
  - First Author
  - Second Author
venue: CHI 2026
venue_short: CHI
paper_url: https://doi.org/10.1145/xxxxx
tags:
  - CHI
excerpt: "One sentence for the home page and the news list."
---
```

`venue_short` is the label on the News filters. A note is a writeup, separate from the publications list. Write it in your own words. Do not paste the abstract.

The two posts already in `_posts/` are examples. They describe real CHI papers by people in the area, and the site labels them Example. Replace those files when the group has notes of its own, or delete `example: true` only if the group wants to keep that writeup.

## Add a talk

Copy [`templates/talk.md`](templates/talk.md) to `_talks/YYYY-MM-DD-speaker.md`.

```yaml
---
title: "Talk title"
speaker: Speaker Name
date: 2026-11-04
time: "3:30 p.m."
location: "0216 Siebel Center"
kind: talk
term: Fall 2026
note:
---
```

`kind` is `talk`, `social`, or `none`. A `none` week (no seminar, fall break) stays on the schedule and is not featured as the next seminar. The home page and the seminar page pick the next non-`none` session from the build date, in America/Chicago.

Fall 2026 is already seeded from the public list at <https://publish.illinois.edu/hci-talks/>. That WordPress site stays linked as the archive until this page replaces it.

## Add a publication

Add a block to [`_data/publications.yml`](_data/publications.yml). A starter block is in [`templates/publication.yml`](templates/publication.yml).

```yaml
- title: "Paper title"
  authors:
    - First Author
    - Second Author
  venue: "ACL 2025"
  venue_short: ACL
  year: 2025
  sort_key: "2025-07"
  url: https://doi.org/10.18653/v1/example
```

`venue_short` is the filter on the Publications page. Use the short name readers expect: CHI, CSCW, UIST, DIS, C&C, IMWUT, FAccT, VIS, IUI, ACL, EMNLP, NAACL, and so on. `sort_key` is `YYYY-MM` so newer papers stay at the top. The page is a sample, not a full bibliography.

## Add a person

Add a block to [`_data/people.yml`](_data/people.yml). A starter block is in [`templates/person.yml`](templates/person.yml).

- `group` is `faculty` or `affiliate`. Affiliates are the people whose home unit on the Siebel area page is outside the Siebel School.
- `themes` uses ids from [`_data/themes.yml`](_data/themes.yml). An empty list is fine.
- `url` is the university profile.
- `photo` is optional. Put a file the person has provided in `assets/photos/` and set `photo: /assets/photos/their-id.jpg`. The site does not scrape headshots. Without a photo, the card shows initials.

Interests on the current list are the lines from the [Siebel School area page](https://siebelschool.illinois.edu/research/areas/interactive-computing). The area page spells one name "Shaung Zhao"; the directory page, and this site, use Shuang Zhao.

## Pages

| Page | Source |
| --- | --- |
| Home | `index.html` |
| People | `people.html` and `_data/people.yml` |
| Research | `research.html` and `_data/themes.yml` |
| Publications | `publications.html` and `_data/publications.yml` |
| News | `news.html` and `_posts/` |
| Seminar | `seminar.html` and `_talks/` |

Research themes point at people. Publications are a separate list from the news notes.

## Brand

Header and footer are the official `il-header` and `il-footer` components from `cdn.brand.illinois.edu`. Colors are Illini Blue `#13294B` and Illini Orange `#FF5F05`. Body text and small links stay blue. Orange is used for rules, cards, and the current-page mark. Hover text uses Altgeld `#C84113` so it stays readable on white.

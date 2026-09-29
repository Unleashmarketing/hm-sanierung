<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project architecture

- Above-the-fold project imagery uses compressed CDN WebP assets; only the visible slide loads immediately, and mobile gets 720x450 crops via picture/srcset, to protect page speed.
- gtag.js loads after idle or first interaction, not in the initial render, to keep it off the critical path.

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

## Tokyo tourism architecture
- Keep shared travel chrome in TokyoLayout and semantic presentation tokens in the global stylesheet so all pages remain visually consistent.
- Model heritage entries in a shared catalog with a dynamic heritage detail route so each site has a unique shareable URL and metadata.
- Keep the hotel form as a client-only stay planner until a real booking provider is connected; never imply a reservation is confirmed or collect payment.

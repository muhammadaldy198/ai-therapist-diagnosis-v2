# Your AI Therapist's Diagnosis — v2

[![Bounty](https://make.fun/badge/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41.svg)](https://make.fun/bounty/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41)
[![Rank](https://make.fun/badge/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41/muhammadaldy198/ai-therapist-diagnosis-v2/rank.svg)](https://make.fun/bounty/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41)
[![Reward](https://make.fun/badge/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41/muhammadaldy198/ai-therapist-diagnosis-v2/reward.svg)](https://make.fun/bounty/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41)

Entry for the [Your AI Therapist's Diagnosis](https://make.fun/bounty/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41) bounty on make.fun — one funny single-line diagnosis from an AI therapist, under 200 characters.

## The entry

> Diagnosis: teacher's-pet syndrome. You did your therapy homework in the waiting room, in pen, and asked for more. Homework: one task, done badly. Doing it well is cheating.

(172 characters, one line.)

## How it works

`main.ts` is a deterministic program: it writes the single diagnosis line to `entry.txt` (UTF-8, no trailing newline). No input, no network, no clock — running it twice produces byte-identical output.

```sh
node main.ts
cat "$MAKEFUN_OUTPUT_DIR/entry.txt"
```

## Files

- `main.ts` — the entry program
- `README.md` — this file
- `LICENSE` — MIT

---

Built with [make.fun](https://make.fun) — join with referral code `3p0axm2p`.

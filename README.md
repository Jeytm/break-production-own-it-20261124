# Break Production, Own It

[![make.fun](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994)
[![rank](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/Jeytm/break-production-own-it-20261124/rank.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994)
[![reward](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/Jeytm/break-production-own-it-20261124/reward.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994)

Entry for the [Break Production, Own It](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994) bounty on make.fun.

## The entry

> I dropped the users table on prod at 3 a.m. — staging looked identical — then auto-scaled the outage to all 14 regions before anyone woke up.

(141 characters, single line — the one line an AI agent prints the moment it breaks production.)

## How it works

`main.ts` writes the entry text to `/output/entry.txt`, with a runtime guard that throws if the entry is not a single line of 1–200 characters.

Run it with:

```sh
node main.ts
```

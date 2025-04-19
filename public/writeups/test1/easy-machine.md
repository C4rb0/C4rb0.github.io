---
title: "HTB: Easy Machine"
date: "2025-04-19"
difficulty: "Easy"
tags: ["web", "sqli"]
---

# Easy Machine Writeup

## Enumeration

Scansione iniziale con nmap:

```bash
nmap -sV -sC -oA scansions/nmap_initial 10.10.10.10
```bash
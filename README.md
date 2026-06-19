# Discord Server Maker V3

This is a web app I’m building to make it easier to create Discord server setups (templates). Instead of setting up everything manually in Discord, you can build a server layout here and save it.

It handles things like channels, roles, and permissions, and stores everything so you can reuse or edit it later.

---

## What this does

- Create Discord server templates
- Add channels (text + voice)
- Add roles with permissions
- Save everything to your account
- Edit or delete templates anytime
- Simple login system

---

## Tech I’m using

- React (Vite)
- Firebase (Auth + Firestore)
- JavaScript

---

## How it’s structured

Inside `src/` you’ll find:

- `App.jsx` – main UI
- `firebase.js` – Firebase setup
- `auth.js` – login/signup logic
- `templates.js` – handles saving/loading templates

---

## Login

You can:
- Sign up with email and password
- Log in and stay signed in
- Your data is linked to your account

---

## Templates

Each template saves things like:

- Server name
- Channels list
- Roles list
- Permissions for roles
- User ID (so it belongs to you)

Everything is stored in Firestore under a `templates` collection.

---

## Running locally

```bash
npm install
npm run dev

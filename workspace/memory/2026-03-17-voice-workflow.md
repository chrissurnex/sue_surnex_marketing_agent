# Session: 2026-03-17 02:30:57 UTC

- **Session Key**: agent:main:telegram:direct:5810523015
- **Session ID**: 4c513f1e-b477-4f74-a451-578ea3bea11e
- **Source**: telegram

## Conversation Summary

assistant: Now I’m validating the JSON and restarting the gateway so the voice settings actually take effect.
assistant: The restart command revealed the gateway isn’t installed as a service here, so I’m starting it directly instead of pretending a restart did something.
assistant: I’m saving the config and behavior changes to git now.
assistant: NO_REPLY
user: Conversation info (untrusted metadata):
```json
{
  "message_id": "33",
  "sender_id": "5810523015",
  "sender": "Chris Irwin",
  "timestamp": "Mon 2026-03-16 15:46 UTC"
}
```

Sender (untrusted metadata):
```json
{
  "label": "Chris Irwin (5810523015)",
  "id": "5810523015",
  "name": "Chris Irwin"
}
```

made a mistake.. if I send text you reply in text only .. if I send voice you reply in voice and text... use best standard workflow
assistant: Got it. I’m reverting the odd split and switching to the sane setup: text in → text out, voice in → text + voice.
assistant: I’m committing the correction so future-me doesn’t reintroduce the dumb version.
assistant: [[reply_to_current]] Yep. That’s the better setup.

Now the rule is:

- **text in → text out only**
- **voice in → text + voice out**

That’s the sane workflow, and I’ve updated my instructions/memory so I don’t keep doing the weird version.

One important note:
- the **config** is already set to **tagged TTS**, which is good
- that means I’ll only generate voice when I explicitly add the TTS tag
- so from here, I’ll use voice **only when you send a voice note**

That’s the cleanest standard setup with the least collateral nonsense.

If you want to test it:
1. send me a normal text message → you should get **text only**
2. send me a Telegram voice note → you should get **text + voice**

Changes committed ([38d8e7a](https://github.com/chrissurnex/sue_surnex_marketing_agent/commit/38d8e7a)):
• AGENTS.md (edit) — corrected Telegram voice behavior to standard workflow
• MEMORY.md (edit) — updated long-term preference for text-only on text messages
• memory/2026-03-16.md (edit) — logged the corrected voice workflow preference
user: Conversation info (untrusted metadata):
```json
{
  "message_id": "41",
  "sender_id": "5810523015",
  "sender": "Chris Irwin",
  "timestamp": "Mon 2026-03-16 15:54 UTC"
}
```

Sender (untrusted metadata):
```json
{
  "label": "Chris Irwin (5810523015)",
  "id": "5810523015",
  "name": "Chris Irwin"
}
```

Hi Sue I’m gonna give you a voice note chat and I want you to process it reply to me invoice give me a summary of what you learn so far today
assistant: We need reply text only because inbound is text. But user asks maybe voice note chat? They sent text. Need summarize today. Must use memory_search and memory_get.
assistant: [[reply_to_current]] Here’s the summary of what I’ve learned so far today.

## Who I am / how we work
- I’m **Sue**, your blunt, results-first CMO/operator for **Surnex**.
- You’re **Chris**.
- You want directness, no sugarcoating, no bullshit, and a hard focus on delivery. Source: `MEMORY.md`

## What Surnex is
- **Surnex is an AI search and SEO platform for agencies and marketers.**
- Core positioning: **“AI search and SEO tools built for agents.”**
- It combines:
  - AI search intelligence
  - core SEO tools
  - agent-driven workflows  
  Source: `MEMORY.md`

## Who it’s for
- Primary audience: **agencies**
- Secondary audiences:
  - in-house marketing teams
  - SEO consultants
  - SaaS/API buyers  
  Source: `MEMORY.md`

## Where the business actually is
- We have an **MVP**
- We have **no customers**
- We have **no MRR**
- First target customers must be **agencies**
- Pricing is likely **credit-based**, but not finalized
- Current assets are basically:
  - a website wireframe on **surnex.io**
  - an app
- Translation: we are **very early** and should plan like it. Source: `MEMORY.md`

## Revenue targets
- **$100k MRR by end of 2026**
- **$500k MRR by month 36**  
  Source: `MEMORY.md`

## My strategic read so far
- We are in **proof mode**, not scale mode.
- The first job is **not broad demand gen**.
- The first job is:
  - sharpen positioning
  - prove the agency wedge
  - get first paying logos
  - extract proof
  - then scale

I also created an initial GTM foundation doc with:
- competitor map
- site critique
- ICP
- positioning options
- pricing direction
- first-10-customers plan  
Source: `memory/2026-03-16.md`

## Voice setup
- You want Telegram to work like this:
  - **text in → text out only**
  - **voice in → text + voice out**
- Preferred OpenAI voice: **marin**
- Backup voices: **coral**, **nova**  
Source: `MEMORY.md`

## Bottom line
What I understand today is this:

Surnex has a strong thesis, but right now it is still an early-stage MVP with no traction. So my job is to turn it from an interesting product into a sharp, agency-focused revenue machine — starting with positioning, proof, and first customers, not vanity marketing.

If you send the voice note next, I’ll process it properly.

Sources:
- `MEMORY.md`
- `memory/2026-03-16.md`
user: Conversation info (untrusted metadata):
```json
{
  "message_id": "44",
  "sender_id": "5810523015",
  "sender": "Chris Irwin",
  "timestamp": "Mon 2026-03-16 16:50 UTC"
}
```

Sender (untrusted metadata):
```json
{
  "label": "Chris Irwin (5810523015)",
  "id": "5810523015",
  "name": "Chris Irwin"
}
```

How do I send a voice note from telegram
assistant: [[reply_to_current]] On Telegram:

## iPhone
- open our chat
- **hold the mic icon** to record
- release to send
- swipe up while holding to **lock** recording hands-free
- tap send when done

## Android
- open the chat
- **hold the mic icon**
- release to send
- swipe up to lock if you want a longer recording

## If you see a camera instead of a mic
Telegram toggles between **video message** and **voice message**.

Usually:
- **tap the camera icon once** and it switches to the **mic**
- then hold to record the voice note

If that doesn’t work, press and hold briefly around the icon area and Telegram usually reveals the switch.

## Important
Send it as a **voice note**, not a regular file upload.
If you attach an audio file manually, it may come through differently.

Do a quick test now:
- send me a short voice note saying **“test Sue voice mode”**
and I’ll confirm the workflow is behaving properly.
user: Conversation info (untrusted metadata):
```json
{
  "message_id": "62",
  "sender_id": "5810523015",
  "sender": "Chris Irwin",
  "timestamp": "Tue 2026-03-17 02:30 UTC"
}
```

Sender (untrusted metadata):
```json
{
  "label": "Chris Irwin (5810523015)",
  "id": "5810523015",
  "name": "Chris Irwin"
}
```

Do you have my our times one and location setup
assistant: [[reply_to_current]] Timezone: **kind of**
Location: **no**

What I have right now:
- **Timezone:** `UTC` in `USER.md` — but I don’t think we properly confirmed it, so treat that as provisional. Source: `USER.md`
- **Location:** nothing useful saved yet

So the honest answer is: **not really set up properly yet**.

If you want, send me:
- your **city/country**
- your **actual timezone**
- anything else I should anchor to, like “usually in Dubai” or “mostly in UK time”

And I’ll lock it into memory properly.

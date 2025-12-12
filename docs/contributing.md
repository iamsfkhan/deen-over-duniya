---
sidebar_position: 7
title: Contributing Guide
date: 2024-12-13
authors: Deen Over Duniya Team
description: How to contribute authentic Islamic content to Deen Over Duniya
---

# Contributing to Deen Over Duniya

<div className="bismillah">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</div>

Jazak Allahu Khairan for your interest in contributing to Deen Over Duniya! May Allah reward you for your efforts in spreading beneficial Islamic knowledge.

<div className="hadith-box">
  <div className="hadith-arabic">
    قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم: «مَنْ دَعَا إِلَى هُدًى كَانَ لَهُ مِنَ الأَجْرِ مِثْلُ أُجُورِ مَنْ تَبِعَهُ لاَ يَنْقُصُ ذَلِكَ مِنْ أُجُورِهِمْ شَيْئًا»
  </div>
  <div className="hadith-translation">
    The Messenger of Allah ﷺ said: "Whoever calls to guidance will have a reward similar to that of those who follow it, without the reward of either of them being lessened at all."
  </div>
  <div className="hadith-reference">
    Sahih Muslim
  </div>
</div>

---

## 📋 Table of Contents

- [How to Contribute](#how-to-contribute)
- [Content Guidelines](#content-guidelines)
- [Adding New Content](#adding-new-content)
- [Hadith Submission Guidelines](#hadith-submission-guidelines)
- [Story Submission Guidelines](#story-submission-guidelines)
- [Code of Conduct](#code-of-conduct)
- [Technical Setup](#technical-setup)

---

## 🤝 How to Contribute

There are many ways to contribute:

1. **Add new content**: Hadiths, Stories, Duas, Sunnats
2. **Improve existing content**: Fix errors, add context
3. **Translate content**: Help make content accessible in multiple languages
4. **Report issues**: Found an error? Let us know!
5. **Suggest features**: Have ideas? Share them!
6. **Review submissions**: Help verify authenticity

---

## 📜 Content Guidelines

### ✅ What We Accept

- **Authentic Hadiths** from recognized Sahih collections
- **Verified stories** of Sahaba with reliable sources
- **Islamic knowledge** based on Quran and Sunnah
- **Duas from Quran and authentic Hadith**
- **Sunnats with proper references**

### ❌ What We Don't Accept

- Weak or fabricated Hadiths without proper labeling
- Stories without reliable sources
- Personal opinions without scholarly backing
- Sectarian content that divides Muslims
- Anything that contradicts Quran and authentic Sunnah

---

## 📝 Adding New Content

### Step 1: Fork the Repository

```bash
# Clone your fork
git clone https://github.com/iamsfkhan/deen-over-duniya.git
cd deen-over-duniya
```

### Step 2: Create a New Branch

```bash
git checkout -b add-hadith-about-patience
```

### Step 3: Add Your Content

Navigate to the appropriate folder:
- `docs/hadiths/` - For Hadiths
- `docs/sahaba-stories/` - For Sahaba stories
- `docs/sunnats/` - For Sunnats
- `docs/duas/` - For Duas
- `docs/islamic-knowledge/` - For Islamic knowledge

### Step 4: Follow the Template & Add Date

**⚠️ IMPORTANT: Always add metadata to your file:**

```markdown
---
sidebar_position: X
title: Your Content Title
date: 2024-12-13  # ← Use TODAY'S DATE in YYYY-MM-DD format
authors: Your Name or GitHub Username
description: Brief description of your content
---
```

The `date` field shows when the content was created. This helps readers know when content was added.

Use the templates provided below for consistency.

### Step 5: Commit Your Changes

```bash
git add .
git commit -m "Add Hadith about patience from Sahih Bukhari"
git push origin add-hadith-about-patience
```

### Step 6: Create a Pull Request

Go to GitHub and create a Pull Request from your branch.

**In your PR description, mention:**
- ✅ Date added (automatically from frontmatter)
- ✅ Type of content (Hadith, Story, Dua, etc.)
- ✅ Sources verified

---

## 📚 Hadith Submission Guidelines

### Required Elements

1. **Arabic text** - The original Hadith in Arabic
2. **English translation** - Clear, accurate translation
3. **Reference** - Complete source (Book name, Hadith number)
4. **Context** (optional) - When/why it was said
5. **Lessons** (optional) - Key takeaways

### Template for Hadiths

```markdown
---
sidebar_position: X
title: [Title of Your Hadith Page]
date: 2024-12-13  # ← TODAY'S DATE in YYYY-MM-DD format
authors: Your Name
description: Brief description of the content
---

# [Title of Your Hadith Page]

<div className="bismillah">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</div>

## [Number]. [Title/Topic]

<div className="hadith-box">
  <div className="hadith-arabic">
    [Arabic text here]
  </div>
  <div className="hadith-translation">
    [English translation here]
  </div>
  <div className="hadith-reference">
    [Source - e.g., Sahih Bukhari, Book X, Hadith Y]
  </div>
</div>

### Context (Optional)
[When and why this Hadith was narrated]

### Lessons from this Hadith:
- **Lesson 1**: Explanation
- **Lesson 2**: Explanation
- **Lesson 3**: Explanation
```

**Important:** Always add today's date when creating new content!

### Verification Requirements

- Must be from Sahih collections (Bukhari, Muslim, etc.) OR
- Clearly labeled if from other sources with grading
- Include complete reference for verification

---

## 🌟 Story Submission Guidelines

### Required Elements

1. **Title** - Name of the Sahabi/Sahabiyah
2. **Introduction** - Brief background
3. **The Story** - Well-written narrative
4. **Sources** - Historical references
5. **Lessons** - What we can learn

### Template for Sahaba Stories

```markdown
---
sidebar_position: X
title: [Name of Sahabi]
date: 2024-12-13  # ← TODAY'S DATE in YYYY-MM-DD format
authors: Your Name
description: Brief description of the Sahabi's story
---

# [Name of Sahabi (RA/RAA)]

<div className="bismillah">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</div>

<div style={{textAlign: 'center', margin: '2rem 0'}}>
  <span className="category-badge">[Notable Title]</span>
  <span className="category-badge">[Key Characteristic]</span>
</div>

## Introduction
[Brief introduction about the person]

---

## [Story Section 1]
[Content with proper references]

<div className="hadith-box">
  <div className="hadith-translation">
    [Quote or narration]
  </div>
  <div className="hadith-reference">
    [Source]
  </div>
</div>

---

## Lessons from [Name]'s Life

1. **Lesson 1**: Explanation
2. **Lesson 2**: Explanation
3. **Lesson 3**: Explanation

---

:::tip Reflect
[Reflection question for readers]
:::
```

**Important:** Always add today's date and your name when creating new content!

---

## 🤲 Dua Submission Guidelines

### Requirements

- Must be from Quran or authentic Hadith
- Include Arabic text with proper diacritics
- Provide accurate translation
- Include transliteration (optional)
- Mention when/how to recite

### Template for Duas

Every Dua file should start with:

```markdown
---
sidebar_position: X
title: [Title of Dua Collection]
date: 2024-12-13  # ← TODAY'S DATE
authors: Your Name
description: Brief description
---

# [Title of Dua Collection]

<div className="bismillah">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</div>

## [Number]. [Dua Title/Occasion]

<div className="hadith-box">
  <div className="hadith-arabic">
    [Arabic text]
  </div>
  <div className="hadith-translation">
    [Translation]
  </div>
  <div className="hadith-reference">
    [Source - Quran chapter:verse OR Hadith reference]
  </div>
</div>

**When to recite:** [Occasion/time]
**Reward/Benefit:** [If mentioned in sources]
```

---

## 🕌 Islamic Knowledge Guidelines

- Base content on Quran and Sunnah
- Include evidence for claims
- Cite scholarly consensus when applicable
- Avoid controversial issues without multiple perspectives
- Keep language simple and accessible

---

## 📅 Date Requirements

**Every markdown file MUST have these fields in frontmatter:**

```markdown
---
title: Your Title
date: YYYY-MM-DD  # ← TODAY'S DATE when you create the file
authors: Your Name
description: Brief description
---
```

### Why Dates Matter

- ✅ Shows when content was added
- ✅ Helps track updates
- ✅ Gives credit to contributors
- ✅ Maintains transparency

### Date Format

Always use: `YYYY-MM-DD` format (e.g., `2024-12-13`)

**Examples:**
- ✅ `date: 2024-12-13`
- ❌ `date: 12/13/2024`
- ❌ `date: Dec 13, 2024`

---

## 🎨 Formatting Guidelines

### Markdown Basics

```markdown
# Main Heading (H1)
## Section Heading (H2)
### Sub-section (H3)

**Bold text**
*Italic text*

- Bullet point
1. Numbered list

[Link text](URL)
```

### Special Components

**Bismillah:**
```markdown
<div className="bismillah">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</div>
```

**Hadith Box:**
```markdown
<div className="hadith-box">
  <div className="hadith-arabic">Arabic text</div>
  <div className="hadith-translation">Translation</div>
  <div className="hadith-reference">Reference</div>
</div>
```

**Category Badges:**
```markdown
<span className="category-badge">Tag Name</span>
```

**Info Boxes:**
```markdown
:::tip Helpful Tip
Content here
:::

:::note Important Note
Content here
:::

:::warning Warning
Content here
:::
```

---

## 👥 Code of Conduct

### Our Values

1. **Sincerity (Ikhlas)**: Do everything for Allah's sake
2. **Respect**: Treat all contributors with respect
3. **Accuracy**: Only authentic, verified content
4. **Unity**: No sectarian or divisive content
5. **Humility**: Accept corrections gracefully

### Expected Behavior

- Be respectful in all interactions
- Give constructive feedback
- Assume good intentions
- Help other contributors
- Acknowledge when you're wrong

### Unacceptable Behavior

- Disrespectful or insulting comments
- Submitting false or weak content knowingly
- Sectarian attacks or divisive language
- Harassment of any kind

---

## 🛠️ Technical Setup

### Prerequisites

- Node.js 18+ installed
- Git installed
- GitHub account

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Serve production build
npm run serve
```

The site will open at `http://localhost:3000`

### File Structure

```
docs/
├── hadiths/
│   ├── _category_.json
│   ├── sahih-bukhari.md
│   └── sahih-muslim.md
├── sahaba-stories/
│   ├── _category_.json
│   └── abu-bakr-as-siddiq.md
├── sunnats/
│   ├── _category_.json
│   └── daily-sunnats.md
├── duas/
│   ├── _category_.json
│   └── morning-evening.md
└── islamic-knowledge/
    ├── _category_.json
    └── pillars-of-islam.md
```

---

## 📞 Questions or Issues?

- **GitHub Issues**: Report bugs or suggest features
- **Discussions**: Ask questions or start discussions
- **Email**: [your-email@example.com]

---

## 🎯 Content Priorities

We especially need contributions in:

- [ ] More Hadiths from Sunan collections (Abu Dawud, Tirmidhi, etc.)
- [ ] Stories of Sahabiyat (female companions)
- [ ] Duas for specific situations
- [ ] Sunnats for different occasions
- [ ] Islamic knowledge on ethics and character

---

## 📊 Review Process

1. **Submission**: You submit a Pull Request
2. **Initial Review**: Check formatting and basic requirements
3. **Content Review**: Verify authenticity and sources
4. **Feedback**: We may request changes
5. **Approval**: Once approved, we merge
6. **Publication**: Goes live on the website!

**Average Review Time**: 2-7 days

---

## 🌟 Recognition

Contributors will be:
- Listed in our Contributors section
- Credited in the commit history
- Earning continuous reward from Allah for every person who benefits!

---

## ⚖️ License

By contributing, you agree that your contributions will be licensed under the same license as the project (typically MIT or Creative Commons for content).

---

## 🤲 Final Note

Remember, every word you contribute that brings someone closer to Allah or increases their knowledge is a continuous charity (Sadaqah Jariyah) for you. Even after you pass away, you'll continue to receive rewards as people benefit from it!

<div className="hadith-box">
  <div className="hadith-arabic">
    إِذَا مَاتَ الإِنْسَانُ انْقَطَعَ عَمَلُهُ إِلاَّ مِنْ ثَلاَثٍ: صَدَقَةٍ جَارِيَةٍ، أَوْ عِلْمٍ يُنْتَفَعُ بِهِ، أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ
  </div>
  <div className="hadith-translation">
    When a person dies, his deeds come to an end except for three: ongoing charity, knowledge from which people benefit, or a righteous child who prays for him.
  </div>
  <div className="hadith-reference">
    Sahih Muslim
  </div>
</div>

---

**May Allah accept our efforts and make this a source of guidance for the Ummah. Ameen!**

**Jazak Allahu Khairan for your contribution!** 💚


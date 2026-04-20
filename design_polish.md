Detailed Design Issue List for the TrueMoney “Ask AI” Landing Page
Here is a comprehensive, prioritized issue list based on established UI/UX design theories and principles. Each issue includes:

The specific problem visible in the screenshot
The related design theory/principle it violates
Why it matters + recommended fix

I have deliberately inserted the exact SVG icon request you asked for as Issue #1.
1. Icon Style & Format Mismatch (Raster vs Vector) – Your Requested Issue
Problem: All icons in the benefit cards (KYC, AI features, security) and the 4-step “how to make Ask AI your friend” section use low-resolution bitmap/PNG illustrations. They look slightly pixelated at scale, don’t glow or scale cleanly with the dark theme, and clash stylistically with the cute 3D robot mascot and neon space aesthetic.
Related Design Theory:

Consistency Principle (Brand & Visual System)
Scalability & Performance Best Practices (Vector Graphics)
Why it matters: In a modern fintech/AI product, icons are micro-interactions and should feel premium and future-proof. Raster icons break immersion on high-DPI screens and during animations.
Fix: Change all icons to SVG format that perfectly match the current theme (dark emerald green #003D2E, neon orange accents, subtle glows, and space/robot vibe). Use clean line icons with the same rounded, friendly character as the mascot. This will ensure crisp rendering at any size, faster load times, and perfect theme cohesion.

2. Stark Section Contrast Breaks Immersion
Problem: The starry cosmic background suddenly stops and jumps into solid dark panels, then a bright lime-green promo banner at the bottom.
Related Design Theory:

Continuity & Common Region (Gestalt Principles)
Color Theory (Complementary vs Analogous palettes)
Why it matters: The page is trying to sell a “futuristic AI in space” experience, but the layout feels fragmented. Users lose the magical feeling.
Fix: Extend the subtle starfield or add a soft gradient overlay across all sections, and tone down the lime banner to a darker emerald with neon border to keep the space theme alive.

3. Weak Visual Hierarchy in Benefit Cards
Problem: The three benefit cards have equal visual weight; the icons are too small and the checkmarks blend into the text.
Related Design Theory:

Visual Hierarchy (Fitts’s Law + Hick’s Law)
Von Restorff Effect (isolation of important elements)
Why it matters: Users scan for value first. Currently they read everything equally instead of instantly seeing the three big benefits.
Fix: Make the card icons 30–40 % larger, add subtle neon glow on hover, and use bolder weight on the first bullet of each card.

4. Inconsistent Button Treatment & CTA Priority
Problem: There are multiple green and orange buttons with slightly different radii and hover states. The main “Ask AI” button and the orange “Download App” button compete for attention.
Related Design Theory:

Progressive Disclosure & Primary/Secondary Action Hierarchy
Fitts’s Law (button size & placement)
Why it matters: Users get decision fatigue when every button looks equally important.
Fix: Define one primary CTA color (neon orange) for all major actions and keep green for secondary. Increase the main “เริ่มคุย Ask AI เลย!” button size and add a subtle pulse animation.

5. Typography Scale & Readability Issues
Problem: Body text in cards and the 4-step section is too small and has low contrast against the dark background. The English “DGA x TrueMoney” logo text feels disconnected from the large Thai headline.
Related Design Theory:

Typography Hierarchy & Readability (WCAG 2.1 AA contrast)
Gestalt Similarity Principle
Why it matters: Thai users (especially on mobile) will strain to read the benefits.
Fix: Increase body copy to at least 16 px, improve line height to 1.6, and create a clear type scale (H1 neon, H2 white, body light green).

6. Mascot Placement & Eye-Flow Disruption
Problem: The cute robot is floating on the right but doesn’t point toward any CTA, and the white stars around it compete with the text.
Related Design Theory:

Directional Cues & Eye-Tracking Patterns (Z-pattern / F-pattern)
Figure-Ground Relationship (Gestalt)
Why it matters: The mascot is the hero element but currently acts as decoration instead of a guide.
Fix: Slightly rotate the robot to “look” toward the main CTA button and reduce star density immediately around the headline area.

7. Footer Overload & Micro-Interaction Gap
Problem: The footer is very dense with tiny text and no clear separation between links. No subtle hover effects on social icons.
Related Design Theory:

Information Architecture & Chunking (Miller’s Law)
Affordance (Norman’s Design Principles)
Why it matters: Footer is the last impression; currently it feels like an afterthought.
Fix: Increase spacing, use SVG social icons (again matching the neon theme), and add a very light hover glow.

8. Overall Theme Cohesion (Fintech vs Playful Space)
Problem: The space/robot theme is fun for AI, but TrueMoney is a serious digital wallet brand. The bright green promo banner feels more “game” than “finance”.
Related Design Theory:

Brand Experience Consistency
Emotional Design (Norman’s three levels)
Why it matters: Users may question trustworthiness if the design feels too “toy-like”.
Fix: Keep the cute robot but ground it with more professional neon lines and subtle grid patterns that say “tech + trust”.

Summary Priority Order (what to fix first):

SVG icon replacement (your request)
Section contrast & background continuity
Visual hierarchy in cards + CTAs
Typography scale
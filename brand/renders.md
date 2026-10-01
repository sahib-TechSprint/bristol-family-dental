# Renders in use

Every clinical render on the site, with the prompt that produced it and the
generation job id, so a render can be reproduced or replaced in the same
style. Renders are generated on the agency's image account (commercial
rights, no watermark), inspected at the corners and center for marks,
flattened onto navy where needed, resized, re-encoded as webp with every
metadata block stripped, and only then committed to `public/images/`.

House style for every prompt: "Studio product render ... on a glossy deep
navy blue surface with a soft floor reflection, seamless deep navy background
lit by a cool blue rim light. Shallow depth of field, photorealistic product
photography. No people, no hands, no room, no text, no logos, no brand names,
no watermark."

## October 1, 2026 (implants retired; hero, restorative, orthodontics, About)

| File | Where it appears | Subject | Ratio and source size | Job id |
| --- | --- | --- | --- | --- |
| `family-brushes.webp` (2048 wide) | Home hero, tablet and desktop | Three toothbrushes in three sizes (child, medium, adult) in a frosted glass cup, cup in the right half, negative space left | 16:9, 5504 x 3072 | `3ace5c00-38c2-4f43-86f9-f71bcc4f8b6f` |
| `family-brushes-mobile.webp` (1200 wide) | Home hero, phones | Same subject, centered | 3:2, 2528 x 1696 | `51ecae76-010a-4c67-ae0a-2839cc14a9cb` |
| `restorative-bridge.webp` (1280 wide) | Home, restorative section, first card | Three unit ceramic bridge | 4:3, 2400 x 1792 | `f39b407a-6db7-4ca3-b446-ee750eacf5ed` |
| `restorative-denture.webp` (1280 wide) | Home, restorative section, second card | Full upper denture teaching model with a pale ice blue base | 4:3, 2400 x 1792 | `9308c027-874c-4389-8570-7ca050feb0c5` |
| `crown-mirror.webp` (1600 wide) | About, "Your dentist" card | Ceramic molar crown beside a dental mirror | 4:3, 2400 x 1792 | `430ed31c-cf9f-4a95-9a7a-a03f58e8933c` |
| `ortho-retainer.webp` (1600 wide) | Services, Dr. Chara card | Clear retainer with a thin steel wire | 4:3, 2400 x 1792 | `68007646-6ddc-49f5-8925-d3bbc3d38035` |

Prompts, in full:

- Hero (wide): "Studio product render of three toothbrushes in three sizes, a small child's toothbrush, a medium toothbrush, and a full size adult toothbrush, standing upright together in a frosted glass cup, on a glossy deep navy blue surface with a soft floor reflection, seamless deep navy background lit by a cool blue rim light. Materials in white, pale ice blue, and brushed steel only. Shallow depth of field, photorealistic product photography. The cup sits in the right half; the left half is clean empty dark navy negative space for text. No people, no hands, no room, no text, no logos, no brand names, no watermark."
- Hero (phone): the same prompt with "centered on a glossy deep navy blue surface" and no negative space instruction.
- Bridge: "Studio product render of a three unit ceramic dental bridge, three connected glossy white crowns joined side by side, resting on a glossy deep navy blue surface with a soft floor reflection, seamless deep navy background lit by a cool blue rim light. Shallow depth of field, photorealistic product photography. No people, no hands, no room, no text, no logos, no watermark."
- Denture: "Studio product render of a full upper denture teaching model with a translucent pale ice blue acrylic base and glossy white teeth, resting on a glossy deep navy blue surface with a soft floor reflection, seamless deep navy background lit by a cool blue rim light. Shallow depth of field, photorealistic product photography. No people, no hands, no room, no text, no logos, no watermark."
- Crown and mirror: "Studio product render of a glossy white ceramic molar crown and a dental mirror instrument with a brushed steel handle, arranged together on a glossy deep navy blue surface with a soft floor reflection, seamless deep navy background lit by a cool blue rim light. Shallow depth of field, photorealistic product photography. No people, no hands, no room, no text, no logos, no watermark."
- Retainer: "Studio product render of a clear orthodontic retainer, a transparent removable retainer tray with a thin brushed steel wire across the front, resting on a glossy deep navy blue surface with a soft floor reflection, seamless deep navy background lit by a cool blue rim light, light refracting through the clear material. Shallow depth of field, photorealistic macro product photography. No people, no hands, no teeth model inside it, no text, no logos, no watermark."

## Earlier renders still in use

`cosmetic-veneers.webp` and its phone crop, `instruments-set.webp`,
`instruments-mirror.webp`, `services-hero.webp`, `jaw-model.webp`,
`ortho-aligner.webp`, `ortho-braces.webp`, and `restoration-tall.webp` date
from the September 8, 2026 revision (see `DEPLOY-LOG.md`). `implant-1.webp`
and `implant-2.webp` are kept in the folder but referenced nowhere; they
return only when the office confirms a dentist who places implants.

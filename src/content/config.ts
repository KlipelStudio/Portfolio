import { defineCollection, z } from 'astro:content';

// Cada miniatura = 1 arquivo .md em src/content/minis/
const minis = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    imagem: z.string(),            // caminho relativo a /public, ex: /img/goblin.jpg
    
    classe: z.string(),
    raca: z.string(),
    cenario: z.string(),

    destaque: z.boolean().default(false),
    galeria: z.array(z.string()).optional(),
  }),
});

export const collections = { minis };

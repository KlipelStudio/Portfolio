import { defineCollection, z } from 'astro:content';

// Cada miniatura = 1 arquivo .md em src/content/minis/
const minis = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    imagem: z.string(),            // caminho relativo a /public, ex: /img/goblin.jpg
    
    classes: z.array(z.string()).optional(),
    racas: z.array(z.string()).optional(),
    cenarios: z.array(z.string()).optional(),

    destaque: z.boolean().optional(),
    galeria: z.array(z.string()).optional(),
  }),
});

export const collections = { minis };

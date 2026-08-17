import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// Cada miniatura = 1 arquivo .md em src/content/minis/
const minis = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/minis' }),
  schema: z.object({
    titulo: z.string(),
    imagem: z.string(),            // caminho relativo a /public, ex: /img/goblin.jpg
    
    classes: z.array(z.string()).optional(),
    racas: z.array(z.string()).optional(),
    sexo: z.array(z.string()).optional(),
    cenarios: z.array(z.string()).optional(),

    destaque: z.boolean().optional(),
    galeria: z.array(z.string()).optional(),
  }),
});

export const collections = { minis };

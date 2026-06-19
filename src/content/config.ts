import { defineCollection, z } from 'astro:content';

// Cada miniatura = 1 arquivo .md em src/content/minis/
const minis = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    descricao: z.string(),
    imagem: z.string(),            // caminho relativo a /public, ex: /img/goblin.jpg
    categoria: z.string().default('Aventureiros'),
    escala: z.string().default('32mm'),
    material: z.string().default('Resina'),
    data: z.coerce.date(),
    destaque: z.boolean().default(false),
    galeria: z.array(z.string()).optional(),
  }),
});

export const collections = { minis };

// Versões menores das fotos (o site ficava lento baixando tudo em resolução original).
//
// - ImageKit: redimensiona pela URL (?tr=w-LARGURA,q-80) e entrega em formato leve.
// - Imgur: tem miniaturas prontas, com uma letra depois do código da imagem:
//     t = 160 px · m = 320 px · l = 640 px · h = 1024 px
// - Qualquer outro endereço fica como está.

export function versao(url, largura = 480) {
  if (!url) {
    return url;
  }

  if (url.includes('ik.imagekit.io')) {
    const [semParametros] = url.split('?');
    return `${semParametros}?tr=w-${largura},q-80,f-auto`;
  }

  const imgur = url.match(/^(https?:\/\/i\.imgur\.com\/[A-Za-z0-9]{5,8})(\.(?:jpe?g|png|webp))(?:\?.*)?$/i);
  if (imgur) {
    const letra =
      largura <= 160 ? 't' :
      largura <= 320 ? 'm' :
      largura <= 640 ? 'l' :
      'h';
    return `${imgur[1]}${letra}${imgur[2]}`;
  }

  return url;
}

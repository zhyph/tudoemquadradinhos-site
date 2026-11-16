# Site de vendas: Kit Quadradinhos

Site estático (HTML + CSS + 1 arquivo JS pequeno). Sem build, sem framework, sem backend, sem rastreadores. Domínio canônico: `https://tudoemquadradinhos.com.br/`.

## Arquivos

| Arquivo | Para que serve |
|---|---|
| `index.html` | página de vendas |
| `privacidade.html`, `termos.html` | rascunhos legais, com campos `TODO` |
| `site.js` | **chave Em breve / à venda** (primeira linha de código) |
| `style.css`, `fonts/`, `assets/` | visual, fonte Silkscreen (OFL), imagens e preview em vídeo |
| `robots.txt`, `sitemap.xml` | já apontam para o domínio |
| `404.html` | página de erro |

## Antes de publicar (pendências marcadas como TODO)

Procure por `TODO` nos arquivos (`grep -rn TODO site/`):

1. `index.html`: URL do formulário do guia grátis (`id="form-guia"`), razão social, CNPJ, endereço e e-mail de suporte no rodapé e na seção de garantia.
2. `privacidade.html` e `termos.html`: mesmos dados, serviço do formulário, datas, foro. São rascunhos: revisar com um profissional.
3. Dados da empresa não estavam em `pixel/brand/PERFIL.md`; nada foi inventado.
4. Os links de Instagram, TikTok e YouTube seguem o padrão `@tudoemquadradinhos`; confira que abrem. O Kwai não tem link (apenas texto).

## Publicar no Cloudflare Pages (grátis)

Opção A, upload direto (mais simples, sem Git):

```sh
npx wrangler pages deploy site --project-name=kit-quadradinhos
```

(É preciso `npx wrangler login` antes. Um projeto criado por upload direto não vira projeto Git depois.)

Opção B, ligado ao repositório: Workers & Pages > Create > Pages > Connect to Git. Deixe o comando de build vazio e use `site` como diretório de saída.

### Domínio tudoemquadradinhos.com.br (registrado no Registro.br)

O domínio raiz (apex) no Cloudflare Pages exige que o DNS do domínio esteja no Cloudflare (conforme a documentação do Cloudflare). O Registro.br não permite CNAME na raiz, então o caminho recomendado é:

1. No Cloudflare: Add a site > `tudoemquadradinhos.com.br` (plano Free). Ele mostra dois servidores de nome (nameservers).
2. No Registro.br (painel do domínio): Alterar servidores DNS, e informe os dois do Cloudflare. Se o DNSSEC estiver ativo no Registro.br, desative-o antes de trocar os servidores (e reative depois com o DS que o Cloudflare fornecer). A propagação pode levar de minutos a horas.
3. Workers & Pages > seu projeto > Custom domains > Set up a domain > `tudoemquadradinhos.com.br`. Repita para `www.tudoemquadradinhos.com.br` e crie, no Cloudflare, uma regra de redirecionamento de `www` para a raiz (ou o contrário). O Cloudflare cria os registros DNS sozinho quando o domínio já está nele.
4. Adicione o domínio no painel do Pages **antes** de criar qualquer CNAME manual, senão dá erro 522.
5. Confira: `https://tudoemquadradinhos.com.br/` abre, o certificado HTTPS é emitido sozinho.

Alternativa sem trocar os servidores DNS: manter o DNS no Registro.br e usar apenas um subdomínio, por exemplo `kit.tudoemquadradinhos.com.br`, com um registro CNAME apontando para `<seu-projeto>.pages.dev`. Nesse caso troque os endereços `https://tudoemquadradinhos.com.br/` por `https://kit.tudoemquadradinhos.com.br/` em `index.html`, `privacidade.html`, `termos.html`, `404.html`, `robots.txt` e `sitemap.xml`.

## Publicar no GitHub Pages (alternativa)


## Trocar "Em breve" por "à venda"

1. Abra `site.js`.
2. Mude `var VENDAS_ABERTAS = false;` para `true`. A URL do checkout (`CHECKOUT_URL`) já está preenchida: `https://pay.kiwify.com.br/OF2ezKa`.
3. Pronto. Todos os botões com classe `buy` passam a apontar para o checkout com o texto do atributo `data-live`; as etiquetas "Em breve" (`data-soon-only`) somem e as de "à venda" (`data-live-only`) aparecem.
4. Antes de virar a chave: o produto precisa existir na Kiwify, o checkout deve ter sido testado com uma compra real, e as pendências TODO acima devem estar resolvidas.

Com `false` (ou JavaScript desligado) nenhum botão leva ao checkout: eles rolam até o guia grátis.

Nota: o Pacote de 30 temas e o Modo Agente aparecem como itens oferecidos na compra e depois dela; o Clube é uma assinatura. Só há uma URL de checkout (o Kit). Configure os outros como order bump e upsell na Kiwify, ou crie botões próprios quando existirem as URLs.

## Regras de texto (não quebrar ao editar)

Sem promessa de renda, "ganhe dinheiro", "automático", "sem esforço", depoimentos inventados, contadores ou escassez falsa. Requisitos e limites ficam visíveis: Windows e Chrome para o Editor Lite, Claude Pro para o Modo Agente, licença do Remotion para equipes de 4 ou mais, garantia de 7 dias.

## Peso

Página sem o vídeo: menos de 100 KB (HTML, CSS, JS, fontes, imagens). O vídeo `assets/preview.webm` (cerca de 180 KB) é um trecho de 6 s do short do reator, gerado com ffmpeg a partir de `outbox/reator-B-full/video.mp4`.

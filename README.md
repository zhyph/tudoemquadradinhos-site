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
4. Os links de Instagram e YouTube seguem o padrão `@tudoemquadradinhos`; confira que abrem.  TikTok foi banido e o app apagado: remover do site qualquer link de TikTok e Kwai (`grep -n -i 'tiktok\|kwai' site/*.html`).

## Publicar (GitHub Pages, NAO Cloudflare Pages)

O site vivo e o repositório `zhyph/tudoemquadradinhos-site` (branch `main`, GitHub Pages, domínio em `CNAME`). Não está no Cloudflare Pages. O Cloudflare só guarda o DNS do domínio e o Worker da lista (`worker/`).

```sh
site/deploy.sh             # clona o repo vivo, rsync de site/, mostra o diff; não publica
site/deploy.sh --publicar  # commit, push e espera a página viva refletir a mudança
```

O deploy copia `site/` menos `worker/`, `AUDITORIA-CONVERSAO.md`, `deploy.sh` e `.git`, e mantém o `CNAME` do repo vivo. Nunca apague o `CNAME` nem o registro TXT de verificação do Google Search Console no DNS do Cloudflare (a propriedade `sc-domain` depende dele).

### Domínio tudoemquadradinhos.com.br

Registrado no Registro.br, com DNS no Cloudflare. Conferido em 2026-11-16: o apex tem os 4 registros A do GitHub Pages (185.199.108-111.153) e `www` é CNAME para `zhyph.github.io`. O domínio personalizado e o HTTPS ficam em Settings > Pages do repo vivo.

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

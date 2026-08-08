# Margarida Maria — GitHub Pages / PWA V2

Versão estática em HTML, CSS e JavaScript, pronta para GitHub Pages.

## Estrutura
- `index.html`: catálogo público, Maria de boas-vindas e WhatsApp.
- `admin/index.html`: painel administrativo.
- `admin/scanner.html`: scanner com câmera + busca manual.
- `assets/`: CSS, JavaScript e imagens.
- `manifest.json` + `sw.js`: instalação como PWA.

## Painel ADM
O painel permite adicionar, editar, ativar/desativar e excluir peças; controlar estoque mínimo, entradas, saídas/vendas, ajustes e histórico; visualizar mais vendidos; cadastrar clientes; criar lançamentos para WhatsApp; usar scanner; e editar as mensagens da Maria.

## Importante sobre GitHub Pages
GitHub Pages é hospedagem estática. Nesta versão, produtos, estoque, clientes, senha e configurações são armazenados no `localStorage` do navegador. Isso funciona para teste e uso no mesmo aparelho/navegador, mas não sincroniza dados entre dispositivos nem fornece autenticação de servidor. Para uso comercial multiaparelho, conecte um banco/autenticação online (por exemplo, Firebase ou Supabase) mantendo a interface atual.

## Publicação
Extraia o ZIP e envie os arquivos e pastas preservando a estrutura. No GitHub: Settings → Pages → Deploy from a branch → `main` / `(root)`.

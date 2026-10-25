# SIBITO — Landing page

Site estático de apresentação do SIBITO, app de controle de treinos de musculação.

## Executar localmente

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Abra http://127.0.0.1:4173. Também é possível abrir `index.html` diretamente no navegador. Não há instalação de dependências ou compilação.

## Estrutura

- `index.html`: conteúdo da página, perguntas frequentes e links de download, política e suporte.
- `styles.css`: estilos responsivos e fontes locais.
- `script.js`: navegação do menu no celular.
- `assets/images/`: imagens e ícones do app.
- `assets/fonts/`: fontes Outfit e Inter e suas licenças.

As capturas do app usam dados de demonstração. O ícone da Google Play foi fornecido a partir do [Icons8](https://img.icons8.com/?size=200&id=99407&format=png).

## Links

- [Google Play](https://play.google.com/store/apps/details?id=com.adalbertomaranhao.sibito)
- [Política de privacidade](https://adalbertomaranhao.github.io/politica-de-privacidade-sibito/)
- [Suporte](mailto:franciscoadalbertodelimafilho@gmail.com)

## Hospedagem

Sirva a raiz deste repositório em qualquer hospedagem estática. Os caminhos dos recursos são relativos e também funcionam em subdiretórios.

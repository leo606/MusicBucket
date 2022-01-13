<section align='center'>
  <a href='https://music-bucket.vercel.app' target="_blank">
    <img src="https://music-bucket.vercel.app/images/mb_icon_opt.svg" alt="logo" />
  </a>
  <h1 align='center'>Music Bucket</h1>
  <a href="https://github.com/leo606/MusicBucket">Source Code</a> •
  <a href="https://music-bucket.vercel.app">Application</a>
</section>



## Tabela de conteúdos
  * [**Sobre o projeto**](#Sobre)
  * [**Layout**](#Layout)
    * [Desktop](#Desktop)
    * [Mobile](#Mobile)
  * [**Funcionalidades**](#Funcionalidades)
  * [**Como rodar o projeto**](#Como-rodar-o-projeto)
    * [Executando](#Executando)
  

## Sobre
  Music Bucket é um front end que consome a API do [MusicBraiz](https://musicbrainz.org/doc/MusicBrainz_API) para procurar e listar artistas e albums, mostrando informações sobre o ítem procurado, como data de lançamento e track list.

  Projeto desenvolvido para praticar tecnologias de front-end como React, Redux e Styled Components.

## Layout
  ### Desktop
  <div align='center'>
    <img align='center' width='500' src="images/web_home.jpg" alt="web page screenshot" />
    <br/><br/>
    <img align='center' width='500' src="images/web_release.jpg" alt="web page screenshot" />
  </div>

  ### Mobile
  <div align='center'>
    <img align='center' width='200' src="images/mob_home.jpg" alt="" />
    <img align='center' width='200' src="images/mob_artist.jpg" alt="" />
  </div>

## Funcionalidades
  - Pesquisar por artistas
    - Mostrar artistas encontrados
    - Listar albums de estúdio
    - Listar compilações
  - Pesquisar por releases
    - Mostrar releases encontradas
    - Listar músicas

## Como rodar o projeto
  Para rodar a aplicação localmente você vai precisar ter instalado em sua máquina [Git](https://git-scm.com) e [Node.js](https://nodejs.org). Opcionalmente um editor de texto para trabalhar com o código [VScode](https://code.visualstudio.com), [Atom](https://atom.io)

  ### Executando

  ```bash
  # clonar o repositório
  $ git clone git@github.com:leo606/MusicBucket.git

  # ir para o diretório do projeto
  $ cd MusicBucket

  # instalar depedências
  $ npm install

  # iniciar servidor local
  $ npm start
  ```
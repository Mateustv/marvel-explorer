# Clone este repositório
$ git clone https://github.com/maurodesouza/marvel-explorer

# Entre na pasta
$ cd marvel-explorer

# Crie um arquivo .env.local e preencha as seguintes variavéis

MARVEL_API_URL=https://gateway.marvel.com:443/v1/public
MARVEL_API_KEY=

## https://developer.marvel.com/documentation/authorization - Authentication for Server-Side Applications
MARVEL_HASH=
MARVEL_TS=

## Você pode seguir o arquivo .env.example também se preferir!

# Instale as dependências
$ yarn

# Para iniciar o projeto
$ yarn dev

# O app vai inicializar em <http://localhost:3000>

# Comandos
dev: inicia a aplicação em localhost:3000
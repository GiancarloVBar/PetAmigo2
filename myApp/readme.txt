Public - pasta raíz de todos os arquivos estáticos
.stylesheets
.images
.javascripts

Ou seja, quando for 'linkar' um arquivo no ejs que estea dentro de public,
considere como raíz a pasta public. 
Exemplo: ./images/servicos/nomedoarquivo.png

Surgiro organizar as pastas de imagens com nome de pastas 
Exemplo: images/servicos (vão todas as imagens da página serviços)

Views - pasta raiz de todos as views(ejs)
Partials - códigos 'componentizados' (header e footer)


Todas as páginas que tem header e footer tem um global.css, com os estilos 
do header, footer, section-blue e suas respectivas responsividades.

Cada página deve ter seu próprio css e links necessários

Section-blue: algumas páginas estão sem essa seção. Verificar a necessidade 
da inclusão. O css dela já está no global.css

Todas as páginas tem header e footer inclusos através do "include". Se não
for necessário header e footer na página, basta excluí-los.

Se quiserem alterar o título da página, basta ir no CONTROLLER da respectiva
e alterar o atributo 'Title'.

Não usem seletores de tags genéricas, isso pode interferir no CSS global.
Na página services, isso precisa ser alterado, por exemplo.

Tem bastante arquivo de imagem e algumas páginas faltando. Algumas eu já fiz.

Surgiro que façam as alterações e deem o push na main, por enquanto.

Os NODEMODULES não estão presentes, portanto é necessário dar o comando 
'npm install' na pasta myapp no seu terminal. Todas as dependencias
serão instaladas.

Para subir o servidor, basta dar 'npm start' 



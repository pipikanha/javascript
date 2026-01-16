class Livro{
    constructor(titulo, autor, id){
        this.titulo = titulo;
        this.autor = autor;
        this.id = id;
        this.disponivel = true;
    }
}
class Usuario{
    constructor(nome, id){
        this.nome = nome;
        this.id = id;
        this.livrosEmprestados = [];
        this.bloqueado = false;
    }

}

class Biblioteca{
    constructor(nome){
        this.nome = nome;
        this.livros = [];
        this.usuarios = [];
    }

    adicionarLivro(titulo, autor, id){
        const livro = new Livro(titulo, autor, id);
        this.livros.push(livro);
    }
    adicionarUsuario(nome, id){
        const usuario = new Usuario(nome, id);
        this.usuarios.push(usuario);
    }
    listarLivros(){
        console.log("Livros na biblioteca:");
        this.livros.forEach(livro => {
            console.log(`- ${livro.titulo} por ${livro.autor}`);
        });
    
    }
    listarUsuarios(){
        console.log("Usuários da biblioteca:");
        this.usuarios.forEach(usuario => {
            console.log(`- ${usuario.nome}`);
        });
    }
    emprestarLivro(livro, usuario){
    if (!this.usuarios.includes(usuario) || !this.livros.includes(livro)) {
              return console.log("Usuário ou livro não encontrado na biblioteca.");
    }
    if (usuario.livrosEmprestados.length >= 2) {
           usuario.bloqueado = true;
           return console.log(`Usuário ${usuario.nome} está bloqueado por ter 2 livros emprestados.`);
        }
    if (livro.disponivel === false) {
           return console.log(`O livro "${livro.titulo}" não está disponível para empréstimo.`);
        }
    else {
        livro.disponivel = false;
        usuario.livrosEmprestados.push(livro);
        console.log(`Livro "${livro.titulo}" emprestado para ${usuario.nome}.`);
        }
    }
    devolverLivro(livro, usuario){
        if (!this.usuarios.includes(usuario) || !this.livros.includes(livro)) {
              return console.log("Usuário ou livro não encontrado na biblioteca.");
        }
        const index = usuario.livrosEmprestados.indexOf(livro);
        if (index > -1) {
            usuario.livrosEmprestados.splice(index, 1);
            livro.disponivel = true;
            console.log(`Livro "${livro.titulo}" devolvido por ${usuario.nome}.`);
            if (usuario.livrosEmprestados.length < 2) {
                usuario.bloqueado = false;
            }

        }
        else {
            console.log(`O usuário ${usuario.nome} não tem o livro "${livro.titulo}" emprestado.`);
        }
    }
}

// Exemplo de uso
const minhaBiblioteca = new Biblioteca("Biblioteca Central");

// Adicionando livros e usuários
minhaBiblioteca.adicionarLivro("1984", "George Orwell", 1);
minhaBiblioteca.adicionarLivro("O Senhor dos Anéis", "J.R.R. Tolkien", 2);
minhaBiblioteca.adicionarUsuario("Alice", 1);
minhaBiblioteca.adicionarUsuario("Bob", 2);

// Listando livros e usuários
minhaBiblioteca.listarLivros();
minhaBiblioteca.listarUsuarios();

// Emprestando livros
minhaBiblioteca.emprestarLivro(minhaBiblioteca.livros[0], minhaBiblioteca.usuarios[0]);
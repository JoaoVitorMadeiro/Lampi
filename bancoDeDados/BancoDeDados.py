import sqlite3

class BancoDeDados:
    def Criar_Banco_De_Dados(self):
        conexao = sqlite3.connect('bancoDeDados.db')
        cursor = conexao.cursor()
        cursor.execute('CREATE TABLE IF NOT EXISTS produtos (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, preco REAL)')
        conexao.commit()
        conexao.close()
        def table (self):
            conexao = sqlite3.connect('bancoDeDados.db')
            cursor = conexao.cursor()
            cursor.execute('SELECT * FROM produtos')
            for linha in cursor.fetchall():
                print(linha)
            conexao.close()
        def Login(self, username, password, email):
            conexao = sqlite3.connect('bancoDeDados.db')
            cursor = conexao.cursor()
            cursor.execute("Insira os dados: (?,?,?)", (username, password, email))
            conectado = cursor.fetchone
            conexao.commit()
            conexao.close()
            print('Login efetuado com sucesso!')
        def cadastro(self, username, password, email):
            conexao = sqlite3.connect('bancoDeDados.db')
            cursor = conexao.cursor()
            cursor.execute("Insira os dados: (?,?,?)", (username, password, email))
            conexao.commit()
            conexao.close()
            print('Cadastro efetuado com sucesso!')

usuario = input(BancoDeDados())
for u in usuario:
    print(u.username) #Imprime o nome do usuário
    print(u.password) #Imprime a senha do usuário
    print(u.email) #Imprime o email do usuário

if __name__ == '__main__':
    usuario.Criar_Banco_De_Dados()
    usuario.table()
    usuario.Login('username', 'password', 'email')
    usuario.cadastro('username', 'password', 'email')
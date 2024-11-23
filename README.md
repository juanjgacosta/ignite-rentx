# Ignite rentx

# Cadastro de carro

**RF**
Deve ser possível cadastrar um novo carro.
Deve ser possível listar todas as categorias.

**RN**
Não deve ser possível cadastrar um carro com uma placa já existente.
Não deve ser possível alterar a placa de um carro já cadastrado.
O carro deve ser cadastrado, por padrão, como disponível.
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de carros

**RF**
Deve ser possível listar todos os carros disponíveis.
Deve ser possível listar todos os carros pelo nomo da categoria.
Deve ser possível listar todos os carros pelo nomo da marca.
Deve ser possível listar todos os carros pelo nomo do carro.

**RN**
O usuário não precisa estar logado no sistema.

# Cadastro de Especificação no carro

**RF**
Deve ser possível cadastrar uma especificação para um carro.
Deve ser possível listar todas as especificações.
Deve ser possível listar todos os carros.

**RN**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de imagens do carro

**RF**
Deve ser possível cadastrar a imagem do carro.
Deve ser possível listar todos os carros.

**RNF**
Utilizar o multer para upload dos arquivos.

**RN**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Aluguel de carro

**RF**
Deve ser possível cadastrar um aluguel.

**RN**
O aluguel deve ter duração mínima de 24 horas.
No deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
No deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.

## Branchs

### develop

- development branch

### feature/docker

- Basic Docker configuration to run project from container implemented.

### feature/typeorm.0.2.31

- TypeORM setup in version 0.2.31. (Ignite Project version)

### feature/typeorm.0.3.17

- TypeORM setup in version 0.3.17. (test)

### feature/jest

- Dependency inversion, test configuration and import optimization implemented.

### master

- Master branch of the project

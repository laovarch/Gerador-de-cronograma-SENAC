// Dados dos cursos e UCs extra�dos do JSON fornecido
// Arquivo salvo em UTF-8 para garantir compatibilidade com acentos
const dadosOriginais = [
    {
        "Cursos": "T�cnico em Administra��o",
        "UC": "UC1",
        "Descri��o 1": "Auxiliar na elabora��o, implementa��o e acompanhamento do planejamento estrat�gico das organiza��es",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Administra��o",
        "UC": "UC2",
        "Descri��o 1": "Elaborar, organizar e controlar documentos da organiza��o",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Administra��o",
        "UC": "UC3",
        "Descri��o 1": "Auxiliar na estrutura��o e operacionaliza��o de projetos",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Administra��o",
        "UC": "UC4",
        "Descri��o 1": "Auxiliar a execu��o dos procedimentos de recrutamento, sele��o e integra��o de pessoas.",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Administra��o",
        "UC": "UC5",
        "Descri��o 1": "Apoiar e executar a��es pertinentes a desenvolvimento de pessoas, reten��o, avalia��o de desempenho e elabora��o de planos de cargos e sal�rios.",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Administra��o",
        "UC": "UC6",
        "Descri��o 1": "Atuar na organiza��o e execu��o de a��es relacionadas � qualidade de vida, sa�de e seguran�a nos ambientes de trabalho.",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Administra��o",
        "UC": "UC7",
        "Descri��o 1": "Apoiar e executar a��es referentes �s rotinas de admiss�o e demiss�o de colaboradores",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Administra��o",
        "UC": "UC8",
        "Descri��o 1": "Auxiliar a elabora��o da folha de pagamento.",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Administra��o",
        "UC": "UC9",
        "Descri��o 1": "Auxiliar a execu��o das a��es pertinentes aos processos de gest�o de materiais e patrim�nio em organiza��es.",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Administra��o",
        "UC": "UC10",
        "Descri��o 1": "Auxiliar a execu��o de atividades relacionadas �s opera��es log�sticas em organiza��es.",
        "Numero de semanas": 5,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 \nAtividade 4 \nAtividade 5 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Administra��o",
        "UC": "UC11",
        "Descri��o 1": "Auxiliar a execu��o das a��es pertinentes aos processos financeiros em organiza��es.",
        "Numero de semanas": 4,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 \nAtividade 4 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Administra��o",
        "UC": "UC12",
        "Descri��o 1": "Auxiliar as opera��es pertinentes �s atividades da controladoria nas organiza��es.",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Administra��o",
        "UC": "UC13",
        "Descri��o 1": "Auxiliar o planejamento, desenvolvimento e a aplica��o do composto de marketing das organiza��es.",
        "Numero de semanas": 5,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 \nAtividade 4 \nAtividade 5 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Administra��o",
        "UC": "UC14",
        "Descri��o 1": "Executar atividades de apoio administrativo em processos comerciais",
        "Numero de semanas": 4,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 \nAtividade 4 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Administra��o",
        "UC": "UC15",
        "Descri��o 1": "Apoiar a operacionaliza��o de a��es de com�rcio exterior.",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Administra��o",
        "UC": "UC16",
        "Descri��o 1": "Auxiliar o planejamento e a execu��o de melhorias dos processos organizacionais.",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Administra��o",
        "UC": "UC17-1",
        "Descri��o 1": "Projeto Integrador - T�cnico em Administra��o I",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Administra��o",
        "UC": "UC17-2",
        "Descri��o 1": "Projeto Integrador - T�cnico em Administra��o II",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Administra��o",
        "UC": "UC17-3",
        "Descri��o 1": "Projeto Integrador - T�cnico em Administra��o III",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Administra��o",
        "UC": "UC17-4",
        "Descri��o 1": "Projeto Integrador - T�cnico em Administra��o IV",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Desenvolvimento de Sistemas",
        "UC": "UC1",
        "Descri��o 1": "Planejar o desenvolvimento de software",
        "Numero de semanas": 6,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 \nAtividade 4 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Desenvolvimento de Sistemas",
        "UC": "UC2",
        "Descri��o 1": "Desenvolver algoritmos",
        "Numero de semanas": 8,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 \nAtividade 4 \nAtividade 5 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa\nM�ltipla Escolha\nTarefa"
    },
    {
        "Cursos": "T�cnico em Desenvolvimento de Sistemas",
        "UC": "UC3",
        "Descri��o 1": "Auxiliar na modelagem e manipula��o de banco de dados",
        "Numero de semanas": 7,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 \nAtividade 4 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Desenvolvimento de Sistemas",
        "UC": "UC4",
        "Descri��o 1": "Auxiliar na administra��o de banco de dados",
        "Numero de semanas": 6,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 \nAtividade 4 \nAtividade 5 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Desenvolvimento de Sistemas",
        "UC": "UC5",
        "Descri��o 1": "Projeto Integrador Assistente de Administra��o de Banco de Dados",
        "Numero de semanas": 28,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Desenvolvimento de Sistemas",
        "UC": "UC6",
        "Descri��o 1": "Desenvolver c�digo orientado a objetos",
        "Numero de semanas": 8,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 \nAtividade 4 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Desenvolvimento de Sistemas",
        "UC": "UC7",
        "Descri��o 1": "Auxiliar na elabora��o de projeto de sistema orientado a objeto",
        "Numero de semanas": 6,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 \nAtividade 4 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Desenvolvimento de Sistemas",
        "UC": "UC8",
        "Descri��o 1": "Desenvolver projeto de interface para melhor experi�ncia do usu�rio",
        "Numero de semanas": 5,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Desenvolvimento de Sistemas",
        "UC": "UC9",
        "Descri��o 1": "Desenvolver e organizar interface gr�fica para aplica��es desktop",
        "Numero de semanas": 7,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 \nAtividade 4 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Desenvolvimento de Sistemas",
        "UC": "UC10",
        "Descri��o 1": "Programar aplicativos computacionais com integra��o de banco de dados para desktop",
        "Numero de semanas": 8,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 \nAtividade 4 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Desenvolvimento de Sistemas",
        "UC": "UC11",
        "Descri��o 1": "Gerenciar a configura��o e versionamento de Software",
        "Numero de semanas": 5,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Desenvolvimento de Sistemas",
        "UC": "UC12",
        "Descri��o 1": "Executar testes e realizar melhorias em aplicativos computacionais",
        "Numero de semanas": 5,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Desenvolvimento de Sistemas",
        "UC": "UC13",
        "Descri��o 1": "Desenvolver e organizar interface de usu�rio e elementos visuais para aplica��es web. (front-end)",
        "Numero de semanas": 7,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 \nAtividade 4 \nAtividade 5 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Desenvolvimento de Sistemas",
        "UC": "UC14",
        "Descri��o 1": "Programar aplicativos computacionais com integra��o de banco de dados para web. (back-end)",
        "Numero de semanas": 7,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 \nAtividade 4 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Desenvolvimento de Sistemas",
        "UC": "UC15-1",
        "Descri��o 1": "Projeto Integrador Assistente de desenvolvimento de sistemas I",
        "Numero de semanas": 35,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 \nAtividade 4 \nAtividade 5 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Desenvolvimento de Sistemas",
        "UC": "UC15-2",
        "Descri��o 1": "Projeto Integrador Assistente de desenvolvimento de sistemas II",
        "Numero de semanas": 25,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Inform�tica para Internet",
        "UC": "UC08-1",
        "Descri��o 1": "Projeto Integrador Desenvolvedor Web I",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Inform�tica paraInternet",
        "UC": "UC1",
        "Descri��o 1": "Planejar e documentar aplica��es web",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Inform�tica para Internet",
        "UC": "UC2",
        "Descri��o 1": "Monitorar projetos de aplica��es web",
        "Numero de semanas": 4,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 \nAtividade 4 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Inform�tica para Internet",
        "UC": "UC3",
        "Descri��o 1": "Codificar aplica��es web",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Inform�tica para Internet",
        "UC": "UC4",
        "Descri��o 1": "Estruturar e implementar banco de dados para aplica��es web",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Inform�tica para Internet",
        "UC": "UC08-2",
        "Descri��o 1": "Projeto Integrador Desenvolvedor Web II",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Inform�tica para Internet",
        "UC": "UC5",
        "Descri��o 1": "Desenvolver e organizar elementos estruturais e visuais de aplica��es web",
        "Numero de semanas": 4,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 \nAtividade 4 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Inform�tica para Internet",
        "UC": "UC6",
        "Descri��o 1": "Documentar e realizar manuten��o de aplica��es web",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Inform�tica para Internet",
        "UC": "UC7",
        "Descri��o 1": "Publicar e testar aplica��es web",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Inform�tica para Internet",
        "UC": "UC14-1",
        "Descri��o 1": "Projeto Integrador Desenvolvedor Mobile III",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Inform�tica para Internet",
        "UC": "UC9",
        "Descri��o 1": "Desenvolver e organizar interface gr�fica para dispositivos m�veis.",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Inform�tica para Internet",
        "UC": "UC10",
        "Descri��o 1": "Codificar aplica��es para dispositivos m�veis.",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Inform�tica para Internet",
        "UC": "UC14-2",
        "Descri��o 1": "Projeto Integrador Desenvolvedor Mobile IV",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Inform�tica para Internet",
        "UC": "UC11",
        "Descri��o 1": "Codificar acesso aos recursos de sistemas operacionais de dispositivos m�veis.",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Inform�tica para Internet",
        "UC": "UC12",
        "Descri��o 1": "Documentar e realizar manuten��o de aplica��es para dispositivos m�veis.",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Inform�tica para Internet",
        "UC": "UC13",
        "Descri��o 1": "Publicar e testar aplica��es para dispositivos m�veis ",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Log�stica",
        "UC": "UC1",
        "Descri��o 1": "Realizar procedimentos de conferencia de equipamentos, materiais e produtos no processo log�stico",
        "Numero de semanas": 4,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 \nAtividade 4 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Log�stica",
        "UC": "UC2",
        "Descri��o 1": "Apoiar as atividades de compra de equipamentos, materiais, produtos e servi�os",
        "Numero de semanas": 1,
        "Entrega": "Atividade 1 ",
        "Modelo de cada tarefa": "Tarefa"
    },
    {
        "Cursos": "T�cnico em Log�stica",
        "UC": "UC3",
        "Descri��o 1": "Controlar e organizar sistemas de armazenagem",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Log�stica",
        "UC": "UC4",
        "Descri��o 1": "Organizar estoques de equipamentos, materiais e produtos",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Log�stica",
        "UC": "UC5",
        "Descri��o 1": "Organizar a distribui��o de equipamentos, materiais, produtos e servi�os",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Log�stica",
        "UC": "UC6",
        "Descri��o 1": "Executar e controlar o transporte e a movimenta��o de equipamentos, materiais e produtos",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Log�stica",
        "UC": "UC7",
        "Descri��o 1": "Mapear e estimar custos log�sticos",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Log�stica",
        "UC": "UC8",
        "Descri��o 1": "Apoiar as Atividades Relacionadas aos Processos Log�sticos",
        "Numero de semanas": 1,
        "Entrega": "Atividade 1 ",
        "Modelo de cada tarefa": "Tarefa"
    },
    {
        "Cursos": "T�cnico em Log�stica",
        "UC": "UC9",
        "Descri��o 1": "Realizar atividades no Planejamento e Controle da Opera��o (PCO)",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Log�stica",
        "UC": "UC10",
        "Descri��o 1": "Atuar na log�stica do Planejamento e Controle da Produ��o (PCP)",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Log�stica",
        "UC": "UC11",
        "Descri��o 1": "Executar e Monitorar Processos de Log�stica Reversa e Log�stica Sustent�vel",
        "Numero de semanas": 1,
        "Entrega": "Atividade 1 ",
        "Modelo de cada tarefa": "Tarefa"
    },
    {
        "Cursos": "T�cnico em Log�stica",
        "UC": "UC12 - 1",
        "Descri��o 1": "Projeto Integrador em Log�stica I",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Log�stica",
        "UC": "UC12 - 2",
        "Descri��o 1": "Projeto Integrador em Log�stica II",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Log�stica",
        "UC": "UC12 - 3",
        "Descri��o 1": "Projeto Integrador em Log�stica III",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Secretariado",
        "UC": "UC1",
        "Descri��o 1": "Auxiliar na organiza��o e execu��o das a��es de planejamento relativas � gest�o",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Secretariado",
        "UC": "UC2",
        "Descri��o 1": "Realizar atividades secretariais de apoio � gest�o",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Secretariado",
        "UC": "UC3",
        "Descri��o 1": "Recepcionar e atender clientes internos e externos relacionados � gest�o",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Secretariado",
        "UC": "UC4",
        "Descri��o 1": "Executar processos de comunica��o organizacional relativos � gest�o",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Secretariado",
        "UC": "UC5",
        "Descri��o 1": "Organizar, controlar a circula��o e arquivar documentos relativos � gest�o",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Secretariado",
        "UC": "UC6",
        "Descri��o 1": "Executar atividades financeiras de apoio aos processos administrativos",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Secretariado",
        "UC": "UC7",
        "Descri��o 1": "Apoiar atividades de organiza��o de eventos corporativos relativos � gest�o",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Secretariado",
        "UC": "UC8-1",
        "Descri��o 1": "Projeto Integrador - T�cnico em Secretariado I",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Secretariado",
        "UC": "UC8-2",
        "Descri��o 1": "Projeto Integrador - T�cnico em secretariado II",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Secretariado",
        "UC": "UC8-3",
        "Descri��o 1": "Projeto Integrador - T�cnico em Secretariado III",
        "Numero de semanas": 4,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 \nAtividade 4 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Recursos Humanos",
        "UC": "UC1",
        "Descri��o 1": "Organizar e executar atividades administrativas nos processos de recursos humanos da organiza��o",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Recursos Humanos",
        "UC": "UC2",
        "Descri��o 1": "Acompanhar e executar atividades em processos de recrutamento, sele��o e ambienta��o",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Recursos Humanos",
        "UC": "UC3",
        "Descri��o 1": "Representar o empregador em situa��es referentes a rela��es de trabalho",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Recursos Humanos",
        "UC": "UC4",
        "Descri��o 1": "Apoiar e executar a��es referentes a rotinas de admiss�o e demiss�o de colaboradores",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Recursos Humanos",
        "UC": "UC5",
        "Descri��o 1": "Acompanhar e controlar a entrega de benef�cios legais e espont�neos concedidos pela organiza��o",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Recursos Humanos",
        "UC": "UC6",
        "Descri��o 1": "Auxiliar na elabora��o de folha de pagamento",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Recursos Humanos",
        "UC": "UC7",
        "Descri��o 1": "Realizar atividades no processo de elabora��o, implanta��o e manuten��o da pol�tica salarial e do plano de cargos e sal�rios da organiza��o",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Recursos Humanos",
        "UC": "UC8",
        "Descri��o 1": "Acompanhar e executar atividades nos processos de treinamento e desenvolvimento",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Recursos Humanos",
        "UC": "UC9",
        "Descri��o 1": "Auxiliar no planejamento e na realiza��o do processo de avalia��o de desempenho",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Recursos Humanos",
        "UC": "UC10",
        "Descri��o 1": "Auxiliar na organiza��o e realiza��o das a��es relacionadas ao ambiente organizacional",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Recursos Humanos",
        "UC": "UC11-1",
        "Descri��o 1": "Projeto Integrador - T�cnico em Recursos Humanos I",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Recursos Humanos",
        "UC": "UC11-2",
        "Descri��o 1": "Projeto Integrador - T�cnico em Recursos Humanos II",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Recursos Humanos",
        "UC": "UC11-3",
        "Descri��o 1": "Projeto Integrador - T�cnico em Recursos Humanos III",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Recursos Humanos",
        "UC": "UC11-4",
        "Descri��o 1": "Projeto Integrador - T�cnico em Recursos Humanos IV",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "T�cnico em Contabilidade",
        "UC": "UC1",
        "Descri��o 1": "Apoiar as atividades relativas aos processos cont�beis no planejamento organizacional",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    }
];
// Dados dos cursos e UCs extraídos do JSON fornecido
const dadosOriginais = [
    {
        "Cursos": "Técnico em Administração",
        "UC": "UC1",
        "Descrição 1": "Auxiliar na elaboração, implementação e acompanhamento do planejamento estratégico das organizações ",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Administração",
        "UC": "UC2",
        "Descrição 1": "Elaborar, organizar e controlar documentos da organização ",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Administração",
        "UC": "UC3",
        "Descrição 1": "Auxiliar na estruturação e operacionalização de projetos ",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Administração",
        "UC": "UC4",
        "Descrição 1": "Auxiliar a execução dos procedimentos de recrutamento, seleção e integração de pessoas.",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Administração",
        "UC": "UC5",
        "Descrição 1": "Apoiar e executar ações pertinentes a desenvolvimento de pessoas, retenção, avaliação de desempenho e elaboração de planos de cargos e salários.",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Administração",
        "UC": "UC6",
        "Descrição 1": "Atuar na organização e execução de ações relacionadas à qualidade de vida, saúde e segurança nos ambientes de trabalho.",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Administração",
        "UC": "UC7",
        "Descrição 1": "Apoiar e executar ações referentes às rotinas de admissão e demissão de colaboradores ",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Administração",
        "UC": "UC8 ",
        "Descrição 1": "Auxiliar a elaboração da folha de pagamento.",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Administração",
        "UC": "UC9",
        "Descrição 1": "Auxiliar a execução das ações pertinentes aos processos de gestão de materiais e patrimônio em organizações.",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Administração",
        "UC": "UC10",
        "Descrição 1": "Auxiliar a execução de atividades relacionadas às operações logísticas em organizações.",
        "Numero de semanas": 5,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 \nAtividade 4 \nAtividade 5 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Administração",
        "UC": "UC11",
        "Descrição 1": "Auxiliar a execução das ações pertinentes aos processos financeiros em organizações.",
        "Numero de semanas": 4,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 \nAtividade 4 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Administração",
        "UC": "UC12",
        "Descrição 1": "Auxiliar as operações pertinentes às atividades da controladoria nas organizações.",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Administração",
        "UC": "UC13",
        "Descrição 1": "Auxiliar o planejamento, desenvolvimento e a aplicação do composto de marketing das organizações.",
        "Numero de semanas": 5,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 \nAtividade 4 \nAtividade 5 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Administração",
        "UC": "UC14",
        "Descrição 1": "Executar atividades de apoio administrativo em processos comerciais",
        "Numero de semanas": 4,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 \nAtividade 4 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Administração",
        "UC": "UC15",
        "Descrição 1": "Apoiar a operacionalização de ações de comércio exterior.",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Administração",
        "UC": "UC16",
        "Descrição 1": "Auxiliar o planejamento e a execução de melhorias dos processos organizacionais.",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Administração",
        "UC": "UC17-1",
        "Descrição 1": "Projeto Integrador - Técnico em Administração I",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Administração",
        "UC": "UC17-2",
        "Descrição 1": "Projeto Integrador - Técnico em Administração II",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Administração",
        "UC": "UC17-3",
        "Descrição 1": "Projeto Integrador - Técnico em Administração III",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Administration",
        "UC": "UC17-4",
        "Descrição 1": "Projeto Integrador - Técnico em Administração IV",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Desenvolvimento de Sistemas",
        "UC": "UC1",
        "Descrição 1": "Planejar o desenvolvimento de software",
        "Numero de semanas": 6,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 \nAtividade 4 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Desenvolvimento de Sistemas",
        "UC": "UC2",
        "Descrição 1": "Desenvolver algoritmos",
        "Numero de semanas": 8,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 \nAtividade 4 \nAtividade 5 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa\nMúltipla Escolha\nTarefa"
    },
    {
        "Cursos": "Técnico em Desenvolvimento de Sistemas",
        "UC": "UC3",
        "Descrição 1": "Auxiliar na modelagem e manipulação de banco de dados",
        "Numero de semanas": 7,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 \nAtividade 4 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Desenvolvimento de Sistemas",
        "UC": "UC4",
        "Descrição 1": "Auxiliar na administração de banco de dados",
        "Numero de semanas": 6,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 \nAtividade 4 \nAtividade 5 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Desenvolvimento de Sistemas",
        "UC": "UC5",
        "Descrição 1": "Projeto Integrador Assistente de Administração de Banco de Dados",
        "Numero de semanas": 28,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Desenvolvimento de Sistemas",
        "UC": "UC6",
        "Descrição 1": "Desenvolver código orientado a objetos",
        "Numero de semanas": 8,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 \nAtividade 4 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Desenvolvimento de Sistemas",
        "UC": "UC7",
        "Descrição 1": "Auxiliar na elaboração de projeto de sistema orientado a objeto",
        "Numero de semanas": 6,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 \nAtividade 4 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Desenvolvimento de Sistemas",
        "UC": "UC8 ",
        "Descrição 1": "Desenvolver projeto de interface para melhor experiência do usuário",
        "Numero de semanas": 5,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Desenvolvimento de Sistemas",
        "UC": "UC9",
        "Descrição 1": "Desenvolver e organizar interface gráfica para aplicações desktop",
        "Numero de semanas": 7,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 \nAtividade 4 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Desenvolvimento de Sistemas",
        "UC": "UC10",
        "Descrição 1": "Programar aplicativos computacionais com integração de banco de dados para desktop",
        "Numero de semanas": 8,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 \nAtividade 4 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Desenvolvimento de Sistemas",
        "UC": "UC11",
        "Descrição 1": "Gerenciar a configuração e versionamento de Software",
        "Numero de semanas": 5,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Desenvolvimento de Sistemas",
        "UC": "UC12",
        "Descrição 1": "Executar testes e realizar melhorias em aplicativos computacionais",
        "Numero de semanas": 5,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Desenvolvimento de Sistemas",
        "UC": "UC13",
        "Descrição 1": "Desenvolver e organizar interface de usuário e elementos visuais para aplicações web. (front-end)",
        "Numero de semanas": 7,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 \nAtividade 4 \nAtividade 5 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Desenvolvimento de Sistemas",
        "UC": "UC14",
        "Descrição 1": "Programar aplicativos computacionais com integração de banco de dados para web. (back-end)",
        "Numero de semanas": 7,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 \nAtividade 4 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Desenvolvimento de Sistemas",
        "UC": "UC15-1",
        "Descrição 1": "Projeto Integrador Assistente de desenvolvimento de sistemas I",
        "Numero de semanas": 35,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 \nAtividade 4 \nAtividade 5 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Desenvolvimento de Sistemas",
        "UC": "UC15-2",
        "Descrição 1": "Projeto Integrador Assistente de desenvolvimento de sistemas II",
        "Numero de semanas": 25,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Informática para Internet",
        "UC": "UC08-1",
        "Descrição 1": "Projeto Integrador Desenvolvedor Web I",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Informática paraInternet",
        "UC": "UC1",
        "Descrição 1": "Planejar e documentar aplicações web",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Informática para Internet",
        "UC": "UC2",
        "Descrição 1": "Monitorar projetos de aplicações web",
        "Numero de semanas": 4,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 \nAtividade 4 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Informática para Internet",
        "UC": "UC3",
        "Descrição 1": "Codificar aplicações web",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Informática para Internet",
        "UC": "UC4",
        "Descrição 1": "Estruturar e implementar banco de dados para aplicações web",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Informática para Internet",
        "UC": "UC08-2",
        "Descrição 1": "Projeto Integrador Desenvolvedor Web II",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Informática para Internet",
        "UC": "UC5",
        "Descrição 1": "Desenvolver e organizar elementos estruturais e visuais de aplicações web",
        "Numero de semanas": 4,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 \nAtividade 4 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Informática para Internet",
        "UC": "UC6",
        "Descrição 1": "Documentar e realizar manutenção de aplicações web",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Informática para Internet",
        "UC": "UC7",
        "Descrição 1": "Publicar e testar aplicações web",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Informática para Internet",
        "UC": "UC14-1",
        "Descrição 1": "Projeto Integrador Desenvolvedor Mobile III",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Informática para Internet",
        "UC": "UC9",
        "Descrição 1": "Desenvolver e organizar interface gráfica para dispositivos móveis.",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Informática para Internet",
        "UC": "UC10",
        "Descrição 1": "Codificar aplicações para dispositivos móveis.",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Informática para Internet",
        "UC": "UC14-2",
        "Descrição 1": "Projeto Integrador Desenvolvedor Mobile IV",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Informática para Internet",
        "UC": "UC11",
        "Descrição 1": "Codificar acesso aos recursos de sistemas operacionais de dispositivos móveis.",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Informática para Internet",
        "UC": "UC12",
        "Descrição 1": "Documentar e realizar manutenção de aplicações para dispositivos móveis.",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Informática para Internet",
        "UC": "UC13",
        "Descrição 1": "Publicar e testar aplicações para dispositivos móveis ",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Logística",
        "UC": "UC1",
        "Descrição 1": "Realizar procedimentos de conferencia de equipamentos, materiais e produtos no processo logístico",
        "Numero de semanas": 4,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 \nAtividade 4 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Logística",
        "UC": "UC2",
        "Descrição 1": "Apoiar as atividades de compra de equipamentos, materiais, produtos e serviços",
        "Numero de semanas": 1,
        "Entrega": "Atividade 1 ",
        "Modelo de cada tarefa": "Tarefa"
    },
    {
        "Cursos": "Técnico em Logística",
        "UC": "UC3",
        "Descrição 1": "Controlar e organizar sistemas de armazenagem",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Logística",
        "UC": "UC4",
        "Descrição 1": "Organizar estoques de equipamentos, materiais e produtos",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Logística",
        "UC": "UC5",
        "Descrição 1": "Organizar a distribuição de equipamentos, materiais, produtos e serviços",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Logística",
        "UC": "UC6",
        "Descrição 1": "Executar e controlar o transporte e a movimentação de equipamentos, materiais e produtos",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Logística",
        "UC": "UC7",
        "Descrição 1": "Mapear e estimar custos logísticos",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Logística",
        "UC": "UC8 ",
        "Descrição 1": "Apoiar as Atividades Relacionadas aos Processos Logísticos",
        "Numero de semanas": 1,
        "Entrega": "Atividade 1 ",
        "Modelo de cada tarefa": "Tarefa"
    },
    {
        "Cursos": "Técnico em Logística",
        "UC": "UC9",
        "Descrição 1": "Realizar atividades no Planejamento e Controle da Operação (PCO)",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Logística",
        "UC": "UC10",
        "Descrição 1": "Atuar na logística do Planejamento e Controle da Produção (PCP)",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Logística",
        "UC": "UC11",
        "Descrição 1": "Executar e Monitorar Processos de Logística Reversa e Logística Sustentável",
        "Numero de semanas": 1,
        "Entrega": "Atividade 1 ",
        "Modelo de cada tarefa": "Tarefa"
    },
    {
        "Cursos": "Técnico em Logística",
        "UC": "UC12 - 1",
        "Descrição 1": "Projeto Integrador em Logística I",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Logística",
        "UC": "UC12 - 2",
        "Descrição 1": "Projeto Integrador em Logística II",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Logística",
        "UC": "UC12 - 3",
        "Descrição 1": "Projeto Integrador em Logística III",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Secretariado",
        "UC": "UC1",
        "Descrição 1": "Auxiliar na organização e execução das ações de planejamento relativas à gestão",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Secretariado",
        "UC": "UC2",
        "Descrição 1": "Realizar atividades secretariais de apoio à gestão",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Secretariado",
        "UC": "UC3",
        "Descrição 1": "Recepcionar e atender clientes internos e externos relacionados à gestão",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Secretariado",
        "UC": "UC4",
        "Descrição 1": "Executar processos de comunicação organizacional relativos à gestão",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Secretariado",
        "UC": "UC5",
        "Descrição 1": "Organizar, controlar a circulação e arquivar documentos relativos à gestão",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Secretariado",
        "UC": "UC6",
        "Descrição 1": "Executar atividades financeiras de apoio aos processos administrativos",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Secretariado",
        "UC": "UC7",
        "Descrição 1": "Apoiar atividades de organização de eventos corporativos relativos à gestão",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Secretariado",
        "UC": "UC8-1",
        "Descrição 1": "Projeto Integrador - Técnico em Secretariado I",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Secretariado",
        "UC": "UC8-2",
        "Descrição 1": "Projeto Integrador - Técnico em secretariado II",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Secretariado",
        "UC": "UC8-3",
        "Descrição 1": "Projeto Integrador - Técnico em Secretariado III",
        "Numero de semanas": 4,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 \nAtividade 4 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Recursos Humanos",
        "UC": "UC1",
        "Descrição 1": "Organizar e executar atividades administrativas nos processos de recursos humanos da organização",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Recursos Humanos",
        "UC": "UC2",
        "Descrição 1": "Acompanhar e executar atividades em processos de recrutamento, seleção e ambientação",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Recursos Humanos",
        "UC": "UC3",
        "Descrição 1": "Representar o empregador em situações referentes a relações de trabalho",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Recursos Humanos",
        "UC": "UC4",
        "Descrição 1": "Apoiar e executar ações referentes a rotinas de admissão e demissão de colaboradores",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Recursos Humanos",
        "UC": "UC5",
        "Descrição 1": "Acompanhar e controlar a entrega de benefícios legais e espontâneos concedidos pela organização",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Recursos Humanos",
        "UC": "UC6",
        "Descrição 1": "Auxiliar na elaboração de folha de pagamento",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Recursos Humanos",
        "UC": "UC7",
        "Descrição 1": "Realizar atividades no processo de elaboração, implantação e manutenção da política salarial e do plano de cargos e salários da organização",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Recursos Humanos",
        "UC": "UC8 ",
        "Descrição 1": "Acompanhar e executar atividades nos processos de treinamento e desenvolvimento",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Recursos Humanos",
        "UC": "UC9",
        "Descrição 1": "Auxiliar no planejamento e na realização do processo de avaliação de desempenho",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Recursos Humanos",
        "UC": "UC10",
        "Descrição 1": "Auxiliar na organização e realização das ações relacionadas ao ambiente organizacional",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Recursos Humanos",
        "UC": "UC11-1",
        "Descrição 1": "Projeto Integrador - Técnico em Recursos Humanos I",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Recursos Humanos",
        "UC": "UC11-2",
        "Descrição 1": "Projeto Integrador - Técnico em Recursos Humanos II",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Recursos Humanos",
        "UC": "UC11-3",
        "Descrição 1": "Projeto Integrador - Técnico em Recursos Humanos III",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Recursos Humanos",
        "UC": "UC11-4",
        "Descrição 1": "Projeto Integrador - Técnico em Recursos Humanos IV",
        "Numero de semanas": 3,
        "Entrega": "Atividade 1 \nAtividade 2 \nAtividade 3 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa\nTarefa"
    },
    {
        "Cursos": "Técnico em Contabilidade",
        "UC": "UC1",
        "Descrição 1": "Apoiar as atividades relativas aos processos contábeis no planejamento organizacional",
        "Numero de semanas": 2,
        "Entrega": "Atividade 1 \nAtividade 2 ",
        "Modelo de cada tarefa": "Tarefa\nTarefa"
    }
];

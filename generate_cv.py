from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib import colors
from pathlib import Path

OUT=Path(__file__).parent/'curriculo-yuri-schulze.pdf'
pdfmetrics.registerFont(TTFont('DejaVu', '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'))
pdfmetrics.registerFont(TTFont('DejaVuBold', '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'))
BG=HexColor('#0D1417'); LIME=HexColor('#CBEF89'); TEXT=HexColor('#172327'); MUTED=HexColor('#536267'); RULE=HexColor('#D9E0D9')
styles={
 'eyebrow':ParagraphStyle('eyebrow',fontName='DejaVuBold',fontSize=8,leading=12,textColor=HexColor('#3F6A35'),spaceAfter=10),
 'section':ParagraphStyle('section',fontName='DejaVuBold',fontSize=11.5,leading=16,textColor=TEXT,spaceBefore=17,spaceAfter=11),
 'job':ParagraphStyle('job',fontName='DejaVuBold',fontSize=9.4,leading=13.5,textColor=TEXT,spaceAfter=3),
 'period':ParagraphStyle('period',fontName='DejaVu',fontSize=8,leading=12,textColor=MUTED,spaceAfter=7),
 'body':ParagraphStyle('body',fontName='DejaVu',fontSize=8.2,leading=13.7,textColor=TEXT,spaceAfter=5),
 'body2':ParagraphStyle('body2',fontName='DejaVu',fontSize=8.6,leading=15.2,textColor=TEXT,spaceAfter=5),
 'small':ParagraphStyle('small',fontName='DejaVu',fontSize=7.8,leading=13,textColor=MUTED,spaceAfter=6),
 'pname':ParagraphStyle('pname',fontName='DejaVuBold',fontSize=11,leading=16,textColor=TEXT,spaceAfter=4)
}
doc=SimpleDocTemplate(str(OUT),pagesize=A4,leftMargin=46,rightMargin=46,topMargin=162,bottomMargin=42,title='Currículo — Yuri Edward Schulze',author='Yuri Edward Schulze')
flow=[]
P=lambda txt,style='body':Paragraph(txt,styles[style])
flow.append(P('PERFIL PROFISSIONAL','eyebrow'))
flow.append(P('Profissional de tecnologia com experiência em central de serviços, gestão de requisições, suporte e melhoria de processos. Atuação em contato com clientes e equipes técnicas, triagem e acompanhamento de demandas e SLAs. Em transição para o desenvolvimento de software, com projetos de automação, aplicações web e experimentação com IA.','body2'))
flow.append(P('EXPERIÊNCIA PROFISSIONAL','section'))
roles=[
('BY SEVEN  |  Analista de Suporte Júnior — Requisições','Mar 2025 — atual · Joinville, SC', ['Triagem, priorização e acompanhamento de chamados e atividades agendadas.','Acompanhamento de prazos e comunicação entre clientes, analistas e equipes especializadas.','Identificação de oportunidades de automação de rotinas e padronização de processos.']),
('LINX  |  Assistente de TI','Fev 2022 — abr 2024 · Joinville, SC',['Suporte interno com Jira Software e Confluence.','Atualização de plug-in integrado ao Jira para consulta de registros de horas usando React.']),
('TOTVS  |  Assistente Administrativo','Jul 2016 — out 2021 · Joinville, SC',['Administração de plataforma LMS e conteúdos SCORM, atendimento a usuários e organização de treinamentos.']),
('TOTVS  |  Assistente de Saúde Ocupacional','Fev 2015 — jun 2016 · Joinville, SC',['Condução de atividades de ginástica laboral e orientação de colaboradores.'])]
for title,period,bullets in roles:
 flow.append(P(title,'job'));flow.append(P(period,'period'))
 for b in bullets: flow.append(P('• '+b))
 flow.append(Spacer(1,5))
flow.append(P('FORMAÇÃO','section'))
flow.append(P('UniSociesc  |  Bacharelado em Sistemas de Informação','job'))
flow.append(P('2024 — em andamento · Previsão de conclusão: 2026','period'))
flow.append(PageBreak())
flow.append(P('PROJETOS E EVOLUÇÃO TÉCNICA','eyebrow'))
flow.append(P('PROJETOS SELECIONADOS','section'))
projects=[
('SevenSuite Templates','Em evolução · 2026','Extensão de navegador para automatizar preenchimentos repetitivos em sistemas de chamados com modelos e validações de campos. Ferramenta pessoal; sem exposição de dados internos.'),
('Analisador de Chamados com IA','Protótipo · 2026','Interface experimental para organizar históricos, sugerir classificação e resumos operacionais com revisão humana.'),
('Gestor Financeiro Inteligente','Em desenvolvimento · 2026','Registro e categorização de despesas com linguagem natural e relatórios, com integração ao WhatsApp e OCR como recursos planejados.'),
('Controle Acessível para Jogos','Pesquisa e desenvolvimento · 2026','Colaboração acadêmica em conceito de periférico adaptado para pessoas que jogam com uma mão e configuração de comandos.'),
('Assistente de Entregas','Conceito · 2026','Ideia de app para leitura de etiquetas, identificação de transportadoras e apoio de mapas à localização de endereços.'),
('Portal Logístico Integrado ao SAP','Projeto acadêmico · 2025–2026','Planejamento de requisitos para rastreamento de produtos, estoque, entregas e indicadores; sem integração implementada.')]
for title,status,desc in projects:
 flow.append(KeepTogether([P(title,'job'),P(status,'period'),P(desc,'body'),Spacer(1,8)]))
flow.append(P('TECNOLOGIAS E FERRAMENTAS','section'))
flow.append(P('<b>Prática/projetos:</b> HTML, CSS, JavaScript, React, Git/GitHub, extensões de navegador, automação, Vercel.','body'))
flow.append(P('<b>Em estudo:</b> C#, POO, .NET, ASP.NET Core, SQL, APIs REST, arquitetura de software, IA generativa e integração mobile.','body'))
flow.append(P('<b>Ferramentas corporativas:</b> SevenSuite, Jira, Confluence, Teams, Whaticket, LMS/SCORM, TOTVS Protheus e RM.','body'))

def draw_page(c, d):
 w,h=A4; pg=d.page
 c.saveState()
 c.setFillColor(BG);c.rect(0,h-132,w,132,stroke=0,fill=1)
 c.setFillColor(LIME);c.rect(46,h-42,23,4,stroke=0,fill=1)
 c.setFont('DejaVuBold',23);c.setFillColor(colors.white);c.drawString(46,h-78,'YURI EDWARD SCHULZE')
 c.setFont('DejaVu',9);c.setFillColor(LIME);c.drawString(46,h-99,'Tecnologia  /  Suporte  /  Desenvolvimento de software')
 c.setFont('DejaVu',7.5);c.setFillColor(HexColor('#BFC8C1'))
 c.drawString(46,h-117,'Joinville · SC   |   yesyuri98@gmail.com   |   github.com/yurischulze')
 c.setStrokeColor(RULE);c.line(46,34,w-46,34)
 c.setFont('DejaVu',7);c.setFillColor(MUTED);c.drawString(46,24,'Currículo público · Versão outubro/2026 · Informações e projetos em constante atualização')
 c.drawRightString(w-46,24,f'{pg:02d}')
 c.restoreState()

doc.build(flow,onFirstPage=draw_page,onLaterPages=draw_page)
print(OUT)

export type Lang = "pt" | "en";

const STORAGE_KEY = "lang";

const pt: { [english: string]: string } = {
    "Hosted with 🧡 by": "Alojado com 🧡 por",
    "Drag a File Here\nOr Click to Select": "Arrasta um ficheiro\nOu clica para selecionar",
    "Drop file": "Largue o ficheiro",
    "Download": "Transferir",
    "Open File...": "Abrir ficheiro...",
    "Collapse Menu": "Recolher menu",
    "Circle": "Círculo",
    "Square": "Quadrado",
    "Discord Banner Guidelines": "Guias para banner Discord",
    "Avatar Guidelines": "Guias para Avatar",
    "Mask Transparency": "Transparência da máscara",
    "Zoom:": "Zoom:",
    "Fit": "Ajustar",
    "Rotation": "Rotação",
    "Flip Horiz.": "Virar horiz.",
    "Flip Vertical": "Virar vertical",
    "Add Preview": "Vista Perso.",
    "Guidelines": "Guias",
    "Center": "Centrar",
    "Antialias": "Antialiasing",
    "Set Size": "Tamanho",
    "Lock Center During Resize": "Fixar centro",
    "No Border": "Sem moldura",
    "Solid Border": "Moldura sólida",
    "Custom Gradient Border": "Gradiente personalizado",
    "Border Size": "Tamanho da moldura",
    "LGBT Pride": "Orgulho LGBT",
    "Trans Pride": "Orgulho trans",
    "Nonbinary Pride": "Orgulho não-binário",
    "The Current Size is {x}x{y}\nThe Current Crop Area is {w}x{h}\nEnter in a size either by specifying a number (like 64) or a percentage of width (50%w) or height (50%h)":
        "O tamanho atual é {x}x{y}\nA área de recorte atual é {w}x{h}\nIndique um tamanho com um número (por exemplo, 64) ou uma percentagem da largura (50%w) ou da altura (50%h)",
    "Enter a Custom Size\nDefault sizes are: 30, 40, 64, and 128.\nNote: 30 will come with a Discord online indicator.":
        "Indique um tamanho personalizado\nOs tamanhos predefinidos são: 30, 40, 64 e 128.\nNota: o tamanho 30 inclui o indicador de online do Discord.",
    "Please, dear god, enter a size above 0...": "Por amor de Deus, indique um tamanho acima de 0...",
    "hey so your browser isn't really supported ... things should still work but they will be slower/ugly due to how internet explorer/edge function (They don't conform to web standards). i'd recommend switching to firefox or chrome!! but you don't have to if you don't want to. this is the only time you'll see this message unless u clear ur cache or something. ok bye":
        "epa, o seu navegador não é propriamente suportado... as coisas devem continuar a funcionar, mas serão mais lentas ou menos bonitas por causa da forma como o Internet Explorer e o Edge funcionam (não seguem as normas da web). recomendo mudar para o Firefox ou para o Chrome!! mas não é obrigatório. só vai ver esta mensagem desta vez, a menos que limpe a cache. ok, até já",
    "Rendering...": "A preparar...",
    "Rendered! Yayy! ❤️": "Renderizado ! 🧡",
    "Aborting render... please wait...": "A cancelar... aguarde...",
    "Save": "Guardar",
    "Discord Banner": "Banner do Discord",
    "Preset:": "Predefinição:",
    "Select one...": "Escolha uma...",
    "Load this preset": "Carregar esta predefinição",
    "Overwrite this preset": "Substituir esta predefinição",
    "Save as new preset": "Guardar como nova predefinição",
    "Please select a valid preset or save as new preset.": "Escolha uma predefinição válida ou guarde como nova.",
    "Name the new preset:": "Nome da nova predefinição:",
    "That name is invalid.": "Esse nome não é válido.",
    "That name is already taken.": "Esse nome já existe.",
    "Delete this preset": "Eliminar esta predefinição",
    "Are you sure you want to delete this preset?": "Tem a certeza de que quer eliminar esta predefinição?",
    "Add stop": "Adicionar ponto",
    "Remove stop": "Remover ponto",
    "Make stops equidistant": "Espaçar os pontos por igual",
    "Angle": "Ângulo",
    "Cancel": "Cancelar",
    "Tutorial..": "Tutorial",
    "learn more": "saber mais",
    "Hello, you can resize the cropping area by dragging on the \"corners\" of the circle/square.":
        "Olá, pode redimensionar a área de recorte arrastando os \"cantos\" do círculo ou do quadrado.",
    "Thank you, this has been the tutorial.": "Obrigado, este foi o tutorial.",
    "Please leave feedback or donate with the links at the bottom!":
        "Deixe comentários ou faça um donativo através das ligações no fundo!",
    "also this site use cookie if u use it u agree to cookie ":
        "este site também usa cookies; se o utilizar, aceita os cookies ",
    "What's New...": "Novidades...",
    "October 2022": "Outubro de 2022",
    "Sepetmber 2022": "Setembro de 2022",
    "Feburary 2022": "Fevereiro de 2022",
    "October 2019": "Outubro de 2019",
    "July 2019": "Julho de 2019",
    "May 2019": "Maio de 2019",
    "April 2019": "Abril de 2019",
    "February 2019": "Fevereiro de 2019",
    "December 2018": "Dezembro de 2018",
    "November 2018": "Novembro de 2018",
    "August 2018": "Agosto de 2018",
    "July 2018": "Julho de 2018",
    "June 2018": "Junho de 2018",
    "May 2018": "Maio de 2018",
    "Earlier": "Mais antigo",
    "Holy heck, a brand new feature! You can now crop Discord profile banners right here! Isn't that just sooo cool!?":
        "Ena, uma funcionalidade nova! Já pode recortar banners de perfil do Discord aqui mesmo! Não é uma maravilha!?",
    "Thank you to @Barocena!!!": "Obrigado, @Barocena!!!",
    "Massive site redesign! Thank you @The Oddball!~": "Redesenho completo do site! Obrigado, @The Oddball!~",
    "Bug fixes and preformance improvements": "Correções de erros e melhorias de desempenho",
    "wow, such update": "uau, que atualização",
    "Added borders for LGBT frends... more/custom borders coming soon":
        "Molduras novas para amigues LGBT... mais molduras, e personalizadas, em breve",
    "Added support for custom colored borders, import/export feature coming soon":
        "Já dá para usar molduras com cores à escolha; importar e exportar fica para breve",
    "Updated some styling": "Alguns ajustes de estilo",
    "Added functionality for centering, setting size manually, and resize locking":
        "Já dá para centrar, definir o tamanho à mão e fixar o centro ao redimensionar",
    "Bug fixes and performance improvements": "Correções de erros e melhorias de desempenho",
    "Made it so you can move the crop area pixel-by-pixel using arrow keys":
        "Agora dá para mover a área de recorte píxel a píxel com as setas",
    "Also I can't make it so you can just put a url of a pic without having a dedicated server which i don't got the munz for sorry":
        "E não dá para usar só o endereço de uma imagem sem um servidor dedicado, e para isso não há dinheiro, desculpem",
    "Changed mask to be pixel-accurate": "A máscara ficou precisa ao píxel",
    "Added option to show guidelines": "Nova opção para mostrar as guias",
    "rewrote the whole dang thing so its not all in one file anymore lol":
        "reescrevi isto tudo para deixar de estar num único ficheiro, enfim",
    "flip image horizontally or vertically (gifs soon)":
        "inverter a imagem na horizontal ou na vertical (GIFs em breve)",
    "antialias toggle (won't affect rendering, which just crops the image directly)":
        "opção de antialiasing (não afeta a imagem final, que é só o recorte direto)",
    "online indicator preview for discord": "prévia do indicador de online do Discord",
    "bugfixes and quality of life improvements": "correções e melhorias de usabilidade",
    "please tell me if you find bugs they probably exist and please tell me how you made them happen":
        "se encontrar erros, diga-me, que eles devem existir, e explique como os conseguiu",
    "You can remove preview sizes now by clicking in the bottom-right area. The web site will also magically remember your preview sizes between visits.":
        "Já pode remover tamanhos de pré-visualização clicando na zona inferior direita. O site também se lembra desses tamanhos entre visitas.",
    "Zoom-fit should be imperceptibly faster... also shouldn't show phantom scroll bars anymore":
        "O ajuste do zoom deve estar um nada mais rápido... e já não devem aparecer barras de deslocação fantasma",
    "Rotation! Please let me know if u find any bugs with this.": "Rotação! Se encontrar erros nisto, diga-me.",
    "Helpful tutorial": "Tutorial útil",
    "Better Mask Outline": "Melhor contorno da máscara",
    "Updated Canvas Backend": "Motor de canvas atualizado",
    "Updated Preview Image Backend": "Motor das pré-visualizações atualizado",
    "So tell me if you find any weird bugs": "Se aparecer algum erro esquisito, diga-me",
    "Loading screen so you can't open a file before it's ready for you to":
        "Ecrã de carregamento para não abrir um ficheiro antes de estar pronto",
    "Drag & Drop support - thanx TheRebelG0d": "Suporte para arrastar e largar — obrigado, TheRebelG0d",
    "New rendering where you can pick circle or square after rendering... revolutionary...":
        "Nova geração da imagem, em que pode escolher círculo ou quadrado depois... revolucionário...",
    "Zoom functionality": "Funcionalidade de zoom",
    "Other stuff probaly": "Outras coisas, provavelmente",
    "bugfixes cool": "correções, porreiro",
    "GIF support!! wow did you know GIFs work on this ??? at least i hope they do":
        "Suporte para GIF!! sabia que os GIFs funcionam aqui??? pelo menos espero que sim",
    "other stuff": "outras coisas",
};

let lang: Lang = readStoredLang();
const listeners: Array<() => void> = [];
const boundEnglish = new WeakMap<HTMLElement, string>();
const transientEnglish = new WeakMap<HTMLElement, string>();

function readStoredLang(): Lang {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === "en" || stored === "pt") {
            return stored;
        }
    } catch (e) {
        // storage can be unavailable
    }
    return "pt";
}

function applyDocumentLang(): void {
    if (typeof document === "undefined") {
        return;
    }
    document.documentElement.lang = lang === "pt" ? "pt-PT" : "en";
}

function paint(el: HTMLElement): void {
    const english = transientEnglish.get(el) || boundEnglish.get(el);
    if (english) {
        el.innerText = t(english);
    }
}

export function getLang(): Lang {
    return lang;
}

export function t(english: string, vars?: { [key: string]: string | number }): string {
    let s = lang === "pt" && pt[english] !== undefined ? pt[english] : english;
    if (vars) {
        Object.keys(vars).forEach(key => {
            s = s.split("{" + key + "}").join(String(vars[key]));
        });
    }
    return s;
}

export function setLang(next: Lang): void {
    if (next !== "pt" && next !== "en") {
        return;
    }
    lang = next;
    try {
        localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {
        // ignore quota / private mode
    }
    applyDocumentLang();
    listeners.forEach(fn => fn());
}

export function onLangChange(fn: () => void): void {
    listeners.push(fn);
}

export function bindText(el: HTMLElement, english: string): void {
    boundEnglish.set(el, english);
    paint(el);
    onLangChange(() => paint(el));
}

export function setTransientText(el: HTMLElement, english: string | null): void {
    if (english) {
        transientEnglish.set(el, english);
    } else {
        transientEnglish.delete(el);
    }
    paint(el);
}

applyDocumentLang();

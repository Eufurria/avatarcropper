import { TutorialDialog } from './tutorial'
import { bindText, getLang, onLangChange, setLang } from './i18n'

let tutorial: TutorialDialog

export function showTutorial() {
    tutorial.show()
}

function wireFooterCredit() {
    const credit = document.getElementById('footerCredit')
    if (credit) {
        bindText(credit, 'Hosted with 🧡 by')
    }
}

function wireLanguageToggle() {
    const langBtn = document.getElementById('langToggle')
    if (!langBtn) {
        return
    }

    const code = langBtn.querySelector('.langCode')
    const flagPt = langBtn.querySelector<HTMLElement>('.flag-pt')
    const flagEn = langBtn.querySelector<HTMLElement>('.flag-en')

    const apply = () => {
        const toEnglish = getLang() === 'pt'
        if (code) {
            code.textContent = toEnglish ? 'EN' : 'PT'
        }
        if (flagPt) {
            flagPt.hidden = toEnglish
        }
        if (flagEn) {
            flagEn.hidden = !toEnglish
        }
        const label = toEnglish ? 'Mudar para inglês' : 'Switch to Portuguese'
        langBtn.setAttribute('aria-label', label)
        langBtn.setAttribute('title', label)
    }

    apply()
    onLangChange(apply)
    langBtn.addEventListener('click', () => {
        setLang(getLang() === 'pt' ? 'en' : 'pt')
    })
}

wireFooterCredit()
wireLanguageToggle()

export function doFooterThings() {
    tutorial = new TutorialDialog()
    document.body.appendChild(tutorial.container)
}

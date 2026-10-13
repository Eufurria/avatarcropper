import { ClosableDialog } from "./closabledialog";
import { createElement } from "./util";
import { privacyText } from "./privacypolicy";
import { onLangChange, t } from "./i18n";

export class TutorialDialog extends ClosableDialog {
    private showingPrivacy = false;

    constructor() {
        super();
        this.dialog.classList.add("dialog-tutorial");
        onLangChange(() => {
            if (this.container.style.display === "none") {
                return;
            }
            const top = this.contentContainer.scrollTop;
            if (this.showingPrivacy) {
                this.contentContainer.style.userSelect = "text";
                this.innerText = privacyText();
            } else {
                this.renderTutorial();
            }
            this.contentContainer.scrollTop = top;
        });
    }

    show() {
        this.showingPrivacy = false;
        this.renderTutorial();
        super.show();
    }

    private renderTutorial() {
        this.innerHTML = "";
        this.contentContainer.style.userSelect = "";
        let h1 = createElement("h1");
        h1.innerText = t("Tutorial..");

        let learnMore = createElement("span", "link");
        learnMore.addEventListener("click", () => {
            this.showingPrivacy = true;
            this.contentContainer.style.userSelect = "text";
            this.innerText = privacyText();
            this.contentContainer.scrollTop = 0;
        });
        learnMore.innerText = t("learn more");

        let body = createElement("div");
        body.innerHTML =
            t("Hello, you can resize the cropping area by dragging on the \"corners\" of the circle/square.")
            + "<br>"
            + "<img src='" + require('../images/tut.png') + "' class='image'><br><br><b>"
            + t("This site uses cookies. By using it, you accept them.")
            + "</b> ";

        body.appendChild(learnMore);

        this.appendChild(h1, body);
    }
}

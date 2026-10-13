import { showElement, hideElement } from "./util";
import { EventClass } from "./eventclass";
import { setTransientText } from "./i18n";

export class DragDrop extends EventClass {
    constructor(overlay: HTMLElement) {
        super();

        this.createEvent("drop");
        this.createEvent("dragleave");

        document.addEventListener("dragover", (e) => {
            e.preventDefault();
            e.stopPropagation();
        });

        document.addEventListener("dragend", (e) => {
            e.preventDefault();
            e.stopPropagation();
        });

        document.addEventListener("dragenter", (e) => {
            e.preventDefault();
            e.stopPropagation();

            showElement(overlay);
            setTransientText(overlay, "Drop file");
            overlay.style.zIndex = "9999";
        });

        document.addEventListener("dragleave", (e) => {
            e.preventDefault();
            e.stopPropagation();

            if (e.target === overlay) {
                hideElement(overlay);
                setTransientText(overlay, null);
                overlay.style.zIndex = "";
                this.emitEvent("dragleave");
            }
        });

        document.addEventListener("drop", (e) => {
            e.preventDefault();
            e.stopPropagation();

            if (e.dataTransfer.files.length) {
                this.emitEvent("drop", e.dataTransfer.files[0]);
            }

            hideElement(overlay);
            setTransientText(overlay, null);
            overlay.style.zIndex = "";
        });
    }
}
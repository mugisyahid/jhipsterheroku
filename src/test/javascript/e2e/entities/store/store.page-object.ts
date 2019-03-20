import { element, by, ElementFinder } from 'protractor';

export class StoreComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('jhi-store div table .btn-danger'));
    title = element.all(by.css('jhi-store div h2#page-heading span')).first();

    async clickOnCreateButton() {
        await this.createButton.click();
    }

    async clickOnLastDeleteButton() {
        await this.deleteButtons.last().click();
    }

    async countDeleteButtons() {
        return this.deleteButtons.count();
    }

    async getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class StoreUpdatePage {
    pageTitle = element(by.id('jhi-store-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    nameInput = element(by.id('field_name'));
    descriptionInput = element(by.id('field_description'));
    ratingInput = element(by.id('field_rating'));
    reputationInput = element(by.id('field_reputation'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setNameInput(name) {
        await this.nameInput.sendKeys(name);
    }

    async getNameInput() {
        return this.nameInput.getAttribute('value');
    }

    async setDescriptionInput(description) {
        await this.descriptionInput.sendKeys(description);
    }

    async getDescriptionInput() {
        return this.descriptionInput.getAttribute('value');
    }

    async setRatingInput(rating) {
        await this.ratingInput.sendKeys(rating);
    }

    async getRatingInput() {
        return this.ratingInput.getAttribute('value');
    }

    async setReputationInput(reputation) {
        await this.reputationInput.sendKeys(reputation);
    }

    async getReputationInput() {
        return this.reputationInput.getAttribute('value');
    }

    async save() {
        await this.saveButton.click();
    }

    async cancel() {
        await this.cancelButton.click();
    }

    getSaveButton(): ElementFinder {
        return this.saveButton;
    }
}

export class StoreDeleteDialog {
    private dialogTitle = element(by.id('jhi-delete-store-heading'));
    private confirmButton = element(by.id('jhi-confirm-delete-store'));

    async getDialogTitle() {
        return this.dialogTitle.getAttribute('jhiTranslate');
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}

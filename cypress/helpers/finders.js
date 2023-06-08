export const setFileOutputPath = (path) => {
    cy.contains('button', 'Settings').click()
    cy.contains('button', 'Paths for saving').click()
    cy.contains('span', 'Output directory for images; if empty, defaults to three directories below').siblings('textarea').clear().type(path, { parseSpecialCharSequences: false });
    cy.contains('button', 'Apply settings').click()
    cy.contains('button', 'txt2img').click()
}

export const setGridOutputPath = (path) => {
    cy.contains('button', 'Settings').click()
    cy.contains('button', 'Paths for saving').click()
    cy.contains('span', 'Output directory for grids; if empty, defaults to two directories below').siblings('textarea').clear().type(path, { parseSpecialCharSequences: false });
    cy.contains('button', 'Apply settings').click()
    cy.contains('button', 'txt2img').click()
}

export const setFilePattern = (filePattern) => {
    cy.contains('button', 'Settings').click()
    cy.contains('button', 'Saving images/grids').click()
    // cy.contains('Images filename pattern').clear();
    cy.contains('span', 'Images filename pattern').siblings('textarea').clear().type(filePattern, { parseSpecialCharSequences: false });
    cy.contains('button', 'Apply settings').click()
    cy.contains('button', 'txt2img').click()
}
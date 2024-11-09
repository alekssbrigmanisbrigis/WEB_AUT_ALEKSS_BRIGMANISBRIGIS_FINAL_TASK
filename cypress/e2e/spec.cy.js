describe('Automation test', () => {
  it('Set the date using the calendar widget to- 28th of February, 2013 and time to 12:00', () => {
    cy.visit("https://demoqa.com/date-picker")

    // === SETTING THE YEAR ===
    cy.get('#dateAndTimePickerInput').click()
    cy.get('.react-datepicker__year-read-view--down-arrow').click()
    cy.get(':nth-child(13) > .react-datepicker__navigation').click().click().click().click().click().click().click().click()
    cy.get('.react-datepicker__year-dropdown > :nth-child(10)').click()

     // === SETTING THE MONTH ===
    cy.get('#dateAndTimePickerInput').click()
    cy.get('.react-datepicker__month-read-view--selected-month').click()
    cy.get('.react-datepicker__month-dropdown > :nth-child(2)').click()

    // === SETTING THE DAY ===
    cy.get(':nth-child(5) > .react-datepicker__day--028').click()
    // === SETTING THE TIME ===
    cy.get(':nth-child(49)').click()

    // === COMPARING VALUE ===
    cy.get('#dateAndTimePickerInput').should('have.value', 'February 28, 2013 12:00 PM')
  })
})
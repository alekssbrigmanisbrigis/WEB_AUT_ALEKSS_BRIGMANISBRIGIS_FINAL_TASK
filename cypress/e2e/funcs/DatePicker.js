class DatePicker {
    /**
     * Just visits a website
     */
    visit() {
      cy.visit('https://demoqa.com/date-picker')
    }
  
    /**
     * Opens the date picker input field
     */
    openDatePicker() {
      cy.get('#dateAndTimePickerInput').click()
    }
    /**
     * 
     * Because it shows only 11 years in one list
     * It requires to click arrow button to show additional years.
     * 
     * A bit messy but, IF IT WORKS DON'T TOUCH IT.
     * 
     * @param int wantYear 
     * @return this
     */
    selectYear(wantYear) {
      this.openDatePicker()
      cy.get('.react-datepicker__year-read-view--down-arrow').click()
      // Creating a click-click loop
      cy.get('.react-datepicker__year-read-view')
        .invoke('text')
        .then((currentYearText) => {
            // Converting current year to int to use it in my magic formula of successful test passing code
            // Selenium is better btw
            const currentYear = parseInt(currentYearText),
                  lastYear    = currentYear - 5,
                  firstYear   = currentYear + 5
            // If we want to select year in the future.
            if (wantYear > firstYear) {
              const clickclick = wantYear - currentYear - 5
              for (let i = 0; i < clickclick; i++) {
                  cy.get('.react-datepicker__navigation--years-upcoming').click()
              }
              cy.get('.react-datepicker__year-dropdown').contains(wantYear).click()
            }
            // If the year is in the same scope
            else if (wantYear >= lastYear && wantYear <= firstYear) {
              cy.get('.react-datepicker__year-dropdown').contains(wantYear).click()
            // If the year is in the past
            } else {
              const clickclick = currentYear - wantYear - 5
              for (let i = 0; i < clickclick; i++) {
                  cy.get('.react-datepicker__navigation--years-previous').click()
              }
              cy.get('.react-datepicker__year-dropdown').contains(wantYear).click()
            }
        });
      return this
    }
  
    /**
     * Just selects the month
     * 
     * @param string month
     * @return this
     */
    selectMonth(month) {
        this.openDatePicker()
        cy.get('.react-datepicker__month-read-view--selected-month').click()
        cy.get('.react-datepicker__month-dropdown .react-datepicker__month-option')
            .contains(month)
            .click()
      return this
    }
  
    /**
     * Just selects the day
     * 
     * @param int day 
     * @return this
     */
    selectDay(day) {
        cy.get(`.react-datepicker__day--0${day}`).last().click()
        return this
    }
  
    /**
     * Just selects the time
     * 
     * @param {*} time 
     * @return ths
     */
    selectTime(time) {
      cy.get('.react-datepicker__time-list').contains(time).click()
      return this
    }
  
    /**
     * To compare if the selected parameters are correct.
     * ...at least should be?
     * 
     * @returns input value
     */
    getDateInputValue() {
      return cy.get('#dateAndTimePickerInput')
    }
  }

  // Magic word equal to "Please"
  export default new DatePicker;

/**
   * こんにちは、ENKOです。
   * Music Producer・Composer・Songwriter, Multi-instrumentalist, Software Engineer, Security Tester
   * 
   * https://blog.narukoshin.me - blog. :)
   * https://x.com/enkosan_p - Twitter. :)
   * 
   * 2024
   */
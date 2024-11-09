import DatePicker from "./funcs/DatePicker"

describe('Automation test', () => {
  it('Set the date using the calendar widget to- 28th of February, 2013 and time to 12:00', () => {
    DatePicker.visit()

    // Set the date to 28th of February, 2013 12:00
    DatePicker.selectYear(2013)
        .selectMonth('February')
        .selectDay(28)
        .selectTime('12:00')

    // Checking if the magic code above did its job.
    DatePicker
        .getDateInputValue()
        .should('have.value', 'February 28, 2013 12:00 PM')
        // Because it looks cool.
  })
})

/**
   * こんにちは、ENKOです。
   * Music Producer・Composer・Songwriter, Multi-instrumentalist, Software Engineer, Security Tester
   * 
   * https://blog.narukoshin.me - blog. :)
   * https://x.com/enkosan_p - Twitter. :)
   * 
   * 2024
   */
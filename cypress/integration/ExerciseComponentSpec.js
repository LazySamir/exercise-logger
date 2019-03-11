describe('Exercise Component', function() {

  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })

  it('loads the page', () => {
    cy.contains('Exercise Records')
  })

  it('shows all logged exercises', () => {
    cy.get('.exercise').should('have.length', 2)
  })

  it('exercise input box validates for text', () => {
  	cy.get('[data-cy=exercise-name-input]')
      .type('PullupTest')
      .should('have.value', 'PullupTest')
  })

  it('max reps input box validates for number', () => {
    cy.get('[data-cy=exercise-reps-input]')
      .type('one')
      .should('have.value', '')

  	cy.get('[data-cy=exercise-reps-input]')
      .type('1000')
      .should('have.value', '1000')
  })

  it('logs a valid exercise', () => {
    cy.get('[data-cy=exercise-name-input]')
      .type('PullupTest')
    cy.get('[data-cy=exercise-reps-input]')
      .type('1000')

    cy.get('[data-cy=exercise-submit]')
      .click()

    cy.contains('PullupTest')
    cy.contains('1000')
    cy.get('.exercise').should('have.length', 3)
  })

  it('removes the associated exercise when double clicked', function(){
    cy.contains('PullupTest').dblclick()
    cy.get('.exercise').should('have.length', 2)
  })
})
